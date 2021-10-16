import React from 'react'
import { Link } from 'react-router-dom'

//Styles
import './styles/Nav.css'

function Nav() {
    return (
        <div className="nav-container">
            <div className="nav-link-container">
                <Link className="nav-link nav-link-left" to="/">Home</Link>
                <Link className="nav-link" to="/blog">About</Link>
                <Link className="nav-link" to="/blog">Projects</Link>
                <Link className="nav-link" to="/blog">Blog</Link>
                <Link className="nav-link nav-link-right" to="/blog">Contact</Link>
            </div>
        </div>
    )
}

export default Nav
