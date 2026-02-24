import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
    const socials = [
        { icon: Github, href: 'https://github.com', label: 'GitHub' },
        { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
        { icon: Mail, href: 'mailto:mobrocl@lsu.edu', label: 'Email' },
    ];

    return (
        <section id="contact" className="bg-blue-50 py-32 border-t-4 border-slate-200">
            <div className="max-w-[1400px] mx-auto px-10">

                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    {/* Left side: Big inspirational text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <h2 className="text-6xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tighter">
                            Let's Create <br />
                            <span className="text-blue-600">Something</span> <br />
                            Amazing <br />
                            Together
                        </h2>

                        <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-md">
                            Drop me a message and I'll get back to you as soon as possible.
                        </p>

                        {/* Social Icons */}
                        <div className="flex flex-wrap gap-5 pt-4">
                            {socials.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="p-4 bg-white border border-slate-200 rounded-2xl text-slate-500 hover:text-blue-600 hover:border-blue-400 hover:shadow-lg transition-all duration-300"
                                >
                                    <social.icon size={26} />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right side: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white border border-slate-200 rounded-[3rem] p-12 shadow-sm"
                    >
                        <form className="space-y-8">
                            <div className="space-y-3">
                                <label className="text-sm font-black text-slate-500 uppercase tracking-widest">Name</label>
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all text-lg font-medium text-slate-900 placeholder:text-slate-400"
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-sm font-black text-slate-500 uppercase tracking-widest">Email</label>
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all text-lg font-medium text-slate-900 placeholder:text-slate-400"
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-sm font-black text-slate-500 uppercase tracking-widest">Message</label>
                                <textarea
                                    rows="5"
                                    placeholder="Your message..."
                                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all resize-none text-lg font-medium text-slate-900 placeholder:text-slate-400"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-6 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-2xl font-black text-xl transition-all shadow-xl shadow-blue-500/20 hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-95"
                            >
                                Submit
                            </button>
                        </form>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Contact;
