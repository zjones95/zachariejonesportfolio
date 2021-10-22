import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import Project from './Project'
import { QueryProjects, urlFor } from '../contexts/SanityQueries'
import './styles/Projects.css'

const pageTransitions = {
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    }
}

function Projects() {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        const handleProjectData = async() => {
            QueryProjects(setProjects)
        }
        handleProjectData()
    }, [])

    return (
        <motion.section 
        exit="out" 
        animate="in"
        initial="out"
        variants={pageTransitions}
        className="projects"
        >
            <div className="projects-header">
                <span className="section-span" />
                <h2 className="section-header">Projects</h2>
            </div>
            <div className="projects-container">
                {projects && projects.sort((a, b) => a.order - b.order).map((project) => {
                    return <Project name={project.name} id={project.order} key={project.order} description={project.body} link={project.link} repo={project.repo} image={urlFor(project.image.asset._ref).width(800).url()} />
                })}
            </div>
        </motion.section>
    )
}

export default Projects
