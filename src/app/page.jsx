
import Link from "next/link";
import styles from "./homepage.module.css";
import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/Menu/Menu";
import MainCategories from "@/components/mainCategories/MainCategories";
// import { useRouter } from "next/navigation";
// import { useState, useEffect } from "react";



// function Loading() {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   useEffect(() => {

//     const handleStart = (url) => (url !== router.asPath && setLoading(true));
//     const handleComplete = (url) => (url === router.asPath && setTimeout(() => { setLoading(false) }, 5000));

//     router.events.on('routeChangeStart', handleStart);
//     router.events.on('routeChangeComplete', handleComplete);
//     router.events.on('routeChangeError', handleComplete);

//     return () => {

//       router.events.off('routeChangeStart', handleStart);
//       router.events.off('routeChangeComplete', handleComplete);
//       router.events.off('routeChangeError', handleComplete);
//     }


//   })

//   return loading && (
//     <div className="spinner-wrapper">
//       <div className="spinner"></div> 
//     </div>
//   )
// }



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
