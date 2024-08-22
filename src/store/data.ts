// TODO: Удалить после переезда на Axios и Redux для глобального стейта и работы с Axios

import { IData, IData2, IData3 } from '../types/types'

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
