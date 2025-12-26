import Link from 'next/link';

export default function Footer() {
    return (
        <footer id="contact" className="footer">
            <div className="footer-grid">
                <div className="footer-brand">
                    <h3>DoxaLarb Ventures</h3>
                    <p className="footer-desc">
                        Providing essential supplies and industrial materials to
                        businesses and institutions across Ghana and Africa.
                    </p>
                    <p style={{
                        color: 'var(--primary)',
                        fontWeight: 600,
                        fontSize: '13px',
                        marginTop: '12px',
                        letterSpacing: '0.3px'
                    }}>
                        SERVING OUR CLIENT IS OUR TOP MUST PRIORITY.
                    </p>
                </div>
                <div className="footer-col">
                    <h4>Products</h4>
                    <div className="footer-links">
                        <Link href="/products" className="footer-link">Laboratory</Link>
                        <Link href="/products" className="footer-link">Industrial</Link>
                        <Link href="/products" className="footer-link">Agricultural</Link>
                        <Link href="/products" className="footer-link">Safety Gear</Link>
                    </div>
                </div>
                <div className="footer-col">
                    <h4>Company</h4>
                    <div className="footer-links">
                        <Link href="/about" className="footer-link">About Us</Link>
                        <Link href="/contact" className="footer-link">Careers</Link>
                        <Link href="/contact" className="footer-link">News</Link>
                        <Link href="/contact" className="footer-link">Contact</Link>
                    </div>
                </div>
                <div className="footer-col">
                    <h4>Contact</h4>
                    <div className="footer-links">
                        <a href="tel:+233246971529" className="footer-link">+233 24 697 1529</a>
                        <a href="tel:+233279843457" className="footer-link">+233 27 984 3457</a>
                        <a href="mailto:Doxalarbventures@gmail.com" className="footer-link">Doxalarbventures@gmail.com</a>
                        <div className="footer-link">Accra, Ghana</div>
                        <div className="footer-link">P.O.Box AT 662, Achimota-Accra</div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div>© 2024 DoxaLarb Ventures. All rights reserved.</div>
                <div className="footer-bottom-links">
                    <div className="footer-bottom-link">Privacy Policy</div>
                    <div className="footer-bottom-link">Terms of Service</div>
                </div>
            </div>
        </footer>
    );
}

