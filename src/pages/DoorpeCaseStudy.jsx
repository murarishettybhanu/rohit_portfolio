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
        <motion.main 
            className="cs-page page-wrapper"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
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
                            <motion.h1 custom={2} variants={fadeUp} initial="hidden" animate="visible" className="dp-hero-title premium-text-gradient" style={{ letterSpacing: '-0.02em', fontSize: 'clamp(40px, 6vw, 64px)', marginBottom: '16px' }}>
                                Connecting neighbours,<br />
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

                            <motion.p custom={6} variants={fadeUp} initial="hidden" animate="visible" className="dp-scroll-hint">
                                SCROLL TO EXPLORE ↓
                            </motion.p>
                        </div>

                        <motion.div
                            custom={2}
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            className="dp-project-details premium-bento-card"
                            style={{ padding: '40px' }}
                        >
                            {/* Ambient glow behind details */}
                            <div style={{ position: 'absolute', top: '10%', right: '10%', transform: 'translate(30%, -30%)', width: '250px', height: '250px', background: 'radial-gradient(circle, rgba(167, 139, 250, 0.15), transparent 70%)', pointerEvents: 'none', zIndex: -1 }} />
                            
                            <div className="dp-details-title" style={{ color: '#fff' }}>PROJECT DETAILS</div>
                            <div className="dp-details-grid" style={{ zIndex: 1, position: 'relative' }}>
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
            <div className="dp-stats-bar" style={{ padding: '60px 0', position: 'relative', zIndex: 1 }}>
                {/* Background ambient glow for stats area */}
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', height: '100%', background: 'radial-gradient(ellipse, rgba(167, 139, 250, 0.05), transparent 70%)', pointerEvents: 'none', zIndex: -1 }} />
                
                <div className="container dp-stats-inner" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
                    {stats.map((s, i) => (
                        <motion.div
                            key={i}
                            className="premium-bento-card"
                            style={{ padding: '32px 24px', textAlign: 'center', border: '1px solid #27272a' }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                        >
                            {/* Card-specific ambient glow */}
                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '120px', height: '120px', background: 'radial-gradient(circle, rgba(167, 139, 250, 0.1), transparent 70%)', pointerEvents: 'none', zIndex: -1 }} />
                            <div className="dp-stat-value" style={{ color: '#a78bfa', fontSize: '42px', fontWeight: '800', marginBottom: '8px', letterSpacing: '-0.02em', textShadow: '0 0 20px rgba(167, 139, 250, 0.3)' }}>{s.value}</div>
                            <div className="dp-stat-label" style={{ color: '#fff', fontSize: '15px', fontWeight: '600', marginBottom: '4px' }}>{s.label}</div>
                            <div className="dp-stat-sub" style={{ color: '#a1a1aa', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.sublabel}</div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Project Scope */}
            <section className="cs-body-section container">
                <motion.div 
                    className="dp-scope-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6 }}
                >
                    <div>
                        <div className="dp-scope-mini-label">PROJECT SCOPE</div>
                        <h2 className="cs-section-title">What was built &amp; why</h2>
                    </div>
                    <p className="dp-scope-sub">
                        door.pe addresses the fragmented nature of neighbourhood communication by creating a structured, trust-first platform for local communities.
                    </p>
                </motion.div>
                <div className="dp-scope-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                    {scope.map((s, i) => (
                        <motion.div
                            key={i}
                            className="dp-scope-card premium-bento-card"
                            style={{ padding: '32px' }}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            {/* Scope Glow */}
                            <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '150px', height: '150px', background: 'radial-gradient(circle, rgba(167, 139, 250, 0.1), transparent 70%)', pointerEvents: 'none', zIndex: -1 }} />
                            
                            <div className="dp-scope-icon premium-avatar-box" style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(167, 139, 250, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginBottom: '24px' }}>{s.icon}</div>
                            <h3 className="dp-scope-title" style={{ color: '#fff', fontSize: '20px', marginBottom: '12px' }}>{s.title}</h3>
                            <p className="dp-scope-desc" style={{ color: '#a1a1aa', fontSize: '14px', lineHeight: '1.6', marginBottom: '24px' }}>{s.desc}</p>
                            <ul className="dp-scope-bullets" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                {s.bullets.map(b => (
                                    <li key={b} style={{ display: 'flex', gap: '8px', fontSize: '13px', color: '#d4d4d8', alignItems: 'center' }}>
                                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#a78bfa' }} /> {b}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Section 2: Problem Statement & Research */}
            <section className="cs-body-section container">
                <div className="cs-two-col">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="section-label">The Problem</div>
                        <h2 className="cs-section-title">Neighbourhood communication is broken</h2>
                        <p className="cs-body-text">
                            Through contextual inquiries and surveys with 120+ residents, we found that people rely on scattered WhatsApp or Facebook groups for local communication. These platforms are noisy, lack structure for service discovery, and fail to build trust between strangers living in the same vicinity.
                        </p>
                        <ul className="cs-context-list mt-8">
                            <li><span className="cs-bullet cs-bullet--red" /><strong>Spam and Noise:</strong> Important announcements get lost in hundreds of daily messages.</li>
                            <li><span className="cs-bullet cs-bullet--red" /><strong>Trust Deficit:</strong> Hiring a maid, plumber, or tutor from an unknown forward message feels risky.</li>
                            <li><span className="cs-bullet cs-bullet--red" /><strong>Lack of Moderation:</strong> Disputes often arise without dedicated community guidelines or moderation tools.</li>
                        </ul>
                    </motion.div>
                    
                    <motion.div
                        className="dp-research-insights"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="cs-problem-quote dp-quote-purple mb-8">
                            "I need a reliable electrician, but I don't want to scroll through 400 WhatsApp messages to find a number that might not even work."
                            <div className="dp-quote-author">— User Interview, Resident (32)</div>
                        </div>

                        <div className="dp-stat-card">
                            <div className="dp-stat-large">78%</div>
                            <div className="dp-stat-desc">Of users cited "Trust & Verification" as their #1 barrier to hiring local help.</div>
                        </div>
                        <div className="dp-stat-card">
                            <div className="dp-stat-large">4.5 hrs</div>
                            <div className="dp-stat-desc">Average time spent asking for and finding a local recommendation.</div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Section 3: User Personas & Journey Map */}
            <section className="cs-body-section container">
                <motion.div
                    className="cs-section-header-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-label mx-auto">Who are we designing for?</div>
                    <h2 className="cs-section-title centered">User Personas</h2>
                    <p className="cs-section-sub centered">
                        We synthesized our research into two primary archetypes to guide our design decisions: The active resident seeking services, and the local service provider seeking reliable work.
                    </p>
                </motion.div>
                <div className="cs-persona-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
                    
                    {/* Persona 1 */}
                    <motion.div
                        className="premium-bento-card"
                        style={{ padding: '40px' }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        {/* Ambient Glow */}
                        <div style={{ position: 'absolute', top: '-20%', right: '-20%', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(167, 139, 250, 0.15), transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />
                        
                        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '32px', position: 'relative', zIndex: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <div className="cs-persona-avatar premium-avatar-box" style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, #a78bfa, #7c3aed)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', fontWeight: '700' }}>
                                    P
                                </div>
                                <div className="cs-persona-info">
                                    <div className="cs-persona-name" style={{ fontSize: '24px', fontWeight: '700', color: '#fff', marginBottom: '4px', letterSpacing: '-0.01em' }}>Priya, The Busy Professional</div>
                                    <div className="cs-persona-role" style={{ fontSize: '14px', color: '#a1a1aa', fontWeight: '500' }}>Apartment Resident • 32</div>
                                </div>
                            </div>
                            <div style={{ background: 'rgba(167, 139, 250, 0.1)', color: '#c4b5fd', border: '1px solid rgba(167, 139, 250, 0.2)', padding: '6px 14px', borderRadius: '100px', fontSize: '11px', fontWeight: '700', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>
                                PRIMARY USER 🌟
                            </div>
                        </div>

                        <div style={{ marginBottom: '32px', position: 'relative', zIndex: 1 }}>
                            <div style={{ fontSize: '11px', color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px', fontWeight: '600' }}>Behavioral Tags</div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                <span style={{ fontSize: '12px', color: '#e4e4e7', background: '#27272a', border: '1px solid #3f3f46', padding: '6px 14px', borderRadius: '100px' }}>Values Time</span>
                                <span style={{ fontSize: '12px', color: '#e4e4e7', background: '#27272a', border: '1px solid #3f3f46', padding: '6px 14px', borderRadius: '100px' }}>Seeks Trust</span>
                            </div>
                        </div>

                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <div style={{ fontSize: '11px', color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px', fontWeight: '600' }}>Core Frustrations</div>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                                <li style={{ display: 'flex', gap: '12px', fontSize: '14px', color: '#a1a1aa', lineHeight: '1.5', alignItems: 'flex-start' }}>
                                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', flexShrink: 0, marginTop: '2px' }}>×</div>
                                    Struggles to find reliable, verified maids/cooks.
                                </li>
                                <li style={{ display: 'flex', gap: '12px', fontSize: '14px', color: '#a1a1aa', lineHeight: '1.5', alignItems: 'flex-start' }}>
                                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', flexShrink: 0, marginTop: '2px' }}>×</div>
                                    Misses important society updates hidden in WhatsApp spam.
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Persona 2 */}
                    <motion.div
                        className="premium-bento-card"
                        style={{ padding: '40px' }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {/* Ambient Glow */}
                        <div style={{ position: 'absolute', top: '-20%', right: '-20%', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15), transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />
                        
                        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '32px', position: 'relative', zIndex: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <div className="cs-persona-avatar premium-avatar-box" style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, #10b981, #059669)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', fontWeight: '700' }}>
                                    R
                                </div>
                                <div className="cs-persona-info">
                                    <div className="cs-persona-name" style={{ fontSize: '24px', fontWeight: '700', color: '#fff', marginBottom: '4px', letterSpacing: '-0.01em' }}>Raju, The Local Electrician</div>
                                    <div className="cs-persona-role" style={{ fontSize: '14px', color: '#a1a1aa', fontWeight: '500' }}>Service Provider • 45</div>
                                </div>
                            </div>
                            <div style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#6ee7b7', border: '1px solid rgba(16, 185, 129, 0.2)', padding: '6px 14px', borderRadius: '100px', fontSize: '11px', fontWeight: '700', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>
                                SECONDARY USER
                            </div>
                        </div>

                        <div style={{ marginBottom: '32px', position: 'relative', zIndex: 1 }}>
                            <div style={{ fontSize: '11px', color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px', fontWeight: '600' }}>Behavioral Tags</div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                <span style={{ fontSize: '12px', color: '#e4e4e7', background: '#27272a', border: '1px solid #3f3f46', padding: '6px 14px', borderRadius: '100px' }}>Needs Work</span>
                                <span style={{ fontSize: '12px', color: '#e4e4e7', background: '#27272a', border: '1px solid #3f3f46', padding: '6px 14px', borderRadius: '100px' }}>Word-of-mouth</span>
                            </div>
                        </div>

                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <div style={{ fontSize: '11px', color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px', fontWeight: '600' }}>Core Frustrations</div>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                                <li style={{ display: 'flex', gap: '12px', fontSize: '14px', color: '#a1a1aa', lineHeight: '1.5', alignItems: 'flex-start' }}>
                                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', flexShrink: 0, marginTop: '2px' }}>×</div>
                                    Relies entirely on building guards for recommendations (costly cuts).
                                </li>
                                <li style={{ display: 'flex', gap: '12px', fontSize: '14px', color: '#a1a1aa', lineHeight: '1.5', alignItems: 'flex-start' }}>
                                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', flexShrink: 0, marginTop: '2px' }}>×</div>
                                    No digital presence or way to showcase good reviews.
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Section 4: Design Process & IA */}
            <section className="cs-body-section container cs-ecosystem">
                <motion.div
                    className="cs-section-header-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-label mx-auto">Structuring the solution</div>
                    <h2 className="cs-section-title centered">Information Architecture</h2>
                    <p className="cs-section-sub centered">
                        To solve the noise problem, we separated the platform into structured tabs: community discussions, verified services, and private communications.
                    </p>
                </motion.div>

                <div className="dp-ia-diagram">
                    <motion.div className="dp-ia-box core" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>door.pe App Core</motion.div>
                    <div className="dp-ia-branches">
                        <div className="dp-ia-branch">
                            <div className="dp-ia-line" />
                            <motion.div className="dp-ia-box" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                                <strong>Community Feed</strong>
                                <span>Announcements, polls, discussions</span>
                            </motion.div>
                        </div>
                        <div className="dp-ia-branch">
                            <div className="dp-ia-line" />
                            <motion.div className="dp-ia-box" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                                <strong>Discover Services</strong>
                                <span>Verified providers, ratings, hiring</span>
                            </motion.div>
                        </div>
                        <div className="dp-ia-branch">
                            <div className="dp-ia-line" />
                            <motion.div className="dp-ia-box" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                                <strong>My Network</strong>
                                <span>DMs, groups, active requests</span>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: UI Design Showcase */}
            <section className="cs-body-section container">
                <motion.div
                    className="cs-section-header-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-label mx-auto">Visual Design</div>
                    <h2 className="cs-section-title centered">UI Final Screens</h2>
                    <p className="cs-section-sub centered">
                        We focused on a clean, accessible interface that prioritizes readability and trust markers like verification badges and mutual connections.
                    </p>
                </motion.div>

                <div className="dp-showcase-cascade" style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginTop: '60px', paddingBottom: '160px', flexWrap: 'wrap' }}>
                    
                    {/* Phone 1 */}
                    <motion.div style={{ flex: '1 1 280px', maxWidth: '320px', display: 'flex', flexDirection: 'column', alignItems: 'center' }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <div className="honc-abs-phone mockup-dark flex-centered" style={{ width: '280px', height: '560px', background: '#09090b', borderRadius: '40px', border: '8px solid #222', position: 'relative', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', padding: '24px 16px', marginBottom: '40px' }}>
                            <div className="honc-abs-notch" style={{ width: '120px', height: '28px', background: '#222', margin: '0 auto', top: '0', left: '50%', transform: 'translateX(-50%)', borderRadius: '0 0 16px 16px', zIndex: 10, position: 'absolute' }} />
                            
                            {/* Background glow inside phone */}
                            <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(167, 139, 250, 0.15), transparent 70%)', pointerEvents: 'none' }} />
                            
                            {/* Floating Notification */}
                            <motion.div 
                                className="honc-floating-card top"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                                style={{ position: 'absolute', top: '100px', right: '-20px', background: '#111', border: '1px solid #27272a', borderRadius: '12px', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: '4px', boxShadow: '0 10px 30px rgba(0,0,0,0.6)', zIndex: 10 }}
                            >
                                <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#a78bfa' }} />
                                    <div style={{ color: '#fff', fontSize: '12px', fontWeight: '500' }}>New Announcement</div>
                                </div>
                                <div style={{ color: '#a1a1aa', fontSize: '10px' }}>Water Supply Update</div>
                            </motion.div>

                            {/* Mock UI Elements */}
                            <div style={{ marginTop: '24px', position: 'relative', zIndex: 1 }}>
                                <div className="dp-mockup-head" style={{ color: '#fff', fontSize: '22px', fontWeight: '700', marginBottom: '24px' }}>Community Feed</div>
                                <div className="dp-mockup-card premium-bento-card" style={{ padding: '16px', borderRadius: '16px', marginBottom: '16px', display: 'flex', gap: '12px' }}>
                                    <div className="dp-mockup-avatar" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }} />
                                    <div className="dp-mockup-lines" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '6px' }}>
                                        <div className="dp-mockup-line" style={{ width: '80%', height: '8px', background: 'rgba(255,255,255,0.2)', borderRadius: '4px' }} />
                                        <div className="dp-mockup-line" style={{ width: '60%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }} />
                                    </div>
                                </div>
                                <div className="dp-mockup-card premium-bento-card" style={{ padding: '16px', borderRadius: '16px', display: 'flex', gap: '12px' }}>
                                    <div className="dp-mockup-avatar" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }} />
                                    <div className="dp-mockup-lines" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '6px' }}>
                                        <div className="dp-mockup-line" style={{ width: '90%', height: '8px', background: 'rgba(255,255,255,0.2)', borderRadius: '4px' }} />
                                        <div className="dp-mockup-line" style={{ width: '70%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }} />
                                        <div className="dp-mockup-line" style={{ width: '40%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div style={{ textAlign: 'center', maxWidth: '300px' }}>
                            <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(167, 139, 250, 0.1)', color: '#c4b5fd', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', marginBottom: '20px', fontWeight: '700' }}>1</div>
                            <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#fff', marginBottom: '12px', letterSpacing: '-0.02em' }}>Replacing chaos <br/> with structure.</h3>
                            <p style={{ fontSize: '14px', color: '#a1a1aa', lineHeight: '1.6' }}>Structured announcements, polls, and discussions replacing chaotic WhatsApp groups.</p>
                        </div>
                    </motion.div>

                    {/* Phone 2 */}
                    <motion.div style={{ flex: '1 1 280px', maxWidth: '320px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '60px' }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                        <div className="honc-abs-phone mockup-light" style={{ width: '280px', height: '560px', background: '#09090b', borderRadius: '40px', border: '8px solid #222', position: 'relative', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', padding: '24px 16px', marginBottom: '40px' }}>
                            <div className="honc-abs-notch" style={{ width: '120px', height: '28px', background: '#222', margin: '0 auto', top: '0', left: '50%', transform: 'translateX(-50%)', borderRadius: '0 0 16px 16px', zIndex: 10, position: 'absolute' }} />
                            
                            {/* Background glow */}
                            <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15), transparent 70%)', pointerEvents: 'none' }} />
                            
                            {/* Floating Category Badge */}
                            <motion.div 
                                className="honc-floating-card top"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                                style={{ position: 'absolute', top: '160px', left: '-20px', background: '#111', border: '1px solid #27272a', borderRadius: '12px', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 10px 30px rgba(0,0,0,0.6)', zIndex: 10 }}
                            >
                                <div style={{ fontSize: '16px' }}>⚡️</div>
                                <div style={{ color: '#fff', fontSize: '13px', fontWeight: '600' }}>Top Rated</div>
                            </motion.div>

                            {/* Mock UI Elements */}
                            <div style={{ marginTop: '24px', position: 'relative', zIndex: 1 }}>
                                <div className="dp-mockup-head" style={{ color: '#fff', fontSize: '22px', fontWeight: '700', marginBottom: '24px' }}>Services Directory</div>
                                <div className="dp-mockup-search" style={{ height: '48px', background: 'rgba(255,255,255,0.05)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '24px' }} />
                                <div className="dp-mockup-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                                    {[1, 2, 3, 4, 5, 6].map(n => (
                                        <div key={n} className="dp-mockup-square premium-bento-card" style={{ height: '90px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0' }}>
                                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div style={{ textAlign: 'center', maxWidth: '300px' }}>
                            <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(99, 102, 241, 0.1)', color: '#818cf8', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', marginBottom: '20px', fontWeight: '700' }}>2</div>
                            <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#fff', marginBottom: '12px', letterSpacing: '-0.02em' }}>A marketplace <br/> built on trust.</h3>
                            <p style={{ fontSize: '14px', color: '#a1a1aa', lineHeight: '1.6' }}>Find categorized, verified service providers reducing search time to mere seconds.</p>
                        </div>
                    </motion.div>

                    {/* Phone 3 */}
                    <motion.div style={{ flex: '1 1 280px', maxWidth: '320px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '120px' }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
                        <div className="honc-abs-phone mockup-dark flex-centered" style={{ width: '280px', height: '560px', background: '#09090b', borderRadius: '40px', border: '8px solid #222', position: 'relative', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', padding: '24px 16px', marginBottom: '40px' }}>
                            <div className="honc-abs-notch" style={{ width: '120px', height: '28px', background: '#222', margin: '0 auto', top: '0', left: '50%', transform: 'translateX(-50%)', borderRadius: '0 0 16px 16px', zIndex: 10, position: 'absolute' }} />
                            
                            {/* Background glow inside phone */}
                            <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15), transparent 70%)', pointerEvents: 'none' }} />
                            
                            {/* Floating Notification */}
                            <motion.div 
                                className="honc-floating-card top"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                                style={{ position: 'absolute', top: '100px', right: '-20px', background: '#111', border: '1px solid #27272a', borderRadius: '12px', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: '4px', boxShadow: '0 10px 30px rgba(0,0,0,0.6)', zIndex: 10 }}
                            >
                                <div style={{ display: 'flex', gap: '4px', color: '#f59e0b', fontSize: '10px' }}>★★★★★</div>
                                <div style={{ color: '#fff', fontSize: '12px', fontWeight: '500' }}>"Highly recommended!"</div>
                            </motion.div>

                            {/* Mock UI Elements */}
                            <div style={{ marginTop: '24px', position: 'relative', zIndex: 1, width: '100%' }}>
                                <div className="dp-mockup-head" style={{ marginTop: '24px', color: '#fff', fontSize: '22px', fontWeight: '700', marginBottom: '32px', textAlign: 'center' }}>Provider Profile</div>
                                <div className="dp-mockup-profile premium-bento-card" style={{ padding: '32px 16px', borderRadius: '24px', textAlign: 'center', marginBottom: '24px' }}>
                                    <div className="dp-mockup-avatar large" style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, #10b981, #059669)', margin: '0 auto 16px', boxShadow: '0 8px 16px rgba(16, 185, 129, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '32px', fontWeight: '700' }}>R</div>
                                    <div className="dp-mockup-line" style={{ width: '60%', height: '12px', background: '#fff', borderRadius: '6px', margin: '0 auto 12px' }} />
                                    <div className="dp-mockup-badge" style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(16, 185, 129, 0.15)', color: '#34d399', fontSize: '11px', fontWeight: '700', borderRadius: '100px', border: '1px solid rgba(16, 185, 129, 0.3)', letterSpacing: '0.05em' }}>✓ VERIFIED PARTNER</div>
                                </div>
                                <div className="dp-mockup-action-btn" style={{ height: '56px', background: '#10b981', borderRadius: '28px', boxShadow: '0 12px 24px rgba(16, 185, 129, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '15px', fontWeight: '600' }}>Message Provider</div>
                            </div>
                        </div>

                        <div style={{ textAlign: 'center', maxWidth: '300px' }}>
                            <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.1)', color: '#34d399', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', marginBottom: '20px', fontWeight: '700' }}>3</div>
                            <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#fff', marginBottom: '12px', letterSpacing: '-0.02em' }}>Humanizing the <br/> hiring process.</h3>
                            <p style={{ fontSize: '14px', color: '#a1a1aa', lineHeight: '1.6' }}>Communicate 1:1, view verified credentials, and hire local help directly.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Section 6: Usability Testing */}
            <section className="cs-body-section container cs-ecosystem" style={{ padding: '80px 0' }}>
                <div className="cs-two-col" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) minmax(300px, 1fr)', gap: '80px', alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6 }}
                    >
                        <div style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(167, 139, 250, 0.1)', color: '#c4b5fd', borderRadius: '100px', fontSize: '12px', fontWeight: '700', letterSpacing: '0.05em', marginBottom: '24px', width: 'fit-content' }}>04 / VALIDATION</div>
                        <h2 className="cs-section-title" style={{ fontSize: '36px', marginBottom: '24px', letterSpacing: '-0.02em' }}>Usability Testing & Iterations</h2>
                        <p className="cs-body-text" style={{ fontSize: '18px', color: '#a1a1aa', lineHeight: '1.6', maxWidth: '480px' }}>
                            We tested our high-fidelity prototypes with 8 residents. While the core value proposition was understood instantly, the service booking flow caused friction. Users wanted to chat with providers before officially "booking" them.
                        </p>
                    </motion.div>

                    <motion.div
                        className="dp-iteration-block"
                        style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="premium-bento-card" style={{ padding: '32px', borderRadius: '24px', borderStyle: 'dashed', borderColor: 'rgba(255,255,255,0.1)', background: 'transparent' }}>
                            <div style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.08em', color: '#71717a', marginBottom: '12px' }}>BEFORE TESTING</div>
                            <div style={{ fontSize: '16px', color: '#a1a1aa', lineHeight: '1.6' }}>Profiles had a large <strong style={{ color: '#fff' }}>"Book Now"</strong> button, which scared users who just wanted to ask about pricing.</div>
                        </div>
                        
                        <div style={{ textAlign: 'center', color: '#3f3f46', fontSize: '24px', margin: '8px 0' }}>↓</div>
                        
                        <div className="premium-bento-card" style={{ padding: '32px', borderRadius: '24px', background: 'linear-gradient(180deg, rgba(16, 185, 129, 0.05), rgba(16, 185, 129, 0.02))', borderColor: 'rgba(16, 185, 129, 0.2)', position: 'relative', overflow: 'hidden' }}>
                            {/* Inner Glow */}
                            <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '200px', height: '100px', background: 'radial-gradient(ellipse at top, rgba(16, 185, 129, 0.15), transparent 70%)', pointerEvents: 'none' }} />
                            
                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <div style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.08em', color: '#34d399', marginBottom: '12px' }}>AFTER ITERATION</div>
                                <div style={{ fontSize: '16px', color: '#e4e4e7', lineHeight: '1.6' }}>Changed the primary CTA to <strong style={{ color: '#10b981' }}>"Message"</strong> and added an upfront pricing estimate. Task success rate jumped from 62% to <strong>87%</strong>.</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Section 7: Outcomes & Reflection */}
            <section className="cs-body-section container">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-label mx-auto">The Results</div>
                    <h2 className="cs-section-title centered">Outcomes & Impact</h2>
                </motion.div>

                {/* Premium Unified Impact Block */}
                <motion.div 
                    className="honc-impact-block"
                    style={{ background: 'linear-gradient(180deg, #18181b, #09090b)', border: '1px solid #27272a', borderRadius: '32px', padding: '60px', position: 'relative', overflow: 'hidden' }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Top Glow */}
                    <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '60%', height: '100px', background: 'radial-gradient(ellipse at top, rgba(167, 139, 250, 0.15), transparent 70%)', pointerEvents: 'none' }} />
                    
                    <div className="cs-impact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px', marginBottom: '60px', position: 'relative', zIndex: 1 }}>
                        <div style={{ textAlign: 'center', position: 'relative' }}>
                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '120px', height: '120px', background: 'radial-gradient(circle at center, rgba(167, 139, 250, 0.15), transparent 70%)', zIndex: -1, pointerEvents: 'none' }} />
                            <div style={{ fontSize: '48px', fontWeight: '700', color: '#fff', marginBottom: '8px', letterSpacing: '-0.02em', textShadow: '0 0 30px rgba(167, 139, 250, 0.3)' }}>40%</div>
                            <div style={{ fontSize: '13px', color: '#a1a1aa', fontWeight: '500', marginBottom: '2px' }}>Decrease in Time-to-Hire</div>
                            <div style={{ fontSize: '11px', color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Compared to WhatsApp</div>
                        </div>
                        <div style={{ textAlign: 'center', position: 'relative' }}>
                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '120px', height: '120px', background: 'radial-gradient(circle at center, rgba(167, 139, 250, 0.15), transparent 70%)', zIndex: -1, pointerEvents: 'none' }} />
                            <div style={{ fontSize: '48px', fontWeight: '700', color: '#fff', marginBottom: '8px', letterSpacing: '-0.02em', textShadow: '0 0 30px rgba(167, 139, 250, 0.3)' }}>12k+</div>
                            <div style={{ fontSize: '13px', color: '#a1a1aa', fontWeight: '500', marginBottom: '2px' }}>Active Residents</div>
                            <div style={{ fontSize: '11px', color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Onboarded in 3 months</div>
                        </div>
                        <div style={{ textAlign: 'center', position: 'relative' }}>
                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '120px', height: '120px', background: 'radial-gradient(circle at center, rgba(167, 139, 250, 0.15), transparent 70%)', zIndex: -1, pointerEvents: 'none' }} />
                            <div style={{ fontSize: '48px', fontWeight: '700', color: '#fff', marginBottom: '8px', letterSpacing: '-0.02em', textShadow: '0 0 30px rgba(167, 139, 250, 0.3)' }}>4.8</div>
                            <div style={{ fontSize: '13px', color: '#a1a1aa', fontWeight: '500', marginBottom: '2px' }}>App Store Rating</div>
                            <div style={{ fontSize: '11px', color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Driven by high trust</div>
                        </div>
                    </div>
                    
                    {/* Divider */}
                    <div style={{ height: '1px', width: '100%', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)', marginBottom: '40px' }} />
                    
                    {/* Testimonial */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', position: 'relative', zIndex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <div className="premium-avatar-box" style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#27272a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a1a1aa' }}>💡</div>
                            <div style={{ maxWidth: '600px' }}>
                                <div style={{ fontSize: '13px', color: '#71717a', marginBottom: '4px' }}>Designer Reflection</div>
                                <div style={{ fontSize: '15px', color: '#fff', fontWeight: '500', lineHeight: '1.5' }}>"Designing for hyper-local communities taught me that trust cannot be engineered with just a badge; it requires transparency, structured word-of-mouth, and friction-less communication."</div>
                            </div>
                        </div>
                        <Link to="#" style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '100px', color: '#fff', fontSize: '12px', fontWeight: '600', textDecoration: 'none', transition: 'all 0.2s', flexShrink: 0 }}>
                            View Figma →
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* Back/Next nav */}
            <div className="cs-nav container">
                <Link to="/" className="cs-nav-btn">
                    <HiOutlineArrowLeft /> Back to Portfolio
                </Link>
                <Link to="/case-study/honc" className="cs-nav-btn cs-nav-btn--next">
                    Previous: Honc Car Cleaning <HiOutlineArrowRight />
                </Link>
            </div>
        </motion.main>
    )
}
