import React from "react";
import List from '@mui/material/List';

import ClientCard from "./ClientCard";
import { Box, CardContent, Grid } from "@mui/material";

import { Container } from "@mui/system";
const ClientList =(props)=>{

 
  
  const deletClientHandler=(id)=>{
    console.log("####### id:"+id);
     props.getClientId(id);
  }
  const updateClient =(client)=>{
    props.updateClientHandler(client)
  }
  const updateTransaction =(transaction,client)=>{
    console.log("##### ClientList"+transaction.amount+client.name)
    props.addTransactiontHandler(transaction,client);
   

  }


  const updateWithdrawTransaction=(transaction,client)=>{
    console.log("##### ClientList"+transaction.amount+client.name)
    props.addTransactiontHandler(transaction,client);

  }
    const Clients=props.clients.map((client)=>{
        return (
           
               
              <ClientCard client={client} clickHandler={deletClientHandler}  updateClientHandler={updateClient} updateTransactionHandler={updateTransaction}  updateWithdrawTransactionHandler={updateWithdrawTransaction} key={client.id}/>
        
            );
    });
    console.log(props);//<Container  maxWidth="md"><Grid container  justifyContent="center">

    
    return(<Box alignContent="flex-start" >
       <Container  >
       <List sx={{ width: '100%',  marginTop:'5vh' }}>
       <Grid flexDirection={'column'} container  justifyContent="center">
       {Clients}
       </Grid>
        
       
        
      </List>
     
     </Container>
          </Box> )

}
export default ClientList;