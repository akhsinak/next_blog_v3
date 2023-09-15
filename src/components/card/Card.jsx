import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = ({ key, item, loading }) => {

  if (loading) {

    return (

      <div className={styles.container} key={key}>
        <div className={styles.imageContainer}>
          {item.img && (
            <Image src={item.img} alt="" fill className={styles.image} />
          )}
        </div>
        <div className={styles.textContainer}>
          <div className={styles.detail}>
            <span className={styles.date}>
              {item.createdAt.substring(0, 10)} - {""}
            </span>
            <span className={styles.category}>{item.catSlug}</span>
          </div>
          <Link href={`/posts/${item.slug}`} >
            <h1>{item.title}</h1>
          </Link>
          <div
            className={styles.desc}
            dangerouslySetInnerHTML={{ __html: item?.desc.substring(0, 200) }}
          />
          <Link href={`/posts/${item.slug}`} className={styles.link}>
            Read More
          </Link>
        </div>
      </div>
    );
  }
  else {

    return (

      <div className={`${styles.container}`} key={key}>
        <div className={`${styles.imageContainer_skeleton}  ${styles.skeleton}`}></div>


        <div className={`${styles.textContainer}`}>

          <div className={`${styles.detail_skeleton}  ${styles.skeleton}`}></div>

          <h1 className={`${styles.title_skeleton}  ${styles.skeleton}`}></h1>

          <div className={`${styles.desc_skeleton}  ${styles.skeleton}`} />
          <div className={`${styles.desc_skeleton}  ${styles.skeleton}`} />

          <div className={`${styles.readmore_skeleton}  ${styles.skeleton}`}></div>
        </div>
      </div >
    );

  }
};

export default Card;
