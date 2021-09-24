import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-descr">
                <p>created by Alex Bachurin</p>
                <Link to={{ pathname: "https://github.com/AlexBachurin/markdown-preview-app" }} target="_blank">
                    <FaGithub className="footer-icon" />
                </Link>
            </div>
        </footer>
    )
}

export default Footer
