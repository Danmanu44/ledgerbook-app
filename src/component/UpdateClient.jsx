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
import EditIcon from '@mui/icons-material/Edit';
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

 
 
  const update = (e)=>{
    
   
  
    if(client.name==="" || client.phoneNumber===""){
      alert("Name and Phone Number must be provided!");
    }
    else{
    // client.id= Number(new Date());
    // client.balance=0;
    props.updateClient(client);
    setClient({name:'',phoneNumber:'',email:''});
    handleClose();
    }
  
  }
 
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
      •
    </Box>
  );
const [client, setClient] = React.useState({
      id:'',
    name: '',
    phoneNumber: '',
    email: '',
    balance: 0
   
  });
  const handleChange = (prop) => (event) => {
    setClient({ ...client, [prop]: event.target.value });
    
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
     
     <Tooltip title="Click to View Transactions ">
      
     <Button variant='outlined' size='small' onClick={handleClickOpen} sx={{ display: 'inline',color:'blue', float:'right'}} endIcon={<EditIcon />}>Edit</Button>

   </Tooltip>
      

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Client</DialogTitle>
        <DialogContent>
         
        <form onSubmit={update}>
         <FormControl fullWidth  variant="standard">
         <TextField
         
         margin="dense"
         id="tel"
         label="Full Name"
         value={client.name}
      
         type="text"
         fullWidth
         variant="standard"
         onChange={handleChange('name')}
       />
       
        <TextField
                 
         value={client.phoneNumber}

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
         
         margin="dense"
         id="name"
         label="Email Address"
         type="email"
         fullWidth
         variant="standard"
         onChange={handleChange('email')}
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
