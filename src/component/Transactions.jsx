import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Client from './Client';
import CancelIcon from '@mui/icons-material/Cancel';
import SaveIcon from '@mui/icons-material/Save';
import Stack from '@mui/material/Stack';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import EditIcon from '@mui/icons-material/Edit'
import SavingsRoundedIcon from '@mui/icons-material/SavingsRounded';
import api from '../api/client';
import {useState,useEffect} from 'react';
import Typography from '@mui/material/Typography';
import { CardContent } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import user from '..//images/john.png';

import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';




function MyFormHelperText() {
  const { focused } = useFormControl() || {};

  const helperText = React.useMemo(() => {
    if (focused) {
      return 'This field is being focused';
    }

    return 'Helper text';
  }, [focused]);

  return <FormHelperText>{helperText}</FormHelperText>;
}


export default function FormDialog(props) {

  const [client, setClient] = React.useState({
    id:'',
  name: '',
  phoneNumber: '',
  email: '',
  balance: 0
 
});
var [transactions,setTransactions]=React.useState([]);
const [transaction,setTransaction] = React.useState({
  id:'',
  client_id:'',
  date_posted:'',
  activity:'',
  amount:0,
  balance_before:0,
  balance_after:0,
  note:''
})
 




  
 

  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      
    </Box>
  );

  const handleChange = (prop) => (event) => {
    setTransaction({ ...transaction, [prop]: event.target.value });
    console.log(transaction.amount)
    
    
  };

 

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [open, setOpen] = React.useState(false);
  
 const retrieveTransactions= async(id)=>{
  const response = await api.get("transactions?client_id="+id);
  console.log("###response :"+response.data[0].client_id);
  return  response.data;
 }
 const getTransactions= async(id)=>{
  const userTransactions= await retrieveTransactions(id);
  console.log("####getTranx"+userTransactions[0].client_id);
  if(userTransactions) setTransactions(userTransactions);
 }

  const handleClickOpen = () => {
    setClient(props.client);
    console.log("###### transactionlist "+props.client.id);
    var id = props.client.id;
     getTransactions(id);
    // console.log(transactions[0].date_posted);
    setOpen(true);

  };

  const handleClose = () => {
    setOpen(false);
    console.log(client);
  };
  
  const Tranxs= transactions.map((transaction)=>{
    return (
      <div>
          <Card><CardContent> 
          <ListItem alignItems="flex-start">
         
         <ListItemText
           primary={  <React.Fragment> 
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
               
              >
               Activity : {transaction.activity}
              </Typography>
             
              <Typography
                sx={{ color:'blue' }}
               component="div"
                variant="body2"
               
              >
               Amount <br/>
                <span>{transaction.amount}</span>
              </Typography>
              <Typography
                sx={{ color:'blue' }}
               component="div"
                variant="body2"
               
              >
               Previous Balance <br/>
                {transaction.balance_before}
              </Typography>
              <Typography
                sx={{ color:'blue' }}
               component="div"
                variant="body2"
               
              >
               Balance <br/>
                {transaction.balance_after}
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
                {transaction.date_posted}
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

  });
  return(
    <div>
    <Button variant='outlined' size='small' onClick={handleClickOpen} sx={{ display: 'inline',color:'blue', float:'right'}} endIcon={<RemoveRedEyeIcon />}></Button>
    <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Deposit</DialogTitle>
          <DialogContent>
           
          <div >
              <br/>
              <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>{Tranxs}</List>
  
      </div>
       
       <Stack direction="row" spacing={2}>
        <Button variant="outlined" onClick={handleClose} startIcon={<CancelIcon />}>
          Cancel
        </Button>
        
      </Stack>
  
         
          
          </DialogContent>
         
        </Dialog>
     
     </div>
     
     )

}
