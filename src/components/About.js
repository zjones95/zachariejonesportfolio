import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import { motion } from 'framer-motion'

import './styles/About.css'

const pageTransitions = {
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    }
}

function About() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <motion.section 
        exit="out" 
        animate="in"
        initial="out"
        variants={pageTransitions} 
        className="about"
        >
            <div className="about-container">
                <img src="./about-image.png" alt="about"></img>
                <h2>Hi, I'm Zacharie Jones</h2>
                <p>I work primarily with React, and I've worked on projects involving data visualization, chrome extensions, Zoom apps, Stripe, and much more. My previous career was as an IT Consultant, Ecommerce Business Owner, and Digital Marketer (Paid Media and SEO). I also love working with CSS (which most people don't love).</p>
                <p>I'm passionate about solving problems and improving the lives of others through software engineering. I'm currently looking for roles as a Front-End or Full-Stack Web Developer, and I'm always interested in talking to other developers. If you'd like to get in touch, please don't hesitate to contact me.</p>
                <Link to="/contact">Contact</Link>
            </div>
        </motion.section>
    )
}

export default About
