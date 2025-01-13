import React from 'react';
import Link from 'next/link';

export const contact = () => {
  return (
    <section id="contact" className='px-4 md:px-20 lg:px-44 bg-stone-900 py-10'>
      {/* Follow Me */}
      <div className='flex flex-col lg:flex-row items-center justify-between text-white h-auto lg:h-36'>
        <div className='text-center lg:text-left'>
          <h1 className='font-bold text-2xl lg:text-3xl'>
            Have any project in mind?
          </h1>
          <p className='text-sm md:text-base lg:text-lg font-normal mt-2'>
            Feel free to contact me or just say friendly hello!
          </p>
        </div>
        <div className='mt-4 lg:mt-0'>
          <Link href="https://www.facebook.com/XENONKUP/" target='_blank'>
            <button className='bg-white text-black font-medium text-sm md:text-xl px-6 py-3 shadow-md hover:bg-gray-200 transition-all'>
              Contact Me
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};