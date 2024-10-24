import SignUp from './SignUp';
import Login from './Login';
import Dashboard from './Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
