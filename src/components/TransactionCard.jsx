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




const ClientCard = (props)=>{
  const client = props.client;
  const transaction = props.transaction;
    
    const {id,client_id ,date_posted,activity,amount,balance_before, balance_after,note}= props.transaction;
    const updateClient =(client)=>{
      props.updateClientHandler(client);

    }
    const updateTransaction =(transaction,client)=>{
      console.log("#### ClientCard"+transaction.amount);
      props.updateTransactionHandler(transaction,client);
      

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
             Activity : {activity}
            </Typography>
           
            <Typography
              sx={{ color:'blue' }}
             component="div"
              variant="body2"
             
            >
             Amount <br/>
              {amount}
            </Typography>
            <Typography
              sx={{ color:'blue' }}
             component="div"
              variant="body2"
             
            >
             Previous Balance <br/>
              {balance_before}
            </Typography>
            <Typography
              sx={{ color:'blue' }}
             component="div"
              variant="body2"
             
            >
             Balance <br/>
              {balance_after}
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
              {date_posted}
             </Typography>
            
           </React.Fragment>
           
         }
       />
     </ListItem>
     <Divider variant="inset" component="li" />
        </CardContent> 
        <CardActions>
        
       
           
      </CardActions>
      </Card>

    </div>
    );
}
export default ClientCard;