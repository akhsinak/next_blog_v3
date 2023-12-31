"use client"
import React, { useEffect, useState } from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const urll = process.env.NEXT_PUBLIC_URL;
const getData = async (page, cat) => {
  const res = await fetch(
    `${urll}/api/posts?page=${page}&cat=${cat || ""}`,
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
  const [showFullContent, setShowFullContent] = useState(false); // State to track whether to show full content

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData(1, "style");
        if (data.posts && data.posts.length > 0) {
          const n = data.posts.length
          const randomIndex = Math.floor(Math.random() * n); // Generate a random index

          setFirstArticle(data.posts[randomIndex]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const handleReadMoreClick = () => {
    // Toggle the state to show/hide full content
    setShowFullContent(!showFullContent);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Post</b> and <b>Discover</b> ideas
      </h1>

      {/* <div className={`${styles.post} ${styles.skeleton}`}> */}
      <div className={`${styles.post}`}>

        {firstArticle ? (
          // <div >
          <>
            <div className={`${styles.imgContainer}`}>
              <Image src={firstArticle.img} alt={firstArticle.title} fill className={`${styles.image} ${styles.skeleton}`} />
            </div>
            <div className={styles.textContainer}>
              <h1 className={styles.postTitle}>{firstArticle.title}</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: showFullContent ? firstArticle.desc.substring(0, 700) : firstArticle.desc.substring(0, 400) + "..."
                }}
                className={styles.postDesc}
              />
              <button className={styles.button} onClick={handleReadMoreClick}>
                {showFullContent ? "Read Less" : "Read More"}
              </button>
            </div>
          </>


        ) : (
          // <div >
          <>
            <div className={`${styles.imgContainer} ${styles.skeleton}`}></div>


            <div className={`${styles.textContainer}`}>

              <div className={`${styles.postTitle_skeleton} ${styles.skeleton}`}></div>
              <div className={`${styles.postDec_skeleton} ${styles.skeleton}`} />
              <div className={`${styles.postDec_skeleton} ${styles.skeleton}`} />
              <div className={`${styles.postDec_skeleton} ${styles.skeleton}`} />
              <div className={`${styles.button_skeleton} ${styles.skeleton}`} />


            </div>
          </>


        )}
      </div>
    </div >
  );
};

export default Featured;

