import { MainPage, TablePage, TaskManager } from '../pages'

export const routes = [
  { path: '/', element: <MainPage />, exact: true },
  { path: '/table-page', element: <TablePage />, exact: true },
  { path: '/task-manager', element: <TaskManager />, exact: true },
]
