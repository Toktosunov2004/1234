import React from 'react'

import './footer.scss'

const Footer = () => {
    return (
        <div className='ftr'>
                <img src="./img/Group.png" alt="logo" />
                <p>llive@gmail.com</p>
                <p className='p_2'>=996 705 55 55 74</p>
                <img className='inst' src="./img/inst.png" alt="app"/>   

                <div className='ftr_2'>
                    <ul>
                        <li>Консультация</li>
                        <li>Форум</li>
                        <li>Вакансии</li>
                        <li>Знакомство</li>
                    </ul>
                    </div>
                    <div className='ftr_3'>
                        <h3>Оставьте заявку на волонтерство</h3>
                        <p>Помощь в организации мероприятия для инвалидам</p>
                        <div className='rgs'>
                                <input type="text" placeholder='Напишите вашу почту'/>
                                <button>Отправить</button>

                        </div>
                      
                        
                        </div>    

        </div>

    )
}

export default Footer