import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import HeaderSection from './Shared Folders/HeaderSection/HeaderSection';
import Footer from './Shared Folders/Footer/Footer';
import About from './About/About';
import Checkout from "./Checkout/Checkout"
import Login from './Authentication/Login/Login';
import Register from './Authentication/Register/Register';
import NotFound from './NotFound/NotFound';
import RequireAuth from './Authentication/RequireAuth/RequireAuth';
import ServiceDetail from './serviceDetail/ServiceDetail';

function App() {
  return (
    <div className="App">
      <HeaderSection></HeaderSection>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/servicedetail' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
