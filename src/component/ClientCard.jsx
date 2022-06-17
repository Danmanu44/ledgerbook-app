import React from "react";
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { CardContent } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import user from '..//images/john.png';
import DeleteIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';
import UpdateClient from './UpdateClient'


const ClientCard = (props)=>{
  const client = props.client;
    const {id,name,phoneNumber,email,balance} =props.client;
    const updateClient =(client)=>{
      props.updateClientHandler(client);

    }
   
    return (
        <div >
            <br></br>
            <Card><CardContent> 
        <ListItem alignItems="flex-start">
       <ListItemAvatar>
         <Avatar sx={{width:'100px' ,height:'100px', marginRight:'10px'}} alt="Remy Sharp" src={user} />
         
       </ListItemAvatar>
       <ListItemText
         primary={  <React.Fragment> 
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
             
            >
             {name}
            </Typography>
           
           
          </React.Fragment>
            }
         secondary={
           <React.Fragment> 
             <Typography
               sx={{ display: 'inline' }}
               component="span"
               variant="body2"
               color="text.primary"
             >
              {phoneNumber}
             </Typography>
             <Typography
               
              
               variant="body2"
               color="text.primary"
             >
              {email}
             </Typography>
            
             <Typography
              color="blue"
             >
              Account Balance : {balance}
             </Typography>
             
           </React.Fragment>
           
         }
       />
     </ListItem>
     <Divider variant="inset" component="li" />
        </CardContent> 
        <CardActions>
        
        <UpdateClient client = {client} updateClient={updateClient}/> <Button size="small" variant="outlined" onClick={()=>props.clickHandler(id) } sx={{ display: 'inline',color:'red', float:'right',marginLeft:'100px'}} endIcon={<DeleteIcon />}></Button>
           
      </CardActions>
      </Card>

    </div>
    );
}
export default ClientCard;