import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        { name: 'About', href: '/#about', isExternal: false, section: 'about' },
        { name: 'Projects', href: '/#projects', isExternal: false, section: 'projects' },
        { name: 'Contact', href: '/#contact', isExternal: false, section: 'contact' },
        { name: 'Blog', href: '/blog', isExternal: true, section: null },
    ];

    const handleNavClick = (e, item) => {
        if (!item.isExternal && item.section) {
            e.preventDefault();
            // If already on home page, just scroll
            const el = document.getElementById(item.section);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            } else {
                // Navigate to home then scroll after load
                navigate('/');
                setTimeout(() => {
                    const target = document.getElementById(item.section);
                    if (target) target.scrollIntoView({ behavior: 'smooth' });
                }, 300);
            }
        }
    };

    const scrollToTop = (e) => {
        e.preventDefault();
        const home = document.getElementById('home');
        if (home) {
            home.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate('/');
        }
    };

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-0 left-0 z-50 w-full border-b-2 border-slate-200 bg-white/90 backdrop-blur-xl"
        >
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 py-4 flex items-center justify-between">
                {/* Left: Logo with profile image - clicks to scroll home */}
                <a
                    href="/#home"
                    onClick={scrollToTop}
                    className="flex items-center gap-2 sm:gap-3 md:gap-4 hover:opacity-80 transition-opacity cursor-pointer"
                >
                    <div className="w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 rounded-full overflow-hidden border-2 border-blue-500 shadow-md flex-shrink-0">
                        <img
                            src="/profile.png"
                            alt="FiyinAregbe"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <span className="font-black text-sm sm:text-lg md:text-xl tracking-tighter text-slate-900 uppercase">FiyinAregbe</span>
                </a>

                {/* Right: Nav Links */}
                <div className="hidden md:flex items-center gap-10">
                    {navItems.map((item) => (
                        item.isExternal ? (
                            <Link
                                key={item.name}
                                to={item.href}
                                className="text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors uppercase tracking-widest"
                            >
                                {item.name}
                            </Link>
                        ) : (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => handleNavClick(e, item)}
                                className="text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors uppercase tracking-widest"
                            >
                                {item.name}
                            </a>
                        )
                    ))}
                </div>

                {/* Mobile: Hamburger Menu */}
                <div className="md:hidden flex items-center">
                    <button
                        aria-label="Toggle menu"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-2 rounded-md bg-white/50 border border-slate-200 shadow-sm"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-slate-700">
                            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white/95 border-t border-slate-200">
                    <div className="max-w-[1400px] mx-auto px-4 py-4 flex flex-col gap-3">
                        {navItems.map((item) => (
                            item.isExternal ? (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-base font-semibold text-slate-700 hover:text-slate-900 transition-colors uppercase tracking-wider"
                                >
                                    {item.name}
                                </Link>
                            ) : (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => { handleNavClick(e, item); setMobileMenuOpen(false); }}
                                    className="text-base font-semibold text-slate-700 hover:text-slate-900 transition-colors uppercase tracking-wider"
                                >
                                    {item.name}
                                </a>
                            )
                        ))}
                    </div>
                </div>
            )}
        </motion.nav>
    );
};

export default Navbar;
