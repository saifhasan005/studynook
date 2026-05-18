'use client'
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 mt-20">
           
            <div className="mx-auto max-w-7xl px-4 py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                
             
                <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                     
                        <span className="text-2xl font-bold text-white tracking-wide">
                            Study<span className="text-purple-500">Nook</span>
                        </span>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      Your digital destination for knowledge acquisition. This is our effort to make reading books, booking rooms, and library management easier.  
                    </p>
                </div>

            
                <div>
                    <h3 className="text-white font-semibold mb-4 text-base tracking-wider uppercase">Quick Links</h3>
                    <ul className="space-y-2.5 text-sm">
                        <li>
                            <Link href="/" className="hover:text-purple-400 transition-colors duration-200">Home</Link>
                        </li>
                        <li>
                            <Link href="/rooms" className="hover:text-purple-400 transition-colors duration-200">All Rooms</Link>
                        </li>
                        <li>
                            <a href="/add-room" className="hover:text-purple-400 transition-colors duration-200">Add New Room</a>
                        </li>
                        <li>
                            <Link href="/books" className="hover:text-purple-400 transition-colors duration-200">Browse Books</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-semibold mb-4 text-base tracking-wider uppercase">Library Hours</h3>
                    <ul className="space-y-2 text-sm text-slate-400">
                        <li className="flex justify-between">
                            <span>Sat - Thu:</span>
                            <span className="text-slate-300">09:00 AM - 08:00 PM</span>
                        </li>
                        <li className="flex justify-between border-t border-slate-800 pt-2 mt-2">
                            <span>Friday:</span>
                            <span className="text-purple-400 font-medium">Weekly Off</span>
                        </li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h3 className="text-white font-semibold text-base tracking-wider uppercase">Contact Us</h3>
                    <div className="text-sm space-y-2 text-slate-400">
                        <p>📍 TMSS, Bogura, Bangladesh</p>
                        <p>✉️ support@studynook.com</p>
                    </div>
                    <div className="pt-2">
                        <form onSubmit={(e) => e.preventDefault()} className="flex max-w-sm">
                            <input 
                                type="email" 
                                placeholder="Enter email" 
                                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-l-md text-sm text-white focus:outline-none focus:border-purple-500 transition-colors"
                            />
                            <button 
                                type="submit" 
                                className="bg-purple-700 hover:bg-purple-600 text-white px-4 py-2 rounded-r-md text-sm font-medium transition-colors"
                            >
                                Join
                            </button>
                        </form>
                    </div>
                </div>

            </div>
            <div className="bg-slate-950 py-6 border-t border-slate-800/60">
                <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 space-y-3 sm:space-y-0">
                    <p>© {new Date().getFullYear()} StudyNook. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;