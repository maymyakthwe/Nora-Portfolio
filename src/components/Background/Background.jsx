import React, { useRef } from 'react'
import './background.css'
import { motion, useScroll, useTransform } from 'framer-motion'

function Background() {
    const textRef = useRef(null);
    const { scrollY } = useScroll({
        container: textRef
    });
    const x = useTransform(scrollY, [0, 2], [0, -2000])

    return (
        <section id='my-background'>
            <motion.div ref={textRef} className='my-background-text' style={{ x }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, eligendi voluptates, tenetur odio deserunt dolore minima repudiandae sunt fugit, velit fuga recusandae! Consectetur qui molestias et vitae aliquam quidem laudantium.</motion.div>
        </section>
    )
}

export default Background
