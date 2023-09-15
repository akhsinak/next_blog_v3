
import Link from "next/link";
import styles from "./homepage.module.css";
import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/Menu/Menu";
import MainCategories from "@/components/mainCategories/MainCategories";


export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;

  return (
    // <><Loading />
    <div className={styles.container}>
      <Featured />
      <MainCategories />
      <div className={styles.content}>
        <CardList page={page} />
        <Menu />
      </div>
    </div>
    // </>
  );
}
