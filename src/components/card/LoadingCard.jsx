import styles from "./card.module.css";

const LoadingCard = () => {
    return (
        <div className={`${styles.container}`} >
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
};

export default LoadingCard;
