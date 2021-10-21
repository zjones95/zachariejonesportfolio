import React from 'react'

function Project(props) {
    const {name, id, image, description, link, repo} = props

    return (
        <div className="project" key={id}>
            <img src={image} alt={name} />
            <div className="project-text-container">
                <div className="home-project-text">
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <div className="home-project-links">
                        <div className="home-project-link home-project-link-live"><a className="home-project-link-a-left" href={link}>Live Site</a></div>
                        <div className="home-project-link home-project-link-code"><a className="home-project-link-a-right" href={repo}>See Code</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
