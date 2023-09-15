import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Image from "next/image";
import Card from "../card/Card";
import LoadingCard from "../card/LoadingCard";


// console.log("zindagi card")
const getData = async (page, cat) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CardList = async ({ page, cat }) => {
  const { posts, count } = await getData(page, cat);

  const POST_PER_PAGE = 2;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  // const firstPost = posts?.[0];
  // const secPost = posts?.[1];
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {
          posts ? (posts.map((item) => (
            <Card item={item} key={item._id} loading={posts} />
          ))) : (
            <>
              <LoadingCard />
              <LoadingCard />
            </>
          )

        }
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div >
  );
};

export default CardList;
