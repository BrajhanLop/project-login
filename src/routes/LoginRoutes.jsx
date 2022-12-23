import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBarr from '../components/NavBarr';
import Error from '../pages/Error';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Products from '../pages/Products';
import Register from '../pages/Register';

const LoginRoutes = () => {
    return (
        <>
        <NavBarr />
           <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>}  />
            <Route path='/products' element={<Products/>}  />
            <Route path='/register' element={<Register/>}  />
            <Route path='*' element={<Error/>}  />
            </Routes> 
        </>
    );
};

export default LoginRoutes;