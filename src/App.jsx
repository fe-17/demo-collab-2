// import './App.css';
import { Routes, Route, Navigate} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Sync from './pages/Sync';

function App() {
  return (

    <div className='App'>
      <Routes>
        <Route path='/' element={<Navigate to='/register' />} />
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/sync' element={<Sync />} />
      </Routes>
    </div>
  );
}

export default App;
