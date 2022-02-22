import React from 'react';
import Grid from '@mui/material/Grid';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Container } from '@mui/material';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import MouseOutlinedIcon from '@mui/icons-material/MouseOutlined';
import Button from '@mui/material/Button';
import {ListItemButton  } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import IosShareIcon from '@mui/icons-material/IosShare';
import PhonelinkEraseIcon from '@mui/icons-material/PhonelinkErase';




const Avalanche = () => {
    return (
       <Container>
            <Grid style={{marginTop:10}} container spacing={2}>
  <Grid item xs={6} md={6}>
  <div style={{width:'146px',display:'flex',justifyContent:'center',alignItems:'center',padding:'0px 5px',lineHeight:'17px',height:'45px', borderRadius:'10px', backgroundColor:'#353945',marginRight:5}}>
    
        <ChangeHistoryIcon style={{height:'20px', width:'20px',padding:3, borderRadius:'50%',margin:'0px 5px', backgroundColor:'red', color:'white'}}>
             <InboxIcon />
             </ChangeHistoryIcon>
    <span style={{fontWeight:600, margin:3,color:'white',fontSize:12}}>AVAX</span>
    <KeyboardArrowDownOutlinedIcon style={{color:'white'}}>
             <InboxIcon />
             </KeyboardArrowDownOutlinedIcon>
    </div>
     </Grid>

  <Grid item xs={6} md={6}>
 
  <div style={{width:'146px',height:'45px',display:'flex',justifyContent:'space-around',alignItems:'center',padding:'0px 5px',lineHeight:'17px', borderRadius:'10px', backgroundColor:'#000000',marginRight:5}}>
    
        <MouseOutlinedIcon style={{color:'#3772FF', fontWeight:600,fontSize:28}}>
             <InboxIcon />
             </MouseOutlinedIcon>
    <span style={{fontWeight:600, margin:3,color:'white',fontSize:12}}>0XF6...1353</span>
    <KeyboardArrowDownOutlinedIcon style={{color:'white'}}>
             <InboxIcon />
             </KeyboardArrowDownOutlinedIcon>
    </div>


  </Grid>

    
  <Grid container style={{marginTop:5}} spacing={2}>
  <Grid item xs={12} md={12}>
  <div style={{width:'340px', height:'177px', backgroundColor:'#191B20', borderRadius:'16px'}}>
          
          <div>
          <ListItem disablePadding>
             <ListItemButton>
               <ChevronLeftIcon style={{height:'24px', fontSize:'20px', width:'24px',padding:5, color:'white'}}>
               <InboxIcon />
               </ChevronLeftIcon>
               <Button style={{color:'white', fontSize:'18px', fontWeight:'500'}} color='inherit'>Custom Link</Button>
             </ListItemButton>
           </ListItem>
          </div>
         
          <Typography style={{color:'#FFFFFF',lineHeight:'48px', fontSize:'16px', fontWeight:'500', textAlign:'left', marginLeft:25}} variant="h4" gutterBottom component="div">
         https://testnetxyz.xyz/trade?ref=
        </Typography>
  
        <div style={{ display:'flex', alignContent:'center', height:"56px", width:'297px', backgroundColor:'#242731', borderRadius:'8px',marginLeft:22, padding:16}}>
        <div>
        <Typography style={{fontSize:'12px',lineHeight:'24px', color:'#808191',textAlign:'left',marginRight:28, fontWeight:600,}} variant="h4" gutterBottom component="div">
        Enter
        </Typography>
        </div>
     
  
        </div>
     
  
          </div>
  </Grid>
 
</Grid>


<Grid item xs={6} md={4}>
  <div style={{width:'142px',display:'flex',justifyContent:'center',alignItems:'center',padding:'0px 5px',lineHeight:'17px',height:'36px', borderRadius:'10px', backgroundColor:'#3772FF',marginRight:5}}>
    
  <IosShareIcon style={{color:'white',marginRight:3}}>
             <InboxIcon />
             </IosShareIcon>  
    <span style={{fontWeight:600, margin:3,color:'white',fontSize:12}}>Custom Link</span>

    </div>
     </Grid>

  <Grid item xs={6} md={4}>
 
  <div style={{width:'142px',display:'flex',justifyContent:'center',alignItems:'center',padding:'0px 5px',lineHeight:'17px',height:'36px', borderRadius:'10px', backgroundColor:'#000000',marginRight:5}}>
    
    <PhonelinkEraseIcon style={{color:'white',marginRight:3}}>
               <InboxIcon />
               </PhonelinkEraseIcon>  
      <span style={{fontWeight:600, margin:3,color:'white',fontSize:12}}>Cancle</span>
  
      </div>


  </Grid>


</Grid>
       </Container>
    );
};

export default Avalanche;