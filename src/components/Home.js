import React from 'react'

import HomeHero from './HomeHero'
import HomeBadges from './HomeBadges'
import HomeAbout from './HomeAbout'
import HomeProjects from './HomeProjects'
import HomeTechnologies from './HomeTechnologies'
import HomeContact from './HomeContact'
import './styles/Home.css'

function Home() {
    return (
        <div className="home-container root-container">
            <HomeHero />
            <HomeBadges />
            <HomeAbout />
            <HomeProjects />
            <HomeTechnologies />
            <HomeContact />
        </div>
    )
}

export default Home
