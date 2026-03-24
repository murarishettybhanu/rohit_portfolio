import { Link } from 'react-router-dom'
import { FaLinkedin, FaFigma, FaGithub, FaDribbble } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import './Footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-inner">
                <p className="footer-copy">© 2024 Rohit Sri Kumar. All rights reserved.</p>
                <div className="footer-links">
                    <a href="/#work" className="footer-link">Work</a>
                    <a href="/#about" className="footer-link">About</a>
                    <a href="/#contact" className="footer-link">Contact</a>
                </div>
                <div className="footer-socials">
                    <a href="mailto:dk.rohitkumar@gmail.com" className="footer-social" title="Email">
                        <HiOutlineMail />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer-social" title="LinkedIn">
                        <FaLinkedin />
                    </a>
                    <a href="https://figma.com" target="_blank" rel="noreferrer" className="footer-social" title="Figma">
                        <FaFigma />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="footer-social" title="GitHub">
                        <FaGithub />
                    </a>
                    <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="footer-social" title="Dribbble">
                        <FaDribbble />
                    </a>
                </div>
            </div>
        </footer>
    )
}
