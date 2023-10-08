import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro'
import FrontPage from './components/FrontPage/FrontPage'

const App = () => {
    return (
        <div className='app'>
            <FrontPage />
            <Intro />
            <Navbar />
        </div>
    )
}

export default App
