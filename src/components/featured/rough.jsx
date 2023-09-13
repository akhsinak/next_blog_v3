import React, { useEffect, useState } from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const getData = async (page, cat) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const Featured = () => {
  const [firstArticle, setFirstArticle] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData(1, "style"); // Fetch the first article for the "style" category
        if (data.posts && data.posts.length > 0) {
          setFirstArticle(data.posts[0]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Post</b> and <b>Discover</b> ideas
      </h1>
      {firstArticle && (
        <div className={styles.post}>
          <div className={styles.imgContainer}>
            <Image src={firstArticle.img} alt={firstArticle.title} fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.postTitle}>{firstArticle.title}</h1>
            <div
              className={styles.postDesc}
              dangerouslySetInnerHTML={{ __html: firstArticle.desc }}
            />
            <button className={styles.button}>Read More</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Featured;
