import React from "react";
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { CardContent, Grid } from "@mui/material";
import {Card,Box} from '@mui/material';
import CardActions from '@mui/material/CardActions';
import user from '..//images/john.png';
import DeleteIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';
import UpdateClient from './UpdateClient'
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import Transactions from "./Transactions";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import {useSelector} from 'react-redux';
import { Container } from "@mui/system";
import { makeStyles} from '@material-ui/core/styles'
import { ClassNames } from "@emotion/react";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const ClientCard = (props)=>{
  const useStyles= makeStyles((theme)=>({
    container:{
      backgroundColor:'red',
      padding:theme.spacing(8,0,6)
      
  
    }
  
  }));
  
  const redClient= useSelector((state)=>state.allClients.clients);

  const client = props.client;
  const transaction = props.transaction;
    const {id,name,phoneNumber,email,balance} =props.client;
    const updateClient =(client)=>{
      props.updateClientHandler(client);

    }
    const updateTransaction =(transaction,client)=>{
      console.log("#### ClientCard"+transaction.amount);
      props.updateTransactionHandler(transaction,client);
      

    }
    const updateWithdrawTransaction =(transaction,client)=>{
      console.log("#### ClientCard"+transaction.amount);
      props.updateTransactionHandler(transaction,client);

      
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  

    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'NGN',
    
      // These options are needed to round to whole numbers if that's what you want.
      //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
      //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });
   //const classes= useStyles();
    return (
        <div  >
            <br/>
     <Box  alignContent="flex-start">
       <Container  maxWidth="md">

       <Grid container  justifyContent="center">
        <Grid item  spacing={4}>
        <Card ><CardContent> 
        <ListItem alignItems="flex-start">
       <ListItemAvatar>
       <AccountCircleRoundedIcon  sx={{width:'70px' ,height:'70px', marginRight:'5px',color:'blue'}}/>
       
         
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
              Account Balance : {formatter.format(balance)}
             
             </Typography>
             
           </React.Fragment>
           
         }
       />
     </ListItem>
     <Divider variant="inset" component="li" />
        </CardContent> 
        <CardActions>
        
        <UpdateClient client = {client} updateClient={updateClient}/>
        <Deposit client = {client} updateTransaction={updateTransaction} transaction={transaction}/>
        <Withdraw client = {client} updateTransaction={updateWithdrawTransaction} transaction={transaction} />
        <Transactions client={client} />
         <Button size="small" variant="outlined" onClick={handleClickOpen} sx={{ display: 'inline',color:'red', float:'right',marginLeft:'auto'}} endIcon={<DeleteIcon />}>Delete</Button>
         <div>
      
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Delete Client permanently?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you sure you want to delete this Client permanently.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={()=>props.clickHandler(id) }>Yes Delete</Button>
        </DialogActions>
      </Dialog>
    </div>
           
      </CardActions>
      </Card>

        </Grid>

     </Grid>

       </Container>
   </Box>

    </div>
    );
}
export default ClientCard;