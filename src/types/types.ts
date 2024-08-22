export interface IData {
  name: string
  age: number
  position: string
}

export interface IData2 {
  name: string
  age: number
  salary: number
  position: string
}

export interface IData3 {
  name: string
  salary: number
  position: string
}

export type DataType = IData | IData2 | IData3

export interface IEmployee {
  id: number
  name: string
}

export interface ITask {
  id: number
  title: string
  startDate: string
  endDate: string
  status: string
}

export interface ITaskAssignment {
  employeeId: number
  taskId: number
}
