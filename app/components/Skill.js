'use client'

import React from 'react'
import Image from 'next/image'

export const Skill = () => {

    // Object
    const programmingSkills = [
        { src: "/assets/Programming/HTML5.png", alt: "HTML5" },
        { src: "/assets/Programming/CSS3.png", alt: "CSS3" },
        { src: "/assets/Programming/JavaScript.png", alt: "JavaScript" },
        { src: "/assets/Programming/python.png", alt: "Python" },
        { src: "/assets/Freamwork/Flask.png", alt: "Flask" },
        { src: "/assets/Freamwork/React.png", alt: "React" },
        { src: "/assets/Freamwork/Next.js.webp", alt: "Next.js" },
        { src: "/assets/Freamwork/Bootstrap.png", alt: "Bootstrap" },
        { src: "/assets/Freamwork/tailwind.png", alt: "tailwind" },
        { src: "/assets/Design/Figma.png", alt: "Figma" },
        { src: "/assets/Design/Photoshop.png", alt: "Photoshop" },
        { src: "/assets/Database/Mysql.png", alt: "Mysql" },
        { src: "/assets/Hosting/Render.png", alt: "Render" },
        { src: "/assets/Hosting/orig.png", alt: "Vercel" },
        { src: "/assets/Tool/cloudflare.png", alt: "cloudflare" },
        { src: "/assets/Tool/github.png", alt: "github" },
        { src: "/assets/Tool/Vscode.png", alt: "Vscode" }

    ];

    return (
        <section id="skills" className='px-4 md:px-20 lg:px-44 py-10 bg-gray-100'>
            {/* Skill */}
            <div className='flex flex-row justify-start w-full mb-8'>
                <p className='text-2xl sm:text-4xl md:text-4xl font-bold text-gray-800'>
                    Skills
                </p>
            </div>
            <div className='flex justify-center'>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-7 lg:gap-10 justify-items-center w-full">
                    {/* ทำการ map เพื่อ วนซ้ำทุก Array */}
                    {programmingSkills.map((items) => {
                        return (
                            <div className='border border-gray-300 bg-white flex justify-center items-center w-32 h-32 md:w-32 md:h-32 hover:bg-gray-200 transition duration-500 hover:scale-110 shadow-md' key={items.src}>
                                <Image
                                    src={items.src}
                                    alt={items.alt}
                                    width={96}
                                    height={96}
                                    className='w-24 h-24 object-contain'
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}