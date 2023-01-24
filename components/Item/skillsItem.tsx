import { Typography, Paper, Divider, Box, Modal, SwipeableDrawer } from "@mui/material";
import { useState } from "react";
import * as React from 'react';
import Button from '@mui/material/Button';
import LevelBar from "./skill_detail/level_bar";
import { skillDataType } from "../lib/dataType";
import { MqContext } from "../../mq_context/context";


export function SkillItem({ item }: any) {
  const [move, setMove] = useState(false);
  const [modalOpen, setModalOpen] = useState(false)

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const mqValue = React.useContext(MqContext);


  return (<Box sx={{ ...box }}>
    <Paper sx={{ ...paper }}></Paper>

    <Typography
      sx={!move ? { ...title } : { ...title, fontWeight: 500 }}
      onMouseMove={() => { setMove(true) }}
      onMouseLeave={() => { setMove(false) }}
      onClick={handleOpen}
    >{item.title}</Typography>

    {!mqValue && <>
      {move &&
        <>
          <Box sx={{ ...line }}></Box>
          <Typography sx={{ ...description }}>{item.description}</Typography>
        </>
      }</>
    }
    
    {mqValue &&
      <SwipeableDrawer
        open={open}
        onClose={handleClose}
        onOpen={() => { setModalOpen(true) }}
        anchor={"bottom"}
        sx={modalStyle}
        disableDiscovery={true}
      >

        <Box sx={drawerboxStyle}>
          <Box sx={miniheaderStyle}>
            <Typography sx={modalTitle}>Skill</Typography>
            <Typography sx={modalTitle}>{item.title}</Typography>
          </Box>
          <Divider />
          <Box sx={modaldesBox}>
            <Box sx={levelBarBox}>
              <LevelBar level={item.level} />
            </Box>
            <Typography sx={modaldes}>{item.description}</Typography>

            <Button
              fullWidth
              variant='contained'
              onClick={() => { setOpen(false) }}
              sx={bt}>닫기</Button>
          </Box>
        </Box>
      </SwipeableDrawer>}

  </Box>);
}

const miniheaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row-reverse'
}

const modaldes = {
  fontWeight: 100,
  fontSize: 15
}

const levelBarBox = {
  m: 2
}

const modalStyle = {

}
const modaldesBox = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}
const drawerboxStyle = {
  height: "30%",
  paddingY: 5,
  border: "1px solid #333",
  paddingX: 3
}


const bt = {
  bgcolor: '#333',
  borderRadius: 10,
  marginTop: 2,
  '&:hover': {
    bgcolor: '#595959'
  }
}


const line = {

}

const modalTitle = {
  fontSize: 20,
  fontWeight: 100
}

const box = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: 1,

}

const paper = {
  width: 7,
  height: 7,
  marginRight: 1,
  border: '1px solid #595959'
}

const title = {
  fontWeight: 100,
  fontSize: 15,
  position: 'relative',
}

const description = {
  position: 'absolute',
  zIndex: 12,
  left: 300,
  bgcolor: '#333',
  color:'#fff',
  borderRadius: 2,
  border: '1px solid black',
  fontWeight: 100,
  paddingX: 2,
  paddingY: 1,
  fontSize: 13,
  maxWidth: 300
}
