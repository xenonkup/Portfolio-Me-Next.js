'use client'

import React, { useState } from 'react'
import Link from 'next/link'

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = (e) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className='border-b border-black'>
        <nav id='TIGER' className='w-full z-20 top-0 bg-white px-4 md:px-20 lg:px-44'>
            <div className='w-full md:w-full '>
                <div className='flex items-center justify-between h-20'>
                    {/* Logo */}
                    <Link href="#TIGER" className='text-2xl font-extrabold text-black hover:text-blue-400' onClick={handleLinkClick}>
                        TIGER
                    </Link>

                    {/* Desktop Menu */}
                    <div className='hidden md:flex space-x-8 text-xl'>
                        <Link href="#home" className=' text-black hover:text-blue-400 font-extrabold' onClick={handleLinkClick}>
                            HOME
                        </Link>
                        <Link href="#skills" className=' text-black hover:text-blue-400 font-extrabold' onClick={handleLinkClick}>
                            SKILLS
                        </Link>
                        <Link href="#projects" className=' text-black hover:text-blue-400 font-extrabold' onClick={handleLinkClick}>
                            PROJECTS
                        </Link>
                        <Link href="#contact" className=' text-black hover:text-blue-400 font-extrabold' onClick={handleLinkClick}>
                            CONTACT
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        className='md:hidden'
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className='md:hidden'>
                        <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                            <Link href="#home" className='block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md' onClick={handleLinkClick}>
                                HOME
                            </Link>
                            <Link href="#skills" className='block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md' onClick={handleLinkClick}>
                                SKILLS
                            </Link>
                            <Link href="#projects" className='block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md' onClick={handleLinkClick}>
                                PROJECTS
                            </Link>
                            <Link href="#contact" className='block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md' onClick={handleLinkClick}>
                                CONTACT
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    </section>
    )
}