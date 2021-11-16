import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

import './styles/Contact.css'
import './styles/Home.css'
import HomeContact from './HomeContact'

const pageTransitions = {
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    }
}

function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <motion.section 
        exit="out" 
        animate="in"
        initial="out"
        variants={pageTransitions}
        className="contact">
            <HomeContact />
        </motion.section>  
    )
}

export default Contact
