'use client';

import { useState, useEffect } from 'react';
import { Globe, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const heroImages = [
    'https://images.unsplash.com/photo-1513828583688-c52646db42da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920', // Oil & Gas
    'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920', // Mining
    'https://images.unsplash.com/photo-1582719471384-894fbb16e074?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920', // Labs
    'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920', // Hospital
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920', // Construction
    'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920', // Agriculture
    'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920', // Plumbing
];

export default function Hero() {
    const [currentImage, setCurrentImage] = useState(0);

    // Auto-advance images
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const nextImage = () => setCurrentImage((prev) => (prev + 1) % heroImages.length);
    const prevImage = () => setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length);

    return (
        <section id="hero" className="hero">
            {/* Slideshow Background Images */}
            {heroImages.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    className={`hero-bg ${index === currentImage ? 'active' : ''}`}
                    alt="Industry Background"
                />
            ))}

            <div className="hero-content">
                <div className="hero-badge">
                    <Globe size={14} style={{ color: 'var(--foreground)', marginRight: '6px' }} />
                    Serving Clients Worldwide
                </div>
                <h1 className="hero-title">
                    Premium Supplies for Oil &amp; Gas, Mining, Labs, Hospitals &amp; More
                </h1>
                <p className="hero-desc">
                    Your trusted partner for comprehensive industrial supplies. We serve
                    Oil &amp; Gas, Mining, Laboratories, Hospitals, Construction Firms,
                    Agriculture, and Industrial Plumbing sectors worldwide.
                </p>
                <p style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'var(--primary)',
                    marginBottom: '24px',
                    letterSpacing: '0.5px'
                }}>
                    SERVING OUR CLIENT IS OUR TOP MUST PRIORITY.
                </p>
                <div className="hero-actions">
                    <Link href="/products">
                        <button
                            className="btn-primary"
                            style={{ height: '48px', padding: '0 32px', fontSize: '16px' }}
                        >
                            View Catalog
                        </button>
                    </Link>
                    <Link href="/#services">
                        <button
                            className="btn-outline"
                            style={{ height: '48px', padding: '0 32px', fontSize: '16px' }}
                        >
                            Our Services
                        </button>
                    </Link>
                </div>
            </div>

            {/* Navigation Arrows */}
            <button className="hero-arrow hero-arrow-left" onClick={prevImage}>
                <ChevronLeft size={32} />
            </button>
            <button className="hero-arrow hero-arrow-right" onClick={nextImage}>
                <ChevronRight size={32} />
            </button>

            {/* Dots Navigation */}
            <div className="hero-dots">
                {heroImages.map((_, index) => (
                    <button
                        key={index}
                        className={`hero-dot ${index === currentImage ? 'active' : ''}`}
                        onClick={() => setCurrentImage(index)}
                    />
                ))}
            </div>
        </section>
    );
}
