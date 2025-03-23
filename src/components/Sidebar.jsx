import React from 'react'
import { Box } from '@mui/material'
import { green } from '@mui/material/colors'

const Sidebar = () => {
  return (
    <Box bgcolor="lightgreen" padding={2} flex={1} sx={{display:{xs:'none', sm:'block'}}}>Sidebar</Box>
  )
}

export default Sidebar