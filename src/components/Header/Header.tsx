import { FC } from 'react'
import './Header.css'

const Header: FC = () => {
  return (
    <header className='header'>
      <section className='left-section'>
        <button>КС</button>
        <button>ГРС</button>
        <button>ЛИН.ЧАСТЬ</button>
        <button>КАП.СТРОЙ</button>
        <button>ПРОЧЕЕ</button>
      </section>
      <section className='right-section'>
        <button>ГТТ</button>
        <button>ФИЛИАЛЫ</button>
      </section>
    </header>
  )
}

export { Header }
