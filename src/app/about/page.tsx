'use client';

import { ShieldCheck, Award, Truck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const stats = [
    { value: '10+', label: 'Industries Served' },
    { value: '100%', label: 'Quality Assurance' },
    { value: '24/7', label: 'Support Availability' },
    { value: 'Global', label: 'Reach Worldwide' },
];

const values = [
    {
        Icon: ShieldCheck,
        title: 'Integrity First',
        description: 'Transparency in pricing and sourcing is non-negotiable. We build long-term relationships based on honesty and ethical business practices.',
    },
    {
        Icon: Award,
        title: 'Uncompromised Quality',
        description: "Whether it's medical supplies or industrial welding tools, we only source products that meet international safety and performance standards.",
    },
    {
        Icon: Truck,
        title: 'Reliable Delivery',
        description: 'We understand the cost of downtime. Our logistics network ensures your materials arrive on time, anywhere in the world.',
    },
];

export default function AboutPage() {
    return (
        <main>
            <Navbar />

            {/* Page Header */}
            <div className="about-header">
                <div className="page-badge">Our Story</div>
                <h1 className="about-title">Powering Industries Worldwide</h1>
                <p className="about-desc">
                    DoxaLarb Ventures is a premier supplier of industrial, medical, and
                    agricultural resources. We bridge the gap between quality
                    manufacturers and the businesses that build our future.
                </p>
            </div>

            {/* Mission Section */}
            <section className="mission-section">
                <div className="mission-content">
                    <div className="mission-label">Our Mission</div>
                    <h2 className="mission-heading">
                        Reliable Supplies for a Growing World
                    </h2>
                    <p className="mission-text">
                        Established with a vision to streamline the supply chain globally,
                        DoxaLarb Ventures has grown into a trusted partner for
                        hospitals, construction firms, mining operations, and agricultural enterprises. We
                        believe that access to high-quality materials—whether for a
                        laboratory ward or an oil rig—should be seamless and reliable.
                    </p>
                    <p className="mission-text">
                        Our commitment extends beyond just delivery. We ensure every
                        product, from electrical materials to working gear, meets rigorous
                        safety and durability standards.
                    </p>

                    <div className="about-stat-grid">
                        {stats.map((stat, index) => (
                            <div key={index} className="about-stat-item">
                                <div className="about-stat-value">{stat.value}</div>
                                <div className="about-stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <img
                        src="https://images.unsplash.com/photo-1742996111692-2d924f12a058?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjYyMDB8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBhZnJpY2FuJTIwYnVzaW5lc3MlMjB0ZWFtfGVufDB8fHx8MTc2Njc1OTU0M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                        className="mission-image"
                        alt="Business meeting"
                    />
                </div>
            </section>

            {/* Values Section */}
            <section className="values-section">
                <div className="values-header">
                    <div className="mission-label" style={{ textAlign: 'center', marginBottom: '16px' }}>
                        Our Values
                    </div>
                    <h2 className="mission-heading">What Drives Us</h2>
                    <p className="mission-text" style={{ marginTop: '16px' }}>
                        Our core principles guide every transaction and partnership,
                        ensuring we deliver value and trust in equal measure.
                    </p>
                </div>

                <div className="values-grid">
                    {values.map((value, index) => (
                        <div key={index} className="value-card">
                            <div className="value-icon">
                                <value.Icon size={24} />
                            </div>
                            <h3 className="value-title">{value.title}</h3>
                            <p className="value-desc">{value.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="team-cta">
                <h2 className="team-cta-title">Ready to Partner With Us?</h2>
                <p className="team-cta-text">
                    Let DoxaLarb Ventures handle your procurement needs so you can focus
                    on what you do best. Reach out to our team for a personalized
                    consultation.
                </p>
                <button
                    className="btn-primary"
                    style={{ height: '48px', padding: '0 32px', fontSize: '16px' }}
                >
                    Contact Us Today
                </button>
            </section>

            <Footer />
        </main>
    );
}
