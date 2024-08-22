import { FC, useState } from 'react'
import './TaskManager.css'
import { EmployeeList, TaskList } from '../../components'
import { dataEmployees, dataTaskAssignments, dataTasks } from '../../store/data'

const TaskManager: FC = () => {
  const [selectedPage, setSelectedPage] = useState(0)
  const [employees, setEmployees] = useState(dataEmployees)
  const [tasks, setTasks] = useState(dataTasks)

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

  const addTask = (title: string, startDate: string, endDate: string, status: string) => {
    if (title.trim()) {
      const newTask = { id: tasks.length + 1, title, startDate, endDate, status }
      setTasks([...tasks, newTask])
    }
  }

  const removeTask = (index: number) => {
    if (tasks.length > 0) {
      const updatedTasks = tasks.filter((_, i) => i !== index)
      setTasks(updatedTasks)
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
        {selectedPage === 1 && (
          <TaskList
            employees={employees}
            tasks={tasks}
            taskAssignments={dataTaskAssignments}
            onAdd={addTask}
            onDelete={removeTask}
          />
        )}
        {selectedPage === 2 && <div>Здесь будет календарь</div>}
      </div>
    </div>
  )
}

export { TaskManager }
