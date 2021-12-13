import React from 'react'

import './main.scss'

const Main = () => {
    return (
            <div className='mainContainer'>
                <h1>lLive - Проект для помощи людям с ограниченными возможностями.</h1>
                <p>Делай то, что ты можешь, с помощью того, чем ты располагаешь, там, где ты сейчас.</p>

                <div className='btnContainer'>
                    <div className='btn'>
                    <img src="./img/appe.svg" alt="apple-logo" />
                    <span>Download on the</span>
                    <h3>App Store</h3>
                    </div>

                    <div className='btn_2'>
                    <img src="./img/google-play.svg" alt="google-play" />
                    <span>Get it from</span>
                    <h3>Google Play</h3>
                    </div>
                </div>

            </div>

    )
}

export default Main