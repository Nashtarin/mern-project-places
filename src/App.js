import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './user/pages/User';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UsserPlaces from './places/pages/UsserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';
import Auth from './user/pages/Auth';

function App() {
  return <BrowserRouter>
  <MainNavigation/>
  <main>
  <Routes>
    <Route  path='/' element={<User/>} />
    <Route path='/:userId/places' exact element={<UsserPlaces/>} />
    <Route path='/places/new' element={<NewPlace/>} />
    <Route path='/places/:placeId' element={<UpdatePlace/>} />
    <Route path='/auth' element={<Auth/>} />
    
  </Routes>
  </main>
  
  
  </BrowserRouter>
}

export default App;
