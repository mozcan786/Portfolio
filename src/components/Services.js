import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs'
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'
// services data
const services = [
  {
    name: 'JavaScript',
    link: 'Learn more',
  },
  {
    name: 'HTML',
    link: 'Learn more',
  },
  {
    name: 'CSS',
    link: 'Learn more',
  },
  {
    name: 'VueJs',
    link: 'Learn more',
  },
  {
    name: 'Nuxtjs',
    link: 'Learn more',
  },
  {
    name: 'Vuex',
    link: 'Learn more',
  },
  {
    name: 'ReactJs',
    link: 'Learn more',
  },
  {
    name: 'NextJs',
    link: 'Learn more',
  },
  {
    name: 'Redux-tollkit',
    link: 'Learn more',
  },

  {
    name: 'Bootstrap',
    link: 'Learn more',
  },
  {
    name: 'Tailwindcss',
    link: 'Learn more',
  },
  {
    name: 'Sass(Scss)',
    link: 'Learn more',
  },
]
const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:bg-services lg:bg-top bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>What I Do</h2>
            <h3 className='h3 max-w-[455px] mb-16'>I'm a Freelance Front-End Developer with over 3 years of experience.</h3>
            <a href='https://github.com/mozcan786' rel="noreferrer noopener" target='_blank'>
              <button className='btn btn-sm'>See my work</button>
            </a>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
            {/* services list */}
            <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6 uppercase text-accent'>My top Skils</h4>
            <div className='flex flex-wrap gap-2'>
              {services.map((service, index) => {
                return (
                  <div className='border border-white/20 p-1 rounded'
                    key={index}>
                    <div className='flex items-center justify-center'>
                      <p className='font-bold font-secondary leading-tight '>{service.name}</p>
                    </div>
                    <div className='flex items-center gap-x-2 '>
                      <a href='/' aria-label='learn more'  title="learn more" className='text-gradient text-sm'>
                        {service.link}
                      </a>
                      <a href='/' aria-label='learn more'  title="learn more" className='btn w-9 h-9  flex justify-center items-center'>
                        <BsArrowUpRight />
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default Services;
