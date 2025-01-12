import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const Hero = () => {
  return (
    <section className='flex flex-col lg:flex-row items-center px-8 md:px-44 pt-10'>
      <div className="flex-1 text-center lg:text-left pt-10 lg:pt-0">
        <h1 className='text-xl sm:text-2xl md:text-2xl font-bold'>
          Hello, Korakot Jorralee
        </h1>
        <h1 className='text-xl sm:text-4xl md:text-4xl font-bold pt-4'>
          Front-End Developer
        </h1>
        <p className="text-sm md:text-base lg:text-lg font-normal pt-4 pr-4 lg:pr-10">
          My name is Tiger, and I am a 24-year-old 5th year student about to graduate. 
          I aim to develop and grow as a Front-end developer. Passionate about being 
          both a user and a systems developer. I aspire to be part of a collaborative 
          and successful team. I am eager to learn and expand my knowledge and skills 
          in an ever-changing landscape.
        </p>
        <div className='pt-4 flex justify-center lg:justify-start space-x-4'>
          <Link
            href="/assets/Cv/Front-End Developer.pdf" target='_blank'
            className="flex items-center text-black"
          >
            <span className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Download CV</span>
          </Link>
        </div>
      </div>

      {/* Profile Image */}
      <div className="pt-10 lg:pt-0 w-full lg:w-auto flex justify-center lg:justify-end">
        <div className="relative w-60 h-80 lg:w-[300px] lg:h-[400px]">
          <Image
            src="/assets/Ourpicture/Me3.jpg"
            alt="Profile Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}
