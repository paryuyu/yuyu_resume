import { Typography, Box, Divider, IconButton } from "@mui/material";
import { Container } from "@mui/system";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { MqContext } from "../../../mq_context/context";
import { AiOutlineArrowRight } from 'react-icons/ai';

function AboutMePage() {
  const router = useRouter()
  const [idCardMove, setIdCardMove] = useState(false);
  const mqValue = useContext(MqContext);


  return (<Container
    disableGutters={true}
    maxWidth={false}
    sx={!mqValue ? { ...containerStyle } : { ...mqcontainerStyle }}>

    {!mqValue ? <>

      <Box
        onClick={() => { router.push("resume") }}
        onMouseMove={() => { setIdCardMove(true) }
        }
        onMouseLeave={() => { setIdCardMove(false) }}
        sx={box}
      >

        <Typography
          variant={!mqValue ? "h3" : "h4"}
        >유유유</Typography>

        <Divider />
        <Typography textAlign={'left'}>
          새로운 것를 두려워하지 않고 끊임없이 공부하고 도전하는 개발자가 될 것 입니다. 활발한 의견 교류를 지향하며 여러 의견을 적극적으로 수용하는 개발자가 되겠습니다.</Typography>
      </Box>

      {idCardMove ? <Typography sx={{ ...idCardText }}>
        Go to Resume</Typography> :
        <Box height={75}></Box>}
    </> : <>

      <Box
        onClick={() => { router.push("resume") }}
        sx={mqbox} >
        <Box sx={miniheader}>
          <Typography variant="h6">이력서 바로가기</Typography>
            <AiOutlineArrowRight  onClick={() => { router.push("resume") }} size={20}/>
        </Box>
        <Typography sx={mqtext}>새로운 것를 두려워하지 않고 끊임없이 공부하고 도전하는 개발자가 될 것 입니다. 활발한 의견 교류를 지향하며 여러 의견을 적극적으로 수용하는 개발자가 되겠습니다.</Typography>
      </Box>
    </>
    }


  </Container>);
}

export default AboutMePage;
const mqtext = {
  borderTop:'#333 1px solid'
}
const miniheader = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
 
  padding:0.5,
  "&:hover":{
    bgcolor:'#ddd',
   borderRadius:2

  }
}
const idCardText = {
  
  fontSize: 50,
  fontWeight: 100,
  color: '#979797',
  fontFamily: 'serif'
}

const containerStyle = {
  height: '98vh',
  cursor: 'default',
  flexDirection: 'column-reverse',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const box = {
  width: '500px',
  border: 'solid 0.5px #333',
  padding: 2,
  cursor: 'pointer',
  "&:hover": {
    background: '#dddddd70'
  }
}

const mqbox = {
  padding: 2,
  cursor: 'default',
  justifyContent: 'center',
  display: 'flex',
  flexDirection: 'column'
}


const mqcontainerStyle = {
  height: "90vh",
  cursor: 'default',
  display: 'flex',
  justifyContent: 'center',
}