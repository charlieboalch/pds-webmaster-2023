import React from 'react'
import styles from "../../../styles/components/Sidebar.module.css"
import Link from "next/link";
import {FaTimes} from "react-icons/fa";

const Sidebar = ({ isOpen, toggle, book }) => {
    return (
        <div onClick={toggle} className={styles.sidebarcontainer} style={(isOpen) ? {opacity : 1, pointerEvents: "all"} : {opacity: 0, pointerEvents: "none"}}>
            <div className={styles.icon} onClick={toggle}>
                <FaTimes color="white"/>
            </div>
            <div className={styles.sidebarwrapper}>
                <div className={styles.sidebarmenu}>
                    <Link href='about' onClick={toggle}>
                        <div className={styles.sidebarlink}>About</div>
                    </Link>
                    <Link href='fleet' onClick={toggle}>
                        <div className={styles.sidebarlink}>Meet the Fleet</div>
                    </Link>
                    <Link href='future' onClick={toggle}>
                        <div className={styles.sidebarlink}>Future Plans</div>
                    </Link>
                    <Link href='astronaut' onClick={toggle}>
                        <div className={styles.sidebarlink}>Become an Astronaut</div>
                    </Link>
                </div>
                <div className={styles.sidebarbtnwrap}>
                    <button style={{background: 0}} onClick={() => book()}><div className={styles.sidebarroute}>Book a Ticket</div></button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;