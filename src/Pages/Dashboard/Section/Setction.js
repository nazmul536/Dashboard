import React from 'react';
import Typography from '@mui/material/Typography';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MouseOutlinedIcon from '@mui/icons-material/MouseOutlined';
import './Section.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import nazmul from '../../../Images/nazmul.jpg'
import LocalBarIcon from '@mui/icons-material/LocalBar';
import { Container, ListItemButton  } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ContentCopyTwoToneIcon from '@mui/icons-material/ContentCopyTwoTone';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';






const Setction = () => {
    return (
        <div>
{/* Section */}
   <Box  sx={{ flexGrow: 1 }}>
      <Grid container style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginTop:3}} spacing={2}>
        <Grid item xs={4} md={2} sm={12}>
       
   <Typography variant="h4" style={{fontSize:'18px', fontWeight:600}} gutterBottom component="div">
       Section
      </Typography>
      <div style={{height:'2px', wifth:'75px', backgroundColor:'#3772FF'}}>

</div>
    
        </Grid>
        <Grid item xs={4} md={4} sm={12}>
        <div style={{display:'flex',backgroundColor:'#191B20', alignContent:'center',width:'180px',justifyContent:'space-between', alignItems:'center', border:'1px solid black', borderRadius:'12.2549px',padding:'0px 3px', margin:6}}>
   
   <div style={{display:'flex', alignContent:'center', alignItems:'center',margin:6, padding:5}}>
  <MouseOutlinedIcon style={{color:'#3772FF', fontWeight:600,fontSize:28}}>
        <InboxIcon />
    </MouseOutlinedIcon>
   
   </div>
   <span style={{fontWeight:600, margin:5,color:'white',fontSize:14}}>02 $XYZ</span>
   <span style={{fontWeight:600, margin:3,color:'white', backgroundColor:'lightblue',padding:2,borderRadius:8, fontSize:14}}>Tier 1</span>
   </div>
        </Grid>
      </Grid>
    </Box>

<br/>

{/* Lorem Ipsum */}
   <Box sx={{ flexGrow: 1 }}>
      <Grid style={{width:'687px',marginLeft:6, height:'86px', backgroundColor:'#ABE8FF', borderRadius:'10px', display:'flex', justifyContent:'center', alignContent:'center', paddingBottom:6}} container spacing={2}>

        <Grid style={{textAlign:'left'}} item xs={4} md={10} sm={12}>
      
        <Typography variant="subtitle1" style={{fontSize:'14px', fontWeight:500, lineHeight:'26px',color:'#2B2557'}} gutterBottom component="div">
        Lorem ipsum is simply dummy text of the printing and typesetting industry.<br/>
        <Button style={{backgroundColor:'white', fontSize:'12px', lineHeight:'24px', alignItems:'center', color:'black', fontWeight:'600'}} variant="outlined">Tutorial</Button>
      </Typography>
        </Grid>

        <Grid item xs={4} md={2} sm={12}>
       <img 
       style={{height:'85px', width:'70px',padding:4,marginRight:3}}
       src={nazmul}/>
        </Grid>
      </Grid>
    </Box>
    <br/>


{/* Rewards */}
   <Box sx={{ flexGrow: 1,marginBottom:2 }}>
      <Grid style={{width:'700px',marginLeft:6, height:'165px', backgroundColor:'#191B20', borderRadius:'10px', display:'flex', justifyContent:'center', alignContent:'center', paddingBottom:6}} container spacing={2}>

        <Grid style={{textAlign:'left'}} item xs={4} md={6} sm={12}>
      
        <Typography style={{fontSize:'18px',fontWeight:600, color:'white'}} variant="subtitle1" gutterBottom component="div">
      Your Rewards<br/>
       
      </Typography>
        <Typography style={{fontSize:'28px',fontWeight:600, color:'white'}} variant="subtitle1" gutterBottom component="div">
     $0.26231428<br/>
      </Typography>

   <div style={{display:'flex'}}>
   <div style={{width:'79px',display:'flex',justifyContent:'center',alignItems:'center',lineHeight:'17px',height:'25px', borderRadius:'11px', backgroundColor:'#353945', marginRight:5}}>
    <span style={{fontWeight:600, margin:5,color:'white',fontSize:12}}>$40</span>
    <span style={{fontWeight:600, margin:3,color:'white',fontSize:12}}>AVAX</span>
    </div>

   <div style={{width:'79px',display:'flex',justifyContent:'center',alignItems:'center',lineHeight:'17px',height:'25px', borderRadius:'11px', backgroundColor:'#353945',marginRight:5}}>
    <span style={{fontWeight:600, margin:5,color:'white',fontSize:12}}>$100</span>
    <span style={{fontWeight:600, margin:3,color:'white',fontSize:12}}>BNV</span>
    </div>
   <div style={{width:'79px',display:'flex',justifyContent:'center',alignItems:'center',lineHeight:'17px',height:'25px', borderRadius:'11px', backgroundColor:'#353945'}}>
    <span style={{fontWeight:600, margin:5,color:'white',fontSize:12}}>$210</span>
    <span style={{fontWeight:600, margin:3,color:'white',fontSize:12}}>BTC</span>
    </div>


   </div>
    
        </Grid>

        <Grid style={{textAlign:'right', paddingRight:'5%'}} item xs={4} md={6} sm={12}>
        <Button
        style={{marginTop:45}}  variant="contained">Custom Link</Button>
       
        </Grid>
      </Grid>
    </Box>
    

{/* 12.5% of free */}
   <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4} md={6} sm={12}>
        <div style={{width:'340px', height:'177px', backgroundColor:'#191B20', borderRadius:'16px'}}>
          
        <div>
        <ListItem disablePadding>
           <ListItemButton>
             <LocalBarIcon style={{height:'24px', width:'24px',padding:5, borderRadius:'50%', backgroundColor:'#BBB5E2', color:'white'}}>
             <InboxIcon />
             </LocalBarIcon>
             <Button style={{color:'white', fontSize:'20px', fontWeight:'500'}} color='inherit'>12.5% of free</Button>
           </ListItemButton>
         </ListItem>
        </div>
       
        <Typography style={{color:'#808191', fontSize:'16px', fontWeight:'500', textAlign:'left', marginLeft:25}} variant="h4" gutterBottom component="div">
       Your Refferral Link for xyz
      </Typography>

      <div style={{ display:'flex', alignContent:'center', height:"56px", width:'297px', backgroundColor:'#242731', borderRadius:'8px',marginLeft:22, padding:16}}>
      <div>
      <Typography style={{fontSize:'14px',marginTop:2, color:'#FFFFFF',textAlign:'left',marginRight:28, fontWeight:500,}} variant="h4" gutterBottom component="div">
       https://unityexchange.design
      </Typography>
      </div>
      <div>
      <ContentCopyTwoToneIcon style={{color:'white'}}>
               <InboxIcon />
             </ContentCopyTwoToneIcon>
      </div>

      </div>
   

        </div>
        </Grid>

        <Grid style={{textAlign:'right', paddingRight:'5%'}} item xs={4} md={6} sm={12}>
        <div style={{width:'340px', height:'177px', backgroundColor:'#191B20', borderRadius:'16px'}}>
          
        <div>
        <ListItem disablePadding>
           <ListItemButton>
             <LocalBarIcon style={{height:'24px', width:'24px',padding:5, borderRadius:'50%', backgroundColor:'#BBB5E2', color:'white'}}>
             <InboxIcon />
             </LocalBarIcon>
             <Button style={{color:'white', fontSize:'20px', fontWeight:'500'}} color='inherit'>12.5% of free</Button>
           </ListItemButton>
         </ListItem>
        </div>
       
        <Typography style={{color:'#808191', fontSize:'16px', fontWeight:'500', textAlign:'left', marginLeft:25}} variant="h4" gutterBottom component="div">
       Your Refferral Link for xyz
      </Typography>

      <div style={{ display:'flex', alignContent:'center', height:"56px", width:'297px', backgroundColor:'#242731', borderRadius:'8px',marginLeft:22, padding:16}}>
      <div>
      <Typography style={{fontSize:'14px',marginTop:2, color:'#FFFFFF',textAlign:'left',marginRight:28, fontWeight:500,}} variant="h4" gutterBottom component="div">
       https://unityexchange.design
      </Typography>
      </div>
      <div>
      <ContentCopyTwoToneIcon style={{color:'white'}}>
               <InboxIcon />
             </ContentCopyTwoToneIcon>
      </div>

      </div>
   

        </div>
       
        </Grid>
      </Grid>
    </Box>
    <br/>

    {/* First Tab */}
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
        <Typography style={{color:'black', fontSize:'18px', fontWeight:'600'}} variant="h4" gutterBottom component="div">
        First Tab
      </Typography>
      <div style={{height:'2px', wifth:'75px', backgroundColor:'#3772FF'}}>

      </div>
        </Grid>
        <Grid item xs={2}>
        <Typography style={{color:'#808191', fontSize:'18px', fontWeight:'600'}} variant="h4" gutterBottom component="div">
        Second Tab
      </Typography>
      
        </Grid>
        
       
      </Grid>
    </Box>
    <br/>

      {/* Asset */}
    <div style={{display:'flex',alignItems:'center', justifyContent:'space-around', backgroundColor:'#191B20', height:'40px', width:'709px', borderRadius:'8px'}}>

    <Typography style={{color:'#808191', fontSize:'10px', fontWeight:600}} variant="h4" gutterBottom component="div">
       ASSET
      </Typography>
    <Typography style={{color:'#808191', fontSize:'10px', fontWeight:600, }}  variant="h4" gutterBottom component="div">
       AMOUNT
      </Typography>
    <Typography style={{color:'#808191', fontSize:'10px', fontWeight:600,}}  variant="h4" gutterBottom component="div">
       USER ACCOUNT
      </Typography>
    <Typography style={{color:'#808191', fontSize:'10px', fontWeight:600, }}  variant="h4" gutterBottom component="div">
       REFFERRAL EARNING
      </Typography>
    </div><br/>


{/* Bitcoin */}
    <Box>
    <div style={{display:'flex',alignItems:'center', justifyContent:'space-around', backgroundColor:'#191B20', height:'62px', width:'705px', borderRadius:'8px'}}>
    

    <Box sx={{ flexGrow: 1 }}>
    <Container>
    <Grid container spacing={2}>
        <Grid item xs={3} md={3}>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3} md={3} >
        <LocalBarIcon style={{height:'27px',width:'27px',borderRadius:"50%",backgroundColor:'blue',padding:5, color:'white'}}>
             <InboxIcon />
             </LocalBarIcon>
        </Grid>
        
        <Grid item xs={3} md={3}>
        <Typography style={{color:'white',textAlign:'left', fontSize:'14px', fontWeight:600}} variant="h6" gutterBottom component="div">
       Bitcoin
      </Typography> 
      <Box  sx={{ flexGrow: 1 }}>
      <Grid style={{display:'flex', alignItems:'center', justifyContent:'center'}} container spacing={2}>
      
        <Grid item md={6}>
        <Typography sx={{fontSize:'12px', color:'#808191'}}  variant="h6" gutterBottom component="div">
       Put
      </Typography> 

        </Grid>
        <Grid item md={6}>
        <div style={{width:'79px',display:'flex',justifyContent:'center',alignItems:'center',lineHeight:'17px',height:'25px', borderRadius:'11px', backgroundColor:'#353945',marginRight:5}}>
        
        <ChangeHistoryIcon style={{height:'20px', width:'20px',padding:2, borderRadius:'50%', backgroundColor:'red', color:'white'}}>
             <InboxIcon />
             </ChangeHistoryIcon>
    <span style={{fontWeight:600, margin:3,color:'white',fontSize:12}}>AVAX</span>
    </div>
        </Grid>
     
      </Grid>
    </Box>
        </Grid>
      </Grid>
    </Box>
        </Grid>
        <Grid item xs={3} md={3}>
        <Typography style={{fontSize:'14px',color:'#808191',fontWeight:600}} variant="h4" gutterBottom component="div">
        0.0000BNB
      </Typography>
        <Typography style={{fontSize:'14px',color:'#808191',fontWeight:600}} variant="h4" gutterBottom component="div">
       Expired
      </Typography>
        </Grid>
        <Grid item xs={3}>
        <Typography style={{fontSize:'14px',color:'#FFFFFF',fontWeight:600,lineHeight:'24px'}} variant="h4" gutterBottom component="div">
       0xFbE..0f58A7D
      </Typography>
        </Grid>
        <Grid item xs={3} md={3}>
        <Typography style={{fontSize:'14px',color:'#FFFFFF',fontWeight:600}} variant="h4" gutterBottom component="div">
        0.0000.BNB 
      </Typography>
        <Typography style={{fontSize:'14px',color:'#808191',fontWeight:500, display:'flex',justifyContent:'center'}} variant="h4" gutterBottom component="div">
       View on BSC Sacn
       <ContentCopyIcon style={{height:'18px', width:'18px', marginLeft:3}}>
             <InboxIcon />
             </ContentCopyIcon>
      </Typography>
        </Grid>
        
      </Grid>
    </Container>
    </Box>

</div>      

    </Box>







        </div>
    );
};

export default Setction;