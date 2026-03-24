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
        <motion.main 
            className="cs-page page-wrapper"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
            {/* Hero */}
            <section className="cs-hero honc-hero" style={{ padding: '40px 0 0 0', background: 'transparent' }}>
                <div className="container cs-hero-inner">
                    <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible" className="cs-breadcrumb" style={{ textAlign: 'center', marginBottom: '24px' }}>
                        <Link to="/">Portfolio</Link> / <Link to="/#work">Case Studies</Link> / <span>Honc</span>
                    </motion.div>

                    <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible" className="honc-case-label" style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
                        <span className="case-num" style={{ color: '#3b82f6', borderColor: 'rgba(59, 130, 246, 0.3)', background: 'rgba(59, 130, 246, 0.05)' }}>CASE STUDY</span>
                    </motion.div>
                    
                    <motion.h1 custom={2} variants={fadeUp} initial="hidden" animate="visible" className="honc-hero-title" style={{ textAlign: 'center', fontSize: 'clamp(40px, 6vw, 72px)', marginBottom: '16px', background: 'linear-gradient(to right, #60a5fa, #3b82f6, #6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: '800', letterSpacing: '-0.02em' }}>
                        Honc Car Cleaning
                    </motion.h1>
                    
                    <motion.p custom={3} variants={fadeUp} initial="hidden" animate="visible" className="honc-hero-sub" style={{ textAlign: 'center', margin: '0 auto 48px', maxWidth: '600px', fontSize: '15px' }}>
                        Transforming a chaotic, cash-based service into a streamlined digital subscription platform for urban car owners.
                    </motion.p>
                    
                    {/* New Pill Metrics */}
                    <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible" className="honc-hero-pills" style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '64px' }}>
                        {metrics.map(m => (
                            <div key={m.label} className="honc-pill" style={{ background: '#111', border: '1px solid #222', padding: '12px 20px', borderRadius: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '120px' }}>
                                <span style={{ fontSize: '10px', color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>{m.label}</span>
                                <span style={{ fontSize: '13px', color: '#fff', fontWeight: '600' }}>{m.value}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Hero Image (Abstract 3-Phone Layout) */}
            <div className="cs-hero-img-wrap container" style={{ paddingBottom: '60px' }}>
                <div className="honc-hero-mockup-frame" style={{ height: '500px', width: '100%', borderRadius: '24px', position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg, #18181b, #09090b)' }}>
                    {/* Background abstract element mimicking the car silhouette */}
                    <div style={{ position: 'absolute', bottom: '-10%', left: '50%', transform: 'translateX(-50%)', width: '80%', height: '80%', background: 'radial-gradient(ellipse at bottom, rgba(59, 130, 246, 0.15), transparent 70%)', pointerEvents: 'none' }} />
                    <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: '20px' }}>
                        
                        {/* Left Phone */}
                        <div className="honc-abs-phone" style={{ width: '220px', height: '400px', background: '#000', borderRadius: '32px 32px 0 0', border: '4px solid #333', borderBottom: 'none', position: 'relative', transform: 'translateY(40px) scale(0.9)', zIndex: 1, boxShadow: '-20px 0 40px rgba(0,0,0,0.5)' }}>
                            <div className="honc-abs-notch" style={{ width: '100px', height: '24px', background: '#333', margin: '0 auto', borderRadius: '0 0 12px 12px' }} />
                        </div>
                        
                        {/* Center Phone */}
                        <div className="honc-abs-phone center-phone" style={{ width: '260px', height: '480px', background: '#000', borderRadius: '40px 40px 0 0', border: '6px solid #222', borderBottom: 'none', position: 'relative', zIndex: 2, boxShadow: '0 0 60px rgba(0,0,0,0.8)' }}>
                            <div className="honc-abs-notch" style={{ width: '120px', height: '28px', background: '#222', margin: '0 auto', borderRadius: '0 0 16px 16px' }} />
                            
                            {/* Floating Booking Card */}
                            <motion.div 
                                className="honc-floating-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1, duration: 0.6 }}
                                style={{ position: 'absolute', top: '120px', left: '-30px', background: '#18181b', border: '1px solid #27272a', borderRadius: '16px', padding: '16px', display: 'flex', gap: '12px', alignItems: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', zIndex: 10 }}
                            >
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(34, 197, 94, 0.1)', color: '#22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>✓</div>
                                <div>
                                    <div style={{ color: '#fff', fontSize: '13px', fontWeight: '600' }}>Booking Confirmed</div>
                                    <div style={{ color: '#71717a', fontSize: '11px' }}>Today, 2:00 PM</div>
                                </div>
                            </motion.div>
                        </div>
                        
                        {/* Right Phone */}
                        <div className="honc-abs-phone" style={{ width: '220px', height: '400px', background: '#000', borderRadius: '32px 32px 0 0', border: '4px solid #333', borderBottom: 'none', position: 'relative', transform: 'translateY(40px) scale(0.9)', zIndex: 1, boxShadow: '20px 0 40px rgba(0,0,0,0.5)' }}>
                            <div className="honc-abs-notch" style={{ width: '100px', height: '24px', background: '#333', margin: '0 auto', borderRadius: '0 0 12px 12px' }} />
                        </div>

                    </div>
                </div>
            </div>

            {/* Context & Core Problem Bento Grid */}
            <section className="cs-body-section container" style={{ paddingTop: '20px' }}>
                <div className="honc-bento-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '24px' }}>
                    
                    {/* Left: Content */}
                    <motion.div 
                        className="honc-bento-card" 
                        style={{ background: '#111', border: '1px solid #222', borderRadius: '24px', padding: '40px' }}
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    >
                        <h2 className="cs-section-title" style={{ fontSize: '24px', marginBottom: '16px' }}>The Context</h2>
                        <p className="cs-body-text" style={{ color: '#a1a1aa', fontSize: '14px', marginBottom: '32px' }}>
                            Honc was operating as a premium car cleaning service for urban car owners. Below were the glaring issues causing the fragmented user experience before digitisation.
                        </p>
                        
                        <div className="honc-bento-list" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            <div style={{ display: 'flex', gap: '16px' }}>
                                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '12px' }}>UX</div>
                                <div>
                                    <div style={{ fontWeight: '600', fontSize: '14px', marginBottom: '4px' }}>No Accessibility</div>
                                    <div style={{ color: '#71717a', fontSize: '13px', lineHeight: '1.5' }}>No easy way to book, modify or track services, leading to high frustration.</div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '16px' }}>
                                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '12px' }}>QA</div>
                                <div>
                                    <div style={{ fontWeight: '600', fontSize: '14px', marginBottom: '4px' }}>Cleaner Visibility Issues</div>
                                    <div style={{ color: '#71717a', fontSize: '13px', lineHeight: '1.5' }}>No tracking or accountability for the cleaners, resulting in missed spots.</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Problem & Stats */}
                    <motion.div 
                        style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="honc-bento-card" style={{ background: '#111', border: '1px solid #222', borderRadius: '24px', padding: '32px', flex: 1 }}>
                            <div style={{ fontSize: '12px', fontWeight: '600', color: '#a1a1aa', marginBottom: '16px' }}>The Core Problem</div>
                            <div style={{ fontSize: '18px', color: '#fff', lineHeight: '1.6', paddingLeft: '20px', borderLeft: '3px solid #3b82f6', letterSpacing: '-0.01em' }}>
                                "How might we create a system that gives car owners peace of mind while professionalising the job for cleaners?"
                            </div>
                        </div>
                        
                        <div style={{ display: 'flex', gap: '24px' }}>
                            <div className="honc-bento-card stat" style={{ background: '#111', border: '1px solid #222', borderRadius: '24px', padding: '24px', flex: 1, position: 'relative', overflow: 'hidden' }}>
                                <div style={{ position: 'absolute', top: '-50%', left: '-50%', width: '200%', height: '200%', background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.1), transparent 50%)', opacity: 0.5, pointerEvents: 'none' }} />
                                <div style={{ fontSize: '42px', fontWeight: '700', color: '#fff', marginBottom: '8px', textShadow: '0 0 20px rgba(59, 130, 246, 0.4)' }}>89%</div>
                                <div style={{ fontSize: '11px', color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.05em' }}>RE-BOOKED IN 4 WEEKS</div>
                            </div>
                            <div className="honc-bento-card stat" style={{ background: '#111', border: '1px solid #222', borderRadius: '24px', padding: '24px', flex: 1, position: 'relative', overflow: 'hidden' }}>
                                <div style={{ position: 'absolute', top: '-50%', left: '-50%', width: '200%', height: '200%', background: 'radial-gradient(circle at center, rgba(168, 85, 247, 0.1), transparent 50%)', opacity: 0.5, pointerEvents: 'none' }} />
                                <div style={{ fontSize: '42px', fontWeight: '700', color: '#fff', marginBottom: '8px', textShadow: '0 0 20px rgba(168, 85, 247, 0.4)' }}>0</div>
                                <div style={{ fontSize: '11px', color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.05em' }}>ESCALATIONS POST-LAUNCH</div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* Users / Discovery */}
            <section className="cs-body-section container" style={{ paddingTop: '80px', paddingBottom: '40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                    <div style={{ color: '#3b82f6', fontSize: '11px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase' }}>DISCOVERY & AUDIENCE</div>
                    <div style={{ height: '1px', flex: 1, background: 'linear-gradient(90deg, rgba(255,255,255,0.1), transparent)' }} />
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '24px' }}>
                    <div style={{ maxWidth: '600px' }}>
                        <h2 className="cs-section-title" style={{ fontSize: '36px', marginBottom: '16px', letterSpacing: '-0.02em' }}>Understanding the Users</h2>
                        <p style={{ color: '#a1a1aa', fontSize: '15px', lineHeight: '1.6' }}>
                            We conducted user interviews and mapped out the customer base into four distinct archetypes. This helped us realize that our solution needed to cater both to the "set-and-forget" loyalists and the "on-demand" occasional users without complicating the core flow.
                        </p>
                    </div>
                    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                        <div style={{ background: '#111', border: '1px solid #222', borderRadius: '16px', padding: '16px 24px' }}>
                            <div style={{ fontSize: '24px', fontWeight: '700', color: '#fff', marginBottom: '4px' }}>120+</div>
                            <div style={{ fontSize: '11px', color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.05em' }}>User Interviews</div>
                        </div>
                        <div style={{ background: '#111', border: '1px solid #222', borderRadius: '16px', padding: '16px 24px' }}>
                            <div style={{ fontSize: '24px', fontWeight: '700', color: '#3b82f6', marginBottom: '4px' }}>4</div>
                            <div style={{ fontSize: '11px', color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Key Archetypes</div>
                        </div>
                    </div>
                </div>
                
                <div className="honc-bento-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
                    {personas.map((p, i) => (
                        <motion.div
                            key={i}
                            className="honc-bento-card persona"
                            style={{ 
                                background: 'linear-gradient(180deg, #18181b, #111)', 
                                border: '1px solid #27272a', 
                                borderRadius: '32px', 
                                padding: '40px',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                        >
                            {/* Ambient Glow */}
                            <div style={{ position: 'absolute', top: '-20%', right: '-20%', width: '200px', height: '200px', background: i % 2 === 0 ? 'radial-gradient(circle, rgba(59, 130, 246, 0.15), transparent 70%)' : 'radial-gradient(circle, rgba(168, 85, 247, 0.12), transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />
                            
                            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '32px', position: 'relative', zIndex: 1 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                    <div className="cs-persona-avatar" style={{ width: '64px', height: '64px', borderRadius: '50%', background: i % 2 === 0 ? 'linear-gradient(135deg, #3b82f6, #1d4ed8)' : 'linear-gradient(135deg, #a855f7, #7e22ce)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontWeight: '700', boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.2), 0 10px 20px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)' }}>
                                        {p.name.split(',')[0][0]}
                                    </div>
                                    <div className="cs-persona-info">
                                        <div className="cs-persona-name" style={{ fontSize: '20px', fontWeight: '700', color: '#fff', marginBottom: '4px', letterSpacing: '-0.01em' }}>{p.name}</div>
                                        <div className="cs-persona-role" style={{ fontSize: '13px', color: '#a1a1aa', fontWeight: '500' }}>{p.role}</div>
                                    </div>
                                </div>
                                {i === 0 && (
                                    <div style={{ padding: '6px 14px', borderRadius: '100px', background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.2)', fontSize: '11px', color: '#3b82f6', fontWeight: '600' }}>Primary</div>
                                )}
                            </div>
                            
                            <div style={{ marginBottom: '32px', position: 'relative', zIndex: 1 }}>
                                <div style={{ fontSize: '11px', color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px', fontWeight: '600' }}>Behavioral Tags</div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    {p.tags.map(t => (
                                        <span key={t} style={{ fontSize: '12px', color: '#e4e4e7', background: '#27272a', border: '1px solid #3f3f46', padding: '6px 14px', borderRadius: '100px' }}>
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <div style={{ fontSize: '11px', color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px', fontWeight: '600' }}>Core Frustrations</div>
                                <ul className="honc-persona-pains" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                                    {p.painPoints.map(pp => (
                                        <li key={pp} style={{ display: 'flex', gap: '12px', fontSize: '14px', color: '#a1a1aa', lineHeight: '1.5', alignItems: 'flex-start' }}>
                                            <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', flexShrink: 0, marginTop: '2px' }}>×</div>
                                            {pp}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Two-Sided Ecosystem (Alternating Rows) */}
            <section className="cs-ecosystem" style={{ padding: '100px 0', background: 'transparent' }}>
                <div className="container">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', justifyContent: 'center', marginBottom: '24px' }}>
                        <div style={{ color: '#a855f7', fontSize: '11px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase' }}>THE SOLUTION</div>
                    </div>
                    <h2 className="cs-section-title centered" style={{ fontSize: '32px', marginBottom: '16px' }}>A Two-Sided Ecosystem</h2>
                    <p className="cs-section-sub centered" style={{ color: '#a1a1aa', maxWidth: '600px', margin: '0 auto 80px' }}>
                        Built two apps in tandem: a consumer-first experience and a professional-grade tool for cleaners.
                    </p>
                    
                    {/* Row 1: Image Left, Text Right */}
                    <div className="honc-eco-row" style={{ display: 'flex', alignItems: 'center', gap: '60px', marginBottom: '100px' }}>
                        <motion.div className="honc-eco-img" style={{ flex: 1, display: 'flex', justifyContent: 'center' }} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                            <div className="honc-abs-phone mockup-dark flex-centered" style={{ width: '280px', height: '560px', background: '#09090b', borderRadius: '40px', border: '8px solid #222', position: 'relative', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
                                <div className="honc-abs-notch" style={{ width: '120px', height: '28px', background: '#222', margin: '0 auto', borderRadius: '0 0 16px 16px', zIndex: 10, position: 'relative' }} />
                                
                                {/* Background glow inside phone */}
                                <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15), transparent 70%)', pointerEvents: 'none' }} />
                                
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
                                    <div style={{ color: '#fff', fontSize: '12px', fontWeight: '500' }}>"Car looks brand new!"</div>
                                </motion.div>

                                {/* Mock UI Elements */}
                                <div style={{ padding: '40px 20px 20px', width: '100%' }}>
                                    <div style={{ background: '#18181b', borderRadius: '16px', padding: '16px', border: '1px solid #27272a', width: '100%' }}>
                                        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '16px' }}>
                                            <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: '#27272a' }} />
                                            <div>
                                                <div style={{ width: '100px', height: '12px', background: '#3f3f46', borderRadius: '4px', marginBottom: '6px' }} />
                                                <div style={{ display: 'flex', gap: '6px' }}>
                                                    <div style={{ padding: '2px 6px', background: 'rgba(34, 197, 94, 0.1)', color: '#22c55e', fontSize: '9px', borderRadius: '4px' }}>Active</div>
                                                    <div style={{ padding: '2px 6px', background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', fontSize: '9px', borderRadius: '4px' }}>Premium</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        
                        <motion.div className="honc-eco-text" style={{ flex: 1 }} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
                            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', marginBottom: '24px' }}>M</div>
                            <h3 style={{ fontSize: '24px', color: '#fff', marginBottom: '16px' }}>Visual Proof of Work</h3>
                            <p style={{ color: '#a1a1aa', fontSize: '15px', lineHeight: '1.6', marginBottom: '24px' }}>
                                The cleaner uploads before/after photos which appear in the customer's timeline. Transparency at every step.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#d4d4d8', fontSize: '14px' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3b82f6' }}/>Cleaner checks in with GPS</li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#d4d4d8', fontSize: '14px' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3b82f6' }}/>Uploads photos before starting</li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#d4d4d8', fontSize: '14px' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3b82f6' }}/>Sends work completion ping</li>
                            </ul>
                        </motion.div>
                    </div>
                    
                    {/* Row 2: Text Left, Image Right */}
                    <div className="honc-eco-row reverse" style={{ display: 'flex', alignItems: 'center', gap: '60px' }}>
                        <motion.div className="honc-eco-text" style={{ flex: 1 }} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(168, 85, 247, 0.1)', color: '#a855f7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', marginBottom: '24px' }}>⟳</div>
                            <h3 style={{ fontSize: '24px', color: '#fff', marginBottom: '16px' }}>Set & Forget Subscriptions</h3>
                            <p style={{ color: '#a1a1aa', fontSize: '15px', lineHeight: '1.6', marginBottom: '32px' }}>
                                Allows users to subscribe to a plan, choose a preferred slot, and have it auto-renew seamlessly without lifting a finger.
                            </p>
                            
                            <div style={{ background: '#111', border: '1px solid #222', borderRadius: '16px', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div>
                                    <div style={{ color: '#fff', fontWeight: '600', fontSize: '14px', marginBottom: '4px' }}>Monthly Plan</div>
                                    <div style={{ color: '#71717a', fontSize: '12px' }}>Auto-renews every 30 days</div>
                                </div>
                                <div style={{ background: '#3b82f6', color: '#fff', padding: '8px 16px', borderRadius: '8px', fontSize: '12px', fontWeight: '600' }}>Renew</div>
                            </div>
                        </motion.div>
                        
                        <motion.div className="honc-eco-img" style={{ flex: 1, display: 'flex', justifyContent: 'center' }} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
                            <div className="honc-abs-phone mockup-light" style={{ width: '280px', height: '560px', background: '#09090b', borderRadius: '40px', border: '8px solid #222', position: 'relative', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
                                <div className="honc-abs-notch" style={{ width: '120px', height: '28px', background: '#222', margin: '0 auto', borderRadius: '0 0 16px 16px', zIndex: 10, position: 'relative' }} />
                                {/* Abstract Car Image placeholder */}
                                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '45%', background: 'linear-gradient(135deg, #27272a, #18181b)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <div style={{ fontSize: '48px', opacity: 0.2 }}>🚗</div>
                                </div>
                                {/* Mock Bottom Sheet */}
                                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '55%', background: '#18181b', borderRadius: '24px 24px 0 0', padding: '24px', borderTop: '1px solid #27272a' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '24px' }}>
                                        <div style={{ color: '#fff', fontSize: '16px', fontWeight: '600' }}>Cleaning Type</div>
                                        <div style={{ color: '#fff', fontSize: '16px', fontWeight: '600' }}>₹599 /mo</div>
                                    </div>
                                    <div style={{ height: '48px', width: '100%', background: '#3b82f6', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '13px', fontWeight: '600' }}>
                                        Choose Plan Option →
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </section>

            {/* Impact & Testimonial Block */}
            <section className="cs-impact container" style={{ paddingBottom: '80px', paddingTop: '0', background: 'transparent' }}>
                <motion.div 
                    className="honc-impact-block"
                    style={{ background: 'linear-gradient(180deg, #18181b, #09090b)', border: '1px solid #27272a', borderRadius: '32px', padding: '60px', position: 'relative', overflow: 'hidden' }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Top Glow */}
                    <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '60%', height: '100px', background: 'radial-gradient(ellipse at top, rgba(168, 85, 247, 0.15), transparent 70%)', pointerEvents: 'none' }} />
                    
                    <h2 className="cs-section-title centered" style={{ fontSize: '24px', marginBottom: '48px', position: 'relative', zIndex: 1 }}>The Impact</h2>
                    
                    {/* Stats Row */}
                    <div className="cs-impact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px', marginBottom: '60px', position: 'relative', zIndex: 1 }}>
                        {impactStats.map((s, i) => (
                            <div key={i} style={{ textAlign: 'center', position: 'relative' }}>
                                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '120px', height: '120px', background: 'radial-gradient(circle at center, rgba(168, 85, 247, 0.15), transparent 70%)', zIndex: -1, pointerEvents: 'none' }} />
                                <div style={{ fontSize: '48px', fontWeight: '700', color: '#fff', marginBottom: '8px', letterSpacing: '-0.02em', textShadow: '0 0 30px rgba(168, 85, 247, 0.3)' }}>{s.value}</div>
                                <div style={{ fontSize: '13px', color: '#a1a1aa', fontWeight: '500', marginBottom: '2px' }}>{s.label}</div>
                                <div style={{ fontSize: '11px', color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.sublabel}</div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Divider */}
                    <div style={{ height: '1px', width: '100%', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)', marginBottom: '40px' }} />
                    
                    {/* Testimonial */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', position: 'relative', zIndex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#27272a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a1a1aa' }}>👤</div>
                            <div>
                                <div style={{ fontSize: '13px', color: '#71717a', marginBottom: '4px' }}>Feedback from the Founder</div>
                                <div style={{ fontSize: '15px', color: '#fff', fontWeight: '500' }}>"The subscribers were right — this product transformed car ownership."</div>
                            </div>
                        </div>
                        <Link to="#" style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '100px', color: '#fff', fontSize: '12px', fontWeight: '600', textDecoration: 'none', transition: 'all 0.2s' }}>
                            View Prototype →
                        </Link>
                    </div>
                </motion.div>
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
        </motion.main>
    )
}
