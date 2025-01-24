import logo from './logo.svg';
import './styles/shoppy.css'
import './App.css';
import Layout from './pages/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; 
import ProductList from './components/ProductList';
import Products from './pages/Products';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='all' element={<Products/>} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<SignUp />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
