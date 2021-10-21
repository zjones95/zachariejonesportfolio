import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

//Styles
import './styles/Nav.css'

function Nav() {
    let navCheckboxRef = useRef()

    const closeMenu = () => {
        if(navCheckboxRef.current.checked === true) {
            return navCheckboxRef.current.checked = false;
        }
    }

    return (
        <header className="nav-container">
            <nav className="nav-link-container">
                <div className="nav-hamburger-container">
                    <input ref={navCheckboxRef} className="nav-hamburger-checkbox" type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul className="nav-menu">
                        <Link onClick={() => closeMenu()} className="nav-link nav-menu-link nav-link-left" to="/">Home</Link>
                        <Link onClick={() => closeMenu()} className="nav-link nav-menu-link nav-menu-link-top" to="/about">About</Link>
                        <Link onClick={() => closeMenu()} className="nav-link nav-menu-link" to="/projects">Projects</Link>
                        {/* <Link onClick={() => closeMenu()} className="nav-link nav-menu-link" to="/blog">Blog</Link> */}
                        <Link onClick={() => closeMenu()} className="nav-link nav-menu-link nav-link-right" to="/contact">Contact</Link>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Nav
