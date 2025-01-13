import Link from 'next/link';
import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="px-4 md:px-20 lg:px-44 bg-black py-8">
      <div className="flex flex-col items-center text-white mb-4">
        <h2 className="text-lg font-semibold">Follow Me</h2>
      </div>
      <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-10 text-white justify-center pt-5">
        <li className='hover:text-blue-400'>
          <Link href='https://www.instagram.com/xenonkup2000/' className="flex items-center space-x-2">
              <FaInstagram size={40} />
              <span>Instagram</span>
          </Link>
        </li>
        <li className='hover:text-blue-400'>
          <Link href='https://github.com/xenonkup' className="flex items-center space-x-2">
              <FaGithub size={40} />
              <span>Github</span>
          </Link>
        </li>
        <li className='hover:text-blue-400'>
          <Link href='https://www.linkedin.com/in/%E0%B8%99%E0%B8%B2%E0%B8%A2%E0%B8%81%E0%B8%A3%E0%B8%81%E0%B8%8A-%E0%B8%88%E0%B8%A3%E0%B8%A5%E0%B8%B5-1a292732b/' className="flex items-center space-x-2">
              <FaLinkedin size={40} />
              <span>LinkedIn</span>
          </Link>
        </li>
      </ul>
      <div className='pt-5 border-t border-gray-700 mt-5'>
        <p className='text-center text-white pt-5'>© 2025 TIGER Korakot Front-End Developer Website</p>
      </div>
    </footer>
  );
};