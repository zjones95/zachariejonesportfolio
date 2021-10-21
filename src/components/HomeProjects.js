import React from 'react'
import { Link } from 'react-router-dom'

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
]

function HomeProjects() {
    return (
        <section className="home-projects">
            <span className="section-span section-span-right"></span>
            <h2 className="section-header section-header-right">Projects</h2>
            {tempProjects.map((e) => {
                return <div className="home-project" key={e.id}>
                    <img src={e.image} alt={e.name} />
                    <div className="home-project-text-container">
                        <div className="home-project-text">
                            <h2>{e.name}</h2>
                            <p>{e.description}</p>
                            <div className="home-project-links">
                                <div className="home-project-link home-project-link-live"><a className="home-project-link-a-left" href={e.link}>Live Site</a></div>
                                <div className="home-project-link home-project-link-code"><a className="home-project-link-a-right" href={e.repo}>See Code</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            })}
            <div className="home-projects-see-more">
                <Link to="/projects">See More</Link>
            </div>
        </section>
    )
}

export default HomeProjects
