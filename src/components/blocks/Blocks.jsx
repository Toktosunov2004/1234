import React from 'react'

import './blocks.scss'

const Blocks = () => {
  return (
      <div className='txt'>
          <h3>Пожертвуйте в нашу организацию </h3>
{/*   
          <div className='bank'>
            <form method='POST' action='https://demo.paykeeper.ru/create/' >
  Введите сумму доната: 
    <input type='text' name='sum' /> <br />
  Введите номер заказа: 
    <input type='number' name='orderid'/> <br />
  <input className='oplatit' type='submit' value='Перейти к оплате' />
</form>
        </div> */}

          <div className="slider">
      <div className="left">
          <h4>16 ДЕКАБРЯ 15:29
В Госдуме предложили устанавливать в общественных местах зарядки для инвалидных электроколясок
</h4>
      

        
      </div>
      
      <div className="right">

        <div className="right2">
          <div className="right1"></div>
          <div className="right1"></div>
        </div>

        <div>
          <div className="right1"></div>
          <div className="right1"></div>
        </div>
      </div >
    </div>
    

      </div>
      
    
  )
}

export default Blocks