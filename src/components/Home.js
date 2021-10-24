import React, { useEffect } from 'react'

import HomeHero from './HomeHero'
import HomeBadges from './HomeBadges'
import HomeAbout from './HomeAbout'
import HomeProjects from './HomeProjects'
import HomeTechnologies from './HomeTechnologies'
import HomeContact from './HomeContact'
import './styles/Home.css'
import { motion } from 'framer-motion'

const pageTransitions = {
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    }
}

function Home() {
  useEffect(() => {
      window.scrollTo(0, 0)
  }, [])

    return (
        <motion.main 
        exit="out" 
        animate="in"
        initial="out"
        variants={pageTransitions}
        className="home-container root-container"
        >
            <HomeHero />
            <HomeBadges />
            <HomeAbout />
            <HomeProjects />
            <HomeTechnologies />
            <HomeContact />
        </motion.main>
    )
}

export default Home
