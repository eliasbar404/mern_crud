import './Css/App.css';
import Navbar from './Componenets/Navbar';
import Home from './Componenets/Home';
import Add from './Componenets/Add';
import Update from './Componenets/update';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/'    element={<Home/>}></Route>
                <Route path='/Add' element={<Add/>}></Route>
                <Route path='/update/:id' element={<Update/>}></Route>
            </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
