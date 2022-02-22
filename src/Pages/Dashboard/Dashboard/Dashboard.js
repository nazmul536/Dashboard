import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ListItem from '@mui/material/ListItem';
// import Typography from '@mui/material/Typography';
// import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import Button from '@mui/material/Button';
import { ListItemButton  } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import ShareIcon from '@mui/icons-material/Share';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import nazmul from '../../../Images/nazmul.jpg'
import KeyboardBackspaceTwoToneIcon from '@mui/icons-material/KeyboardBackspaceTwoTone';
import AlignVerticalBottomOutlinedIcon from '@mui/icons-material/AlignVerticalBottomOutlined';
import BatteryStdSharpIcon from '@mui/icons-material/BatteryStdSharp';
import AppsIcon from '@mui/icons-material/Apps';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import ChatIcon from '@mui/icons-material/Chat';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import ChangeCircleRoundedIcon from '@mui/icons-material/ChangeCircleRounded';
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import CircleIcon from '@mui/icons-material/Circle';



const drawerWidth = 225;

function ResponsiveDrawer(props) {
  
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{}}>
      {/* <Toolbar />
      <Divider /> */}

      <Stack style={{display:'flex', alignItems:'center'}} direction="row" spacing={2}>
     
      <Avatar style={{marginLeft:20,marginTop:8,marginBottom:8, height:40, width:40}} alt="Nazmul Hossain" src={nazmul} />

      <h3 style={{display:'inline-block', fontWeight:600,fontSize:20}}>Nazmul</h3>
      
      <KeyboardBackspaceTwoToneIcon style={{fontSize:35,marginRight:15, textAlign:'right'}}>
               <InboxIcon />
             </KeyboardBackspaceTwoToneIcon>
    </Stack>

      <ListItem disablePadding>
           <ListItemButton>
             <AppsIcon>
               <InboxIcon />
             </AppsIcon>
             <Button color='inherit'>Home</Button>
           </ListItemButton>
         </ListItem>
   
      <ListItem disablePadding>
           <ListItemButton>
             <AlignVerticalBottomOutlinedIcon>
               <InboxIcon />
             </AlignVerticalBottomOutlinedIcon>
             <Button color='inherit'>Section 1</Button>
           </ListItemButton>
         </ListItem>
   
      <ListItem disablePadding>
           <ListItemButton>
             <BatteryStdSharpIcon>
               <InboxIcon />
             </BatteryStdSharpIcon>
             <Button color='inherit'>Section 2</Button>
           </ListItemButton>
         </ListItem>
   
      <ListItem disablePadding>
           <ListItemButton>
             <ChatIcon>
               <InboxIcon />
             </ChatIcon>
             <Button color='inherit'>Section 3</Button>
           </ListItemButton>
         </ListItem>
   
      <ListItem disablePadding>
           <ListItemButton>
             <MonetizationOnTwoToneIcon>
               <InboxIcon />
             </MonetizationOnTwoToneIcon>
             <Button color='inherit'>Section 4</Button>
           </ListItemButton>
         </ListItem>
   
      <ListItem disablePadding>
           <ListItemButton>
             <ChangeCircleRoundedIcon>
               <InboxIcon />
             </ChangeCircleRoundedIcon>
             <Button color='inherit'>Section 5</Button>
           </ListItemButton>
         </ListItem>
   
      <ListItem disablePadding>
           <ListItemButton>
             <WidgetsRoundedIcon>
               <InboxIcon />
             </WidgetsRoundedIcon>
             <Button color='inherit'>Section 6</Button>
           </ListItemButton>
         </ListItem>
   
      <ListItem disablePadding>
           <ListItemButton>
             <EqualizerIcon>
               <InboxIcon />
             </EqualizerIcon>
             <Button color='inherit'>Section 7</Button>
           </ListItemButton>
         </ListItem>
   
      <ListItem style={{padding:7}} disablePadding>
           <ListItemButton >
             <ShareIcon>
               <InboxIcon />
             </ShareIcon>
             <Button color='inherit'>Section 8</Button>
           </ListItemButton>
         </ListItem>
   
      <ListItem disablePadding>
           <ListItemButton>
             <ArticleIcon>
             <InboxIcon />
             </ArticleIcon>
             <Button color='inherit'>Documention</Button>
           </ListItemButton>
         </ListItem>
         <br/><br/>
    
   <div style={{display:'flex'}}>
   <div style={{display:'flex', alignContent:'center', alignItems:'center', border:'1px solid black', borderRadius:'25px', margin:6, padding:2}}>
    <Avatar style={{ margin:2,height:'22px',width:'22px'}} alt="Nazmul Hossain" src={nazmul} />
    <span style={{fontWeight:600, margin:3,fontSize:14}}>$0.90</span>
    </div>
    
    <div style={{display:'flex',backgroundColor:'lightblue', alignContent:'center', alignItems:'center', border:'1px solid black', borderRadius:'25px', margin:6, padding:5}}>
    <span style={{fontWeight:600, margin:5,color:'#3772FF',fontSize:14}}>Buy</span>
    <span style={{fontWeight:600, margin:3,color:'#3772FF',fontSize:14}}>$XYZ</span>
    </div>
   </div>
  
  
   <div style={{display:'flex'}}>
   <div style={{display:'flex', alignContent:'center', alignItems:'center',margin:6, padding:5}}>
   <LanguageIcon style={{color:'#808191', fontWeight:600,fontSize:28}}>
         <InboxIcon />
     </LanguageIcon>
    
    </div>
    
    <div style={{display:'flex', alignContent:'center', alignItems:'center', border:'1px solid black', borderRadius:'25px', margin:6, padding:5}}>

     <DarkModeIcon style={{color:'#808191',fontWeight:600,fontSize:28}}>
         <InboxIcon />
     </DarkModeIcon>
     <CircleIcon style={{color:'#3772FF',fontWeight:600,fontSize:28}}>
         <InboxIcon />
     </CircleIcon>
    </div>
   </div>

     
  
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
     
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        
      
      
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
