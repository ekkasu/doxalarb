'use client';

import { Box } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Home', href: '/', target: null },
  { label: 'Products', href: '/products', target: null },
  { label: 'Services', href: '/', target: 'services' },
  { label: 'About Us', href: '/about', target: null },
];

export default function Navbar() {
  const pathname = usePathname();

  const handleNavClick = (href: string, target: string | null) => {
    if (target && pathname === href) {
      // Same page scroll
      const element = document.getElementById(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <nav className="navbar">
      <Link href="/" className="nav-logo" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Box size={24} style={{ color: 'var(--foreground)' }} />
        DoxaLarb Ventures
      </Link>
      <div className="nav-links">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.target ? `${item.href}#${item.target}` : item.href}
            className={`nav-item ${pathname === item.href ? 'active' : ''}`}
            style={{ textDecoration: 'none' }}
            onClick={() => handleNavClick(item.href, item.target)}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <Link href="/contact" style={{ textDecoration: 'none' }}>
        <button className="btn-primary">
          Contact Sales
        </button>
      </Link>
    </nav>
  );
}
