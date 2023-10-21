import React, { useEffect } from 'react'
import './background.css'
import { motion } from 'framer-motion'

function Background() {


    useEffect(() => {

        let myBackground = document.querySelector("#my-background")
        let myBackgroundText = document.querySelector(".my-background-text")
        window.addEventListener("scroll", function () {
            // console.log(myBackground)
            // console.log(this.scrollY - myBackground.offsetTop + 200)
            myBackgroundText.style.left = `${-(this.scrollY - myBackground.offsetTop + 100) * 5}px`//totalScrolled - object's top

            console.log(myBackgroundText.style.left)
            if (this.scrollY < myBackground.offsetTop) {
                myBackgroundText.style.position = "absolute"
            } else if (this.scrollY > myBackground.offsetTop && this.scrollY < myBackground.offsetTop + myBackground.offsetHeight - 500) { //objectBottom = objectTop + height- 200 // text position
                myBackgroundText.style.position = "fixed"
            } else {
                myBackgroundText.style.position = "absolute"
            }
        })
    })


    return (
        <section id='my-background'>
            <motion.div className='my-background-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, eligendi voluptates, tenetur odio deserunt dolore minima repudiandae sunt fugit, velit fuga recusandae! Consectetur qui molestias et vitae aliquam quidem laudantium.</motion.div>
        </section>
    )
}

export default Background
