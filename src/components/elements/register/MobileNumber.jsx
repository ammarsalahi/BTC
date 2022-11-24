import React from 'react'
import {TextField,Button ,Card ,Container ,AppBar , Tabs , Tab , Typography,Checkbox , Box , FormGroup, FormControlLabel , InputAdornment  } from '@mui/material';
import PasswordStrengthBar from 'react-password-strength-bar';
import {useState,useEffect} from 'react'
import MuiPhoneNumber from 'material-ui-phone-number';
import { QrCode, Visibility, VisibilityOff } from '@mui/icons-material';

export default function MobileNumber() {
    const [password, setPassword] = useState("");
    const [typing,setTyping]=useState("password");
    
    const handlePassword=(props)=>()=>{
        setTyping(props)
      }
    return (
        <div>
            <Box color="whtie">
            <MuiPhoneNumber label="Mobile number" variant="outlined" color="light" sx={{height:'7ch', my:1}} 
            defaultCountry={'us'} fullWidth  lable="Mobile number"/>
            <TextField onChange={(e)=>setPassword(e.target.value)} label="password" color="light" fullWidth 
             sx={{height:'7ch', my:1}} variant="outlined" type={typing} 
            InputProps={{
                style:{color:"black"},
                endAdornment:(
                    <InputAdornment position="end" sx={{py:0}}>
                      {typing==="password"
                      ?<Visibility sx={{cursor:"pointer"}} onClick={handlePassword('type')}/>
                      :<VisibilityOff sx={{cursor:"pointer"}} onClick={handlePassword('password')}/>}
                    </InputAdornment>
                )
            }}/>
            <PasswordStrengthBar password={password} />
            </Box>
            <TextField label="Referral code (optional)" color="light" fullWidth  sx={{textcolor:"#000",height:'7ch', my:2}} variant="outlined" type="text"/>
            <FormGroup>
            <FormControlLabel control={<Checkbox sx={{mb:3}} color="light"/>} 
            label="I have read and agree to Binance’s Terms of Service and Privacy Policy" sx={{size:'20hv'}} inputProps={{
                style:{dir:"rtl"}
            }}/>
            </FormGroup>

            <Button variant="contained" fullWidth sx={{fontWeight:'700',height:'5ch', mt:1,fontSize:"17px"}} color="light" >Signup</Button>
        </div>
    )
}
   