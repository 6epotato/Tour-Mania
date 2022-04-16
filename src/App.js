import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import HeaderSection from './Shared Folders/HeaderSection/HeaderSection';

function App() {
  return (
    <div className="App">
      <HeaderSection></HeaderSection>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
