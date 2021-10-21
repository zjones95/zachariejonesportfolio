import React, { useRef } from 'react'
import submit from '../ContactSubmit'

function HomeContact() {
    //Form Refs
    const nameRef = useRef()
    const emailRef = useRef()
    const messageRef = useRef()
    const alertRef = useRef()

    return (
        <section className="home-contact">
            <form onSubmit={(e) => {
                e.preventDefault()
                submit(nameRef.current.value, emailRef.current.value, messageRef.current.value)
                nameRef.current.value = ''
                emailRef.current.value = ''
                messageRef.current.value = ''
                alertRef.current.style.opacity = '1';
                alertRef.current.style.transform = 'translateY(-105%)'
            }} className="home-contact-form">
                <p ref={alertRef} className="home-contact-alert">Your message has been sent, thanks!</p>
                <h2 className="section-header home-contact-header">Contact Me</h2>
                <input ref={nameRef} type="text" required placeholder="Your Name"/>
                <input ref={emailRef} type="email" required placeholder="Your Email Address"/>
                <textarea ref={messageRef} required placeholder="Your Message"/>
                <button className="home-contact-btn" type="submit" style={{fontFamily: "Roboto"}}>Send</button>
            </form>
        </section>
    )
}

export default HomeContact
