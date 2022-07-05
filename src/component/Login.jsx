import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';

import CancelIcon from '@mui/icons-material/Cancel';
import LoginRounded from '@mui/icons-material/LoginRounded';
import Stack from '@mui/material/Stack';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Add from '@mui/icons-material/PersonAddRounded';
import { CardContent } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';

import {useSelector} from 'react-redux';
const Login= ()=>{
    const [user,setUser] = React.useState({
        id:'',
        email:'',
        password:'',
    });
const handleChange = (props)=>(event)=>{
    setUser([{...user,[props]:event.target.value}]);
};
    return (
        <Card sx={{marginTop:'18vh', height:'300px',padding:'10px' }}>
            <CardContent>
                    <form >
                    <FormControl fullWidth  variant="standard">
                    <TextField
                    
                    margin="dense"
                    id="tel"
                    label="Email"
                    value={user.email}
                    required
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={handleChange('email')}
                />
                
                <TextField
                            
                    value={user.password}
                    required
                    margin="dense"
                    id="tel"
                    label="Password"
                    type="password"
                    fullWidth
                    variant="standard"
                    onChange={handleChange('password')}
                />
                
                
                </FormControl>
                
                
               

                </form> 
            </CardContent>

            <CardActions>
           
                <Button  variant="contained"   endIcon={<LoginRounded />}>
                Login
                </Button>
            </CardActions>
            </Card>
        
    );

}
export default Login;