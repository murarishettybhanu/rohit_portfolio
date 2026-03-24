import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { HiOutlineArrowRight, HiOutlineArrowDown, HiOutlineMail, HiOutlinePlus } from 'react-icons/hi'
import { FaLinkedin, FaDribbble, FaFigma } from 'react-icons/fa'
import { SiNotion, SiMiro } from 'react-icons/si'
import { 
    RiLayoutTopLine, 
    RiTeamLine,
    RiUserLine,
    RiFocus3Line,
    RiCodeSSlashLine,
    RiPlayCircleLine
} from 'react-icons/ri'
import { BsLightningCharge } from 'react-icons/bs'
import { FiFigma } from 'react-icons/fi'
import './Home.css'

import rkPortrait from '../assets/rk.png'
import quoteImg from '../assets/quote.png'
import iconGroup27 from '../assets/Group 27.png'
import iconGroup28 from '../assets/Group 28.png'
import iconGroup29 from '../assets/Group 29.png'
import iconGroup30 from '../assets/Group 30.png'
import honcMockup from '../assets/Image Container.png'


const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.6, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }
    })
}

const specialties = [
    { icon: <RiLayoutTopLine />, subtitle: 'Focus', label: 'SaaS & Systems', color: '#6366f1' },
    { icon: <RiTeamLine />, subtitle: 'Approach', label: 'User-Centered', color: '#c084fc' },
    { icon: <BsLightningCharge />, subtitle: 'Expertise', label: 'Operations', color: '#facc15' },
    { icon: <FiFigma />, subtitle: 'Tool Stack', label: 'Figma & Code', color: '#fb7185' },
]

const caseStudies = [
    {
        id: 'honc',
        labelNum: '01',
        title: 'honc',
        tagline: 'The Car App',
        path: '/case-study/honc',
        accentBg: 'radial-gradient(circle at top right, rgba(150, 87, 250, 0.1), transparent 60%)',
        blobColor: 'radial-gradient(circle, #9657fa, transparent 70%)',
        problem: "Car owners lack visibility into whether their vehicle has been cleaned while support teams are unable to communicate with all customers during early morning service hours.",
        solution: 'Enabled customers to track their daily car cleaning status through in-app updates, while automating service confirmations to remove the need for manual support communication.',
        stats: [
            {
                label1: 'Support traffic',
                label2: 'decreased by',
                value: '~25%',
                color: '#53ff7e'
            },
            {
                label1: 'Tips to Car Wash',
                label2: 'Partner increased by',
                value: '~60%',
                color: '#c7a4ff'
            }
        ],
        mockupImg: honcMockup,
        notifIcon: 'http://localhost:3845/assets/751768832a764a780ade6593539077ee595ac868.png',
        notifTitle: '',
        notifSub: ''
    },
    {
        id: 'doorpe',
        labelNum: '02',
        title: 'door.pe',
        tagline: 'Community Discovery',
        path: '/case-study/doorpe',
        accentBg: 'radial-gradient(circle at top right, rgba(34, 197, 94, 0.1), transparent 60%)',
        blobColor: 'radial-gradient(circle, #22c55e, transparent 70%)',
        problem: 'Neighbourhood groups were chaotic with no structure, making service discovery nearly impossible for locals.',
        solution: 'Reduced time to address a "first input" decision to less than 30 seconds through structured discovery.',
        stats: [
            {
                label1: 'Service discovery',
                label2: 'speed improved by',
                value: '10x',
                color: '#53ff7e'
            },
            {
                label1: 'Community Engagement',
                label2: 'rate increased to',
                value: '~75%',
                color: '#c7a4ff'
            }
        ],
        mockupImg: 'http://localhost:3845/assets/c7595a67e2b51532a0f44ebbbd5cc7d337350ee7.png',
        notifIcon: 'http://localhost:3845/assets/2912fb5d438065f3fd17455b2310ebcffb9e4258.svg',
        notifTitle: 'Welcome to door.pe,',
        notifSub: 'Your local community feed is ready.'
    },
    {
        id: 'cs3',
        labelNum: '03',
        title: 'CS 03',
        tagline: 'Coming Soon',
        path: '#',
        accentBg: 'radial-gradient(circle at top right, rgba(255, 205, 7, 0.1), transparent 60%)',
        blobColor: 'radial-gradient(circle, #ffcd07, transparent 70%)',
        problem: 'This case study is currently under construction. Check back later for details on this project.',
        solution: 'Detailed solution metrics and breakdowns will be available shortly.',
        stats: [
            {
                label1: 'Metric 1',
                label2: 'Placeholder',
                value: '--%',
                color: '#53ff7e'
            },
            {
                label1: 'Metric 2',
                label2: 'Placeholder',
                value: '--%',
                color: '#c7a4ff'
            }
        ],
        mockupImg: 'http://localhost:3845/assets/5ce8a13172d65297905bc7890eb79fea7f1395e6.png',
        notifIcon: 'http://localhost:3845/assets/2912fb5d438065f3fd17455b2310ebcffb9e4258.svg',
        notifTitle: 'Project Incoming',
        notifSub: 'Case study details loading...'
    },
    {
        id: 'cs4',
        labelNum: '04',
        title: 'CS 04',
        tagline: 'Coming Soon',
        path: '#',
        accentBg: 'radial-gradient(circle at top right, rgba(255, 83, 83, 0.1), transparent 60%)',
        blobColor: 'radial-gradient(circle, #ff5353, transparent 70%)',
        problem: 'This case study is currently under construction. Check back later for details on this project.',
        solution: 'Detailed solution metrics and breakdowns will be available shortly.',
        stats: [
            {
                label1: 'Metric 1',
                label2: 'Placeholder',
                value: '--%',
                color: '#53ff7e'
            },
            {
                label1: 'Metric 2',
                label2: 'Placeholder',
                value: '--%',
                color: '#c7a4ff'
            }
        ],
        mockupImg: '',
        notifIcon: '',
        notifTitle: '',
        notifSub: ''
    }
]

export default function Home() {
    const location = useLocation()
    const [activeTab, setActiveTab] = useState(0)

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '')
            const element = document.getElementById(id)
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' })
                }, 100)
            }
        } else {
            window.scrollTo(0, 0)
        }
    }, [location])

    return (
        <motion.main 
            className="home page-wrapper"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
            {/* Background Decoration */}
            <div className="hero-blob hero-blob--1">
                <img src="http://localhost:3845/assets/11939a661d1409ce6973c871c5f775a3bc4db993.svg" alt="" />
            </div>
            <div className="hero-blob hero-blob--2">
                <img src="http://localhost:3845/assets/5ab8101f2d4e111c73233c9af4e2a730c77382db.svg" alt="" />
            </div>

            {/* Hero Section */}
            <section className="hero-section">
                <div className="container hero-inner">
                    {/* Designer Tagline Badge */}
                    <div className="hero-tagline-wrapper">
                        <div className="hero-tagline-badge">
                            <span className="badge-dot-purple" />
                            UI UX Designer & Product Designer
                        </div>
                    </div>

                    {/* Hero Title */}
                    <motion.h1 
                        className="hero-title-main"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Crafting intuitive<br />experiences.
                    </motion.h1>

                    {/* Hero Subcontent */}
                    <motion.p 
                        className="hero-description"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Not just screens—every pixel has purpose, every component stays simple, every element reduces complexity, and every flow puts the user first.
                    </motion.p>

                    {/* Hero Actions */}
                    <motion.div 
                        className="hero-btns"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="btn-group">
                            <a href="#work" className="btn-case-studies">
                                View Case Studies <HiOutlineArrowDown />
                            </a>
                            <a href="#contact" className="btn-get-touch">
                                Get in Touch
                            </a>
                        </div>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <div className="scroll-indicator">
                        <div className="scroll-mouse">
                            <div className="scroll-wheel"></div>
                        </div>
                    </div>
                </div>

                {/* Ticker Section */}
                <div className="ticker-wrapper">
                    <div className="ticker-bar">
                        <div className="ticker-content">
                            {Array(4).fill("✦           SOLUTION IS CREATIVITY           ✦           MINIMAL IS DESIGN           ✦           PURPOSE IS RESEARCH           ✦           SIMPLE IS UNIQUE           ✦           CLARITY IS VALUE           ✦           LOGIC IS BEAUTY           ✦           DETAIL IS IMPACT           ✦           EXPERIENCE IS OUTCOME           ✦           VALUE IS RESULT           ✦           USER IS PRIORITY           ✦           FLOW IS EXPERIENCE           ✦           PROBLEM SOLVING IS PRODUCT           ✦           COMPLEXITY TO CLARITY           ✦           SIMPLE IS SCALABLE           ✦           LESS IS POWERFUL           ✦           COPY IS SMART           ✦           UNIQUE IS COMPLEX           ✦           SPACE IS EMPHASIS           ✦           CONSISTENCY IS SCALE           ").map((text, idx) => (
                                <span key={idx}>{text}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <hr className="section-divider" />
            {/* Work Section */}
            <section className="work-section" id="work">
                {/* Background Decoration */}
                <div className="work-blob work-blob--1" style={{ background: caseStudies[activeTab].blobColor }}>
                    {/* Hiding the static background image when using dynamic color */}
                    <img src="http://localhost:3845/assets/45e4e27ba25828f591cd1142aa550ef4ad0acfaa.svg" alt="" style={{opacity: 0}} />
                </div>
                <div className="container">
                    <h2 className="section-title-large">WORK</h2>
                    
                    <div className="featured-cs-container">
                        {/* Side Tabs */}
                        <div className="cs-side-tabs">
                            {caseStudies.map((cs, idx) => (
                                <div 
                                    key={cs.id}
                                    className={`side-tab ${activeTab === idx ? 'side-tab--active' : ''}`}
                                    onClick={() => setActiveTab(idx)}
                                >
                                    {activeTab === idx ? `CASE STUDY ${cs.labelNum}` : `CS ${cs.labelNum}`}
                                </div>
                            ))}
                        </div>

                        {/* CS Content Card */}
                        <div className="featured-cs-card" style={{ background: caseStudies[activeTab].accentBg }}>
                            <div className="cs-card-inner">
                                <div className="cs-text-content">
                                    <h3 className="cs-logo-text">{caseStudies[activeTab].title}</h3>
                                    <span className="cs-tagline">{caseStudies[activeTab].tagline}</span>
                                    
                                    <div className="cs-problem-solution">
                                        <div className="cs-ps-item">
                                            <span className="cs-ps-label" style={{ color: '#ff5353' }}>The Problem</span>
                                            <p>{caseStudies[activeTab].problem}</p>
                                        </div>
                                        <div className="cs-ps-item">
                                            <span className="cs-ps-label" style={{ color: '#53ff7e' }}>The Solution</span>
                                            <p>{caseStudies[activeTab].solution}</p>
                                        </div>
                                    </div>

                                    <div className="cs-stats">
                                        {caseStudies[activeTab].stats.map((stat, i) => (
                                            <div key={i} className="stat-item">
                                                <div className="stat-label-group">
                                                    <span className="stat-label">{stat.label1}</span>
                                                    <span className="stat-label">{stat.label2}</span>
                                                </div>
                                                <span className="stat-value" style={{ color: stat.color }}>{stat.value}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Link to={caseStudies[activeTab].path} className="btn-full-cs">
                                        Full Case Study <HiOutlineArrowRight className="btn-icon" />
                                    </Link>
                                </div>

                                <div className="cs-visual-content">
                                    {caseStudies[activeTab].mockupImg ? (
                                        <div className="phone-mockup-wrapper">
                                            <img src={caseStudies[activeTab].mockupImg} alt="App Mockup" className="phone-mockup-img" />
                                            {caseStudies[activeTab].notifTitle && (
                                                <div className="floating-notif">
                                                    <div className="notif-icon">
                                                        <img src={caseStudies[activeTab].notifIcon} alt="Logo" />
                                                    </div>
                                                    <div className="notif-text">
                                                        <p className="notif-title">{caseStudies[activeTab].notifTitle}</p>
                                                        <p className="notif-sub">{caseStudies[activeTab].notifSub}</p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <div className="phone-mockup-wrapper" style={{ opacity: 0.5, display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', minHeight: '400px' }}>
                                            <p style={{ color: '#fff', fontSize: '18px' }}>Visuals Coming Soon</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="section-divider" />
            
            {/* Second Ticker Section */}
            <div className="ticker-wrapper ticker-wrapper--bottom">
                <div className="ticker-bar">
                    <div className="ticker-content">
                        {Array(4).fill("✦           ASK THE BEST           ✦           GIVE THE BEST           ✦           TAKE THE BEST           ").map((text, idx) => (
                            <span key={idx}>{text}</span>
                        ))}
                    </div>
                </div>
            </div>

            {/* About Section */}
            <section className="about-section" id="about">
                {/* Background Decoration */}
                <div className="about-shape about-shape--right">
                    <img src="http://localhost:3845/assets/2912fb5d438065f3fd17455b2310ebcffb9e4258.svg" alt="" />
                </div>
                <div className="container">
                    <div className="about-header-grid">
                        <div className="about-portrait-col">
                            <div className="portrait-wrapper">
                                <img src={rkPortrait} alt="Rohit Sri Kumar" className="portrait-img" />
                                <div className="portrait-glow"></div>
                                <button className="btn-resume-overlay">Download Resume ↓</button>
                            </div>
                        </div>

                        <div className="about-info-col">
                            <h1 className="about-name-large">Rohit Sri Kumar</h1>
                            <div className="about-subtitle">
                                Product <span className="subtitle-diamond">✦</span> UI UX Designer
                            </div>
                            <div className="about-divider"></div>

                            <div className="software-badges">
                                <div className="software-badge badge-ps">Ps</div>
                                <div className="software-badge badge-ai">Ai</div>
                                <div className="software-badge badge-id">Id</div>
                                <div className="software-badge badge-spacing"></div>
                                <div className="software-badge badge-pr">Pr</div>
                                <div className="software-badge badge-ae">Ae</div>
                                <div className="software-badge badge-spacing"></div>
                                <div className="software-badge badge-figma"><FiFigma /></div>
                                <div className="software-badge badge-xd">Xd</div>
                            </div>

                            <p className="about-bio-text">
                                Product & UI/UX Designer with a background in graphic design and hands-on experience in building service platforms. Skilled in combining visual design principles with product thinking to create intuitive, scalable, and operationally efficient digital experiences.
                            </p>

                            <div className="motto-box">
                                <p>From designing visuals to designing systems — my work evolved from aesthetics to solving real operational problems.</p>
                            </div>
                        </div>
                    </div>

                    <div className="skills-grid-new">
                        <div className="skill-card-new">
                            <div className="skill-card-header">
                                <div className="skill-icon-badge"><img src={iconGroup28} alt="" /></div>
                                <h4>Visual Strength</h4>
                            </div>
                            <p>Strong foundation in visual design with a deep understanding of layout, typography, color, and visual hierarchy—ensuring interfaces are not only functional but also aesthetically refined.</p>
                        </div>
                        <div className="skill-card-new">
                            <div className="skill-card-header">
                                <div className="skill-icon-badge"><img src={iconGroup29} alt="" /></div>
                                <h4>Problem Solving (UX Thinking)</h4>
                            </div>
                            <p>Evolved from visual design into user experience design, focusing on identifying user pain points, simplifying workflows, and creating intuitive, user-centered solutions.</p>
                        </div>
                        <div className="skill-card-new">
                            <div className="skill-card-header">
                                <div className="skill-icon-badge"><img src={iconGroup27} alt="" /></div>
                                <h4>Systems & Product Thinking</h4>
                            </div>
                            <p>Ability to design beyond screens by understanding how products function as complete systems—balancing user needs, business goals, and operational workflows to create scalable and efficient solutions.</p>
                        </div>
                        <div className="skill-card-new">
                            <div className="skill-card-header">
                                <div className="skill-icon-badge"><img src={iconGroup30} alt="" /></div>
                                <h4>Founder Edge</h4>
                            </div>
                            <p>Hands-on experience building and operating service platforms, enabling design decisions grounded in real-world constraints, scalability, and practical execution.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="philosophy-section">
                {/* Background Decoration */}
                <div className="philosophy-shape philosophy-shape--left">
                    <img src="http://localhost:3845/assets/3a4bc1c7a053b63351a5776f4aadc6a67f0b8041.svg" alt="" />
                </div>
                <div className="philosophy-shape philosophy-shape--right">
                    <img src="http://localhost:3845/assets/c6e209badd612b7dc66369520f6556ae645a227e.svg" alt="" />
                </div>
                
                <div className="container">
                    <div className="philosophy-quote-wrapper">
                        <div className="philosophy-quote-content">
                            <HiOutlinePlus className="philosophy-plus" />
                            <h2 className="philosophy-quote">
                                <span className="philosophy-line-1">Design is like finding "x" in math,</span><br />
                                <span className="philosophy-line-2">UX defines the step-by-step path to "x",</span><br />
                                <span className="philosophy-line-3">Product design ensures that path is clear,<br />simple, and effortless for the user.</span>
                            </h2>
                        </div>
                        <div className="quote-icon-wrapper">
                            <img src={quoteImg} alt="quote" className="quote-icon-large" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="final-cta-section" id="contact">
                {/* Background Decoration */}
                <div className="footer-shape footer-shape--right">
                    <img src="http://localhost:3845/assets/bd3d6a43f2d93adb0014321e664dddff8e920568.svg" alt="" />
                </div>
                
                <div className="container">
                    <h2 className="final-cta-title">Let's design the future, together.</h2>
                    <p className="final-cta-sub">Open for opportunities where product thinking meets operational complexity.</p>
                    
                    <div className="cta-buttons">
                        <a href="mailto:sb.rohitkumar@gmail.com" className="btn-email">
                            <HiOutlineMail className="email-icon" /> sb.rohitkumar@gmail.com
                        </a>
                        <a href="https://linkedin.com/in/rohitkumar" target="_blank" rel="noopener noreferrer" className="btn-linkedin-cta">Linked in</a>
                    </div>

                    <div className="footer-logo-wrapper">
                        <img src="http://localhost:3845/assets/f181834a9b43fee85a748eddb7e55e2df03aba98.svg" alt="rk logo" className="footer-bg-logo" />
                        <div className="footer-bottom-text">
                            <p>© 2024 Rohit Sri Kumar. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </section>
        </motion.main>
    )
}
