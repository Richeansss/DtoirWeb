import { FC, useState } from 'react'
import { Header, TableContainer } from '../../components'
import { testData, testData2 } from '../../store/data'
import { DataType } from '../../types/types'
import './TablePage.css'
import { NavLink } from 'react-router-dom'

const TablePage: FC = () => {
  const [data, setData] = useState<DataType[]>(testData)

  const handlerButtonClick = (newData: DataType[]) => {
    setData(newData)
  }

  return (
    <div className='table-page'>
      <Header />
      <main>
        <div className='table-page__container'>
          <p className='table-page__title'>Добро пожаловать на главную страницу!</p>
          <div className='table-page__button-list'>
            <NavLink to='/' className='table-page__button-list__btn'>
              Вернуться на главную страницу
            </NavLink>
            <button
              className='table-page__button-list__btn'
              onClick={() => handlerButtonClick(testData)}
            >
              Тестовые данные 1
            </button>
            <button
              className='table-page__button-list__btn'
              onClick={() => handlerButtonClick(testData2)}
            >
              Тестовые данные 2
            </button>
          </div>
        </div>
        <TableContainer data={data} />
      </main>
    </div>
  )
}

export { TablePage }
