import './App.css';
import NabBar from './component/NavBar/NabBar';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Items from './component/Items/Items';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Login from './component/Login/Login';

function App() {
  return (
    <div className="App">
      <NabBar></NabBar>
      <Routes>
        <Route path='/' element = {<Home></Home>}></Route>
        <Route path='/home' element = {<Home></Home>}></Route>
        <Route path='/item' element = {<Items></Items>}></Route>
        <Route path='/about' element = {<About></About>}></Route>
        <Route path='/contact' element = {<Contact></Contact>}></Route>
        <Route path='/login' element = {<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
