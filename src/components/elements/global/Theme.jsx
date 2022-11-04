import { createTheme } from '@mui/material/styles';


const Theme = createTheme({
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
    primary:{
        main:"rgb(29, 82, 255)",
        contrastText:"#000"
    },
    secondary:{
        main:"rgb(255, 55, 55)",
        contrastText:"#000"
    },
    green:{
        main:"rgb(14, 203, 129)",
        contrastText:"#000"
    },
    yellow:{
        main:"rgb(209, 255, 43)",
        contrastText:"#000"
    },
    purple:{
        main:"rgb(167, 52, 196)",
        contrastText:"#000"
    },
    grey:{
        main:"rgb(128, 128, 128)",
        contrastText:"#000"
    },
    pink:{
        main:"rgb(255, 62, 136)",
        contrastText:"#000"
    },
    orange:{
        main:"rgb(255, 94, 0)",
        contrastText:"#000"
    },
    brown:{
        main:"rgb(143, 95, 63)",
        contrastText:"#000"
    },

  },
  components:{
     MuiButton:{
        styleOverrides:{
            root:{
                textTransform:"none"
            }
        }
     },
    MuiTab:{
        styleOverrides:{
            root:{
                textTransform:"none",
                '&.Mui-selected':{
                    color:"#fff",
                    backgroundColor:"#161515",
                },
                '&.MuiTabs-indicator':{
                    backgroundColor:'orange'
                }
            },
            selected:{
                textTransform:"none",
            }
        }
    },
  }
});


export default Theme;
