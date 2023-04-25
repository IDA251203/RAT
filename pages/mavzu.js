import Image from "next/image";
import styles from '../styles/Home.module.css'

function Mavzular(){
    return(
        <div className={styles.cont}>
            <p className={styles.title}>Mavzular</p>
            <div className={styles.table}>
                <li className={styles.box}>1-Mavzu:</li>
                <li className={styles.box}>2-Mavzu:</li>
                <li className={styles.box}>3-Mavzu:</li>
                <li className={styles.box}>4-Mavzu:</li>
                <li className={styles.box}>5-Mavzu:</li>
                <li className={styles.box}>6-Mavzu:</li>
                <li className={styles.box}>7-Mavzu:</li>
                <li className={styles.box}>8-Mavzu:</li>
                <li className={styles.box}>9-Mavzu:</li>
                <li className={styles.box}>10-Mavzu:</li>
                <li className={styles.box}>11-Mavzu:</li>
                <li className={styles.box}>12-Mavzu:</li>
                <li className={styles.box}>13-Mavzu:</li>
                <li className={styles.box}>14-Mavzu:</li>
                <li className={styles.box}>15-Mavzu:</li>
            </div>
        </div>
    )
}
export default Mavzular;