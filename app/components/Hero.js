import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const Hero = () => {
  return (
    <section className='flex flex-col lg:flex-row items-center px-4 md:px-20 lg:px-44'>
      <div className="flex-1 text-center lg:text-left pt-10 pb-10">
        
        <h1 className='text-xl sm:text-2xl md:text-2xl font-bold'>
          Hello, Korakot Jorralee
        </h1>
        <h1 className='text-xl sm:text-4xl md:text-4xl font-bold pt-4'>
          Front-End Developer
        </h1>

        <p className="text-sm md:text-base lg:text-lg font-normal pt-4 lg:pr-10 md:justify-items-center">
          My name is Tiger, and I am a 24 year old 5th year student about to graduate. 
          I aim to develop and grow as a Front-end developer. Passionate about being 
          both a user and a systems developer. I aspire to be part of a collaborative 
          and successful team. I am eager to learn and expand my knowledge and skills 
          in an ever-changing landscape.
        </p>
        <div className='pt-4 flex justify-center lg:justify-start space-x-4 pb-4'>
          <Link
            href="/assets/Cv/Front-End Developer.pdf" target='_blank'
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
        <div className="relative w-60 h-80 lg:w-[300px] lg:h-[400px]">
          <Image
            src="/assets/Ourpicture/Me3.jpg"
            alt="Profile Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400"
          />
        </div>
      </div>
    </section>
  )
}
