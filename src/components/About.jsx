import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const About = () => {
    const focusAreas = [
        {
            title: 'Full Stack Developer',
            desc: 'Building end-to-end web applications with a focus on scalability and performance',
            icon: '🎨'
        },
        {
            title: 'Frontend Developer',
            desc: 'Creating responsive and user-friendly interfaces',
            icon: '🚀'
        }
    ];

    const skills = [
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    ];

    return (
        <section id="about" className="bg-blue-50 py-32 border-t-4 border-slate-200">
            <div className="max-w-[1400px] mx-auto px-10">
                <div className="text-center mb-24">
                    <h2 className="text-7xl font-black text-slate-900 tracking-tighter mb-4">About</h2>
                    <div className="w-24 h-2 bg-blue-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-20 items-start mb-32">
                    {/* Left: Focus Areas */}
                    <div className="space-y-6">
                        {focusAreas.map((area, i) => (
                            <motion.div
                                key={area.title}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 bg-white border-2 border-slate-100 rounded-[2rem] hover:border-blue-400 transition-all group shadow-sm hover:shadow-lg"
                            >
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">{area.icon}</div>
                                <h3 className="text-xl font-black text-slate-900 mb-2 tracking-tight">{area.title}</h3>
                                <p className="text-slate-500 leading-relaxed font-medium">{area.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right: Bio & Download Resume */}
                    <div className="space-y-12">
                        <div className="text-slate-500 text-xl font-medium leading-loose space-y-6">
                            <p>
                                I'm a passionate software developer with a strong interest in web development.
                                I focus on clean, maintainable code, intuitive user interfaces, and practical functionality.
                            </p>
                        </div>

                        {/* Download Resume */}
                        <a
                            href="/Fiyin_Resume.pdf"
                            download="FiyinAregbe_Resume.pdf"
                            className="flex items-center justify-center gap-4 px-10 py-6 bg-slate-900 hover:bg-black text-white rounded-2xl font-black text-xl transition-all shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-95 w-full"
                        >
                            <Download size={26} />
                            Download Resume
                        </a>
                    </div>
                </div>

                {/* Bottom: Skills Row */}
                <div>
                    <h3 className="text-3xl font-black text-slate-900 text-center mb-16 uppercase tracking-widest">Core Stack</h3>
                    <div className="grid grid-cols-4 gap-6 md:flex md:flex-nowrap md:justify-center md:overflow-x-auto md:gap-12 md:pb-10 md:scrollbar-hide px-4">
                        {skills.map((skill, i) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.1, y: -5 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="flex flex-col items-center gap-3 md:gap-6 md:min-w-[120px] group grayscale hover:grayscale-0 transition-all"
                            >
                                <img src={skill.icon} alt={skill.name} className="w-16 h-16 object-contain" />
                                <span className="font-black text-slate-400 group-hover:text-slate-900 uppercase tracking-widest text-sm">{skill.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
