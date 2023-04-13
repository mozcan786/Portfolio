import React from 'react';

import Image from '../assets/avatar.png'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'
const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:gap-x-12'>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text[55px] font-bold leading-[0.8] lg:text-[110px]'>
              BEN <span>MUHAMMED</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-36px lg:text[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='mr-4'>I am a</span>
              <TypeAnimation sequence={[
                'Developer',
                2000,
              ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity} />
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-8 max-w-lg mx-auto lg:mx-0'>
              +3 years experienced  in IT and an expert front-end developer, interested in writing codes,
              skilled at developing complex solutions, creating responsive designs, possessing strong creative thinking skills,
              high energy and integrity, fast, secured  design patterns ,opitimization, clean and reusable code.
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <a href="mailto:muhammedozcan786@gmail.com">
                <button className='btn btn-lg'>Contact me</button>
              </ a>
              <a href='#' className='text-gradient btn-link'>My Portfolio</a>
            </motion.div>
            {/* social */}
            <motion.div
              variants={fadeIn('up', 0.7)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href='https://github.com/mozcan786' rel="noreferrer noopener" target='_blank'>
                <FaGithub />
              </a>
              <a href='www.linkedin.com/in/muhammedzcn/' rel="noreferrer noopener" target='_blank'>
                <FaLinkedin />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial="hidden"
            whileInView={'show'}
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mix-blend-overlay'>
            <img src={Image} alt='' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
