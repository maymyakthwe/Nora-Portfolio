import React, { useEffect } from 'react'
import './intro.css'
import Plx from 'react-plx'
import { parallaxData5 } from '../FrontPage/parallax'
import profileWholeBody from '../../images/profile-whole-body.png'

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
                            <a href="">< FaFacebookMessenger className="icon" /></a>
                            <a href="">< FaFacebookMessenger className="icon" /></a>
                            <a href="">< FaFacebookMessenger className="icon" /></a>
                            <a href="">< FaFacebookMessenger className="icon" /></a>
                        </div>
                    </div>
                </div>
            </Plx >
        </section>
    )
}

export default Intro
