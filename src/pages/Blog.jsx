import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
    const posts = [
        {
            title: 'Modern Web Design Trends in 2026',
            excerpt: 'Exploring the shift towards glassmorphism, 3D elements, and micro-interactions in high-end portfolios.',
            date: 'Feb 20, 2026',
            readTime: '5 min read',
            category: 'Design'
        },
        {
            title: 'Building Scalable React Architectures',
            excerpt: 'Best practices for organizing large-scale React projects for better maintainability and performance.',
            date: 'Feb 15, 2026',
            readTime: '8 min read',
            category: 'Development'
        },
        {
            title: 'The Future of AI in Software Engineering',
            excerpt: 'How agentic AI is changing the way we write, test, and deploy software in modern development workflows.',
            date: 'Feb 10, 2026',
            readTime: '10 min read',
            category: 'AI'
        }
    ];

    return (
        <div className="pt-32 min-h-screen bg-slate-50">
            <div className="max-w-[1400px] mx-auto px-10">
                <div className="mb-20">
                    <h1 className="text-7xl font-black text-slate-900 tracking-tighter mb-4 uppercase">Journal</h1>
                    <p className="text-xl text-slate-400 font-bold uppercase tracking-[0.2em]">Thoughts on tech, design, and the future</p>
                </div>

                <div className="grid gap-12">
                    {posts.map((post, i) => (
                        <motion.article
                            key={i}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-12 rounded-[3rem] border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
                        >
                            <div className="flex flex-wrap items-center gap-6 mb-8">
                                <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-widest">{post.category}</span>
                                <div className="flex items-center gap-2 text-slate-400 text-sm font-bold uppercase tracking-widest">
                                    <Calendar size={16} />
                                    {post.date}
                                </div>
                                <div className="flex items-center gap-2 text-slate-400 text-sm font-bold uppercase tracking-widest">
                                    <Clock size={16} />
                                    {post.readTime}
                                </div>
                            </div>

                            <h2 className="text-4xl font-black text-slate-900 mb-6 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{post.title}</h2>
                            <p className="text-xl text-slate-500 mb-10 leading-relaxed font-medium">{post.excerpt}</p>

                            <button className="flex items-center gap-3 text-lg font-black text-slate-900 hover:text-blue-600 transition-all uppercase tracking-widest group">
                                Read More
                                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </button>
                        </motion.article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
