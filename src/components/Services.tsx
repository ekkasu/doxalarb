'use client';

import {
    Microscope,
    Droplet,
    Wrench,
    Zap,
    Hammer,
    Wheat,
    HardHat,
    Package,
    LucideIcon
} from 'lucide-react';

const services: { Icon: LucideIcon; title: string; text: string }[] = [
    {
        Icon: Microscope,
        title: 'Lab & Ward Supplies',
        text: 'High-grade medical consumables, non-medicine ward essentials, and laboratory equipment.',
    },
    {
        Icon: Droplet,
        title: 'Oil & Gas Materials',
        text: 'Safety equipment, pipeline components, and specialized tools for the energy sector.',
    },
    {
        Icon: Wrench,
        title: 'Industrial Plumbing',
        text: 'Heavy-duty pipes, fittings, valves, and drainage systems for industrial applications.',
    },
    {
        Icon: Zap,
        title: 'Electrical Materials',
        text: 'Cables, switchgear, transformers, and electrical safety components.',
    },
    {
        Icon: Hammer,
        title: 'Welding & Carpentry',
        text: 'Welding machines, protective gear, woodworking tools, and raw materials.',
    },
    {
        Icon: Wheat,
        title: 'Agricultural Products',
        text: 'Farming tools, irrigation systems, seeds, and agro-processing equipment.',
    },
    {
        Icon: HardHat,
        title: 'Working Gears (PPES)',
        text: 'Helmets, boots, reflective vests, and gloves for maximum workplace safety.',
    },
    {
        Icon: Package,
        title: 'General Goods',
        text: 'A wide variety of essential commodities and specialized orders upon request.',
    },
];

export default function Services() {
    return (
        <section id="products" className="section">
            <div className="section-header">
                <div className="section-label">Our Products</div>
                <h2 className="section-title">Comprehensive Supply Solutions</h2>
                <p className="section-desc">
                    We source and deliver top-tier materials for diverse sectors
                    including healthcare, construction, energy, and agriculture.
                </p>
            </div>

            <div className="grid-container">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <div className="icon-box">
                            <service.Icon size={24} style={{ color: 'var(--foreground)' }} />
                        </div>
                        <div className="service-title">{service.title}</div>
                        <div className="service-text">{service.text}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
