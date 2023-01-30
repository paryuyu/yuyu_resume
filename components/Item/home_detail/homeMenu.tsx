import { Box, IconButton, Typography } from "@mui/material";
import { useContext } from "react";
import { MqContext, PageManageContext } from "../../../mq_context/context";
import { FiArrowRight } from 'react-icons/fi';
import { PageContextType } from "../../lib/dataType";
import { useRouter } from "next/router";
export default function HomemenuDetail({ item, hovered, onHover}: any) {


  const mqValue = useContext(MqContext)
  const { handlePage } =useContext(PageManageContext) as PageContextType;

  const router = useRouter();

  const handleMovePage = () =>{
      if(item.title === "Resume"){
        router.push("/resume")
      }else {
        handlePage(item.title)
      }
  }

  return (<>
    <Box
      sx={
        mqValue ?
          hovered !== item.title ? mqboxStyle : { ...mqboxStyle, bgcolor: '#333' } :
          hovered !== item.title ? boxStyle : { ...boxStyle, bgcolor: '#333' }}
      onMouseMove={() => { onHover(item.title) }}
      onMouseLeave={() => { onHover("") }}
      onClick={handleMovePage}
    >
      <Box>
        <Typography
          sx={hovered !== item.title ? text  : { ...text, color: '#fff' }}
        >{item.title}</Typography>


        {mqValue &&
          <Typography
            sx={hovered !== item.title ? ment  : { ...ment, color: '#fff' }}
          >{item.description}</Typography>
        }

      </Box>




      {mqValue &&
        <IconButton onClick={() => handlePage(item.title)}>
          <FiArrowRight />
        </IconButton>
      }

    </Box>
  </>);
}

const ment = {
  fontWeight: 100,
  fontSize: 14
}

const text = {
  fontSize: "18px",
}

const boxStyle = {
  border: "1px solid #b2b2b2",
  width: 200,
  padding: 5.5,
  display: 'flex',
  cursor: 'pointer',
  zIndex: 100,
  borderRadius:1,
  marginY:1
}

const mqboxStyle = {
  borderBottom: "1px solid #b2b2b2",
  paddingX: 2,
  paddingY: 3,
  display: 'flex',
  cursor: 'pointer',
  zIndex: 100,
  flexDirection: 'row',
  justifyContent: 'space-between',
  flex: 1,
}

