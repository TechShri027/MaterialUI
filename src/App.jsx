import Rightbar from './Components/Rightbar';
import Sidebar from './Components/Sidebar'
import Feed from './Components/Feed'
import './App.css'
import * as React from 'react';
import { createTheme, styled } from '@mui/material/styles';
import { Box, Stack, Typography } from '@mui/material';
import Navbar from './Components/Navbar';
import Addbtn from './Components/Addbtn';
import { ThemeProvider } from '@emotion/react';
function App() {
 
  const [mode, setMode]=React.useState("light")
  const darkTheme=createTheme({
    palette:{
      mode: mode
    },
  })

  return (
    <ThemeProvider theme={darkTheme}>
   <Box bgcolor={"background.default"} color={"text.primary"}>
   <Navbar/>
    <Stack direction={'row'} spacing={2}sx={{justifyContent:"space-between", alignItems:"flex-start"}}>
    
      <Sidebar setMode={setMode} mode={mode} />
      <Feed/>
      <Rightbar/>
    </Stack>
    <Addbtn/>
   </Box>

   </ThemeProvider>
  )
}

export default App
