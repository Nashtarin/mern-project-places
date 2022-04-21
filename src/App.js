import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import User from './user/pages/User';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UsserPlaces from './places/pages/UsserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';
import Auth from './user/pages/Auth';
import { AuthContext } from './shared/context/auth-context';
import { useCallback, useState } from 'react';

function App() {
  const [isLoggedIn,setIsLoggedIn]=useState(false)
  const login=useCallback(()=>{
    setIsLoggedIn(true)
  },[])
  const logout=useCallback(()=>{
    setIsLoggedIn(false)
  },[])
  let routes;

  if (isLoggedIn) {
    routes = (
      <Routes>
        <Route path="/" exact element={ <User/>}/>
         
       
        <Route path="/:userId/places" exact element={<UsserPlaces />}/>
          
      
        <Route path="/places/new" exact element={ <NewPlace />}/>
         
      
        <Route path="/places/:placeId" element={<UpdatePlace />}/>
          
        <Route
        path="*"
        element={<Navigate to="/" replace />}/>
    
        
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/"  element={<User/>} />
        
    
        <Route path="/:userId/places" exact element={<UsserPlaces/>}/> 
        
        <Route path='/auth' element={<Auth/>} />
        <Route
        path="*"
        element={<Navigate to="/" replace />}/>
  
        
      </Routes>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <BrowserRouter>
        <MainNavigation />
        <main>{routes}</main>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};
{/* //   return <AuthContext.Provider value={{isLoggedIn:isLoggedIn,login:login,logout:logout}}>
//   <BrowserRouter>
//   <MainNavigation/>
//   <main>
//   <Routes>
//     <Route  path='/' element={<User/>} />
//     <Route path='/:userId/places' exact element={<UsserPlaces/>} />
//     <Route path='/places/new' element={<NewPlace/>} />
//     <Route path='/places/:placeId' element={<UpdatePlace/>} />
//     <Route path='/auth' element={<Auth/>} />
    
//   </Routes>
//   </main>
  
  
//   </BrowserRouter>
//   </AuthContext.Provider>
// } */}

export default App;
