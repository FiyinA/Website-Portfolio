import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'Expert Shadow',
            desc: 'Have you always wanted to shadow a profession? Connect with real professionals and shadow their day-to-day work to gain hands-on career insight.',
            img: '/expertShadow.png'
        },
        {
            title: 'RealDesign',
            desc: 'Upcoming design website that also includes a mini store to purchase merchandise.',
            img: '/upcoming.png'
        }
    ];

    return (
        <section id="projects" className="bg-slate-100 py-32 border-t-4 border-slate-200">
            <div className="max-w-[1400px] mx-auto px-10">
                <div className="text-center mb-24">
                    <h2 className="text-7xl font-black text-slate-900 tracking-tighter mb-4 uppercase">Featured Projects</h2>
                    <p className="text-xl text-slate-400 font-bold uppercase tracking-[0.2em]">Crafting digital excellence</p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white border-2 border-slate-200 rounded-[3rem] overflow-hidden hover:border-blue-400 transition-all group shadow-sm hover:shadow-2xl hover:-translate-y-2 duration-500"
                        >
                            {/* Image Section */}
                            <div className="h-64 overflow-hidden bg-white flex items-center justify-center">
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="p-10 space-y-6">
                                <h3 className="text-2xl font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors uppercase">{project.title}</h3>
                                <p className="text-slate-500 text-base leading-relaxed font-medium">
                                    {project.desc}
                                </p>

                                <div className="pt-8 flex items-center gap-8 border-t-2 border-slate-100">
                                    <a href="#" className="flex items-center gap-3 text-sm font-black text-slate-400 hover:text-slate-900 uppercase tracking-widest transition-colors">
                                        <Github size={20} />
                                        Code
                                    </a>
                                    <a href="#" className="flex items-center gap-3 text-sm font-black text-slate-400 hover:text-slate-900 uppercase tracking-widest transition-colors">
                                        <ExternalLink size={20} />
                                        View
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
