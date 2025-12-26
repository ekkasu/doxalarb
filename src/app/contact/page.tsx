'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { MapPin, Mail, Phone, Clock, Send } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const contactInfo = [
    {
        Icon: MapPin,
        title: 'Visit Us',
        details: ['Accra, Ghana', 'P.O.Box AT 662, Achimota-Accra'],
    },
    {
        Icon: Mail,
        title: 'Email Us',
        details: ['Doxalarbventures@gmail.com'],
    },
    {
        Icon: Phone,
        title: 'Call Us',
        details: ['+233 24 697 1529', '+233 27 984 3457'],
    },
    {
        Icon: Clock,
        title: 'Business Hours',
        details: ['Mon - Fri: 8:00 AM - 6:00 PM', 'Sat: 9:00 AM - 2:00 PM'],
    },
];

export default function ContactPage() {
    const searchParams = useSearchParams();
    const productParam = searchParams.get('product');
    const industryParam = searchParams.get('industry');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        industry: '',
        message: '',
    });

    // Pre-fill form from URL parameters
    useEffect(() => {
        if (industryParam || productParam) {
            setFormData(prev => ({
                ...prev,
                industry: industryParam || '',
                message: productParam ? `I'm interested in your ${productParam}. Please send me more information and pricing details.` : '',
            }));
        }
    }, [industryParam, productParam]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        alert('Thank you for your message! We will get back to you shortly.');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <main>
            <Navbar />

            {/* Page Header */}
            <div className="contact-header">
                <div className="page-badge">Get In Touch</div>
                <h1 className="contact-title">Contact Our Sales Team</h1>
                <p className="contact-desc">
                    Have questions about our products or services? Need a custom quote
                    for your project? Our team is ready to help you find the right
                    solutions for your business.
                </p>
            </div>

            {/* Contact Section */}
            <section className="contact-section">
                {/* Contact Form */}
                <div className="contact-form-wrapper">
                    <h2 className="form-title">Send Us a Message</h2>
                    <p className="form-subtitle">
                        Fill out the form below and our sales team will respond within 24 hours.
                    </p>

                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Full Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="john@company.com"
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="company">Company Name</label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder="Your Company Ltd"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+233 20 000 0000"
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="industry">Industry *</label>
                            <select
                                id="industry"
                                name="industry"
                                value={formData.industry}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select your industry</option>
                                <option value="oil-gas">Oil & Gas</option>
                                <option value="mining">Mining</option>
                                <option value="healthcare">Healthcare / Laboratories</option>
                                <option value="construction">Construction</option>
                                <option value="agriculture">Agriculture</option>
                                <option value="manufacturing">Manufacturing</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message *</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                placeholder="Tell us about your project requirements, the products you need, or any questions you have..."
                            />
                        </div>

                        <button type="submit" className="btn-primary submit-btn">
                            <Send size={18} />
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Contact Info */}
                <div className="contact-info-wrapper">
                    <h2 className="info-title">Contact Information</h2>
                    <p className="info-subtitle">
                        Reach out to us through any of these channels.
                    </p>

                    <div className="contact-cards">
                        {contactInfo.map((info, index) => (
                            <div key={index} className="contact-card">
                                <div className="contact-card-icon">
                                    <info.Icon size={24} />
                                </div>
                                <div className="contact-card-content">
                                    <h3>{info.title}</h3>
                                    {info.details.map((detail, i) => (
                                        <p key={i}>{detail}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
