import styles from '../styles/navbar.module.css'
import Link from 'next/link'
import Head from 'next/head';
import Main from '../components/main';
import Mavzular from '../components/mavzular';
import Taqdimotlar from '../components/taqdimotlar';
import Videodarslar from '../components/videodarslar';
import Testlar from '../components/testlar';
import Malumotnoma from '../components/malumotnoma';
import Adabiyotlar from '../components/adabiyotlar';
import HomeIcon from '@mui/icons-material/Home';
import ArtTrackIcon from '@mui/icons-material/ArtTrack';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import RuleIcon from '@mui/icons-material/Rule';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { useScrollBy } from "react-use-window-scroll";


function Navbar(){
   
  const scrollBy = useScrollBy();

    return( 
        <>
        <div className={styles.contt}>
         <Head>
         <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
         </Head>

            <div className={styles.cont__content1}>Raqamli va Axborot texnologiyalari</div>
         <a to='main' onClick={() => scrollBy(0, 0)}>
            <div className={styles.cont__content}><span><HomeIcon/></span>Kirish</div>
         </a>
         <a to='mavzular' onClick={() => scrollBy(850, 0)}>
            <div className={styles.cont__content}><span><ArtTrackIcon/></span>Mavzular</div>
         </a>
         <a to='taqdimot' onClick={() => scrollBy(1750, 0)}>
            <div className={styles.cont__content}><span><AppRegistrationIcon/></span>Taqdimot</div>
         </a>
         <a to='video' onClick={() => scrollBy(2600, 0)}>
            <div className={styles.cont__content}><span><OndemandVideoIcon/></span>Video darslar</div>
         </a>
         <a to='test' onClick={() => scrollBy(3580, 0)}>
            <div className={styles.cont__content}><span><RuleIcon/></span>Testlar</div>
         </a>
         <a to='malumot' onClick={() => scrollBy(4600, 0)}>
            <div className={styles.cont__content}><span><ImportContactsIcon/></span>Ma'lumotnoma</div>
         </a>
         <a to='adabiyot' onClick={() => scrollBy(5450, 0)}>
            <div className={styles.cont__content}><span><LibraryBooksIcon/></span>Adabiyotlar</div>
         </a>
            {/* <p className={styles.cont__}>Tillayev Azamat Ibragimovich</p> */}
        </div>
        
    <section id='main'><Main/></section>
    <section id='mavzular'><Mavzular/></section>
    <section id='taqdimot'><Taqdimotlar/></section>
    <section id='video'><Videodarslar/></section>
    <section id='test'><Testlar/></section>
    <section id='malumot'><Malumotnoma/></section>
    <section id='adabiyot'><Adabiyotlar/></section>
        </>
    )
}

export default Navbar;