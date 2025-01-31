import { Route, Routes } from 'react-router-dom'
import './App.scss'
import { LoginLayout } from './components/Layouts/LoginLayout/LoginLayout'
import { LoginForm } from './components/Forms/LoginForm/LoginForm'

function App() {


  return (
    <Routes>
     <Route element={<LoginLayout/> }>
          <Route path='/' element={<LoginForm/>}/> 
          <Route path='/sign-up' element={<LoginForm/>}/> 
        </Route>
    </Routes>
     
  )
}

export default App
