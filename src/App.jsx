import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Blog from './pages/Blog';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="bg-slate-50 text-slate-900 min-h-screen">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<Blog />} />
                </Routes>

                <footer className="py-20 text-center text-slate-400 bg-white border-t-4 border-slate-200">
                    <p className="font-bold uppercase tracking-widest text-sm">© {new Date().getFullYear()} FiyinAregbe. Built with Passion</p>
                </footer>
                <Analytics />
            </div>
        </Router>
    );
}

export default App;
