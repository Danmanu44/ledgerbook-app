
import  React ,{useState,useEffect} from 'react';

import AppBar from './components/AppBar';
import AddClient from './components/AddClient';
import ClientList from './components/ClientList';
import api from './api/client'
import {  CssBaseline } from '@mui/material';
// import {BrowserRouter, BrowserRouter as Router,Route,Routes,Switch} from 'react-router-dom';
import { Navigate, useRoutes } from 'react-router-dom';
import  Home  from './components/Home';
import About  from './components/About';
import Profile from './components/Profile';
import Appcopy from './components/Appcopy';
//import Login from './components/Login';
//import NotFound from './components/NotFound';
import Post from './components/Post';
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Blog from './pages/Blog';
import User from './pages/User';
import Login from './pages/Login';
import NotFound from './pages/Page404';
import Register from './pages/Register';
import Products from './pages/Products';
import DashboardApp from './pages/DashboardApp';

export default function Router() {
    return useRoutes([
      
        {
          path: '/',
          element: <LogoOnlyLayout />,
          children: [
            { path: '/', element: <Navigate to="/register" /> },
            { path: 'login', element: <Login /> },
            { path: 'register', element: <Register /> },
            { path: '404', element: <NotFound /> },
            { path: '*', element: <Navigate to="/404" /> },
          ],
        },
        {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
          { path: 'app', element: <DashboardApp /> },
          { path: 'client', element: <Appcopy /> },
          { path: 'products', element: <Products /> },
          { path: 'blog', element: <Blog /> },
        ],
      },
      {
        path: '/app',
        element: <Home />,
        children: [
          { path: 'newclient', element: <Appcopy /> },
          { path: 'clients', element: <ClientList /> },
          { path: 'profile', element: <Profile /> },
          { path: 'login', element: <Login /> },
        ],
      },
      
     
      { path: '*', element: <Navigate to="/404" replace /> },
        ]);
  }
  