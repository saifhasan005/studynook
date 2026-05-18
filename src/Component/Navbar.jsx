'use client'
import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import ThemeSwitching from './ThemeSwitching';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false); // মোবাইল মেনু ওপেন/ক্লোজ স্টেট

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/rooms', label: 'Rooms' },
    ];

    return (
        <nav className='sticky top-0 z-50 bg-white dark:bg-zinc-950 shadow-md px-4 sm:px-6 lg:px-12 py-3'>
            <div className='max-w-7xl mx-auto flex items-center justify-between'>
                
                {/* ১. লোগো সেকশন */}
                <div className='flex items-center gap-2'>
                    <Image
                        src={'/icons8-books-64.png'}
                        alt='logo'
                        width={40}
                        height={40}
                        className="sm:w-[50px] sm:h-[50px]"
                    />
                    <Link href={'/'}>
                        <h1 className='font-semibold text-xl sm:text-2xl dark:text-white'>
                            Study
                            <span className="font-extrabold bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                Nook
                            </span>
                        </h1>
                    </Link>
                </div>

                {/* ২. ডেক্সটপ নেভিগেশন লিংক (বড় স্ক্রিনের জন্য) */}
                <div className='hidden md:flex items-center'>
                    <ul className='flex font-semibold gap-6 lg:gap-8'>
                        {navLinks.map((link) => (
                            <Link 
                                key={link.href} 
                                href={link.href}
                                className={`pb-1 dark:text-white transition-all ${pathname === link.href ? 'border-b-2 border-purple-500 text-purple-600' : 'hover:text-purple-500'}`}
                            >
                                <li>{link.label}</li>
                            </Link>
                        ))}
                    </ul>
                </div>

                {/* ৩. ডেক্সটপ বাটন ও থিম সুইচ (বড় স্ক্রিনের জন্য) */}
                <div className='hidden md:flex items-center gap-4'>
                    <ThemeSwitching />
                    <Link href={'/login'}>
                        <Button variant='outline' className="border hover:border-purple-500 rounded-md px-4 py-2 dark:text-white">
                            Login
                        </Button>
                    </Link>
                    <Link href={'/register'}>
                        <Button className="bg-purple-800 text-white rounded-md px-4 py-2 hover:bg-purple-700">
                            Register
                        </Button>
                    </Link>
                </div>

                {/* ৪. মোবাইল এবং ট্যাবলেট রাইট সাইড কন্ট্রোল (থিম ও হ্যামবার্গার টগল) */}
                <div className='flex md:hidden items-center gap-3'>
                    <ThemeSwitching />
                    
                    {/* হ্যামবার্গার মেনু বাটন */}
                    <button 
                        onClick={() => setIsOpen(!isOpen)} 
                        className="text-zinc-700 dark:text-white focus:outline-none p-1"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? (
                            // ক্রস (X) আইকন
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            // থ্রি-লাইন (Menu) আইকন
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* ৫. মোবাইল ড্রপডাউন মেনু (অ্যানিমেশনসহ রেসপন্সিভ) */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100 mt-4 pb-4' : 'max-h-0 opacity-0'}`}>
                <ul className='flex flex-col font-semibold gap-4 border-t pt-4 dark:border-zinc-800'>
                    {navLinks.map((link) => (
                        <Link 
                            key={link.href} 
                            href={link.href}
                            onClick={() => setIsOpen(false)} // লিংক ক্লিক করলে মেনু বন্ধ হবে
                            className={`pl-2 py-1 dark:text-white block ${pathname === link.href ? 'text-purple-600 border-l-4 border-purple-500' : 'hover:text-purple-500'}`}
                        >
                            <li>{link.label}</li>
                        </Link>
                    ))}
                </ul>
                
                {/* মোবাইলের জন্য লগইন ও রেজিস্টার বাটন */}
                <div className='flex flex-col gap-3 mt-5 pt-4 border-t dark:border-zinc-800'>
                    <Link href={'/login'} onClick={() => setIsOpen(false)} className="w-full">
                        <Button variant='outline' className="w-full border hover:border-purple-500 rounded-md dark:text-white py-2.5">
                            Login
                        </Button>
                    </Link>
                    <Link href={'/register'} onClick={() => setIsOpen(false)} className="w-full">
                        <Button className="w-full bg-purple-800 text-white rounded-md py-2.5 hover:bg-purple-700">
                            Register
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;