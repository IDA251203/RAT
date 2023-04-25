
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Mavzular from './mavzular'
import Taqdimotlar from './taqdimotlar'
import Videodarslar from './videodarslar'
import Testlar from './testlar'
import Malumotnoma from './malumotnoma'
import Adabiyotlar from './adabiyotlar'
import Navbar from '../pages/navbar'


export default function Main() {
  return (
    <>
    <Navbar/>
    <div className={styles.cont}>
     <p className={styles.titlee}>Raqamli va Axborot texnologiyalari</p>
     <Image src='/images/main.png' width={700} height={550} className={styles.image}/>
    </div>
    <section id='mavzular'><Mavzular/></section>
    <section id='taqdimot'><Taqdimotlar/></section>
    <section id='video'><Videodarslar/></section>
    <section id='test'><Testlar/></section>
    <section id='malumot'><Malumotnoma/></section>
    <section id='adabiyot'><Adabiyotlar/></section>
    </>
  )
}
