import { FC, useCallback, useEffect, useState } from 'react'
import './EmployeeList.css'

interface IEmployee {
  id: number
  name: string
}

interface IEmployeeListProps {
  employees: IEmployee[]
  onAdd: (name: string) => void
  onDelete: (index: number) => void
}

const EmployeeList: FC<IEmployeeListProps> = (props) => {
  const { employees, onAdd, onDelete } = props
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [newEmployeeName, setNewEmployeeName] = useState('')

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'ArrowDown') {
        setSelectedIndex((prevIndex) => Math.min(prevIndex + 1, employees.length - 1))
      } else if (event.key === 'ArrowUp') {
        setSelectedIndex((prevIndex) => Math.max(prevIndex - 1, 0))
      }
    },
    [employees.length],
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  const handleAddClick = () => {
    onAdd(newEmployeeName)
    setNewEmployeeName('')
  }

  const handleItemClick = (index: number) => {
    setSelectedIndex(index)
  }

  return (
    <div>
      <ul className='employee-list'>
        {employees.map((employee, index) => (
          <li
            key={employee.id}
            className='employee-list__item'
            style={{
              backgroundColor: selectedIndex === index ? '#cce5ff' : 'transparent',
            }}
            onClick={() => handleItemClick(index)}
          >
            {employee.name}
          </li>
        ))}
      </ul>
      <div className='employee__footer'>
        <div className='input-container'>
          <label htmlFor='name'>Имя работника:</label>
          <input
            id='name'
            className='employee-input'
            type='text'
            value={newEmployeeName}
            onChange={(e) => setNewEmployeeName(e.target.value)}
          />
        </div>
        <div className='employee-list__buttons'>
          <button className='employee-list__buttons__item' onClick={handleAddClick}>
            Добавить работника
          </button>
          <button className='employee-list__buttons__item' onClick={() => onDelete(selectedIndex)}>
            Удалить работника
          </button>
        </div>
      </div>
    </div>
  )
}

export { EmployeeList }
