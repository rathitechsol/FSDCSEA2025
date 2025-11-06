import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Mainlayout from './component/mainlayout.jsx'
import Dashboard from './component/dashboard.jsx'
import Login from './component/login.jsx'
import Registration from './component/registration.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Mainlayout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='registration' element={<Registration/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
