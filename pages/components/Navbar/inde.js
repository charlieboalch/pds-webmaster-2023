import React from 'react';
import {FaBars} from 'react-icons/fa'
import styles from '../../../styles/components/Navbar.module.css'
import Link from "next/link";

export const Navbar = ({ toggle, book }) => {
    return (

        <div className={styles.nav}>
          <div className={styles.navcontainer}>
            <Link href="/"><div className={styles.navlinks}>Cassiopeia Space</div></Link>
            <div className={styles.mobileicon} onClick={toggle}>
                <FaBars color="white" />
            </div>
            <ul className={styles.navmenu}>
                <li className={styles.navitem}>
                    <Link href='about'><div className={styles.navlinks}>About Us</div></Link>
                </li>
                <li className={styles.navitem}>
                    <Link href='fleet'><div className={styles.navlinks}>Meet the Fleet</div></Link>
                </li>
                <li className={styles.navitem}>
                    <Link href='future'><div className={styles.navlinks}>Future Launches</div></Link>
                </li>
                <li className={styles.navitem}>
                    <Link href='information'><div className={styles.navlinks}>Become an Astronaut</div></Link>
                </li>
                <nav className={styles.navbtn}>
                    <button style={{background: 0}} onClick={() => book()}><div className={styles.navbtnlink}>Book a Ticket</div></button>
                </nav>
            </ul>
          </div>
        </div>
    )
  };