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


const ClientCard = (props)=>{
    const {id,name,phoneNumber,email,balance} =props.client;
    const clickHandler=(id)=>{
        console.log("handler here "+id);
    }
    return (
        <div >
            <br></br>
            <Card><CardContent> 
        <ListItem alignItems="flex-start">
       <ListItemAvatar>
         <Avatar alt="Remy Sharp" src={user} />
         
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
           
            <Typography
            sx={{ display: 'inline', float:'right'}}
             color="red"
            >
           <Button  onClick={ props.clickHandler(id)} sx={{ display: 'inline',color:'red', float:'right'}} endIcon={<DeleteIcon />}></Button>
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
             {email}
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
      </Card>

    </div>
    );
}
export default ClientCard;