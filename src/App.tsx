import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.scss'
import { LoginLayout } from './components/Layouts/LoginLayout/LoginLayout'
import { LoginForm } from './components/Forms/LoginForm/LoginForm'
import { useEffect } from 'react';
import { ChatLayout } from './components/Layouts/ChatLayout/ChatLayout';

function App() {
const navigate = useNavigate();
useEffect(() => {
  if(!localStorage.getItem('user')) {
    navigate('/sign-in', {replace: true});
  } else {
    navigate('/')
  }
},[])

  return (
    <Routes>
     <Route element={<LoginLayout/> }>
          <Route path='/sign-in' element={<LoginForm/>}/> 
      </Route>
      <Route path='/' element={<ChatLayout/>}>
      </Route>
    </Routes>
     
  )
}

export default App
