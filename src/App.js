import Home from './pages/Home/Home'
import './App.css';
import Navigation from './components/shared/Navigation/Navigation';
import {BrowserRouter, Routes , Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route exact path="/"   element={<Home/>}>
            
        </Route>
        
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
