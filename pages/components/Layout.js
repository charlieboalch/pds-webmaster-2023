import {Navbar} from './Navbar/inde'
import {Sidebar} from "./Sidebar/inde";
import {useState} from "react";
import styles from '../../styles/components/Layout.module.css'
import {Bookaticket} from "./Ticket/Bookaticket";
// import styles from '../../styles/Ticket/Bookaticket'


export default function Layout({ children }) {
    const[isOpen, setIsOpen] = useState(false)
    const [form, showForm] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const book = () => {
        showForm(!form);
    }

    return (
        <>
            <div className={styles.header}>
                <Navbar toggle={toggle} book={book}/>
                <Sidebar isOpen={isOpen} toggle={toggle} book={book} />
                <Bookaticket isOpen={form} toggle={book}/>
            </div>
            <div className={styles.space}></div>
            <main>{children}</main>
        </>
    )
}