import Home from './pages/Home/Home'
import './App.css';
import Navigation from './components/shared/Navigation/Navigation';
import {BrowserRouter, Routes , Route} from 'react-router-dom';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route exact path="/"   element={<Home/>}>
            
        </Route>
        <Route exact path="/register"   element={<Register/>}>
        
            
        </Route>
        <Route exact path="/login"   element={<Login/>}>

        </Route>
        
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
