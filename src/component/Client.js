import * as React from 'react';

import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import CancelIcon from '@mui/icons-material/Cancel';
import SaveIcon from '@mui/icons-material/Save';
import Stack from '@mui/material/Stack';


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

const Client = ()=> {
    const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          •
        </Box>
      );
      const [client, setClient] = React.useState({
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
   
    return (

      <div>
      <FormControl fullWidth  variant="standard">
      <TextField
      
      margin="dense"
      id="tel"
      label="Full Name"
   
      type="text"
      fullWidth
      variant="standard"
      onChange={handleChange('name')}
    />
    
     <TextField
              
  

      margin="dense"
      id="tel"
      label="Phone Number"
      type="Tel"
      fullWidth
      variant="standard"
      onChange={handleChange('phoneNumber')}
    />
     <TextField
    
    
      
      margin="dense"
      id="name"
      label="Email Address"
      type="email"
      fullWidth
      variant="standard"
      onChange={handleChange('email')}
    />
     
  </FormControl>
    
  
  

    </div>

        );
    
}
export default Client;