import styles from "../styles/Fleet.module.css";
import React from "react";
import Image from "next/image";

const fleet = () => {
    return (
        <div>
            <div className={styles.box}>
                <h1 className={styles.title}>Meet the Fleet</h1>
            </div>
            <div className={styles.content}>
                <div className={styles.news}>
                    <div className={styles.newscard + " " + styles.box}>
                        <div className={styles.newscardleft}>
                            <div>
                                <h2 className={styles.newstitle}>RP-30 “Skylark” Suborbital Spacecraft</h2>
                            </div>
                        </div>
                        <hr/>
                        <div className={styles.newscardright}>
                            <p className={styles.newscardtext}>
                                The RP-30 "Skylark" Suborbital Spacecraft is a single stage rocket specifically designed for tours in Earth's atmosphere. Developed by lead scientists for Cassiopeia Space, the Skylark has the capabilities of staying in orbit for over seven days, perfect for a small getaway. The Skylark is powered by the cutting edge RE200 "Zephyr" nuclear thermal rocket, which was specifically designed for producing a low powered thrust over a sustained period of time.
                            </p>
                        </div>
                        <hr/>
                        <div className={styles.newscardimage}>
                            <Image src="/rockets/skylark-suborbital.png" width={256} height={256} alt="Skylark Suborbital Vehicle"></Image>
                        </div>
                    </div>
                    <div className={styles.newscard + " " + styles.box}>
                        <div className={styles.newscardleft}>
                            <div>
                                <h2 className={styles.newstitle}>RS-200 “Hippo” Rocket</h2>
                            </div>
                        </div>
                        <hr/>
                        <div className={styles.newscardright}>
                            <p className={styles.newscardtext}>
                                One of the newer editions to the Cassiopeia Space arsenal, the RS-200 “Hippo” Rocket is made for quick trips to anywhere within the Earth's gravitational influence. Engineers spent years developing the perfect propulsion system, which utilizes both solid and liquid fuel to send civilians to the Moon in a matter of hours. The Hippo is capable of carrying up to 32 passengers at once.
                            </p>
                        </div>
                        <hr/>
                        <div className={styles.newscardimage}>
                            <Image src="/rockets/hippo-rocket.png" width={256} height={256} alt="Hippo Rocket"></Image>
                        </div>
                    </div>
                    <div className={styles.newscard + " " + styles.box}>
                        <div className={styles.newscardleft}>
                            <div>
                                <h2 className={styles.newstitle}>RS-400 “Mammoth” Rocket</h2>
                            </div>
                        </div>
                        <hr/>
                        <div className={styles.newscardright}>
                            <p className={styles.newscardtext}>
                                The RS-400 “Mammoth” Rocket was developed for interplanetary travel within the inner Solar System. It's capable of reaching Mars in as little as three months at optimal launch conditions. Cassiopeia Space plans to gradually phase out the Mammoth in favor of a more powerful interplanetary rocket speculated to be in production within the next five years.
                            </p>
                        </div>
                        <hr/>
                        <div className={styles.newscardimage}>
                            <Image src="/rockets/mammoth-rocket.png" width={256} height={256} alt="Mammoth Rocket"></Image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default fleet;