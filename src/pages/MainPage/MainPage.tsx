import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import './MainPage.css'

const MainPage: FC = () => {
  return (
    <div className='main-page'>
      <div className='main-page__button-list'>
        <NavLink to='/table-page' className='main-page__button-list__item'>
          Table Page
        </NavLink>
        <NavLink to='/task-manager' className='main-page__button-list__item'>
          Task Manager
        </NavLink>
      </div>
    </div>
  )
}

export { MainPage }
