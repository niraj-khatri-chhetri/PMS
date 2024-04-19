import './App.css';
import Form from './components/Form';
import SignupForm from './components/Signup';
import LoginForm from './components/Login';
import ProductForm from './components/ProductForm';
import Navbar from './components/Navbar/nav';

//context
// import { useInputContext } from './components/Input/InputContext';
import { InputProvider } from './components/Input/InputContext';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Form /> */}
      {/* <SignupForm /> */}
      {/* <LoginForm /> */}
      <InputProvider>
        <ProductForm />
      </InputProvider>
    </div>
  );
}

export default App;
