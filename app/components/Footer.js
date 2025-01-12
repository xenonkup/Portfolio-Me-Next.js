import Link from 'next/link';
import React from 'react';

export const Footer = () => {
  return (
    <footer className="px-4 md:px-20 lg:px-44 bg-black py-8">
      <div className="flex flex-col lg:flex-row items-start justify-between text-white">

        {/* Title */}
        <div className="mb-6 lg:mb-0">
          <h1 className="text-lg font-bold">Korakot Jorralee</h1>
        </div>

        {/* Menu */}
        <div className="mb-6 lg:mb-0">
          <h2 className="text-lg font-semibold">Menu</h2>
          <ul className="space-y-2">
            <li className='hover:text-blue-400'>
               <Link href='#'>Home</Link>
            </li>
            <li className='hover:text-blue-400'>
                <Link href='#'>Skill</Link>
            </li>
            <li className='hover:text-blue-400'>
                <Link href='#'>Project</Link>
            </li>
            <li className='hover:text-blue-400'>
                <Link href='#'>Contact</Link>
            </li>
          </ul>
        </div>

        {/* Information */}
        <div className="mb-6 lg:mb-0">
          <h2 className="text-lg font-semibold">Information</h2>
          <ul className="space-y-2">
            <li className='hover:text-blue-400'>
                064-328-2060
            </li>
            <li className='hover:text-blue-400'>
                Korakot.jorralee@gmail.com
            </li>
            <li className='hover:text-blue-400'>
                Ubon Ratchathani, Thailand
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold">Social Media</h2>
          <ul className="space-y-2">
            <li className='hover:text-blue-400'>
                <Link href="https://www.instagram.com/xenonkup2000/">Instagram</Link>
            </li>
            <li className='hover:text-blue-400'>
                <Link href='https://github.com/xenonkup'>Github</Link>
            </li>
            <li className='hover:text-blue-400'>
                <Link href='https://www.linkedin.com/in/%E0%B8%99%E0%B8%B2%E0%B8%A2%E0%B8%81%E0%B8%A3%E0%B8%81%E0%B8%8A-%E0%B8%88%E0%B8%A3%E0%B8%A5%E0%B8%B5-1a292732b/'>LinkedIn</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
