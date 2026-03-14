import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi'
import './CaseStudy.css'

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] } })
}

const metrics = [
    { label: 'Year', value: '2023' },
    { label: 'Timeframe', value: '12 Weeks' },
    { label: 'Revenue Impact', value: '₹2.5L+/mo' },
    { label: 'Value', value: '1 : 1,700/wk' },
]

const personas = [
    {
        name: 'Karan, 32',
        role: 'Urban Professional',
        tags: ['Busy Schedule', 'Trusted Service', 'Convenience'],
        painPoints: ['Hard to track cleaners', 'Missed appointments', 'No visual proof of cleaning'],
    },
    {
        name: 'The "Flexi Guy"',
        role: 'Occasional Car Owner',
        tags: ['Sporadic Needs', 'Cost-Conscious', 'On-Demand'],
        painPoints: ["Doesn't remember last clean", 'No app notifications', 'Confusing pricing'],
    },
    {
        name: 'Dilnaz',
        role: 'Premium Segment User',
        tags: ['Brand Loyal', 'High Expectations', 'Values Quality'],
        painPoints: ['Wants consistency', 'Needs receipts', 'Expects premium UX'],
    },
    {
        name: 'Rohit, 24',
        role: 'First-Time Subscriber',
        tags: ['Price Sensitive', 'Social Referral', 'Discovery'],
        painPoints: ['Confused by subscription tiers', 'Worried about cancellation', 'Needs onboarding'],
    },
]

const impactStats = [
    { value: '98%', label: 'Service Retention', sublabel: 'After New Flows' },
    { value: '2.5k+', label: 'Active Bookings', sublabel: 'Monthly Track' },
    { value: '0', label: 'Support Escalations', sublabel: 'New Platform' },
]

export default function HoncCaseStudy() {
    return (
        <div className="cs-page">
            {/* Hero */}
            <section className="cs-hero honc-hero">
                <div className="glow-blob" style={{ width: 600, height: 600, background: '#f59e0b', top: -100, left: -100 }} />
                <div className="glow-blob" style={{ width: 300, height: 300, background: '#d97706', bottom: 0, right: 0 }} />
                <div className="container cs-hero-inner">
                    <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible"
                        className="cs-breadcrumb">
                        <Link to="/">Portfolio</Link> / <Link to="/#work">Case Studies</Link> / <span>Honc Car Cleaning</span>
                    </motion.div>
                    <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible" className="honc-case-label">
                        <span className="honc-case-num">CASE STUDY 01</span>
                    </motion.div>
                    <motion.h1 custom={2} variants={fadeUp} initial="hidden" animate="visible" className="honc-hero-title">
                        <span className="honc-hero-name">Honc Car Cleaning</span>
                    </motion.h1>
                    <motion.p custom={3} variants={fadeUp} initial="hidden" animate="visible" className="honc-hero-sub">
                        Transforming a chaotic, cash-based service into a{' '}
                        <span className="cs-accent" style={{ '--clr': '#f59e0b' }}>streamlined digital subscription platform</span>
                        {' '}for urban car owners.
                    </motion.p>
                    <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible" className="cs-metrics-bar">
                        {metrics.map(m => (
                            <div key={m.label} className="cs-metric">
                                <span className="cs-metric-label">{m.label}</span>
                                <span className="cs-metric-value">{m.value}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Hero Image */}
            <div className="cs-hero-img-wrap container">
                <div className="cs-hero-img honc-hero-img">
                    <div className="honc-car-visual">
                        <div className="honc-car-glow" />
                        <div className="honc-car-body">🚗</div>
                    </div>
                    <div className="cs-img-caption">Honc — Urban Car Cleaning Platform</div>
                </div>
            </div>

            {/* Context + Core Problem */}
            <section className="cs-body-section container">
                <div className="cs-two-col">
                    <div>
                        <div className="section-label">The Context</div>
                        <p className="cs-body-text">
                            Honc was operating as a premium car cleaning service with different service varieties. The experience was broken: cleaners were invisible, communication was fragmented between WhatsApp groups and spreadsheets, and customers had zero transparency.
                        </p>
                        <ul className="cs-context-list">
                            <li><span className="cs-bullet cs-bullet--red" />No accessibility or self-service scheduling</li>
                            <li><span className="cs-bullet cs-bullet--red" />Cleaner visibility issues — no tracking or accountability</li>
                            <li><span className="cs-bullet cs-bullet--red" />Communication breakdown: unread messages, delayed response loops</li>
                        </ul>
                    </div>
                    <div>
                        <div className="section-label">The Core Problem</div>
                        <div className="cs-problem-quote">
                            "How might we create a system that gives car owners peace of mind while professionalising the job for cleaners?"
                        </div>
                        <div className="cs-problem-stat-row">
                            <div className="cs-problem-stat-item">
                                <span className="cs-problem-num" style={{ color: '#f59e0b' }}>89%</span>
                                <span className="cs-problem-desc">of users re-booked within 4 weeks when given in-app scheduling</span>
                            </div>
                            <div className="cs-problem-stat-item">
                                <span className="cs-problem-num" style={{ color: '#f59e0b' }}>0</span>
                                <span className="cs-problem-desc">Support escalations after launch</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Users */}
            <section className="cs-body-section container">
                <div className="section-label">Discovery</div>
                <h2 className="cs-section-title">Understanding the Users</h2>
                <div className="cs-persona-grid">
                    {personas.map((p, i) => (
                        <motion.div
                            key={i}
                            className="cs-persona-card"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                        >
                            <div className="cs-persona-avatar" style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}>
                                {p.name.split(',')[0][0]}
                            </div>
                            <div className="cs-persona-info">
                                <div className="cs-persona-name">{p.name}</div>
                                <div className="cs-persona-role">{p.role}</div>
                                <div className="cs-persona-tags">
                                    {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                                </div>
                                <ul className="cs-persona-pains">
                                    {p.painPoints.map(pp => <li key={pp}>{pp}</li>)}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Two-Sided Ecosystem */}
            <section className="cs-ecosystem">
                <div className="container">
                    <h2 className="cs-section-title centered">A Two-Sided Ecosystem</h2>
                    <p className="cs-section-sub centered">
                        Built two apps in tandem: a consumer-first experience and a professional-grade tool for cleaners.
                    </p>
                    <div className="cs-ecosystem-grid">
                        <div className="cs-ecosystem-phone">
                            <div className="honc-phone-frame">
                                <div className="honc-phone-notch" />
                                <div className="honc-phone-screen">
                                    <div className="honc-phone-header">
                                        <div className="honc-phone-avatar">H</div>
                                        <div>
                                            <div className="honc-phone-title">Honc Cleaner</div>
                                            <div className="honc-phone-status"><span className="status-dot" />Online</div>
                                        </div>
                                    </div>
                                    <div className="honc-phone-body">
                                        <div className="honc-phone-line w-80" />
                                        <div className="honc-phone-line w-60" />
                                        <div className="honc-phone-mini-block" />
                                        <div className="honc-phone-mini-block" />
                                    </div>
                                    <div className="honc-phone-booking-card">
                                        <div className="honc-booking-label">Active Booking</div>
                                        <div className="honc-booking-id">Honda City · WB-02-1234</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cs-ecosystem-features">
                            <div className="cs-feature">
                                <h4>Visual Proof of Work</h4>
                                <p>The cleaner uploads before/after photos which appear in the customer's timeline. Transparency at every step.</p>
                                <ol className="cs-feature-list">
                                    <li>Cleaner checks in with GPS</li>
                                    <li>Uploads photos before starting</li>
                                    <li>Sends work completion ping</li>
                                    <li>Customer rates instantly</li>
                                </ol>
                            </div>
                            <div className="cs-feature">
                                <h4>Set &amp; Forget Subscriptions</h4>
                                <p>Allows users to subscribe to a plan, choose a preferred slot, and have it auto-renew seamlessly.</p>
                                <div className="cs-plan-card">
                                    <div className="cs-plan-details">
                                        <div className="cs-plan-badge">Monthly Plan</div>
                                        <div className="cs-plan-subtext">Auto-renews every 30 days</div>
                                    </div>
                                    <div className="cs-plan-cta" style={{ background: '#f59e0b', color: 'black' }}>
                                        Renew Subscription
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact */}
            <section className="cs-impact">
                <div className="container">
                    <h2 className="cs-section-title centered">The Impact</h2>
                    <div className="cs-impact-grid">
                        {impactStats.map((s, i) => (
                            <motion.div
                                key={i}
                                className="cs-impact-card"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                            >
                                <div className="cs-impact-num" style={{ color: '#f59e0b' }}>{s.value}</div>
                                <div className="cs-impact-label">{s.label}</div>
                                <div className="cs-impact-sublabel">{s.sublabel}</div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="cs-testimonial">
                        <p>"The subscribers were right — this product transformed car ownership."</p>
                    </div>
                </div>
            </section>

            {/* Navigation */}
            <div className="cs-nav container">
                <Link to="/" className="cs-nav-btn">
                    <HiOutlineArrowLeft /> Back to Portfolio
                </Link>
                <Link to="/case-study/doorpe" className="cs-nav-btn cs-nav-btn--next">
                    Next Case Study: door.pe <HiOutlineArrowRight />
                </Link>
            </div>
        </div>
    )
}
