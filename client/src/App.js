import './App.css';
import SignupForm from './components/Signup';
import LoginForm from './pages/Login';
import Navbar from './components/Navbar/Index';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';

import ProductForm from './pages/ProductForm';
import Products from './pages/Products';

function App() {
  return (
    <BrowserRouter className="App">
      <Navbar />
      <Routes>
        <Route path="/add-product" element={<ProductForm />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:productId" element={<ProductForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
