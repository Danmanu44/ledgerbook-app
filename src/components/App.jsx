import  React ,{useState,useEffect} from 'react';

import AppBar from './AppBar';
import AddClient from './AddClient';
import ClientList from './ClientList';
import api from '../api/client'
import {  CssBaseline } from '@mui/material';
import {useSelector,useDispatch} from 'react-redux';
import * as  clientActions  from '../redux/actions/clientActions';
// import {BrowserRouter, BrowserRouter as Router,Route,Routes,Switch} from 'react-router-dom';

import Router from '../routes';
import  Home  from './Home';
import About  from './About';
import Profile from './Profile';
import Appcopy from './Appcopy';
import Login from './Login';
import NotFound from './NotFound';
import Post from './Post';
import ThemeProvider from '../theme';

export default function FormDialog() {

//   const LOCAL_STORAGE_KEY_CLIENT = "clients";
//   const LOCAL_STORAGE_KEY_TRANSACTIONS = "transactions";

//   const redClient= useSelector((state)=>state);
//   const dispatch=useDispatch();
//   // console.log("######useState :"+redClient[0]?.name);
//   const addClientHandler= async(client)=>{
  
//     const response = await api.post("clients",client);

    
//     if(response.status==201){
      
//       const getAllClients = async()=>{
//         const allClients = await retrievedClients();
      
//         if(allClients) setClients(allClients); 
//       }
//       getAllClients();
     
     
//     }

   
   

//   }

 
//   const updateClientHandler= async(client)=>{
//     console.log(client);
//     const response = await api.put(`clients/${client.id}`,client);
//     console.log("########Updated data :"+response.data);
//     //const{id,name,phoneNumber,email,balance} = response.data;
//     const getAllClients = async()=>{
//       const allClients = await retrievedClients();
    
//       if(allClients) setClients(allClients); 
//     }
//     getAllClients();
   

//   }

//   const addTransactiontHandler= async(transaction,client)=>{
//     console.log("Add Transaction Handler "+transaction);
//     const response = await api.post("transactions",transaction);
   
//       updateClientHandler(client);
//     if(response.status.ok){
      
//     }

//     setClients([...clients,response.data]);
   

//   }
//   const addWithdrawTransactiontHandler=async(transaction,client)=>{
//     console.log("Add Transaction Handler "+transaction);
//     const response = await api.post("transactions",transaction);
   
//       updateClientHandler(client);
//     if(response.status.ok){
      
//     }

//     setClients([...clients,response.data]);
   

//   }
//   const removeClientHandler = async (id)=>{
//     await api.delete(`clients/${id}`);
//     const newClientList = clients.filter((client)=>{
//       return client.id !==id;

//     });
//     setClients(newClientList);
//   }

 
//   var [clients,setClients]=useState([]); //setting the init value as empty array
//   var [open,setOpen]=useState(false);
//  //retrieved from jsonserver using  axios 
//  const sortClient = arr =>{
//   arr.sort((a,b)=>{return b-a})
//   return arr
// }
//  const retrievedClients = async ()=>{
//   const response = await api.get("clients");
//   const ClientsSort = response.data.sort();
// const ClientsReverse = ClientsSort.reverse();
//   return  ClientsReverse;

// }
//  //console.log(api.get("clients"));
//   useEffect(()=>{
//     // var   retrievedClients=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
//     // if(retrievedClients){
//     //    console.log("######retrieved")
//     //   setClients(retrievedClients);
//     // }
    
//       const getAllClients = async()=>{
//         const allClients = await retrievedClients();
      
//         if(allClients) {
//           setClients(allClients); 
//           dispatch(clientActions.setClients(allClients))
//         }
//       }
//       getAllClients();
//   },[]);

//    useEffect(()=>{
//     try{
//       // if( localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(clients))){
//       //   console.log("##########inserted succeeded");
//       // }
//       // else{
//       //   console.log("##########insert error");
//       // }
       


//     }
//     catch(e){
//       console.log(e);

//     }

//   },[clients])  
  
 
//  const Clients =[
//   {
//     name:"Hafiz Danmanu",
//     PhoneNumber:"09063183993",
//     email:"h@gmail.com",
//     balance:3444
//   },
//   {
//     name:"Abubakar Danmanu",
//     PhoneNumber:"09063183993",
//     email:"abk@gmail.com",
//     balance:3444
//   }
//  ]
  return (
    <div>
       <ThemeProvider>
       <CssBaseline/>
       
       {/* <AppBar /> */}
       
     {/* <Router>
        <Routes>
       <Route path='/' element={<Home/>} exact />
       <Route path='/about' element={<About/>}  />
       <Route path='/profile' element={<Appcopy/>}  />
       <Route path='/login' element={<Login/>}  />
       <Route path='/post/:id' element={<Post/>}  />


       <Route path='*' element={<NotFound/>}  />

      </Routes>
     </Router> */}
     <Router/>

       </ThemeProvider>
      
        


      
     
    </div>
  );
}
