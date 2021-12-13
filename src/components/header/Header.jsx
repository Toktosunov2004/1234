import React from 'react'
import { Link } from 'react-router-dom'

// style
import './header.scss'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
          <Link to="/">
        <img src="./img/Group.png" alt="logo" />
        </Link>
      </div>
      <div>
        <ul>
          <li><Link to="zayavka">Заявки</Link></li>
          <li>Знакомство</li>
          <li><Link to="/vakansion">Вакансии</Link></li>
          <li>Форум</li>
          <li ><Link to="./store">Стримы</Link></li>
        </ul>
        <button className='btn'>Заявки</button>
      </div>
    </header>
  )
}

export default Header