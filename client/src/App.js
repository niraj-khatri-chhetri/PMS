import './App.css';
import SignupForm from './components/Signup';
import LoginForm from './components/Login';
import Navbar from './components/Navbar/Index';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';

import { Grid } from './components/Styles/Index';
import { basic, color } from './components/Styles/theme';
import styled from 'styled-components';

//context
// import { useInputContext } from './components/Input/InputContext';
// import { InputProvider } from './components/Input/InputContext';

import ProductForm from './pages/ProductForm';

const Div = styled.div`
  border: 1px solid green;
`;

function App() {
  return (
    <BrowserRouter className="App">
      <Navbar />

      <Routes>
        <Route path="/add-product" element={<ProductForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
      {/* <Form /> */}
      {/* <SignupForm /> */}
      {/* <LoginForm /> */}
    </BrowserRouter>
  );
}

export default App;
