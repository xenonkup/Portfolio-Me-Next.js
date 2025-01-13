import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const Hero = () => {
  return (
    <section id="home" className='flex flex-col lg:flex-row items-center px-4 md:px-20 lg:px-44 bg-gray-100 py-10'>
      <div className="flex-1 text-center lg:text-left pt-10 pb-10">
        {/* TEXT */}
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800'>
          Hello, Korakot Jorralee
        </h1>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold pt-4 text-gray-900'>
          Front-End Developer
        </h1>

        <p className="text-sm md:text-base lg:text-lg font-normal pt-4 lg:pr-10 md:justify-items-center text-gray-700">
          My name is Tiger, and I am a 24 year old 5th year student about to graduate. 
          I aim to develop and grow as a Front-end developer. Passionate about being 
          both a user and a systems developer. I aspire to be part of a collaborative 
          and successful team. I am eager to learn and expand my knowledge and skills 
          in an ever-changing landscape.
        </p>

        {/* button Download */}
        <div className='pt-4 flex justify-center lg:justify-start space-x-4 pb-4'>
          <Link
            href="/assets/Cv/Front-End Developer.pdf" target='_blank' download
            className="flex items-center text-black"
          >
            <span className="text-white bg-black shadow-sm rounded-full py-2 px-5 font-medium text-sm md:text-xl dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
              Download CV
            </span>
          </Link>
        </div>
      </div>

      {/* Profile Image */}
      <div className="lg:pt-10 pb-10 lg:pb-10 w-full lg:w-auto flex justify-center lg:justify-end">
        <div className="relative w-60 h-60 lg:w-[300px] lg:h-[300px]">
          <Image
            src="/assets/Ourpicture/Me3.jpg"
            alt="Profile Image"
            layout="fill"
            objectFit="cover"
            className="rounded-full shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400"
          />
        </div>
      </div>
    </section>
  )
}