import React from 'react'
import Navbar from './components/Navbar/Navbar'
import FrontPage from './components/FrontPage/FrontPage'

const App = () => {
    return (
        <div className='app'>
            <FrontPage />
            <Navbar />
        </div>
    )
}

export default App
