import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { QueryProjects, urlFor } from '../contexts/SanityQueries'
import ReactPlayer from 'react-player'

function HomeProjects() {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        const handleProjectData = async() => {
            QueryProjects(setProjects)
        }
        handleProjectData()
    }, [])
    
    return (
        <section className="home-projects">
            <span className="section-span section-span-right"></span>
            <h2 className="section-header section-header-right">Projects</h2>
            <div className="home-project">
                <ReactPlayer controls="true" playIcon className="home-video" url="pucklist.mp4" width="640px" />
                <div className="home-project-text-container">
                        <div className="home-project-text">
                            <h2>Pucklist</h2>
                            <p>A hockey management application built for my hockey team after our old application was deprecated.</p>
                            <p>Technologies used were React, Firebase(Auth), Express(NodeJS), MongoDB, Context API, and Framer Motion</p>
                            <div className="home-project-links">
                                <div className="home-project-link home-project-link-live"><a className="home-project-link-a-left" href="https://github.com/zjones95/pucklist-client">Front End</a></div>
                                <div className="home-project-link home-project-link-code"><a className="home-project-link-a-right" href="https://github.com/zjones95/pucklist">Back End</a></div>
                            </div>
                        </div>
                    </div>
            </div>
            {projects && projects.sort((a, b) => a.order - b.order).map((e, i) => {
                if(i < 2) return <div className="home-project" key={e.order}>
                    <img className="home-project-img" src={urlFor(e.image.asset._ref).width(800).url()} alt={e.name} />
                    <div className="home-project-text-container">
                        <div className="home-project-text">
                            <h2>{e.name}</h2>
                            {e.body.map((text) => {
                                return <p key={text._key}>{text.children[0].text}</p>
                            })}
                            <div className="home-project-links">
                                <div className="home-project-link home-project-link-live"><a className="home-project-link-a-left" href={e.link}>Live Site</a></div>
                                <div className="home-project-link home-project-link-code"><a className="home-project-link-a-right" href={e.repo}>See Code</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                return null
            })}
            <div className="home-projects-see-more">
                <Link to="/projects">See More</Link>
            </div>
        </section>
    )
}

export default HomeProjects
