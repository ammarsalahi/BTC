import React from 'react'
import { Box, Typography, TextField, Button } from '@mui/material';
import LandHead from '../elements/landing/LandHead';
import LandDetail from '../elements/landing/LandDetail';
import CurrencyList from '../elements/landing/CurrencyList';
import LandFooter from '../elements/landing/LandFooter';
import Services from '../elements/landing/Services';
import TrideAny from '../elements/landing/TrideAny';
export default function Landing() {
    return (
        <>
            <Box className="container-fluid" sx={{ paddingInline: "8%" }}>
                <LandHead />
                <LandDetail />
                <CurrencyList />
                <TrideAny />
                <Services />
            </Box>
            <Box  sx={{ paddingInline: "8%" , backgroundColor: "#161515" }}>
                <LandFooter />
            </Box>
        </>
    )
}

