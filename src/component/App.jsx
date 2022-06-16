import  React ,{useState,useEffect} from 'react';

import AppBar from './AppBar';
import Client from './Client';
import AddClient from './AddClient';
import ClientList from './ClientList';
export default function FormDialog() {

  const LOCAL_STORAGE_KEY = "clients";
  const addClientHandler=(client)=>{
    console.log(client);
    setClients([...clients,client]);
   

  }

 
  var [clients,setClients]=useState([]); //setting the init value as empty array
  useEffect(()=>{
    var   retrievedClients=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retrievedClients){
       console.log("######retrieved")
      setClients(retrievedClients);
    } 

  },[]);

   useEffect(()=>{
    try{
      if( localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(clients))){
        console.log("##########inserted succeeded");
      }
      else{
        console.log("##########insert error");
      }
     

    }
    catch(e){
      console.log(e);

    }

  },[clients])  
  
  const removeClientHandler = (id)=>{
    console.log("####### id: "+id);
  }
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
        <AddClient addClientHandler={addClientHandler}  />
        <ClientList clients={clients} getClientId={removeClientHandler}/>
     
    </div>
  );
}
