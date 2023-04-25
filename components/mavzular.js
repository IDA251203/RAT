import Image from "next/image";
import styles from '../styles/Home.module.css'
import Link from "next/link";
import { Button } from "@mui/material";

function Mavzular(){
    return(
        <div className={styles.cont}>
            <p className={styles.title}>Mavzular</p>
            <div className={styles.mavzuCont}>
                <div className={styles.mavzubox1}>
                    <p>Ko'rish tugmasini bosish orqali shu kitobdagi barcha mavzularni elektron tarzda ko'rishingiz va o'rganishingiz mumkun</p>
                    <Link href='/mavzu'>
                        <Button className={styles.btn}>Ko'rish</Button>
                    </Link>
                </div>
                <div className={styles.mavzubox2}></div>
            </div>
            
        </div>
    )
}
export default Mavzular;