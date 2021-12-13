import React from 'react'

import './vacancy.scss'

const Vacancy = () => {
    return  ( <>
            <div className='firstComponents'>
            <h3>Доступные вакансии</h3>
            <p>Людям с ограниченными возможностями бывает трудно социализироваться и найти работу. Работодатели боятся, что такой сотрудник не будет справляться с обязанностями наравне с остальными, а самим людям с инвалидностью бывает проблематично добираться до офиса или посвящать работе пять дней в неделю.</p>
            <button>Подробнее</button>

            <img src="Подробнее" alt="" />
        </div>
        <div className='secondComponents'>

            <img src="./img/awa.png" alt="awa" />

            </div>
    </>
    )
        
}

export default Vacancy