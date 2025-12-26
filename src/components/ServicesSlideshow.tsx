'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const services = [
    {
        title: 'Oil & Gas Industry',
        description: 'High-pressure valves, pipeline components, safety gear, and specialized equipment for refineries and drilling operations.',
        image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    },
    {
        title: 'Mining Industry',
        description: 'Heavy machinery parts, excavation equipment, safety gear, and industrial tools for mining operations.',
        image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    },
    {
        title: 'Laboratories',
        description: 'Precision instruments, microscopes, test tubes, sterilization equipment, and scientific research supplies.',
        image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    },
    {
        title: 'Hospitals & Healthcare',
        description: 'Medical equipment, ward essentials, diagnostic tools, and healthcare facility supplies.',
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    },
    {
        title: 'Construction Firms',
        description: 'Building materials, safety equipment, power tools, and heavy construction machinery parts.',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    },
    {
        title: 'Agriculture',
        description: 'Farming equipment, irrigation systems, fertilizers, seeds, and agricultural machinery.',
        image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    },
    {
        title: 'Industrial Plumbing',
        description: 'Heavy-duty pipes, valves, fittings, drainage systems, and industrial water management solutions.',
        image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    },
];

export default function ServicesSlideshow() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto-advance slides
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % services.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
        setIsAutoPlaying(false);
        // Resume auto-play after 10 seconds of inactivity
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const nextSlide = () => {
        goToSlide((currentSlide + 1) % services.length);
    };

    const prevSlide = () => {
        goToSlide((currentSlide - 1 + services.length) % services.length);
    };

    return (
        <section className="slideshow-section">
            <div className="slideshow-container">
                {/* Slides */}
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`slide ${index === currentSlide ? 'active' : ''}`}
                        style={{
                            backgroundImage: `url(${service.image})`,
                        }}
                    >
                        <div className="slide-overlay" />
                        <div className="slide-content">
                            <div className="slide-label">Our Services</div>
                            <h2 className="slide-title">{service.title}</h2>
                            <p className="slide-description">{service.description}</p>
                        </div>
                    </div>
                ))}

                {/* Navigation Arrows */}
                <button className="slide-arrow slide-arrow-left" onClick={prevSlide}>
                    <ChevronLeft size={32} />
                </button>
                <button className="slide-arrow slide-arrow-right" onClick={nextSlide}>
                    <ChevronRight size={32} />
                </button>

                {/* Dots Navigation */}
                <div className="slide-dots">
                    {services.map((_, index) => (
                        <button
                            key={index}
                            className={`slide-dot ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
