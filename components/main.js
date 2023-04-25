
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Main() {
  return (
    <>
    <div className={styles.cont}>
     <p className={styles.titlee}>Raqamli va Axborot texnologiyalari</p>
     <Image src='/images/main.png' width={700} height={550} className={styles.image}/>
    </div>
    </>
  )
}
