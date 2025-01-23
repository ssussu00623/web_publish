import logo from './logo.svg';
import './styles/shoppy.css'
import './App.css';
import Layout from './pages/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductList from './pages/ProductList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route index = '/all' element={<ProductList />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
