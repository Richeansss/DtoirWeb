import { FC } from 'react'
import { IEmployee, ITask, ITaskAssignment } from '../../types/types'
import './TaskList.css'

interface ITaskListProps {
  employees: IEmployee[]
  tasks: ITask[]
  taskAssignments: ITaskAssignment[]
  onAdd: (title: string, startDate: string, endDate: string, status: string) => void
  onDelete: (index: number) => void
}

const TaskList: FC<ITaskListProps> = (props) => {
  const { employees, tasks, taskAssignments, onAdd, onDelete } = props

  return (
    <div className='task-list'>
      <div className='task-list__header'>
        <label htmlFor='employee'>
          Фильтр по работнику:
          <select name='employee' id='employee' className='task-list__select'>
            <option value=''>Все работники</option>
            {employees.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor='tasks'>
          Фильтр по задаче:
          <select name='tasks' id='tasks' defaultValue='' className='task-list__select'>
            <option value=''>Все задачи</option>
            {tasks.map((item) => (
              <option key={item.id} value={item.title}>
                {item.title}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor='status'>
          Фильтр по статусу:
          <select name='status' id='status' className='task-list__select'>
            <option value=''>Все статусы</option>
            <option value='complete'>Выполнено</option>
            <option value='stopped'>Приостановлено</option>
            <option value='process'>В процессе</option>
          </select>
        </label>
      </div>
      <div className='task-list__table__container'>
        <table className='task-list__table'>
          <thead className='task-list__table__header'>
            <tr className='task-list__table__header__row'>
              <th className='task-list__table__header__row__item'></th>
              <th className='task-list__table__header__row__item'>Работник</th>
              <th className='task-list__table__header__row__item'>Задача</th>
              <th className='task-list__table__header__row__item'>Дата начала</th>
              <th className='task-list__table__header__row__item'>Дата конца</th>
              <th className='task-list__table__header__row__item'>Статус</th>
            </tr>
          </thead>
          <tbody className='task-list__table__body'>
            {taskAssignments.map((assignment) => {
              const employee = employees.find((emp) => emp.id === assignment.employeeId)
              const task = tasks.find((tsk) => tsk.id === assignment.taskId)

              return (
                <tr
                  className='task-list__table__body__row'
                  key={`${assignment.taskId} ${assignment.employeeId}`}
                >
                  <td className='task-list__table__body__row__item'>{assignment.taskId}</td>
                  <td className='task-list__table__body__row__item'>
                    {employee ? employee.name : 'Неизвестный работник'}
                  </td>
                  <td className='task-list__table__body__row__item'>
                    {task ? task.title : 'Неизвестная задача'}
                  </td>
                  <td className='task-list__table__body__row__item'>
                    {task ? task.startDate : 'Нет данных'}
                  </td>
                  <td className='task-list__table__body__row__item'>
                    {task ? task.endDate : 'Нет данных'}
                  </td>
                  <td className='task-list__table__body__row__item'>
                    {task ? task.status : 'Нет данных'}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div className='task-list__footer'>
        <div className='task-list__footer__item'>
          <label htmlFor=''>
            <span>Рабочие:</span>
            <select name='employee_add' id='employee_add'>
              {employees.map((item) => (
                <option key={item.id} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>
          <div className='task-list__footer__item__button-list'>
            <button className='task-list__footer__item__button-list__item'>
              Добавить работника
            </button>
            <button className='task-list__footer__item__button-list__item'>
              Удалить работников
            </button>
          </div>
        </div>
        <div className='task-list__footer__item'>
          <label htmlFor=''>
            <span>Название задачи:</span>
            <input type='text' />
          </label>
        </div>
        <div className='task-list__footer__item'>
          <label htmlFor=''>
            <span>Дата начала:</span>
            <input type='text' />
          </label>
        </div>
        <div className='task-list__footer__item'>
          <label htmlFor=''>
            <span>Дата конца:</span>
            <input type='text' />
          </label>
        </div>
        <div className='task-list__footer__item'>
          <label htmlFor=''>
            <span>Статус:</span>
            <input type='text' />
          </label>
        </div>
        <div className='task-list__foter__button-list'>
          <button className='task-list__footer__button-list__item'>Добавить задачу</button>
          <button className='task-list__footer__button-list__item'>Удалить задачу</button>
        </div>
      </div>
    </div>
  )
}

export { TaskList }
