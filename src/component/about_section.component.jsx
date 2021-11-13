import React from 'react';
import './about_section.style.scss';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { pageVariant, pageTransition } from './transition.component';

const AboutSection = () => (
  <motion.div
    className='about_section'
    exit='out'
    animate='in'
    initial='out'
    variants={pageVariant}
    transition={pageTransition}
  >
    <div className='info'>
      <div className='desc'>
        Greywing is a digital platform that provides clients with greater
        situational awareness of their fleet and personnel. We deliver this
        through our comprehensive offering suite: CRY4 (crew change automation
        and flight tracking platform) and Flotilla (fleet management platform)
        with several more releases coming soon!
      </div>
      <Link to='/'>
        <button className='back'>
          Back
          <div className='line'></div>
        </button>
      </Link>
    </div>
  </motion.div>
);

export default AboutSection;
