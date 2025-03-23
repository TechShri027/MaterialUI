import Right from './components/Rightbar'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import './App.css'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Stack, Typography } from '@mui/material';
import Navbar from './components/Navbar';

function App() {
 

  return (
    <>
   <Box>
   <Navbar/>
    <Stack direction={'row'} spacing={2}sx={{justifyContent:"space-between", alignItems:"center"}}>
    
      <Sidebar />
      <Feed/>
      <Right/>
    </Stack>
   </Box>

    </>
  )
}

export default App
