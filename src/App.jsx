import React from 'react'
import Navbar from './components/Navbar/Navbar'
import FrontPage from './components/FrontPage/FrontPage'
import Background from './components/Background/Background'

const App = () => {
    return (
        <div className='app'>
            <FrontPage />
            <Navbar />
            <Background />
        </div>
    )
}

export default App
