import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Mail, Linkedin } from 'lucide-react';

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
        <section id="home" className="relative flex items-center bg-slate-100 pt-24 pb-6 md:min-h-screen md:pt-20">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10 w-full">
                {/* 2-column grid on mobile and up - image always visible on right */}
                <div className="grid grid-cols-2 gap-4 md:gap-16 items-center">
                    
                    {/* Left: Content */}
                    <div className="relative z-10 space-y-6 md:space-y-10 -ml-3 md:ml-0">
                        <motion.h1
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            className="text-4xl sm:text-6xl md:text-8xl font-black text-slate-900 leading-[0.95] tracking-tighter"
                        >
                            I am a <br />
                            <span className="inline-flex flex-wrap items-center text-blue-600 md:min-w-[14rem]">
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={roleIndex}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        {roles[roleIndex]}
                                    </motion.span>
                                </AnimatePresence>
                            </span>
                            <br />
                            Developer
                        </motion.h1>

                        <motion.p
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="text-lg md:text-xl text-slate-500 max-w-xl leading-relaxed font-medium"
                        >
                            I enjoy building and solving problems with code.
                        </motion.p>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap items-center gap-3 md:gap-6"
                        >
                            <div className="flex gap-2 md:gap-4">
                                {[
                                    { icon: Github, href: 'https://github.com', label: 'GitHub' },
                                    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                                    { icon: Mail, href: 'mailto:mobrocl@lsu.edu', label: 'Email' }
                                ].map((social, i) => (
                                    <a
                                        key={i}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="p-2 md:p-4 bg-white border-2 border-slate-200 rounded-xl md:rounded-2xl text-slate-600 hover:text-blue-600 hover:border-blue-500 transition-all shadow-sm"
                                    >
                                        <social.icon className="w-5 h-5 md:w-[22px] md:h-[22px]" />
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: The Image Container - Always Visible */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="relative group"
                    >
                        {/* Glow effect */}
                        <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-[2rem] md:rounded-[4rem] blur-xl md:blur-2xl opacity-15 group-hover:opacity-25 transition-opacity" />
                        
                        {/* Image wrapper */}
                        <div className="relative rounded-[1.5rem] md:rounded-[3rem] overflow-hidden aspect-[4/5] bg-slate-200 border-4 md:border-8 border-white shadow-xl md:shadow-2xl">
                            <img
                                src="/profileV3.png"
                                alt="Profile"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
