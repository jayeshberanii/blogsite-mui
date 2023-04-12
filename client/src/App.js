import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Blogs from './pages/Blogs';
import Home from './pages/Home';
import Login from './pages/Login';
import Main from './pages/Main';
import Register from './pages/Register';
import Users from './pages/Users';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />}>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Main />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/users' element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
