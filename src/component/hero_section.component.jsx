import React, { Component } from 'react';
import './hero_section.style.scss';
import ThreejsGlobe from './threejs_globe.component';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { pageVariant, pageTransition } from './transition.component';

class HeroSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <motion.div
        className='hero_section'
        exit='out'
        animate='in'
        initial='out'
        variants={pageVariant}
        transition={pageTransition}
      >
        <div className='info'>
          <div className='title'>Greywing</div>
          <div className='desc'>
            The new operating system for maritime .<br />
            Automate crew changes, manage your fleet, and communicate faster.
          </div>
          <Link to='/about'>
            <button className='enter'>
              <div className='line'></div>
              Enter
            </button>
          </Link>
        </div>
        <ThreejsGlobe />
      </motion.div>
    );
  }
}

export default HeroSection;
