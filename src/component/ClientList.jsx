import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ClientCard from "./ClientCard";
import { CardContent } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
const ClientList =(props)=>{
  const deletClientHandler=(id)=>{
    console.log("####### id:"+id);
     props.getClientId(id);
  }
    const Clients=props.clients.map((client)=>{
        return (
           
            
              <ClientCard client={client} clickHandler={deletClientHandler}  key={client.id}/>
        
            );
    });
    console.log(props);
    return <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>{Clients}</List>

}
export default ClientList;