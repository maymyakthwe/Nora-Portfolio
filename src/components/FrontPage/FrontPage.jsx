import React, { useEffect, useState } from 'react'
import './frontPage.css'

import profile from '../../images/profile.png'

import { FiPhone } from 'react-icons/fi'
import { HiOutlineVideoCamera } from 'react-icons/hi'
import { ImInfo } from 'react-icons/im'
import { RiEmojiStickerLine } from 'react-icons/ri'
import { BsMic } from 'react-icons/bs'
import { HiOutlinePhotograph } from 'react-icons/hi'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsEmojiLaughing } from 'react-icons/bs'


function FrontPage() {
    let [renderTextOne, setRenderTextOne] = useState(false)
    let [renderTextTwo, setRenderTextTwo] = useState(false)
    let [renderTextThree, setRenderTextThree] = useState(false)
    let [renderTextFour, setRenderTextFour] = useState(false)
    let [renderTextFive, setRenderTextFive] = useState(false)
    let [renderTextSix, setRenderTextSix] = useState(false)
    let [renderTextSeven, setRenderTextSeven] = useState(false)
    let [typing, settyping] = useState(false);


    useEffect(() => {

        let delayedRender = (setfunction, delay) => {
            console.log('typing...')
            setTimeout(() => {
                setfunction(true);
            }, delay);
        }

        settyping(true);
        delayedRender(setRenderTextOne, 1000);
        delayedRender(setRenderTextTwo, 2000);
        delayedRender(setRenderTextThree, 4000);
        delayedRender(setRenderTextFour, 5000);
        delayedRender(setRenderTextFive, 6500);
        delayedRender(setRenderTextSix, 8000);
        delayedRender(setRenderTextSeven, 10000);

        setTimeout(() => {
            console.log('typing...end')
            settyping(false);
        }, 11000);

    }, [])

    return (
        <section id='front-page-section' >
            <div className='add-border'>
                <div className='front-page-nav'>
                    <div className='person'>
                        <img src={profile} alt="profile-pic" />
                        <div className='name'>May Myak Thwel</div>
                    </div>
                    <div className='icons'>
                        <div><FiPhone className='icon' /></div>
                        <div><HiOutlineVideoCamera className='icon' /></div>
                        <div><ImInfo className='icon' /></div>
                    </div>
                </div>
            </div>
            <div className='text-section'>
                <div className='texts'>
                    {renderTextOne && <div className="text">Hi</div>}
                    {renderTextTwo && <div className="text">Are you a recruiter looking for a talented web developer to join you team?</div>}
                    {renderTextThree && <div className="text">Or</div>}
                    {renderTextFour && <div className="text">Are you here to look for inspiration?</div>}
                    {renderTextFive && <div className="text">Either Way</div>}
                    {renderTextSix && <div className="text">You are in the right place <BsEmojiLaughing className='icon' /></div>}
                    {renderTextSeven && <div className="text">Lets get started!</div>}
                    {typing && <div className="typing">
                        <div>.</div>
                        <div>.</div>
                        <div>.</div>
                    </div>}
                    <img src={profile} alt="profile-pic" />
                </div>
                <div className='text-bar'>
                    <div className='text-bar-div'>
                        <div><RiEmojiStickerLine className='icon' /></div>
                        <div className='input'><input type="text" /></div>
                        <div><BsMic className='icon' /></div>
                        <div><HiOutlinePhotograph className='icon' /></div>
                        <div><AiOutlineHeart className='icon' /></div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default FrontPage
