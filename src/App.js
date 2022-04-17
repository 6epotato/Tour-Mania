import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import HeaderSection from './Shared Folders/HeaderSection/HeaderSection';
import Footer from './Shared Folders/Footer/Footer';
import About from './About/About';
import Login from './Authentication/Login/Login';
import Register from './Authentication/Register/Register';
import NotFound from './NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <HeaderSection></HeaderSection>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
