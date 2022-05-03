import './App.css';
import NabBar from './component/NavBar/NabBar';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Items from './component/Items/Items';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Login from './component/Login/Login';
import NotFound from './component/Shared/NotFound/NotFound';
import Register from './component/Register/Register';
import RequireAuth from './component/RequireAuth/RequireAuth';
import ManageInventory from './component/ManageInventory/ManageInventory';
import AddItem from './component/AddItem/AddItem';
import ItemDetail from './component/ItemDetail/ItemDetail';

function App() {
  return (
    <div className="App">
      <NabBar></NabBar>
      
      <Routes>
        <Route path='/' element = {<Home></Home>}></Route>
        <Route path='/home' element = {<Home></Home>}></Route>
        <Route path='/inventory' element = {
        <RequireAuth>
          <Items></Items>
        </RequireAuth>
        }></Route>
        <Route path='/item/:id' element = {
        <RequireAuth>
          <ItemDetail></ItemDetail>
        </RequireAuth>
        }></Route>
        <Route path='/manageInventory' element = {
        <RequireAuth>
          <ManageInventory></ManageInventory>
        </RequireAuth>
        }></Route>
        <Route path='/addItem' element = {
        <RequireAuth>
          <AddItem></AddItem>
        </RequireAuth>
        }></Route>
        <Route path='/about' element = {<About></About>}></Route>
        <Route path='/contact' element = {<Contact></Contact>}></Route>
        <Route path='/login' element = {<Login></Login>}></Route>
        <Route path='/register' element = {<Register></Register>}></Route>
        <Route path='*' element = {<NotFound></NotFound>}></Route>
      </Routes>
        
    </div>
  );
}

export default App;
