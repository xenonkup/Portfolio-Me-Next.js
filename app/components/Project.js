import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Project = () => {

  const projects = [
    {
      imageSrc: "/assets/Project/Booking.png",
      altText: "Breeding Cat Booking",
      title: "Breeding Cat Booking",
      description: "Provides a platform for booking breeding services with ease.",
      link: "https://github.com/xenonkup/Webcatfram_Flask"
    },
    {
      imageSrc: "/assets/Project/TTH2017.png",
      altText: "TTH Trading",
      title: "TTH Trading",
      description: "Fast and reliable trading services for construction materials.",
      link: "https://github.com/xenonkup/TTH-Engineering"
    },
    {
      imageSrc: "/assets/Project/Ham.png",
      altText: "Hamster Engineering",
      title: "Hamster Engineering",
      description: "Quality engineering services with a commitment to excellence.",
      link: "https://hecenginerring.online/grabago-1?hs_preview=BhjeRwlY-173337462365"
    },
  ];

  return (
    <section className='px-4 md:px-20 lg:px-44'>
      <div className='w-full flex flex-row justify-start'>
        <h1 className='text-xl sm:text-4xl md:text-4xl font-bold'>
          Some of my favorite Projects.
        </h1>
      </div>

      {/* Project Image */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-10 pb-10 ">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col border border-solid border-black transition-all duration-500">
            <div className="flex">
              <Image
                src={project.imageSrc}
                alt={project.altText}
                width={800}
                height={800}
                className="object-cover w-full h-[300px]"
              />
            </div>
            <div className="flex flex-col justify-between p-4 flex-grow">
              <div>
                <h4 className="text-xl sm:text-2xl md:text-2xl font-semibold text-gray-900 mb-2 capitalize transition-all duration-500">
                  {project.title}
                </h4>
                <p className="text-base font-semibold text-gray-500 transition-all duration-500 leading-5 mb-5">
                  {project.description}
                </p>
              </div>
              {/* ปุ่มลิงก์ Read More */}
              <Link href={project.link} className="bg-black shadow-sm rounded-full py-2 px-5 font-medium text-sm md:text-xl text-center dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 text-white mt-4 w-max" target='_blank'>
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};