import React from 'react'
import './intro.css'
import Plx from 'react-plx'
import { parallaxData5 } from '../FrontPage/parallax'
import { motion } from 'framer-motion'

import profileWholeBody from '../../images/profile-whole-body.png'
import cloud from '../../images/cloud.png'
import heart from '../../images/heart.png'
import thunder from '../../images/thunder.png'

import { FaFacebookMessenger } from 'react-icons/fa'



const Intro = () => {
    return (
        <section id='intro-section'>
            <Plx parallaxData={parallaxData5} className='intro-section'>
                <div className='intro-home'>
                    <div className='intro-img'>
                        <img src={profileWholeBody} alt="" />
                    </div>
                    <div className='intro-texts'>
                        <div className='hi-there'>
                            Hi There, My Name is
                        </div>
                        <div className='intro-name'>
                            <span>May Myak Thwel</span>
                        </div>
                        <div className='intro-profession'>
                            I am a <span>Web Developer</span>.
                        </div>
                        <div className='intro-background'>
                            I Study Front End Development Specialized in <span>React js</span>.
                        </div>
                        <div className='intro-buttons'>
                            <button>Contact Me!</button>
                            <button>See My Work</button>
                        </div>
                        <div className='intro-icons'>
                            <a href="/">< FaFacebookMessenger className="icon" /></a>
                            <a href="/">< FaFacebookMessenger className="icon" /></a>
                            <a href="/">< FaFacebookMessenger className="icon" /></a>
                            <a href="/">< FaFacebookMessenger className="icon" /></a>
                        </div>
                    </div>
                </div>
            </Plx >

            <motion.div
                animate={{ y: [-50, 0, -50], x: [50, 0, 50] }}
                transition={{ repeat: Infinity, duration: 12, type: 'tween' }}
                className='cloud-1'>
                <img src={cloud} alt="" />
            </motion.div>
            <motion.div
                animate={{ y: [-50, 0, -50], x: [-50, 0, -50] }}
                transition={{ repeat: Infinity, duration: 12, type: 'tween' }}
                className='cloud-2'>
                <img src={cloud} alt="" />
            </motion.div>
            <motion.div
                animate={{ y: [50, 0, 50], x: [-20, 0, -20] }}
                transition={{ repeat: Infinity, duration: 12, type: 'tween' }}
                className='heart'>
                <img src={heart} alt="" />
            </motion.div>
            <motion.div
                animate={{ y: [50, 0, 50], x: [20, 0, 20] }}
                transition={{ repeat: Infinity, duration: 12, type: 'tween' }}
                className='thunder'>
                <img src={thunder} alt="" />
            </motion.div>
        </section>
    )
}

export default Intro
