import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiOutlineArrowRight, HiOutlineArrowDown, HiOutlineMail } from 'react-icons/hi'
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
        icon: <RiLayoutTopLine />, // Using one of the existing imports as a placeholder icon
        title: 'Honc Car Cleaning',
        subtitle: 'Redesigning a subscription-based car cleaning service to solve operational inefficiencies and fragmented communication.',
        tags: ['UX Design', 'App Dev', 'Ops Infra'],
        path: '/case-study/honc',
        accent: '#60a5fa', // Blue accent for Honc matching the reference image's 'CASE STUDY 01' text
        problem: "Car owners couldn't manage or reschedule bookings without calling support.",
        solution: 'A mobile-first subscription app with automated scheduling and visual proof of work.',
        mockupColor: '#60a5fa',
        mockupText: 'Honc',
        mockupCardText: 'Active Booking',
        mockupSubText: 'Honda City · WB-02-1234',
    },
    {
        id: 'doorpe',
        labelNum: '02',
        icon: <RiTeamLine />, // Using one of the existing imports as a placeholder icon
        title: 'door.pe Community',
        subtitle: 'A hyper-local community platform that connects neighbors and services to build and organize communication.',
        tags: ['Community', 'User Research', 'Product Design'],
        path: '/case-study/doorpe',
        accent: '#a78bfa',
        problem: 'Neighbourhood groups were chaotic with no structure, making service discovery nearly impossible.',
        solution: 'Reduced time to address a "first input" decision to less than 30 seconds through structured discovery.',
        mockupColor: '#7c3aed',
        mockupText: 'door.pe',
        mockupCardText: 'Community Feed',
        mockupSubText: 'Koramangala Block 5 · 24 Members',
    },
]

export default function Home() {
    return (
        <main className="home">
            {/* Hero */}
            <section className="hero-section">
                <div className="glow-blob" style={{ width: 700, height: 700, background: '#7c3aed', top: -150, left: -200 }} />
                <div className="glow-blob" style={{ width: 400, height: 400, background: '#4f46e5', top: 200, right: -100 }} />
                <div className="container hero-inner">
                    <motion.div className="hero-badge" custom={0} variants={fadeUp} initial="hidden" animate="visible">
                        <span className="badge-dot" />
                        PRODUCT & UI/UX DESIGNER                     </motion.div>
                    <motion.h1 className="hero-title" custom={1} variants={fadeUp} initial="hidden" animate="visible">
                        Designing systems for<br />
                        <span className="hero-gradient">real-world operations.</span>
                    </motion.h1>
                    <motion.p className="hero-sub" custom={2} variants={fadeUp} initial="hidden" animate="visible">
                        I bridge the gap between complex operational problems and intuitive user experiences. Building platforms for service ecosystems, gig work, and communities.
                    </motion.p>
                    <motion.div className="hero-actions" custom={3} variants={fadeUp} initial="hidden" animate="visible">
                        <a href="#work" className="btn btn-primary">
                            View Case Studies
                            <HiOutlineArrowDown />
                        </a>
                        <a href="#contact" className="btn btn-ghost">Get In Touch</a>
                    </motion.div>
                    <motion.div className="specialties" custom={4} variants={fadeUp} initial="hidden" animate="visible">
                        {specialties.map((s, i) => (
                            <div key={i} className="specialty-card">
                                <span className="specialty-icon" style={{ color: s.color }}>{s.icon}</span>
                                <div className="specialty-content">
                                    <span className="specialty-sub">{s.subtitle}</span>
                                    <span className="specialty-label">{s.label}</span>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Case Studies */}
            <hr className="section-divider" />
            <section className="cs-section" id="work">
                <div className="container">
                    <div className="cs-list">
                        {caseStudies.map((cs, i) => (
                            <React.Fragment key={cs.id}>
                                <motion.div
                                    className={`cs-card ${i % 2 === 1 ? 'cs-card--reverse' : ''}`}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-80px' }}
                                transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                            >
                                <div className="cs-card-content">
                                    <div className="cs-case-badge">
                                        <div className="cs-case-icon-circle" style={{ color: cs.accent, background: `${cs.accent}15` }}>
                                            {cs.icon}
                                        </div>
                                        <div className="cs-case-text" style={{ color: cs.accent }}>
                                            <span className="cs-case-study-label">CASE STUDY</span>
                                            <span className="cs-case-study-num">{cs.labelNum}</span>
                                        </div>
                                    </div>
                                    <h2 className="cs-card-title">{cs.title}</h2>
                                    <p className="cs-card-sub">{cs.subtitle}</p>
                                    <div className="cs-info-rows">
                                        <div className="cs-info-row">
                                            <span className="cs-info-icon" style={{ background: '#ef444420', color: '#ef4444' }}>⚠</span>
                                            <div>
                                                <div className="cs-info-label">The Problem</div>
                                                <div className="cs-info-text">{cs.problem}</div>
                                            </div>
                                        </div>
                                        <div className="cs-info-row">
                                            <span className="cs-info-icon" style={{ background: '#22c55e20', color: '#22c55e' }}>✓</span>
                                            <div>
                                                <div className="cs-info-label">The Solution</div>
                                                <div className="cs-info-text">{cs.solution}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cs-tags">
                                        {cs.tags.map(t => <span key={t} className="tag">{t}</span>)}
                                    </div>
                                    <Link to={cs.path} className="cs-read-link">
                                        Read Full Case Study <HiOutlineArrowRight />
                                    </Link>
                                </div>
                                <div className="cs-card-visual">
                                    <div className="cs-phone-mockup" style={{ '--accent': cs.mockupColor }}>
                                        <div className="cs-phone-notch" />
                                        <div className="cs-phone-content">
                                            <div className="cs-phone-header-bar">
                                                <div className="cs-phone-app-icon" style={{ background: cs.mockupColor }}>
                                                    {cs.mockupText[0]}
                                                </div>
                                                <div>
                                                    <div className="cs-phone-app-name">{cs.mockupText}</div>
                                                    <div className="cs-phone-online"><span className="cs-phone-dot" />Online</div>
                                                </div>
                                            </div>
                                            <div className="cs-phone-body">
                                                <div className="cs-phone-line cs-phone-line--80" />
                                                <div className="cs-phone-line cs-phone-line--60" />
                                                <div className="cs-phone-line cs-phone-line--40" />
                                                <div className="cs-phone-mini-card">
                                                    <div className="cs-phone-mini-label">Active</div>
                                                    <div className="cs-phone-mini-line" />
                                                </div>
                                                <div className="cs-phone-mini-card">
                                                    <div className="cs-phone-mini-label">Recent</div>
                                                    <div className="cs-phone-mini-line cs-phone-line--60" />
                                                </div>
                                            </div>
                                            <div className="cs-phone-bottom-card" style={{ background: cs.mockupColor }}>
                                                <div className="cs-phone-booking-label">{cs.mockupCardText}</div>
                                                <div className="cs-phone-booking-id">{cs.mockupSubText}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            {i < caseStudies.length - 1 && <hr className="section-divider" style={{ margin: '80px 0' }} />}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>

            {/* About & Philosophy */}
            <hr className="section-divider" />
            <section className="about-section" id="about">
                <div className="container about-container">
                    <motion.div
                        className="about-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="about-heading-large">About &amp; Philosophy</h2>
                        <p className="about-subtitle">I don't just design interfaces; I design systems that solve real operational problems.</p>
                    </motion.div>

                    <div className="bento-grid">
                        <motion.div 
                            className="bento-card bento-mindset"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <div className="bento-icon-circle"><RiUserLine /></div>
                            <h3 className="bento-title">The Operator's Mindset</h3>
                            <p className="bento-text">
                                Having built and operated service platforms myself, I approach design by deeply understanding operational friction. My work focuses on solving challenges in local services, gig work, and community platforms.
                            </p>
                        </motion.div>

                        <motion.div 
                            className="bento-card bento-philosophy"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h3 className="bento-title">Design Philosophy</h3>
                            <p className="bento-text bento-quote">
                                "Good design is not just visual polish. It is the process of understanding real problems and building systems that reduce friction for both users and businesses."
                            </p>
                        </motion.div>

                        <div className="bento-skills-row">
                            <motion.div 
                                className="bento-card bento-skill"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <div className="bento-skill-header">
                                    <RiFocus3Line className="bento-skill-icon icon-blue" />
                                    <div className="bento-skill-title">
                                        <span className="skill-label icon-blue">UX</span>
                                        <span className="skill-label-sub icon-blue">SKILLS</span>
                                    </div>
                                </div>
                                <ul className="bento-list">
                                    <li>User Research</li>
                                    <li>Journey Mapping</li>
                                    <li>Wireframing</li>
                                </ul>
                            </motion.div>

                            <motion.div 
                                className="bento-card bento-skill"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <div className="bento-skill-header">
                                    <RiLayoutTopLine className="bento-skill-icon icon-purple" />
                                    <div className="bento-skill-title">
                                        <span className="skill-label icon-purple">UI</span>
                                        <span className="skill-label-sub icon-purple">SKILLS</span>
                                    </div>
                                </div>
                                <ul className="bento-list">
                                    <li>Design Systems</li>
                                    <li>Visual Hierarchy</li>
                                    <li>Prototyping</li>
                                </ul>
                            </motion.div>
                        </div>

                        <motion.div 
                            className="bento-card bento-tools"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <div className="tools-label-text">
                                TOOLS I USE<br/>DAILY
                            </div>
                            <div className="tools-icons">
                                <div className="tool-item">
                                    <FaFigma className="tool-i" />
                                    <span>Figma</span>
                                </div>
                                <div className="tool-item">
                                    <RiLayoutTopLine className="tool-i" />
                                    <span>Adobe XD</span>
                                </div>
                                <div className="tool-item">
                                    <RiCodeSSlashLine className="tool-i" />
                                    <span>Lovable</span>
                                </div>
                                <div className="tool-item">
                                    <RiPlayCircleLine className="tool-i" />
                                    <span>Prototyping</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section" id="contact">
                <div className="glow-blob" style={{ width: 600, height: 600, background: '#7c3aed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
                <div className="container cta-inner">
                    <div className="cta-mail-icon"><HiOutlineMail /></div>
                    <motion.h2
                        className="cta-title"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Let's build something<br />meaningful.
                    </motion.h2>
                    <motion.p
                        className="cta-sub"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Open for opportunities where product thinking meets operational complexity.
                    </motion.p>
                    <motion.div
                        className="cta-actions"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <a href="mailto:dk.rohitkumar@gmail.com" className="btn btn-ghost cta-email-btn">
                            <HiOutlineMail /> dk.rohitkumar@gmail.com
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="btn btn-linkedin">
                            <FaLinkedin /> in/LinkedIn
                        </a>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}
