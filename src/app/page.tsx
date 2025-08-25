import styles from "../styles/mixer.module.css"

export default function Home(){
    return(
        <div className={styles["mixer"]}>
            <div className={styles['logo']}>
            </div>
            <div className={styles['drug-list']}>
            </div>
            <div className={styles['mix-preview']}>
            </div>
            <div className={styles["store-list"]}>
            </div>
            <div className={styles["historial-list"]}>
            </div>
        </div>
    )
}