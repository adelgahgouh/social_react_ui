import { Box, Fab, Modal, styled, Tooltip ,TextField,Typography,Avatar,Stack, ButtonGroup, Button} from '@mui/material'
import React, { useState } from 'react'
import {Add,EmojiEmotions,Videocam,Image,PersonAdd, DateRange} from "@mui/icons-material";
const Addbtn = () => {
  const [open,setOpen]=useState(false);
  const StyledModal=styled(Modal)({
    display:"flex",alignItems:"center",justifyContent:"center"
  })

  const Userbox=styled(Box)({
    display:"flex",alignItems:"center",
    gap:10,marginBottom:"20px"
  })
  return (
<>
<Tooltip onClick={e=>setOpen(true)} title="Add" sx={{position:"fixed",bottom:20,left:{xs:"calc(90% - 25px)",md:20} }}>
<Fab color="primary" aria-label="add">
  <Add />
</Fab>
</Tooltip>
<StyledModal
  open={open}
  onClose={e=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={280} bgcolor="background.default" color="text.primary" borderRadius={5} p={5}>
    <Typography variant='h6' color="gray" textAlign="center" fontWeight={500}>create post</Typography>
    <Userbox>
      <Avatar
      src=''
      sx={{width:30, height:30}}
      >
      </Avatar>
      <Typography variant='span'  fontWeight={500}>Adel Gahgouh</Typography>

    </Userbox>
    <TextField
    sx={{width:"100%"}}
          id="standard-multiline-static"
          placeholder="what is on your mind?"
          multiline
          rows={4}
          variant="standard"
        />

        <Stack direction="row" gap={1} mt={2} mb={3}>

        <EmojiEmotions color="primary"></EmojiEmotions>
        <Videocam color="error"></Videocam>
        <Image color="secondary"></Image>
        <PersonAdd color="success"></PersonAdd>
        </Stack>
        <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
  <Button >POST</Button>
  <Button sx={{width:"100px"}} ><DateRange/></Button>
  
</ButtonGroup>

  </Box>
</StyledModal>
</>
    )
}

export default Addbtn