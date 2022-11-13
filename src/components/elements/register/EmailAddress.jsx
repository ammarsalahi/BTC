import React from 'react'
import {TextField,Button ,Card ,Container ,AppBar , Tabs , Tab , Typography,Checkbox , Box , FormGroup, FormControlLabel , Link,InputAdornment  } from '@mui/material';
import PasswordStrengthBar from 'react-password-strength-bar';
import {useState,useEffect} from 'react'
import { QrCode, Visibility, VisibilityOff } from '@mui/icons-material';
export default function EmailAddress() {
    const [password, setPassword] = useState("");
    const [typing,setTyping]=useState("password");
      const handlePassword=(props)=>()=>{
        setTyping(props)
      }
    return (
        <div>
            <Box color="whtie">
            <TextField label="Email" color="dark" fullWidth focused sx={{textcolor:"#000",height:'7ch', my:1}} variant="filled" type="email" 
            inputProps={{
                style:{color:"black"}
            }}/>
           
            <TextField onChange={(e)=>setPassword(e.target.value)} label="password" color="dark" fullWidth
             focused sx={{textcolor:"#000",height:'7ch', my:1}} variant="filled" type={typing} 
           
            InputProps={{
                style:{color:"black"},
                endAdornment:(
                    <InputAdornment position="end" sx={{py:0}}>
                      {typing==="password"
                      ?<Visibility sx={{color:"#000",cursor:"pointer"}} onClick={handlePassword('type')}/>
                      :<VisibilityOff sx={{color:"#000",cursor:"pointer"}} onClick={handlePassword('password')}/>}
                    </InputAdornment>
                )
            }}/>
            <PasswordStrengthBar password={password} />
            </Box>
            <TextField label="Referral code (optional)" color="dark" fullWidth focused sx={{textcolor:"#000",height:'7ch', my:1}} 
            variant="filled" type="text" 
            inputProps={{
                style:{color:"black"}
            }}/>
            <FormGroup>
            <FormControlLabel control={<Checkbox sx={{color:"#000",mb:3}}/>} 
            label="I have read and agree to Binance’s Terms of Service and Privacy Policy" 
            sx={{color:'#000',fontSize:12}} inputProps={{
                style:{dir:"rtl"}
            }}/>
            </FormGroup>

            <Button variant="contained" fullWidth sx={{fontWeight:'700',height:'5ch', mt:1,fontSize:"17px"}} color="yellow" >Signup</Button>
        </div>
        
    )
}