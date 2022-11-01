import { createTheme } from '@mui/material/styles';


const DarkTheme = createTheme({
  palette: {
    mode: 'dark',
    golding:{
        main:"#e5c233",
        contrastText:"#000"
    },
    dark:{
        main:"rgb(15, 15, 15)",
        contrastText:"#fff"
    },
    light:{
        main:"#fff",
        contrastText:"#000"
    },
  },
});


const LightTheme=createTheme({
    palette:{
        mode:"light",
        golding:{
            main:"#e5c233",
            contrastText:"#000"
        },
        dark:{
            main:"rgb(15, 15, 15)",
            contrastText:"#fff"
        },
        light:{
            main:"#fff",
            contrastText:"#000"
        },
    },
    
})

export {
    LightTheme,
    DarkTheme,
  }