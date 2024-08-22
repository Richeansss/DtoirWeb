import { FC, useState } from 'react'
import './TaskManager.css'
import { EmployeeList } from '../../components'

const data = [
  { id: 1, name: 'Иван Иванов' },
  { id: 2, name: 'Петр Петров' },
  { id: 3, name: 'Сидор Сидоров' },
]

const TaskManager: FC = () => {
  const [selectedPage, setSelectedPage] = useState(0)
  const [employees, setEmployees] = useState(data)

  const handleNavButtonClick = (pageId: number) => {
    setSelectedPage(pageId)
  }

  const addEmployee = (name: string) => {
    if (name.trim()) {
      const newEmployee = { id: employees.length + 1, name }
      setEmployees([...employees, newEmployee])
    }
  }

  const removeEmployee = (index: number) => {
    if (employees.length > 0) {
      const updatedEmployees = employees.filter((_, i) => i !== index)
      setEmployees(updatedEmployees)
    }
  }

  return (
    <div className='task-manager'>
      <nav className='task-manager__nav'>
        <ul className='task-manager__nav__list'>
          <li
            className='task-manager__nav__list__item'
            style={{ backgroundColor: selectedPage === 0 ? 'transparent' : '#f3f3f3' }}
            onClick={() => handleNavButtonClick(0)}
          >
            Работники
          </li>
          <li
            className='task-manager__nav__list__item'
            style={{ backgroundColor: selectedPage === 1 ? 'transparent' : '#f3f3f3' }}
            onClick={() => handleNavButtonClick(1)}
          >
            Задачи
          </li>
          <li
            className='task-manager__nav__list__item'
            style={{ backgroundColor: selectedPage === 2 ? 'transparent' : '#f3f3f3' }}
            onClick={() => handleNavButtonClick(2)}
          >
            Календарь
          </li>
        </ul>
      </nav>
      <div className='task-manager__content'>
        {selectedPage === 0 && (
          <EmployeeList employees={employees} onAdd={addEmployee} onDelete={removeEmployee} />
        )}
        {selectedPage === 1 && <div>Здесь будут задачи</div>}
        {selectedPage === 2 && <div>Здесь будет календарь</div>}
      </div>
    </div>
  )
}

export { TaskManager }
