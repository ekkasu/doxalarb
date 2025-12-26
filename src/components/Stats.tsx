export default function Stats() {
    const stats = [
        { value: '500+', label: 'Clients across Africa' },
        { value: '100%', label: 'Quality Assurance' },
        { value: '24/7', label: 'Support Available' },
        { value: '50+', label: 'Partner Brands' },
    ];

    return (
        <div className="stats-bar">
            {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                </div>
            ))}
        </div>
    );
}
