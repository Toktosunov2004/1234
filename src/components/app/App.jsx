import React from 'react'

import Header from '../header/Header'

import './app.scss'
import SortVakansion from '../SortVakansion/SortVakansion'
import { Routes, Route } from 'react-router'
import { Home } from '../home/Home'
import Zayva from '../zayava/Zayava'


const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/vakansion" element={<SortVakansion />} />
                <Route path="/" element={<Home />} />
                <Route path="/zayavka" element={<Zayva />}/>
            </Routes>

            
        </div>
    )
}

export default App