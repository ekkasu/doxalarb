'use client';

import { CheckCircle } from 'lucide-react';

const features = [
    'Worldwide distribution network serving clients across the globe',
    'Certified quality products meeting international standards',
    'Custom procurement solutions for large-scale projects',
];

export default function Features() {
    return (
        <section id="services" className="split-section">
            <div className="feature-content">
                <div className="section-label">Why DoxaLarb</div>
                <h2 className="section-title">Reliable Logistics Across Borders</h2>
                <p className="section-desc">
                    We understand the complexities of supply chains in Africa. Our
                    network ensures your goods arrive on time, every time.
                </p>
                <div className="feature-list">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-item">
                            <CheckCircle
                                size={20}
                                style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }}
                            />
                            <span>{feature}</span>
                        </div>
                    ))}
                </div>
                <button
                    className="btn-primary"
                    style={{ width: 'fit-content', marginTop: '16px' }}
                >
                    Learn About Our Logistics
                </button>
            </div>
            <div className="feature-image-wrapper">
                <img
                    src="https://images.unsplash.com/photo-1679207751072-aa076562a4f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjYyMDB8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBsb2dpc3RpY3MlMjBhZnJpY2F8ZW58MHx8fHwxNzY2NTg1OTA2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    className="feature-image"
                    alt="Logistics and Warehouse"
                />
            </div>
        </section>
    );
}
