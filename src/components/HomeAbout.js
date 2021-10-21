import React from 'react'

function HomeAbout() {
    return (
        <section className="home-about" id="about">
            <div className="home-about-text">
                <span className="section-span"></span>
                <h2 className="section-header">About Me</h2>
                <p>Hi, my name's Zach Jones, a Full-Stack Web Developer from San Jose, CA. I love building websites that solve life's unique problems.</p>
                <br />
                <p> 
                    I work primarily with MongoDB, Express, React, Node, and GraphQL and have set up countless WordPress and Shopify websites. My previous career was as an IT Consultant, Ecommerce Business Owner, and Digital Marketer (Paid Media and SEO). I also really enjoy tinkering with CSS.
                </p>
            </div>
            <div className="home-about-image">
                <img src="./about-image.png" alt="about" />
            </div>
        </section>
    )
}

export default HomeAbout
