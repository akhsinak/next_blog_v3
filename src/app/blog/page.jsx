import CardList from "@/components/cardList/CardList";
import styles from "./blogPage.module.css";
import Menu from "@/components/Menu/Menu";
import Image from "next/image";

const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <div className={styles.container}>
      <div className={styles.title} >
        <Image src="/redcircle.png" alt="" width={20} height={20} className={styles.circle} />
        <h1>{cat}</h1>
        {/* <Image src="/redcircle.png" alt="" width={20} height={20} className={styles.circle} /> */}
      </div>
      <div className={styles.content}>
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
