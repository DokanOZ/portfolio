import React from 'react';
// icon
import { BsArrowUpRight } from 'react-icons/bs';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

// services data
const services = [
  {
    name: 'Xplore Group: Flutter',
    description:
      'Here we have completed an assignment on Flutter and learned its basics. Flutter is an open-source framework from Google for building apps for multiple platforms simultaneously.',
  },
  {
    name: ' ACA Group: Cloud Native Applicaties on AWS',
    description:
      'During the ACA Group seminar, you will learn how to develop and deploy cloud-native applications on AWS. You will gain hands-on experience and practical knowledge from experts in this field.',
  },
  {
    name: 'Cloudar: How to keep my systems up-to-date and secure',
    description:
      'Cloudar is an IT consultancy company that focuses on cloud solutions. During their seminar, you will learn how to keep your systems up-to-date and secure in the cloud. You will receive practical tips and a short exercise.',
  },
  {
    name: 'Konsolidate: Solid',
    description:
      'The Konsolidatie seminar was very broad. Various topics were discussed, such as the A.I. dictatorship, the Babylon problem, the European...',
  },
];

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text & image */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'
          >
            <h2 className='h2 text-accent mb-6'>My seminares.</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              For my I-talent I participated in a number of seminares. Here are a few of them.
            </h3>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            {/* service list */}
            <div>
              {services.map((service, index) => {
                // destructure service
                const { name, description, link } = service;
                return (
                  <div
                    className='border-b border-white/20 h-[146px] mb-[38px] flex'
                    key={index}
                  >
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
                        {name}
                      </h4>
                      <p className='font-secondary leading-tight'>
                        {description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
