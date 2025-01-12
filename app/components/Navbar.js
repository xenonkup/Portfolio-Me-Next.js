'use client'

import React, { useState } from 'react'
import Link from 'next/link'

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className='border-b border-black'>
        <nav className='w-full z-20 top-0 bg-white px-4 md:px-20 lg:px-44'>
            <div className='w-full md:w-full '>
                <div className='flex items-center justify-between h-20'>
                    {/* Logo */}
                    <Link href="#" className='text-2xl font-extrabold text-black hover:text-blue-400'>
                        TIGER
                    </Link>

                    {/* Desktop Menu */}
                    <div className='hidden md:flex space-x-8 text-xl'>
                        <Link href="#" className=' text-black hover:text-blue-400 font-extrabold'>
                            HOME
                        </Link>
                        <Link href="#" className=' text-black hover:text-blue-400 font-extrabold'>
                            SKILLS
                        </Link>
                        <Link href="#" className=' text-black hover:text-blue-400 font-extrabold'>
                            PROJECTS
                        </Link>
                        <Link href="#" className=' text-black hover:text-blue-400 font-extrabold'>
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
                            <Link href="#" className='block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md'>
                                HOME
                            </Link>
                            <Link href="#" className='block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md'>
                                SKILLS
                            </Link>
                            <Link href="#" className='block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md'>
                                PROJECTS
                            </Link>
                            <Link href="#" className='block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md'>
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