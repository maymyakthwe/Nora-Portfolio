import React, { useEffect } from 'react'
import './intro.css'
import Plx from 'react-plx'
import { parallaxData5 } from '../FrontPage/parallax'
import profile from '../../images/profile.png'



const Intro = () => {
    return (
        <Plx parallaxData={parallaxData5} className='intro-section'>
            <div className='intro-home'>
                <div className='intro-img'>
                    <img src={profile} alt="" />
                </div>
                <div className='intro-texts'>
                    <div className='intro-name'>
                        May Myak Thwel
                    </div>
                    <div className='intro-background'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Hic laboriosam quis dolorem omnis eligendi, voluptatem debitis laudantium
                        esse dicta dolorum rem eveniet.Suscipit quis necessitatibus aut repellendus,
                        earum nobis ratione!
                    </div>
                    <div className='intro-buttons'>
                        <button>Contact Me!</button>
                        <button>See My Work</button>
                    </div>
                </div>

            </div>
        </Plx>
    )
}

export default Intro
