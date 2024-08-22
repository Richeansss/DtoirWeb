// TODO: Удалить после переезда на Axios и Redux для глобального стейта и работы с Axios

import { IData, IData2, IData3, IEmployee, ITask, ITaskAssignment } from '../types/types'

export const testData: IData[] = [
  { name: 'John Doe', age: 28, position: 'Developer' },
  { name: 'Jane Smith', age: 34, position: 'Manager' },
  { name: 'Sam Green', age: 45, position: 'Designer' },
  { name: 'Alice Brown', age: 23, position: 'Intern' },
]

export const testData2: IData2[] = [
  { name: 'John Doe', age: 28, salary: 45000, position: 'Developer' },
  { name: 'Jane Smith', age: 34, salary: 23000, position: 'Manager' },
  { name: 'Sam Green', age: 45, salary: 10000, position: 'Designer' },
  { name: 'Alice Brown', age: 23, salary: 5000, position: 'Intern' },
]

export const testData3: IData3[] = [
  { name: 'John Doe', salary: 45000, position: 'Developer' },
  { name: 'Jane Smith', salary: 23000, position: 'Manager' },
  { name: 'Sam Green', salary: 10000, position: 'Designer' },
  { name: 'Alice Brown', salary: 5000, position: 'Intern' },
]

export const dataEmployees: IEmployee[] = [
  { id: 1, name: 'Алексей' },
  { id: 2, name: 'Мария' },
  { id: 3, name: 'Дмитрий' },
  { id: 4, name: 'Елена' },
  { id: 5, name: 'Сергей' },
  { id: 6, name: 'Анна' },
  { id: 7, name: 'Олег' },
  { id: 8, name: 'Татьяна' },
  { id: 9, name: 'Иван' },
  { id: 10, name: 'Ксения' },
]

export const dataTasks: ITask[] = [
  {
    id: 1,
    title: 'Разработка нового функционала',
    startDate: '2023-10-01',
    endDate: '2023-10-15',
    status: 'process',
  },
  {
    id: 2,
    title: 'Тестирование приложения',
    startDate: '2023-10-05',
    endDate: '2023-10-20',
    status: 'process',
  },
  {
    id: 3,
    title: 'Написание документации',
    startDate: '2023-10-02',
    endDate: '2023-10-10',
    status: 'complete',
  },
  {
    id: 4,
    title: 'Обновление базы данных',
    startDate: '2023-10-03',
    endDate: '2023-10-12',
    status: 'stopped',
  },
  {
    id: 5,
    title: 'Устранение багов',
    startDate: '2023-10-07',
    endDate: '2023-10-14',
    status: 'process',
  },
  {
    id: 6,
    title: 'Создание дизайна интерфейса',
    startDate: '2023-10-01',
    endDate: '2023-10-15',
    status: 'complete',
  },
  {
    id: 7,
    title: 'Анализ требований',
    startDate: '2023-10-05',
    endDate: '2023-10-20',
    status: 'process',
  },
  {
    id: 8,
    title: 'Разработка API',
    startDate: '2023-10-04',
    endDate: '2023-10-18',
    status: 'process',
  },
  {
    id: 9,
    title: 'Подготовка к релизу',
    startDate: '2023-10-10',
    endDate: '2023-10-25',
    status: 'stopped',
  },
  {
    id: 10,
    title: 'Обучение пользователей',
    startDate: '2023-10-15',
    endDate: '2023-10-30',
    status: 'process',
  },
]

export const dataTaskAssignments: ITaskAssignment[] = [
  { employeeId: 1, taskId: 1 },
  { employeeId: 1, taskId: 3 },
  { employeeId: 2, taskId: 2 },
  { employeeId: 2, taskId: 5 },
  { employeeId: 3, taskId: 4 },
  { employeeId: 4, taskId: 6 },
  { employeeId: 5, taskId: 7 },
  { employeeId: 6, taskId: 8 },
  { employeeId: 7, taskId: 9 },
  { employeeId: 8, taskId: 10 },
]
