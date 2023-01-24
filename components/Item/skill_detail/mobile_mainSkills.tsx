import { SwipeableDrawer, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { skillDataType } from "../../lib/dataType";
import { projectData } from "../../lib/projectData";
import { AiOutlineArrowRight } from 'react-icons/ai';
//RxCross2

type props = {
  item: skillDataType,
  onProject:(category:string,title:string) => void,
  onOpen:() => void,
  onClose:() => void,
}

export default function MobileMainSkillItems({ item,onProject,onOpen, onClose}: props) {
 
  return (<Box sx={itembox} onClick={()=>{onProject(item.category,item.title); onOpen()}}>
    <Box sx={typobox}>
      <Typography sx={ment}>{item.category}</Typography>
      <Typography sx={title}>{item.title}</Typography>

      <Box sx={detailbox}>
        <Typography sx={ment}>{item.description}</Typography>
      </Box>
    </Box>
<Box sx={arrowbox}>
    <AiOutlineArrowRight size={25} />
    </Box>
  </Box>);
}

const arrowbox ={

}
const typobox = {
  marginRight: 1
}

const title = {
  fontSize: 20,
  fontWeight: 100,
}

const ment = {
  fontSize: 13,
  fontWeight: 100,
}

const itembox = {

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 1,
  borderTop: '1px solid #343333',
  cursor: 'pointer',
  "&:hover": {
    bgcolor: '#ddd'
  }
}


const detailbox = {

}

