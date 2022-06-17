import  React ,{useState,useEffect} from 'react';

import AppBar from './AppBar';
import Client from './Client';
import AddClient from './AddClient';
import ClientList from './ClientList';
import api from '../api/client'
import { Button } from '@mui/material';
import UpdateClient from './UpdateClient'
export default function FormDialog() {

  const LOCAL_STORAGE_KEY = "clients";
  const addClientHandler= async(client)=>{
    console.log("update Handler "+client);
    const response = await api.post("clients",client);

    setClients([...clients,response.data]);
   

  }

 
  const updateClientHandler= async(client)=>{
    console.log(client);
    const response = await api.put(`clients/${client.id}`,client);
    console.log("########Updated data :"+response.data);
    const{id,name,phoneNumber,email} = response.data;
    setClients(clients.map((client)=>{
      return client.id === id? {...response.data}:clients;
    }));
   

  }
  const removeClientHandler = async (id)=>{
    await api.delete(`clients/${id}`);
    const newClientList = clients.filter((client)=>{
      return client.id !==id;

    });
    setClients(newClientList);
  }

 
  var [clients,setClients]=useState([]); //setting the init value as empty array
  var [open,setOpen]=useState(false);
 //retrieved from jsonserver using  axios 
    
 const retrievedClients = async ()=>{
  const response = await api.get("clients");
 // console.log("hey "+response);
  return  response.data;

}
 //console.log(api.get("clients"));
  useEffect(()=>{
    // var   retrievedClients=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if(retrievedClients){
    //    console.log("######retrieved")
    //   setClients(retrievedClients);
    // }
    
      const getAllClients = async()=>{
        const allClients = await retrievedClients();
        console.log("hey "+allClients);
        if(allClients) setClients(allClients); 
      }
      getAllClients();
  },[]);

   useEffect(()=>{
    try{
      // if( localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(clients))){
      //   console.log("##########inserted succeeded");
      // }
      // else{
      //   console.log("##########insert error");
      // }
       


    }
    catch(e){
      console.log(e);

    }

  },[clients])  
  
 
 const Clients =[
  {
    name:"Hafiz Danmanu",
    PhoneNumber:"09063183993",
    email:"h@gmail.com",
    balance:3444
  },
  {
    name:"Abubakar Danmanu",
    PhoneNumber:"09063183993",
    email:"abk@gmail.com",
    balance:3444
  }
 ]
  return (
    <div>
      
        <AppBar />
        <br></br>
        
        <AddClient open={open} addClientHandler={addClientHandler}  />
       
        <ClientList clients={clients} getClientId={removeClientHandler}  updateClientHandler={updateClientHandler}/>
     
    </div>
  );
}
