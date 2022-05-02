import './App.css';
import NabBar from './component/NavBar/NabBar';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Items from './component/Items/Items';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Login from './component/Login/Login';
import Footer from './component/Footer/Footer';
import NotFound from './component/Shared/NotFound/NotFound';
import Register from './component/Register/Register';
import RequireAuth from './component/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <NabBar></NabBar>
      
      <Routes>
        <Route path='/' element = {<Home></Home>}></Route>
        <Route path='/home' element = {<Home></Home>}></Route>
        <Route path='/item' element = {
        <RequireAuth>
          <Items></Items>
        </RequireAuth>
        }></Route>
        <Route path='/about' element = {<About></About>}></Route>
        <Route path='/contact' element = {<Contact></Contact>}></Route>
        <Route path='/login' element = {<Login></Login>}></Route>
        <Route path='/register' element = {<Register></Register>}></Route>
        <Route path='*' element = {<NotFound></NotFound>}></Route>
      </Routes>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
