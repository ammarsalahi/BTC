import React from 'react'
import {Box , Typography , TextField , Button} from '@mui/material';
import LandHead from '../elements/landing/LandHead';
import LandDetail from '../elements/landing/LandDetail';
import CurrencyList from '../elements/landing/CurrencyList';
import LandFooter from '../elements/landing/LandFooter';
export default function Landing() {
    return (
        <Box className="container-fluid">       
         <LandHead/>
         <LandDetail/>
         <CurrencyList/>
         <LandFooter/>
        </Box>
    )
}
