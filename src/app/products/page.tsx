'use client';

import { useState } from 'react';
import { CheckCircle, Clock, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const categories = [
    { name: 'All Products', count: 24 },
    { name: 'Lab Supplies', count: 6 },
    { name: 'Oil & Gas', count: 4 },
    { name: 'Industrial Plumbing', count: 3 },
    { name: 'Electrical', count: 3 },
    { name: 'Welding & Carpentry', count: 3 },
    { name: 'Safety Gear', count: 3 },
    { name: 'Agricultural', count: 2 },
];

const products = [
    // Lab Supplies
    {
        category: 'Laboratory',
        filterCategory: 'Lab Supplies',
        title: 'Borosilicate Glass Beakers',
        description: 'High-durability graduated beakers for chemical mixing and heating applications. Available in various sizes.',
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80',
        stock: 'in-stock',
    },
    {
        category: 'Laboratory',
        filterCategory: 'Lab Supplies',
        title: 'Compound Microscope',
        description: 'Professional-grade optical microscope for biological and medical research with 40x-1000x magnification.',
        image: 'https://images.unsplash.com/photo-1516728778615-2d590ea1855e?auto=format&fit=crop&w=800&q=80',
        stock: 'in-stock',
    },
    {
        category: 'Laboratory',
        filterCategory: 'Lab Supplies',
        title: 'Digital Centrifuge',
        description: 'High-speed centrifuge for blood separation and sample processing. Variable speed control.',
        image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80',
        stock: 'in-stock',
    },
    {
        category: 'Laboratory',
        filterCategory: 'Lab Supplies',
        title: 'Autoclave Sterilizer',
        description: 'Electric steam sterilizer for medical instruments and laboratory equipment.',
        image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=800&q=80',
        stock: 'low-stock',
    },
    {
        category: 'Laboratory',
        filterCategory: 'Lab Supplies',
        title: 'Test Tube Rack Set',
        description: 'Plastic and wooden test tube racks with various tube sizes and holder configurations.',
        image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=800&q=80',
        stock: 'in-stock',
    },
    {
        category: 'Laboratory',
        filterCategory: 'Lab Supplies',
        title: 'Laboratory Glassware Kit',
        description: 'Complete set of flasks, beakers, pipettes, and measuring cylinders for research labs.',
        image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
        stock: 'in-stock',
    },
    // Oil & Gas
    {
        category: 'Oil & Gas',
        filterCategory: 'Oil & Gas',
        title: 'High-Pressure Ball Valves',
        description: 'Industrial grade stainless steel ball valves designed for oil, gas, and water flow control systems.',
        image: 'https://images.unsplash.com/photo-1615914143778-1a1a5a0833a6?auto=format&fit=crop&w=800&q=80',
        stock: 'in-stock',
    },
    {
        category: 'Oil & Gas',
        filterCategory: 'Oil & Gas',
        title: 'Pipeline Flanges',
        description: 'Carbon steel and stainless steel flanges in various sizes for pipeline connections.',
        image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80',
        stock: 'in-stock',
    },
    {
        category: 'Oil & Gas',
        filterCategory: 'Oil & Gas',
        title: 'Pressure Gauges',
        description: 'Industrial pressure measurement instruments for oil rigs and refineries.',
        image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80',
        stock: 'in-stock',
    },
    {
        category: 'Oil & Gas',
        filterCategory: 'Oil & Gas',
        title: 'Fire-Resistant Cables',
        description: 'Flame-retardant electrical cables for hazardous environments and offshore platforms.',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
        stock: 'low-stock',
    },
    // Industrial Plumbing
    {
        category: 'Plumbing',
        filterCategory: 'Industrial Plumbing',
        title: 'PVC Pipes & Fittings',
        description: 'Heavy-duty PVC pipes in various diameters with connectors and fittings for drainage systems.',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
        stock: 'in-stock',
    },
    {
        category: 'Plumbing',
        filterCategory: 'Industrial Plumbing',
        title: 'Galvanized Steel Pipes',
        description: 'Corrosion-resistant steel pipes for water supply and industrial applications.',
        image: 'https://images.unsplash.com/photo-1558618047-f4b511ee370e?auto=format&fit=crop&w=800&q=80',
        stock: 'in-stock',
    },
    {
        category: 'Plumbing',
        filterCategory: 'Industrial Plumbing',
        title: 'Gate Valves',
        description: 'Industrial gate valves for controlling water and fluid flow in pipelines.',
        image: 'https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?auto=format&fit=crop&w=800&q=80',
        stock: 'in-stock',
    },
    // Electrical
    {
        category: 'Electrical',
        filterCategory: 'Electrical',
        title: 'Copper Wiring Rolls',
        description: 'High-conductivity insulated copper wire for residential and commercial electrical installations.',
        image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80',
        stock: 'in-stock',
    },
    {
        category: 'Electrical',
        filterCategory: 'Electrical',
        title: 'Circuit Breakers',
        description: 'Industrial and residential circuit breakers for electrical panel installations.',
        image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=800&q=80',
        stock: 'in-stock',
    },
    {
        category: 'Electrical',
        filterCategory: 'Electrical',
        title: 'Distribution Boards',
        description: 'Electrical distribution panels for commercial and industrial power systems.',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
        stock: 'low-stock',
    },
    // Welding & Carpentry
    {
        category: 'Welding',
        filterCategory: 'Welding & Carpentry',
        title: 'Portable Welding Machine',
        description: 'Compact inverter arc welding machine suitable for mild steel and stainless steel fabrication.',
        image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a78e?auto=format&fit=crop&w=800&q=80',
        stock: 'low-stock',
    },
    {
        category: 'Welding',
        filterCategory: 'Welding & Carpentry',
        title: 'Welding Electrodes',
        description: 'High-quality welding rods in various sizes for MIG, TIG, and arc welding applications.',
        image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80',
        stock: 'in-stock',
    },
    {
        category: 'Carpentry',
        filterCategory: 'Welding & Carpentry',
        title: 'Power Saw Set',
        description: 'Industrial circular and jig saws for wood cutting and carpentry work.',
        image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=800&q=80',
        stock: 'in-stock',
    },
    // Safety Gear
    {
        category: 'Safety Gear',
        filterCategory: 'Safety Gear',
        title: 'Industrial Safety Helmet',
        description: 'Impact-resistant hard hats with adjustable suspension. Meets international safety standards.',
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
        stock: 'in-stock',
    },
    {
        category: 'Safety Gear',
        filterCategory: 'Safety Gear',
        title: 'Steel-Toe Safety Boots',
        description: 'Heavy-duty work boots with steel toe caps and slip-resistant soles.',
        image: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=800&q=80',
        stock: 'in-stock',
    },
    {
        category: 'Safety Gear',
        filterCategory: 'Safety Gear',
        title: 'High-Visibility Vest Set',
        description: 'Reflective safety vests for construction sites and road work. Pack of 10.',
        image: 'https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?auto=format&fit=crop&w=800&q=80',
        stock: 'in-stock',
    },
    // Agricultural
    {
        category: 'Agricultural',
        filterCategory: 'Agricultural',
        title: 'Heavy Duty Sprayers',
        description: 'Manual knapsack sprayers for fertilizers and pest control. Durable tank with ergonomic straps.',
        image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80',
        stock: 'in-stock',
    },
    {
        category: 'Agricultural',
        filterCategory: 'Agricultural',
        title: 'Irrigation Pipes',
        description: 'Drip irrigation and sprinkler pipes for farms and agricultural projects.',
        image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80',
        stock: 'in-stock',
    },
];

export default function ProductsPage() {
    const [selectedCategory, setSelectedCategory] = useState('All Products');

    const filteredProducts = selectedCategory === 'All Products'
        ? products
        : products.filter(p => p.filterCategory === selectedCategory);

    return (
        <main>
            <Navbar />

            <div className="catalog-container">
                {/* Sidebar Filters */}
                <aside className="catalog-sidebar">
                    <div className="filter-section">
                        <h3>Categories</h3>
                        <div className="category-list">
                            {categories.map((cat) => (
                                <div
                                    key={cat.name}
                                    className={`category-item ${selectedCategory === cat.name ? 'active' : ''}`}
                                    onClick={() => setSelectedCategory(cat.name)}
                                >
                                    {cat.name}
                                    <span className="category-count">{cat.count}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="filter-section">
                        <h3>Availability</h3>
                        <div className="category-list">
                            <div className="category-item">In Stock</div>
                            <div className="category-item">Pre-order</div>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <div className="catalog-main">
                    <div className="catalog-header">
                        <div className="header-titles">
                            <h1>Product Catalog</h1>
                            <p>Browse our extensive range of industrial and laboratory supplies.</p>
                        </div>
                        <div className="sort-dropdown">
                            Sort by: Featured
                            <ChevronDown size={16} />
                        </div>
                    </div>

                    <div className="catalog-grid">
                        {filteredProducts.map((product, index) => (
                            <div key={index} className="catalog-product-card">
                                <div className="catalog-product-image">
                                    <img src={product.image} alt={product.title} />
                                </div>
                                <div className="catalog-product-info">
                                    <div className="catalog-product-category">{product.category}</div>
                                    <div className="catalog-product-title">{product.title}</div>
                                    <div className="catalog-product-desc">{product.description}</div>
                                    <div className="catalog-product-footer">
                                        <div className={`stock-badge ${product.stock}`}>
                                            {product.stock === 'in-stock' ? (
                                                <>
                                                    <CheckCircle size={14} />
                                                    In Stock
                                                </>
                                            ) : (
                                                <>
                                                    <Clock size={14} />
                                                    Low Stock
                                                </>
                                            )}
                                        </div>
                                        <Link href={`/contact?product=${encodeURIComponent(product.title)}`} className="action-btn">
                                            Details →
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
