import { ToastContainer } from 'react-toastify';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';

function App() {
  return (
    <div className='container mx-auto'>
      <Home></Home>
      <Blog></Blog>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
