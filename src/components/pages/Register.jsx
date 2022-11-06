import React from 'react'
import {Button , Box ,TextField ,Container, IconButton, InputAdornment } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import { VisibilityOff ,Visibility} from '@mui/icons-material'
import {useState,useEffect} from 'react'

export default function Register() {

const [password, setPassword] = useState("")
const [repassword, setRepassword] = useState("")
const [errorpass,setErrorpass]=useState(false)
const [show,setShow]=useState(false);

const handleShow=(event)=>{
    if(show){
        setShow(false);
    }else{
        setShow(true)
    }
}
const handlePassword = ()=>{
  if(password!== repassword){
    setErrorpass(true)
  }else{
    setErrorpass(false)
  }
}

    useEffect( ()=>{
      handlePassword()
     
    },[repassword])

    return (
        <div>
            <Container component="form" maxWidth="sm">
                <Box sx={{ height: '60vh' }} margin="15%">
                    <TextField label="Email or phone number" color="yellow" fullWidth sx={{height:'7ch', marginY:'1%'}} />
                    <TextField label="Password" color="yellow" fullWidth sx={{height:'7ch', marginY:'1%'}} type={show?"text":"password"}
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          InputProps={{
            endAdornment:(
                <InputAdornment position='end'>
                  <IconButton
                  onClick={handleShow}
                  >
                   
                  </IconButton>
                </InputAdornment>
            ),
          }}
        />
                    <TextField label="Repeat password" color="yellow" fullWidth sx={{height:'7ch', marginY:'1%'}} type={show?"text":"password"}
          error={errorpass}
          value={repassword}
          onChange={(e)=>setRepassword(event.target.value)}
          onBlur={handlePassword}
          InputProps={{
            endAdornment:(
                <InputAdornment position='end'>
                  <IconButton
                  onClick={handleShow}
                  >
                   
                  </IconButton>
                </InputAdornment>
            ),
          }}
        />
                    <Button variant="contained" fullWidth sx={{fontWeight:'700',height:'7ch', marginY:'1%'}} color="yellow" >Login</Button>
                    <hr />
                    <Button variant="contained" fullWidth sx={{color:'white' ,height:'7ch', marginY:'2%'}} color="btn"><GoogleIcon />  Continue with Google</Button>
                    <Button variant="contained" fullWidth sx={{color:'white' ,height:'7ch', marginY:'1%'}} color="btn"><AppleIcon />  Continue with Apple</Button>
                </Box>
            </Container>
        </div>
    )
}
