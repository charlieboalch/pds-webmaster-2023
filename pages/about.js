import React, {useState} from 'react'
import styles from '../styles/About.module.css'
import Image from 'next/image';
import Link from "next/link";

const about = () => {
  return (
    <>
    <div className={styles.timeline__component__bg}>
      <h1 className={styles.titles}>About Cassiopeia</h1></div>

    {/* Beginning of Timeline */}

  <div className = {styles.bg}>
  <div className={styles.timeline}>
  <div className={styles.timeline__component}>
    <div className={styles.timeline__date + " " + styles.timeline__date__right}>November 30, 2019</div>
  </div>
  <div className={styles.timeline__middle}>
    <div className={styles.timeline__point}></div>
  </div>
  
  <div className={styles.timeline__component + " " + styles.timeline__component__bg}>
    <h2 className={styles.timeline__title}>Cassiopeia Space Debuts</h2>
    <p className={styles.timeline__paragraph}>
    On this day, Cassiopeia Space debuts as a space tourism company to the general public.
    </p>
  </div>
  
  <div className={styles.timeline__component +" "+ styles.timeline__component__bg}>
    <h2 className={styles.timeline__title}>Cassiopeia Space Launches</h2>
    <p className={styles.timeline__paragraph}>
      Cassiopeia Space launches its first rocket trip to the general public.
    </p>
    <p className={styles.timeline__paragraph}>
      48 hours later, Cassiopeia Space completes its first privately-chartered rocket trip around the Earth.
    </p>
  </div>
  <div className={styles.timeline__middle}>
    <div className={styles.timeline__point}></div>
  </div>
  <div className={styles.timeline__component}>
    <div className={styles.timeline__date}>March 4, 2020</div>
  </div>
  <div className={styles.timeline__component}>
    <div className={styles.timeline__date + " " + styles.timeline__date__right}>June 12, 2021</div>
  </div>
  <div className={styles.timeline__middle}>
    <div className={styles.timeline__point}></div>
  </div>
  <div className={styles.timeline__component + " " + styles.timeline__component__bg}>
    <h2 className={styles.timeline__title}>Cassiopeia Space Pledges Sustainibility</h2>
    <p className={styles.timeline__paragraph}>
    Cassiopeia Space officially pledges to only use reusable space rockets to host its flights outer space.
    </p>
    <p className={styles.timeline__paragraph}>
      Cassiopeia Space becomes the first and only tourist company to only use reusable space rockets.
    </p>
  </div>
  <div className={styles.timeline__component + " " + styles.timeline__component__bottom + " " + styles.timeline__component__bg}>
    <h2 className={styles.timeline__title}>Cassiopeia Space launches its first all-civilian flight</h2>
    <p className={styles.timeline__paragraph}>
      Cassiopeia takes 5 tourists to space using its latest technology to allow them to travel and land to the moon and back.
    </p>
  </div>
  <div className={styles.timeline__middle}>
    <div className={styles.timeline__point}></div>
    <div className={styles.timeline__point + " " + styles.timeline__point__bottom}></div>
  </div>
  <div className={styles.timeline__component + " " + styles.timeline__component__bottom}>
    <div className={styles.timeline__date}>December 14, 2022</div>
  </div>
</div>
{/* {/* End of Timeline */}
<div className={styles.aboutContainer}>
  <div style={{flex: 1}}>
    <div className={styles.timeline__component__bg}>
      <h1 style={{color: "white"}}>Our Story</h1>
      <p className={styles.timelineK}>
        In November 30, 2009, 5 people went to the park late at night to see the stars.
        It was forcasted for there to be a comet storm and the area was packed with families,
        cameras, and telescopes. Instead of a comet storm though, there was a thunderstorm.
        And while everyone was packing their belongings and running to their car, those 5 people
        stayed outside and kept waiting for the comets. Instead, they saw a beautiful constillation
        that lit up the sky: Cassiopeia. It was there they realized that wanted to do more than look
        at the stars. They wanted to touch them.
      </p></div>
    <div className={styles.timeline__component__bg}>
      <h1 style={{color: "white"}}>Our Vision</h1>
      <p className={styles.timelineK}>
        We know that we won't touch the stars. But just as how we looked into space and saw what was
        waiting for us beyond Earth, we realized that wouldn't be a problem. Cassiopeia was founded
        with the vision to make space travel not exclusive, but rather to make it available for
        anyone who ever wanted to travel outside of Earth.
      </p>
    </div>
  </div>
  <div style={{flex: 1}}>
   {/*Images go in this div*/} 
  {/* <div className={styles.ourContainer}><Image src= 'https://images.pexels.com/photos/5531014/pexels-photo-5531014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt = 'Man looking at Stars' width='350' height='350' /></div>
  <div className={styles.ourKontainer}><Image src= 'https://images.unsplash.com/photo-1541873676-a18131494184?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1918&q=80' alt='Astronaut in Space' width= '350' height='300' /></div> */}
    
  </div>
</div>
 
{/* End of Who we are */}
<div className={styles.high}>
{/* <div>
      <h2 className={styles.title}>NextJs VideoPlayer - GeeksforGeeks</h2>
      <ReactPlayer url='https://youtu.be/LEMdVNrz8ms' />
    </div> */}
</div>
{/* Beginning of Sources */}
<div className={styles.aboutContainer}>
  <div className={styles.timeline__component__bg}>
    <h1 className={styles.title}><u>Resources</u> </h1>
      <p className={styles.fontcolor}><i>Note: As required in Sections H and I of the Preliminary Round Regulations for the Webmaster event in the TSA High School
            Compeititve Events Guide for the 2023 and 2024 National TSA Conference, no pre-built templates, themes, tools, or sites were
            used in the creation of this website. Unless other wise noted, all items listed under here is licensed under the MIT license
      </i> </p>
      <div><h2 className={styles.fontcolor}><u>Functionality</u></h2></div><div>
       <h3 className={styles.fontcolor}><strong>Next.js</strong></h3> <p className={styles.fontcolor}>
       Next.js is a front-end, Javascript framework that allows one easily create user-friendly websites using the React library.
        With next.js offering built-in features that allowed us to start quickly, we didn't have to worry about configurations and
        opitimizing images because it was already done for us. This took a lot of the burden of setting up webpages away from us.
      </p>
      </div>
      <div><h3 className={styles.fontcolor}> <strong>React</strong></h3><p className={styles.fontcolor}>
        We heavily relied on React, a Javascript library to create this website as it was not only fast, but simple to use. Even 
        though most of us have never used React prior to this project, our knowledge of the HTML and CSS syntax allowed us to use
        the library easily, specifically because it wasn't a domain-specific language.
      </p>
      </div>

      <div><h2 className={styles.fontcolor}><u>Graphics</u></h2></div><div>
       <h3 className={styles.fontcolor}><strong>Unsplash</strong></h3> <p className={styles.fontcolor}>
        Most of the images on this site are from Unsplash, a website which hosts over 3.4 million photos which are all of no-cost to
        the public due thier license. This tool was extremely helpful for our team who outsourced the high-quality images to add to our pages.
      </p>
      <div><h3 className={styles.fontcolor}> <strong>Pexels</strong></h3><p className={styles.fontcolor}>
        With over 3.2 million stock photographs and videos, we also relied on Pexels to supply use with photos to helps us create a point.
        The high quality images Pexels provided allowed us to use these images to showcase images from outer space.
      </p>
      </div>
      <div><h3 className={styles.fontcolor}> <strong>Stable Diffusion</strong></h3><p className={styles.fontcolor}>
        The assets of rockets on the /fleet page was artificially generated using the Stable Diffusion 1.5 model.
      </p>
      </div>
      </div>
</div>
</div>
</div>

<div className={styles.aboutContainer}>
  <div className={styles.timeline__component__bg}>
    <h1 className={styles.title}> Sources </h1>
    <p className={styles.fontcolor}>
    - <strong>Man on the Moon</strong>: https://images.unsplash.com/photo-1541873676-a18131494184?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1918&q=80
<br />- <strong>Rocket Launch</strong>: https://images.pexels.com/photos/41005/rocket-launch-rocket-take-off-soyuz-41005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
<br /> - <strong>Space Station moon</strong>: https://images.pexels.com/photos/39896/space-station-moon-landing-apollo-15-james-irwin-39896.jpeg <br />
- <strong>NASA's website on astronaut selection and training</strong>: https://www.nasa.gov/astronauts/become-an-astronaut <br />
- <strong>European Space Agency's website on astronaut selection and training</strong>: https://www.esa.int/Enabling_Support/Space_Engineering_Technology/Astronauts/Selection_and_training
<br />- <strong>SpaceX's website on astronaut safety</strong>: https://www.spacex.com/human-spaceflight/safety/
<br />- <strong>NASA's website on astronaut recovery</strong>: https://www.nasa.gov/centers/johnson/slsd/about/divisions/pfd/astronaut-recovery.html
<br />- <strong>Man looking at Stars</strong>: https://images.pexels.com/photos/5531014/pexels-photo-5531014.jpeg
      </p>
  </div>
</div>

<div className={styles.timeline__component__bg}> <h1 className={styles.titles}><Link href={'/docs/plan_of_work.png'}>Plan of Work Log</Link></h1></div>
<div className={styles.timeline__component__bg}><h1 className={styles.titles}><Link href={'/docs/checklist.pdf'}>Student Copyright Checklist</Link></h1></div>
{/* End of Sources */}

    </>
  );}

export default about