import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Dashboard from '../../Dashboard/Dashboard/Dashboard';
import Navigation from '../../Shared/Navigation/Navigation'
import Setction from '../../Dashboard/Section/Setction';
import Avalanche from '../../Dashboard/Avalanche/Avalanche';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
 
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={4} md={2} sm={12}>
        <Dashboard></Dashboard>
        </Grid>
        <Grid container spacing={1} item xs={6} md={6} sm={12}>
     
         <Setction></Setction>
         <div style={{height:'99%',marginTop:8,marginLeft:35, width:'2px', backgroundColor:'#242731'}}>

</div>
        </Grid>
       
        <Grid item xs={6} md={4} sm={12}>
        
         <Avalanche></Avalanche>
        </Grid>
        
      </Grid>
    </Box>
        </div>
    );
};

export default Home;