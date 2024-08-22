import { FC, useState } from 'react'
import { Header, TableContainer } from '../../components'
import { DataType } from '../../types/types'
import { testData, testData2 } from '../../store/data'
import './App.css'

const App: FC = () => {
  const [data, setData] = useState<DataType[]>(testData)

  const handlerButtonClick = (newData: DataType[]) => {
    setData(newData)
  }

  return (
    <div className='app'>
      <Header />
      <main>
        <div className='app__container'>
          <p className='app__title'>Добро пожаловать на главную страницу!</p>
          <div className='app__button-list'>
            <button className='app__button-list__btn' onClick={() => handlerButtonClick(testData)}>
              Тестовые данные 1
            </button>
            <button className='app__button-list__btn' onClick={() => handlerButtonClick(testData2)}>
              Тестовые данные 2
            </button>
          </div>
        </div>
        <TableContainer data={data} />
      </main>
    </div>
  )
}

export default App
