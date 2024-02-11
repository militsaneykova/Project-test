
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import AdditionalTours from './Pages/AdditionalTours';
import About from './Pages/About';

function App() {
  return (
    <div >
      {/* Wrapping the application with BrowserRouter, to enable client-side routing */}
      <BrowserRouter>
        <NavBar></NavBar>,
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/additional-tours' element={<AdditionalTours/>}></Route>
            <Route path=':/tourId' element={<About/>}></Route>
        </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
