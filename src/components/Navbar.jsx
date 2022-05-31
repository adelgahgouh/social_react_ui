import { Cabin, Mail, Notifications } from "@mui/icons-material";
import {
  Menu,
  MenuItem
  ,
  AppBar,
  Box,
  InputBase,
  styled,
  Toolbar,
  Typography,
  Badge,
  Avatar,
} from "@mui/material";
import React, { useState } from "react";

const Navbar = () => {
  const [open,setOpen]=useState(false);
  const Styledtooldbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    width: "40%",
    borderRadius: theme.shape.borderRadius,
  }));
  const Icons = styled(Box)(({ theme }) => 
  (
    {display:"none",
    gap:"20px",
    alignItems:"center",
    [theme.breakpoints.up("sm")]:{
      display:"flex"
    }
  }));
    const Userbox = styled(Box)(({ theme }) => 
    (
      {display:"flex",
      gap:"10px",
      alignItems:"center",
      [theme.breakpoints.up("sm")]:{
        display:"none"
      }
      }));
  
  return (
    <AppBar position="sticky">
      <Styledtooldbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          social
        </Typography>
        <Cabin sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..."></InputBase>
        </Search>
        <Icons >
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>

          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar sx={{width:30,height:30}} onClick={e=>{setOpen(true)}} src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554__480.jpg"
></Avatar>
        </Icons>
        <Userbox>
        <Avatar sx={{width:30,height:30}}  src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554__480.jpg"
></Avatar>
<Typography variant="span" >
          Adel
        </Typography>
        </Userbox>
      </Styledtooldbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
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
        <MenuItem>My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
