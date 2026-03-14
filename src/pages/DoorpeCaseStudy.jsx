import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi'
import './CaseStudy.css'

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] } })
}

const projectDetails = {
    role: 'Lead Product Designer',
    roleType: 'End-to-End UX/UI',
    timeline: '8 Weeks',
    period: 'Jan – May 2024',
    team: 'Solo Designer',
    teamExtra: '+ 2 Developers',
    platform: 'iOS & Android',
    platformType: 'Mobile-first',
    tools: ['Figma', 'Notion', 'Maze', 'Loom', 'Miro'],
    process: ['Research', 'Define', 'Design', 'Test'],
}

const stats = [
    { value: '12+', label: 'User Interviews', sublabel: 'Conducted' },
    { value: '48', label: 'Screens Designed', sublabel: 'Hi-fi Prototypes' },
    { value: '3x', label: 'Usability Rounds', sublabel: 'Iterative Testing' },
    { value: '87%', label: 'Task Success Rate', sublabel: 'Final Testing' },
]

const scope = [
    {
        icon: '🔍',
        title: 'Discovery & Research',
        desc: 'Conducted 12 in-depth interviews with urban apartment residents to uncover pain points in neighbourhood communication and service discovery.',
        bullets: ['Contextual inquiry sessions', 'Competitive analysis', 'Affinity mapping'],
    },
    {
        icon: '🗂',
        title: 'UX Architecture',
        desc: 'Designed the information architecture, user flows, and interaction patterns for a two-sided community platform serving residents and local service providers.',
        bullets: ['User journey mapping', 'Sitemap & IA design', 'Wireframe iterations'],
    },
    {
        icon: '📱',
        title: 'UI Design & Testing',
        desc: 'Created a complete design system and 48 high-fidelity screens, followed by three rounds of usability testing with real users from target neighbourhoods.',
        bullets: ['Design system creation', 'Hi-fi prototyping', 'Usability testing rounds'],
    },
]

const steps = ['Case Study Hero & Overview', 'Problem Statement & Research', 'Personas', 'IA', 'UI', 'Testing', 'Outcomes']

export default function DoorpeCaseStudy() {
    return (
        <div className="cs-page">
            {/* Hero */}
            <section className="cs-hero dp-hero">
                <div className="glow-blob" style={{ width: 600, height: 600, background: '#7c3aed', top: -80, right: -150 }} />
                <div className="glow-blob" style={{ width: 300, height: 300, background: '#4f46e5', bottom: 0, left: 0 }} />
                <div className="container">
                    <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible" className="cs-breadcrumb">
                        <Link to="/">Portfolio</Link> / <Link to="/#work">Case Studies</Link> / <span>door.pe</span>
                    </motion.div>

                    <div className="dp-hero-grid">
                        <div className="dp-hero-left">
                            <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible" className="dp-app-label">
                                <span className="dp-app-icon">🏠</span>
                                <div>
                                    <div className="dp-app-name">door.pe</div>
                                    <div className="dp-app-sub">Hyper-Local Community Platform</div>
                                </div>
                            </motion.div>
                            <motion.h1 custom={2} variants={fadeUp} initial="hidden" animate="visible" className="dp-hero-title">
                                Connecting <span className="cs-accent" style={{ '--clr': '#a78bfa' }}>neighbours,</span><br />
                                building trusted<br />communities.
                            </motion.h1>
                            <motion.p custom={3} variants={fadeUp} initial="hidden" animate="visible" className="dp-hero-sub">
                                A hyper-local platform that replaces chaotic WhatsApp groups with structured neighbourhood feeds, verified service directories, and trust-based social discovery — all at your doorstep.
                            </motion.p>
                            <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible" className="dp-hero-tags">
                                {['Community Design', 'Social Discovery', 'Trust Systems', 'Mobile App', 'UX Research'].map(t => (
                                    <span key={t} className="tag">{t}</span>
                                ))}
                            </motion.div>
                            <motion.div custom={5} variants={fadeUp} initial="hidden" animate="visible" className="dp-hero-actions">
                                <Link to="#" className="btn btn-primary">Read Case Study →</Link>
                                <Link to="#" className="btn btn-ghost">View Designs</Link>
                            </motion.div>
                            <motion.p custom={6} variants={fadeUp} initial="hidden" animate="visible" className="dp-scroll-hint">
                                SCROLL TO EXPLORE ↓
                            </motion.p>
                        </div>

                        <motion.div
                            custom={2}
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            className="dp-project-details"
                        >
                            <div className="dp-details-title">PROJECT DETAILS</div>
                            <div className="dp-details-grid">
                                <div className="dp-detail-item">
                                    <div className="dp-detail-label">🛠 ROLE</div>
                                    <div className="dp-detail-value">{projectDetails.role}</div>
                                    <div className="dp-detail-sub">{projectDetails.roleType}</div>
                                </div>
                                <div className="dp-detail-item">
                                    <div className="dp-detail-label">📅 TIMELINE</div>
                                    <div className="dp-detail-value">{projectDetails.timeline}</div>
                                    <div className="dp-detail-sub">{projectDetails.period}</div>
                                </div>
                                <div className="dp-detail-item">
                                    <div className="dp-detail-label">👥 TEAM</div>
                                    <div className="dp-detail-value">{projectDetails.team}</div>
                                    <div className="dp-detail-sub">{projectDetails.teamExtra}</div>
                                </div>
                                <div className="dp-detail-item">
                                    <div className="dp-detail-label">📱 PLATFORM</div>
                                    <div className="dp-detail-value">{projectDetails.platform}</div>
                                    <div className="dp-detail-sub">{projectDetails.platformType}</div>
                                </div>
                            </div>
                            <div className="dp-tools-section">
                                <div className="dp-detail-label">🔧 TOOLS USED</div>
                                <div className="dp-tools-list">
                                    {projectDetails.tools.map(t => (
                                        <span key={t} className="tool-pill">{t}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="dp-process-section">
                                <div className="dp-detail-label">📐 DESIGN PROCESS</div>
                                <div className="dp-process-flow">
                                    {projectDetails.process.map((p, i) => (
                                        <span key={p}>
                                            <span className={`dp-process-step ${i === 1 ? 'active' : ''}`}>{p}</span>
                                            {i < projectDetails.process.length - 1 && <span className="dp-process-arrow">→</span>}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="dp-badge-row">
                                <span className="dp-badge dp-badge--cs">● CASE STUDY 02</span>
                                <span className="dp-badge dp-badge--done">● Completed</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats bar */}
            <div className="dp-stats-bar">
                <div className="container dp-stats-inner">
                    {stats.map((s, i) => (
                        <motion.div
                            key={i}
                            className="dp-stat"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                        >
                            <div className="dp-stat-value" style={{ color: '#a78bfa' }}>{s.value}</div>
                            <div className="dp-stat-label">{s.label}</div>
                            <div className="dp-stat-sub">{s.sublabel}</div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Project Scope */}
            <section className="cs-body-section container">
                <div className="dp-scope-header">
                    <div>
                        <div className="dp-scope-mini-label">PROJECT SCOPE</div>
                        <h2 className="cs-section-title">What was built &amp; why</h2>
                    </div>
                    <p className="dp-scope-sub">
                        door.pe addresses the fragmented nature of neighbourhood communication by creating a structured, trust-first platform for local communities.
                    </p>
                </div>
                <div className="dp-scope-cards">
                    {scope.map((s, i) => (
                        <motion.div
                            key={i}
                            className="dp-scope-card"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <div className="dp-scope-icon">{s.icon}</div>
                            <h3 className="dp-scope-title">{s.title}</h3>
                            <p className="dp-scope-desc">{s.desc}</p>
                            <ul className="dp-scope-bullets">
                                {s.bullets.map(b => <li key={b}>{b}</li>)}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Bottom Navigation */}
            <div className="dp-bottom-nav container">
                <div className="dp-steps">
                    <div className="dp-steps-label">YOU ARE HERE</div>
                    <div className="dp-steps-row">
                        {steps.map((s, i) => (
                            <span key={s} className={`dp-step-dot ${i === 0 ? 'active' : ''}`} title={s} />
                        ))}
                    </div>
                    <div className="dp-current-step">
                        <span className="dp-step-num">1</span>
                        <span className="dp-step-name">Case Study Hero &amp; Overview</span>
                    </div>
                </div>
                <div className="dp-next-screen">
                    <div className="dp-next-label">Next Screen</div>
                    <div className="dp-next-name">Problem Statement &amp; Research →</div>
                </div>
            </div>

            {/* Back/Next nav */}
            <div className="cs-nav container">
                <Link to="/" className="cs-nav-btn">
                    <HiOutlineArrowLeft /> Back to Portfolio
                </Link>
                <Link to="/case-study/honc" className="cs-nav-btn cs-nav-btn--next">
                    Previous: Honc Car Cleaning <HiOutlineArrowRight />
                </Link>
            </div>
        </div>
    )
}
