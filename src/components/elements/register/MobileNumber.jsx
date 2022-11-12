import React from 'react'
import {TextField,Button ,Card ,Container ,AppBar , Tabs , Tab , Typography,Checkbox , Box , FormGroup, FormControlLabel , Link  } from '@mui/material';
import PasswordStrengthBar from 'react-password-strength-bar';
import {useState,useEffect} from 'react'
import MuiPhoneNumber from 'material-ui-phone-number';


export default function MobileNumber() {
    const [password, setPassword] = useState("")
    return (
        <div>
            <Box color="whtie">
            <MuiPhoneNumber label="Mobile number" variant="standard" color="dark" sx={{textcolor:"#000",height:'7ch', my:1}} defaultCountry={'us'} fullWidth focused lable="Mobile number" inputProps={{
                style:{color:"black"}
            }}/>
            <TextField onChange={(e)=>setPassword(e.target.value)} label="password" color="dark" fullWidth focused sx={{textcolor:"#000",height:'7ch', my:1}} variant="filled" type="password" 
            inputProps={{
                style:{color:"black"}
            }}/>
            <PasswordStrengthBar password={password} />
            </Box>
            <TextField label="Referral code (optional)" color="dark" fullWidth focused sx={{textcolor:"#000",height:'7ch', my:1}} variant="filled" type="text" 
            inputProps={{
                style:{color:"black"}
            }}/>
            <FormGroup>
            <FormControlLabel control={<Checkbox sx={{color:"#000",mb:3}}/>} 
            label="I have read and agree to Binance’s Terms of Service and Privacy Policy" sx={{color:'#000',size:'20hv'}} inputProps={{
                style:{dir:"rtl"}
            }}/>
            </FormGroup>

            <Button variant="contained" fullWidth sx={{fontWeight:'700',height:'5ch', mt:1,fontSize:"17px"}} color="yellow" >Signup</Button>
        </div>
    )
}
   