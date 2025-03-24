import React, { useState } from 'react'
import { Tooltip, Fab,Modal,Box, Typography,Avatar,TextField, Stack,ButtonGroup,Button} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import styled from 'styled-components';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DateRangeIcon from '@mui/icons-material/DateRange';

const StyleModal=styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
})

const UserBox=styled(Box)({
    display:"flex",
    alignItems:"center",
    // justifyContent:"center"
    gap:20
})
const Addbtn = () => {
    const [open , setOpen]=useState(false)
  return (
    <>
    <Tooltip title="Add" 
     onClick={e=>setOpen(true)}
     sx={{position:"fixed" ,bottom:20, left:{xs:"calc(50%-25px)", md: 30}}}>
  <Fab color="primary" aria-label="add">
  <AddIcon />
</Fab>
</Tooltip>
<StyleModal
  open={open}
  onClose={e=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={250} p={3} borderRadius={5} bgcolor={"background.default"} color={"text.primary"}>
    <Typography variant='h6' color='gray' textAlign="center">Create a Post</Typography>
    <UserBox>
    <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" sx={{width:30 , height: 30}}/>
    <Typography variant='span' fontWeight={500}>Remy Sharp</Typography>
    </UserBox>
    <TextField 
    sx={{width:"100%"}}
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="What's on your mind?"
          variant="standard"
        />

        <Stack direction="row" gap={1} mt={2}>
<EmojiEmotionsIcon color='primary'/>
<CameraAltIcon color='secondary'/>
<VideoCameraBackIcon color='sucess'/>
<PersonAddIcon color='error'/>
        </Stack>

        <ButtonGroup variant="contained" aria-label="Basic button group" 
        fullWidth sx={{marginTop:4}}>
      <Button>Post</Button>
      <Button sx={{width: "100px"}}><DateRangeIcon/></Button>
    
    </ButtonGroup>


  </Box>
</StyleModal>
</>
  )
}

export default Addbtn