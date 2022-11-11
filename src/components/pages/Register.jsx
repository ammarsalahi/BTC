import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { Card ,Container ,AppBar , Tabs , Tab , Typography , Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MobileNumber from './LoginFiles/MobileNumber'
import EmailAddress from './LoginFiles/EmailAddress'


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
      <Container component="form" maxWidth="sm">
            <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined" sx={{bgcolor:"#fff",padding:"5%", marginY:"7%", marginX:"7%"}}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
            <Typography variant="h3" color="#000" sx={{mb:"5%"}}>Create account</Typography>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Mobile number" sx={{color:"#000"}} {...a11yProps(0)} />
                <Tab label="Email address" sx={{color:"#000"}} {...a11yProps(1)} />
            </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
            <MobileNumber />
            </TabPanel>
            <TabPanel value={value} index={1}>
            <EmailAddress />
            </TabPanel>
            </Card>
            </Box>
      </Container>
    
  );
}