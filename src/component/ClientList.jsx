import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ClientCard from "./ClientCard";
import { Box, CardContent, Grid } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import {useSelector} from 'react-redux';
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
       <List sx={{ width: '100%',  bgcolor: 'background.paper' }}>
       <Grid flexDirection={'column'} container  justifyContent="center">
       {Clients}
       </Grid>
        
       
        
      </List>
     
     </Container>
          </Box> )

}
export default ClientList;