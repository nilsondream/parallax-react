import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import './style/Global.scss'

const App = () => {
    return (
        <>
            <Navbar />
            <Home />
        </>
    )
}

export default App