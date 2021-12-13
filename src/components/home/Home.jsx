import React from 'react'

import Main from '../main/Main'
import Main_3 from  '../main_3/Main_3'
import Footer from '../footer/Footer'
import Video from '../video/Video'
import Vacancy from '../vacancy/Vacancy'
import Blocks from '../blocks/Blocks'

export const Home = () => {
    return (
        <div>
            <Main />
            <Blocks />
            <Main_3 />
            <Vacancy />
            <Video />
            <Footer />
        </div>
    )
}
