import { Route, Routes } from 'react-router-dom'
import { routes } from '../router'
import App from '../App'

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element}></Route>
      ))}
      <Route path='*' element={<App />}></Route>
    </Routes>
  )
}

export default AppRouter
