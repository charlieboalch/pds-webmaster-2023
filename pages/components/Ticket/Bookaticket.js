import React from 'react'
import styles from '../../../styles/components/Bookaticket.module.css'
import Link from "next/link";
import {ImCross} from "react-icons/im";

const Bookaticket = ({ isOpen, toggle }) => {
    return (
        <>
        <div style={(!isOpen) ? {opacity: 0, pointerEvents: "none"} : {opacity: 1, pointerEvents: "all"}} className={styles.Container}>
            <div className={styles.close} onClick={() => toggle()}>
                <ImCross color="white"/>
            </div>
            <div className={styles.FormWrap}>
                <Link href="/"><div className={styles.Icon}>Cassiopeia Space</div></Link>
                <div className={styles.FormContent}>
                    <form action="#">
                        <h1 className={styles.FormH1}>Register Today!</h1>
                        <label className={styles.FormLabel} htmlFor='for'>Email</label>
                        <input className={styles.FormInput} type='email' required/>
                        <button className={styles.FormButton} type='submit' onClick={() => toggle()} onChange={(e) => setText(e.target.value)}> Join the Waitlist </button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
};

export default Bookaticket;
