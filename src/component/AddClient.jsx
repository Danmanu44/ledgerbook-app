 import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';

import CancelIcon from '@mui/icons-material/Cancel';
import SaveIcon from '@mui/icons-material/Save';
import Stack from '@mui/material/Stack';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';



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

 
  const  validateName=(name)=>{
    if(name !=""){
  
        const wordCount= name.match(/(\w+)/g).length;
        console.log((wordCount));

        if(wordCount<2){
          return false;
        }
        else{
          return true;
        }
    }

}

  const add = (e)=>{
    
    if(client.name==="" || client.phoneNumber===""){
      alert("Name and Phone Number must be provided!");
    }
   else if(validateName(client.name)){
    
    
    client.id= Number(new Date());
    client.balance=0;
    props.addClientHandler(client);
    setClient({name:'',phoneNumber:'',email:''});
    handleClose();
  

   }
   else{
     alert("Enter FirstName ")
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

 


  const [open, setOpen] = React.useState(false);
  
 

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    console.log(client);
  };

  return (
    <div>
     
        <br></br>
      <Button  variant="outlined" onClick={handleClickOpen}>
        Add New Client
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Client</DialogTitle>
        <DialogContent>
         
        <form onSubmit={add}>
         <FormControl fullWidth  variant="standard">
         <TextField
         
         margin="dense"
         id="tel"
         label="Full Name"
         value={client.name}
         required
         type="text"
         fullWidth
         variant="standard"
         onChange={handleChange('name')}
       />
       
        <TextField
                 
         value={client.phoneNumber}
         required
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
         required
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
      <Button  variant="contained"  onClick={add} endIcon={<SaveIcon />}>
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
