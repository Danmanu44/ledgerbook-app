import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';

import CancelIcon from '@mui/icons-material/Cancel';
import Stack from '@mui/material/Stack';
import  { useFormControl } from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

import api from '../api/client';
import Typography from '@mui/material/Typography';
import { CardContent } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';


import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Tooltip from '@mui/material/Tooltip';





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
 
var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'NGN',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});



  
 

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
          primary={
            <React.Fragment> 
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
               {Date(transaction.date_posted)}
              </Typography>
             
            </React.Fragment>
            
          }
           secondary={  <React.Fragment> 
              <Typography
                
                variant="body2"

                color="blue"
              >
               Activity : {transaction.activity}
              </Typography>
              <Typography
                sx={{  }}
               
                variant="body2"

                color="text.primary"
              >
               Description : {transaction.note}
              </Typography>
             
              <Typography
                sx={{  }}
               component="div"
                variant="body1"
                color="blue"
              >
               Amount 
                : {formatter.format(transaction.amount)}
              </Typography>
              <Typography
                sx={{ color:'blue' }}
               component="div"
                variant="body1"
               
              >
               Previous Balance 
                :{formatter.format(transaction.balance_before)}
              </Typography>
              <Typography
                sx={{  }}
               component="div"
                variant="body1"
                color="blue"
              >
               Balance 
                : {formatter.format(transaction.balance_after)}
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
          
        
       <br/>
       
        
  
      </div>
    );

  });
  return(
    <div>
       <Tooltip title="Click to View Transactions ">
      
       <Button variant='outlined' size='small' onClick={handleClickOpen} sx={{ display: 'inline',color:'blue', float:'right'}} endIcon={<RemoveRedEyeIcon />}>Info</Button>

    </Tooltip>
    <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Transactions</DialogTitle>
          <DialogContent>
           
          <div >
              
              <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>{Tranxs}</List>
  
      </div>
       
      
  
         
          
          </DialogContent>
          <DialogActions>
          <Stack direction="row" spacing={2}>
        <Button variant="outlined" onClick={handleClose} startIcon={<CancelIcon />}>
          Cancel
        </Button>
        
      </Stack>
        </DialogActions>
        </Dialog>
     
     </div>
     
     )

}
