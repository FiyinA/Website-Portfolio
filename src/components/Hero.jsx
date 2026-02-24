import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Mail, Linkedin, ArrowRight } from 'lucide-react';

const roles = ['FullStack', 'Frontend', 'Backend'];

const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex items-center bg-slate-100 pt-20">
            <div className="max-w-[1400px] mx-auto px-10 grid lg:grid-cols-2 gap-16 items-center w-full">
                {/* Left: Content */}
                <div className="relative z-10 space-y-10">
                    <motion.h1
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="text-7xl md:text-8xl font-black text-slate-900 leading-[0.95] tracking-tighter"
                    >
                        I am a <br />
                        <span className="inline-flex items-center text-blue-600 min-w-[14rem]">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={roleIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    {roles[roleIndex]}
                                </motion.span>
                            </AnimatePresence>
                        </span>
                        <br />
                        Developer.
                    </motion.h1>

                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-500 max-w-xl leading-relaxed font-medium"
                    >
                        I help startups and businesses build high-quality, user-friendly, and performant web applications that deliver exceptional user experiences.
                    </motion.p>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap items-center gap-6"
                    >
                        <div className="flex gap-4">
                            {[
                                { icon: Github, href: 'https://github.com', label: 'GitHub' },
                                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                                { icon: Mail, href: 'mailto:mobrocl@lsu.edu', label: 'Email' }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="p-4 bg-white border-2 border-slate-200 rounded-2xl text-slate-600 hover:text-blue-600 hover:border-blue-500 transition-all shadow-sm"
                                >
                                    <social.icon size={22} />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Right: Highly Visible Image */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="relative group lg:block hidden"
                >
                    <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-[4rem] blur-2xl opacity-15 group-hover:opacity-25 transition-opacity" />
                    <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5] bg-slate-200 border-8 border-white shadow-2xl">
                        <img
                            src="/profileV2.png"
                            alt="Profile"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
