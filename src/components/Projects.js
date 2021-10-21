import React from 'react'

import Project from './Project'

import './styles/Projects.css'

function Projects() {

    const tempProjects = [
        {
            name: 'Project #1',
            id: '1',
            description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            link: 'https://google.com/',
            repo: 'https://google.com/',
            image: './test-image.jpg'
        },
        {
            name: 'Project #2',
            id: '2',
            description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            link: 'https://google.com/',
            repo: 'https://google.com/',
            image: './test-image.jpg'
        },
        {
            name: 'Project #3',
            id: '3',
            description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            link: 'https://google.com/',
            repo: 'https://google.com/',
            image: './test-image.jpg'
        },
        {
            name: 'Project #4',
            id: '3',
            description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            link: 'https://google.com/',
            repo: 'https://google.com/',
            image: './test-image.jpg'
        },
    ]

    return (
        <section className="projects">
            <div className="projects-header">
                <span className="section-span" />
                <h2 className="section-header">Projects</h2>
            </div>
            <div className="projects-container">
                {tempProjects.map((project) => {
                    return <Project name={project.name} id={project.id} description={project.description} link={project.link} repo={project.repo} image={project.image} />
                })}
            </div>
        </section>
    )
}

export default Projects
