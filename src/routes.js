
import  React ,{useState,useEffect} from 'react';

import AppBar from './component/AppBar';
import AddClient from './component/AddClient';
import ClientList from './component/ClientList';
import api from './api/client'
import {  CssBaseline } from '@mui/material';
// import {BrowserRouter, BrowserRouter as Router,Route,Routes,Switch} from 'react-router-dom';
import { Navigate, useRoutes } from 'react-router-dom';
import  Home  from './component/Home';
import About  from './component/About';
import Profile from './component/Profile';
import Appcopy from './component/Appcopy';
import Login from './component/Login';
import NotFound from './component/NotFound';
import Post from './component/Post';

export default function Router() {
    return useRoutes([
        // {
        //     path: '/',
        //     element: <AddClient />,
        //     children: [
             
             
        //     ],
        //   },
      {
        path: '/',
        element: <Appcopy />,
        children: [
          { path: 'newclient', element: <AddClient /> },
          { path: 'clients', element: <ClientList /> },
          { path: 'profile', element: <Profile /> },
         
        ],
      },
     
      
      { path: '*', element: <Navigate to="/404" replace /> },
    ]);
  }
  