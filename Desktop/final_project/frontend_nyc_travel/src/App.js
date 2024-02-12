
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './pages/Home';
import AdditionalTours from './pages/AdditionalTours';
import About from './pages/About';
import Cart from './pages/Cart';
import  LoginSignup from './pages/LoginSignup';
import Footer from './components/Footer'
import banner from './assets/banner.jpeg'
import React, { useEffect, useState } from "react";
import { UserContext } from "./context/UserContext";
import Userpage  from './pages/Userpage';
import Signup from './pages/Signup'


function App() {
  const [tours, setTours] = useState([]);
  const [user, setUser] = useState(null)
  //useEffect
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:4000/api/tours");
      const data = await res.json();
      console.log(data);
      //set the data to the state tours variable
      setTours(data);
    };
    fetchData();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
    <div >
      {/* Wrapping the application with BrowserRouter, to enable client-side routing */}
      <BrowserRouter>
        <NavBar></NavBar>,

        <Routes>
          <Route path='/' element={<Home tours={tours}/>}></Route>
          <Route path='/about' element={<About banner={banner}/>}></Route>
          <Route path='/additional-tours\' element={<AdditionalTours/>}></Route>
            <Route path=':/tourId' element={<AdditionalTours/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/login' element={<LoginSignup/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/userpage' element={<Userpage/>}></Route>
        </Routes>  
        <Footer/>    
      </BrowserRouter>
    </div>
    </UserContext.Provider>
  );
}

export default App;
