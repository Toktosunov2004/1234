import React, { useEffect, useState } from 'react' 
 
import axios from 'axios' 
 
import './SortVakansion.scss' 
 
 
 
const SortVakansion = () => { 
 
    function work_num(){ 
        document.getElementById('rez').classList.add('button_bg'); 
    } 
     
    function work_none(){ 
            document.getElementById('rez').classList.remove('button_bg'); 
    } 
 
            function work_num1(){ 
            document.getElementById('rez1').classList.add('button_bg'); 
            } 
 
            function work_none1(){ 
                    document.getElementById('rez1').classList.remove('button_bg'); 
            } 
                    function work_num2(){ 
                    document.getElementById('rez2').classList.add('button_bg'); 
                    } 
     
                    function work_none2(){ 
                    document.getElementById('rez2').classList.remove('button_bg'); 
                    } 
 
 
 
    return ( 
        <div> 
            <div className='site_wrap'>         
        <div className="main"> 
            <div className="work"> 
            <h2><span>Учитель в школу-для глухих</span>630usd</h2> 
            <p>Работа в хороших условия</p> 
            <p>defSchool</p> 
            <p>Бишкек</p> 
            <h3>7 лет работаем с детьми. 1 500 детей занимаются постоянно. 100 000 проведённых уроков. 100 человек в команде. Хотите и умеете работать с клиентами: опыт в любом клиентском сервисе точно поможет. Знаете, как пользоваться google-инструментами: презентациями, таблицами...</h3> 
            <div className='wrap'> 
            <button id='my_button' onClick={work_num}>Отклитнуться</button> 
            <p className='conatact' id='rez' >0999(123)(123)<span onClick={work_none} id='work_none'>X</span></p>  
            </div> 
            </div> 
            </div> 
 
 
            <div className="work"> 
            <h2><span>Директор в новую школу-для глухих</span>710usd</h2> 
            <p>Работа в хороших условия</p> 
            <p>Schoolish</p> 
            <p>Бишкек</p> 
            <h3>7 лет работаем с детьми. 1 500 детей занимаются постоянно. 100 000 проведённых уроков. 100 человек в команде. Хотите и умеете работать с клиентами: опыт в любом клиентском сервисе точно поможет. Знаете, как пользоваться google-инструментами: презентациями, таблицами...</h3> 
            <div className='wrap'> 
            <button id='my_button' onClick={work_num1}>Отклитнуться</button> 
            <p className='conatact' id='rez1' >0999(123)(123)<span onClick={work_none1} id='work_none'>X</span></p>  
            </div> 
            </div> 
 
 
            <div className="work"> 
            <h2><span>переводчик на язык жестов</span>1700usd</h2> 
            <p>помощник Travis Scott`a</p> 
            <p>AstroWorld</p> 
            <p>Бишкек</p> 
            <h3>иметь опыт не менее 6 лет, Стрессоустойчивость</h3> 
            <div className='wrap'> 
            <button id='my_button' onClick={work_num2}>Отклитнуться</button> 
            <p className='conatact' id='rez2' >0999(123)(123)<span onClick={work_none2} id='work_none'>X</span></p>  
            </div> 
            </div> 
 
 
        </div> 
         
        </div> 
    ) 
} 
 
export default SortVakansion;