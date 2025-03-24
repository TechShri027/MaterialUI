import { AppBar, Box, InputBase, styled, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { AcUnit, Notifications } from '@mui/icons-material'
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import MailIcon from '@mui/icons-material/Mail';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
const StyleToolbar=styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between",
    
color:"white"
})
   

const Search=styled("div")(({theme})=>({
  bgcolor:"background.default",
  color: "white",
padding:"0px 10px",
width:"30%",
borderRadius:theme.shape.borderRadius
})
)

const Icons=styled(Box)(({theme})=>({
  // backgroundColor:'white'
  display:'none'
  ,alignItems:"center",
  justifyContent:'center'
  ,gap:"10px",
  [theme.breakpoints.up("sm")]:{
    display:"flex"
  }

   
}))

const UserBox=styled(Box)(({theme})=>({
  display:"flex",
  alignItems:"center",
  [theme.breakpoints.up("sm")]:{
    display:"none"
  }
}))



const Navbar = () => {
  const [open, setOpen]=useState(false)
  return (
    <AppBar position='sticky'>
    <StyleToolbar>
        <Typography variant='h6' sx={{color:"#fff",display:{ xs:'none', sm:"block"}}}> 
          NAV PRO
        </Typography>
        <AcUnit sx={{fill:'#fff',display:{xs:"block", sm:"none" }}}/>
        <Search><InputBase placeholder='Search....'/></Search>
        <Icons>
        <Badge badgeContent={4} color="error">
        <MailIcon />
        </Badge>
        <Badge badgeContent={4} color="error">
        <Notifications/>
        </Badge>

    <Avatar sx={{width:"20px", height:"20px"}}alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" 
     onClick={e=>setOpen(true)}
    />
    </Icons>
    <UserBox onClick={e=>setOpen(true)}>
    <Avatar sx={{width:"20px", height:"20px"}}alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
    <Typography variant='span'>John</Typography>
    </UserBox>
    
   
    </StyleToolbar>
    <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClick={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar