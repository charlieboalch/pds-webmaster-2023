import React, {useState} from 'react'
import styles from '../styles/Future.module.css'
import {ImCross} from 'react-icons/im'

const future = () => {
    const [popup, showPopup] = useState(false);
    const [text, setText] = useState("");
    const [valid, isValid] = useState(true);

    return (
        <>
            <div>
                <div className={styles.newsletterbox + " " + styles.box} style={(popup) ? {opacity : 1} : {opacity: 0, pointerEvents: "none"}}>
                    <div className={styles.close} onClick={() => showPopup(false)}>
                        <ImCross/>
                    </div>
                    <h1>Subscribe To Our Newsletter</h1>
                    <h4 className={styles.newsletterdesc}>Enter a valid email</h4>
                    <div className={styles.submitbox}>
                        <input className={styles.email} style={(!valid) ? {borderBottom: "2px red solid"} : {borderBottom: "1px black solid"}} type={"text"} value={text} onChange={(e) => setText(e.target.value)}></input>
                        <button className={styles.emailsubmit} onClick={() => {
                            //email validation
                            if (text === "" || !text.match("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")) {
                                isValid(false);
                                return;
                            }
                            isValid(true);
                            showPopup(false);
                            setText("");
                        }}>Subscribe</button>
                    </div>
                </div>
            </div>
            <div>
                <div className={styles.box}>
                    <h1 className={styles.title}>Fly With Us!</h1>
                </div>
                <div className={styles.content}>
                    <div className={styles.news + " " + styles.box}>
                        <h2 className={styles.subtitle}>Recent Launch News</h2>
                        <div className={styles.newscard + " " + styles.box}>
                            <div className={styles.newscardleft}>
                                <h2 className={styles.newstitle}>16 Passengers Launched In Newest Addition To Fleet</h2>
                            </div>
                            <hr/>
                            <div className={styles.newscardright}>
                                <p className={styles.newscardtext}>
                                    <strong>Atlanta</strong>- Sixteen new passengers were sent into orbit using Cassiopea Space's next generation rocket, the RS-200 "Hippo". The Hippo, a two stage rocket powered by a combination of solid and liquid fuel, is rated for destinations within the Earth's orbit. One passenger mentioned at take-off, "I can't believe that this rocket can take me places I never dreamed of..."
                                </p>
                            </div>
                        </div>
                        <div className={styles.newscard + " " + styles.box}>
                            <div className={styles.newscardleft}>
                                <h2 className={styles.newstitle}>Preparations Made For New Lunar Launchpad</h2>
                            </div>
                            <hr/>
                            <div className={styles.newscardright}>
                                <p className={styles.newscardtext}>
                                    <strong>Atlanta</strong>- Cassiopeia Space CEO announced Monday that the company will invest several billion dollars into a new, "free use" launchpad located on the surface of the Moon. The statement, which was originally released to shareholders prior to the public announcement, outlined a $13 billion spending package for this new project, largely funded by loans taken from major banks...
                                </p>
                            </div>
                        </div>
                        <div className={styles.newscard + " " + styles.box}>
                            <div className={styles.newscardleft}>
                                <h2 className={styles.newstitle}>Development Announced For New Interplanetary Shuttle</h2>
                            </div>
                            <hr/>
                            <div className={styles.newscardright}>
                                <p className={styles.newscardtext}>
                                    <strong>Atlanta</strong>- The Research and Development wing of Cassiopeia Space sent out a progress update to shareholders detailing a proposed interplanetary shuttle actively being developed. The shuttle appears to utilize a proprietary engined named the VR100 “Hermes”, a nuclear-electric based off of the popular VASIMR plasma engine. The rocket is expected to be able to reach Mars in only three days, nearly 50 times faster than current rockets.
                                </p>
                            </div>
                        </div>
                        <p className={styles.newsletter} onClick={() => showPopup(true)}><u>Want more news on the most advanced space travel company? Subscribe to our newsletter!</u></p>
                    </div>
                    <div className={styles.vacation + " " + styles.box}>
                        <h2 className={styles.subtitle}>Launch Schedule</h2>
                        <div className={styles.box}>
                            <h3>Next Launch- 02/17/2023 at 5:00 PM EST, Cape Canaveral </h3>
                        </div>
                        <div className={styles.box}>
                            <h3>02/20/2023 at 4:30 PM EST, Chile </h3>
                        </div>
                        <div className={styles.box}>
                            <h3>02/23/2023 at 4:30 PM EST, Indonesia</h3>
                        </div>
                        <div className={styles.box}>
                            <h3>02/26/2023 at 5:00 PM EST, Cape Canaveral </h3>
                        </div>
                        <div className={styles.box}>
                            <h3>03/01/2023 at 4:30 PM EST, Chile</h3>
                        </div>
                        <div className={styles.box}>
                            <h3>03/04/2023 at 4:30 PM EST, Indonesia</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default future