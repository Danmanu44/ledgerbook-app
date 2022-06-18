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
 
  const update = (e)=>{
    
   
  
    if(transaction.amount==="" ){
      alert("Deposit Amount must be provided!");
    }
    else{
    // client.id= Number(new Date());
    // client.balance=0;
    console.log("###### Deposit "+transaction.amount);
    transaction.client_id= client.id;
    transaction.activity="Credited";
    transaction.balance_before=client.balance;
    transaction.balance_after= Number(client.balance)+(Number(transaction.amount));
    transaction.date_posted= new Date();
    client.balance =transaction.balance_after;

    
    
    props.updateTransaction(transaction,client);
    

    setTransaction({id:'',date_posted:'', note:'', activity:'',amount:'',balance_before:'',balance_after:''});
    handleClose();
    }
  
  }
 

  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
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
  
 

  const handleClickOpen = () => {
    setClient(props.client);
    setOpen(true);

  };

  const handleClose = () => {
    setOpen(false);
    console.log(client);
  };

  return (
    <div>
     
        
      
      <Button variant='outlined' size='small' onClick={handleClickOpen} sx={{ display: 'inline',color:'blue', float:'right'}} endIcon={<SavingsRoundedIcon />}></Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Deposit</DialogTitle>
        <DialogContent>
         
        <form onSubmit={update}>
         <FormControl fullWidth  variant="standard">
         <TextField
         
         margin="dense"
         id="tel"
         label="Full Name"
         value={client.name}
         disabled
         type="text"
         fullWidth
         variant="standard"
         onChange={handleChange('name')}
       />
       
        <TextField
                 
         value={client.phoneNumber}
         disabled
         margin="dense"
         id="tel"
         label="Phone Number"
         type="Tel"
         fullWidth
         variant="standard"
         onChange={handleChange('phoneNumber')}
       />
        <TextField
       
         value={client.email}
         disabled
         margin="dense"
         id="email"
         label="Email Address"
         type="email"
         fullWidth
         variant="standard"
         onChange={handleChange('email')}
       />
        <TextField
       
       value={transaction.amount}
       
       margin="dense"
       id="amount"
       label="Amount Deposited"
       type="number"
       fullWidth
       variant="standard"
       onChange={handleChange('amount')}
     />
     <TextField
       
       value={transaction.note}
       
       margin="dense"
       id="note"
       label="Note"
       type="text"
       fullWidth
       variant="standard"
       onChange={handleChange('note')}
     />
       
        
     </FormControl>
       
     
     <Stack direction="row" spacing={2}>
      <Button variant="outlined" onClick={handleClose} startIcon={<CancelIcon />}>
        Cancel
      </Button>
      <Button  variant="contained"  onClick={update} endIcon={<SaveIcon />}>
        Save
      </Button>
    </Stack>

       </form>
        
        </DialogContent>
       
      </Dialog>
      
 <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
     
     
    </Box>
    </div>
  );
}
