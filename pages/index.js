import React from 'react'
import Styles from '../styles/Home.module.css'

const about = () => {
  return (
    <>
        <main>
          <div className={Styles.box}>
            <h1 className={Styles.title}>Cassiopeia Space</h1>
          </div>
          <div className={Styles.box}>
            <h2 className={Styles.subtitle}>About Cassiopeia Space</h2>
          <p className={Styles.description}>We are a space travel company that aims to hire more aspiring astronauts and improve advance space technology.</p>
          </div>
          <div className={Styles.box}>
          <h2 className={Styles.subtitle}>Interested in Space Travel?</h2>
          <p className={Styles.description}>Attend a rigorous training program to become an astronaut! Examine the requirements to see if you qualify.</p>
          </div>
          <div className={Styles.box}>
          <h2 className={Styles.subtitle}>Featured Technology</h2>
          <p className={Styles.description}>Introducing the RE200 "Zephyr" Nuclear Thermal Engine - the zenith in modern rocket technology. This advanced nuclear thermal propulsion system can achieve speeds that traditional chemical rockets can only dream of.</p>
          </div>
        </main>
    </>
  );
}

export default about