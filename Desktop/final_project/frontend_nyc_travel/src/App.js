
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NavBar from './Components/NavBar';

function App() {
  return (
    <div >
      {/* Wrapping the application with BrowserRouter, to enable client-side routing */}
      <BrowserRouter>
        <NavBar></NavBar>,
        <Routes>
          <Route>

          </Route>
        </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
