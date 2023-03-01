import React from 'react'

function HomeAbout() {
    return (
        <section className="home-about" id="about">
            <div className="home-about-text">
                <span className="section-span"></span>
                <h2 className="section-header">About Me</h2>
                <p>Hi, my name's Zach Jones, a Front End Developer from San Jose, CA. I love building websites that solve life's unique problems.</p>
                <br />
                <p> 
                    I work primarily with React, and I've worked on projects involving data visualization, chrome extensions, Zoom apps, Stripe, and much more. My previous career was as an IT Consultant, Ecommerce Business Owner, and Digital Marketer (Paid Media and SEO). I also love working with CSS (which most people don't love).
                </p>
            </div>
            <div className="home-about-image">
                <img src="./about-image.png" alt="about" />
            </div>
        </section>
    )
}

export default HomeAbout
