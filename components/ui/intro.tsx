import { Button, Container, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { MqContext, PageManageContext } from "../../mq_context/context";
import { PageContextType } from "../lib/dataType";

export default function IntroPage() {
  const [move, setMove] = useState(false);
  const { push } = useRouter();
  const mqValue = useContext(MqContext)

  const { handleMenuOpen, headerMenu, handlePage } = useContext(PageManageContext) as PageContextType;

  const handleMove = () => {
    handlePage("home")
    push("/home")
  }

  const handleHeaderListOpen = () => {

    if (headerMenu) {
      handleMenuOpen();
    } else {
      return;
    }
  }
  return (<>
    <Container
      maxWidth={false}
      disableGutters={false}
      onClick={handleHeaderListOpen}
      sx={!mqValue ? { ...containerbox } : { ...mqContainerbox }}>

      {!mqValue &&
        <Box sx={typobox}>
          <Typography sx={welcomeTypo}>welcome</Typography>
          <Typography sx={welcomeTypo}>welcome</Typography>
          <Typography sx={welcomeTypo}>welcome</Typography>
        </Box>
      }

      <Box
        onClick={handleMove}
        sx={
          mqValue ?
            { ...mqhomebox } :
            !move ? { ...homebox } :
              { ...homebox, bgcolor: '#fff', border: '#333 1px solid' }
        }
        onMouseMove={() => { setMove(true) }}
        onMouseLeave={() => { setMove(false) }}
      >

        <Typography variant="h3" sx={
          mqValue ?
            { ...mqtitle } :
            !move ? title : { ...title, color: '#333', borderBottom: '1px #333 dotted ' }}>포트폴리오</Typography>

        <Typography sx={
          mqValue ?
            !move ? mqhometypo : mqhometypo :
            !move ? hometypo: { ...hometypo, color: '#333' }}>
          유유유의 포트폴리오 사이트에 오신 걸 환영합니다.
        </Typography>

        {!mqValue &&
          <Typography
            sx={!move ? { ...hometypo } : { ...hometypo , color: '#333'}}>클릭하시면 포트폴리오로 이동합니다.</Typography>
        }



        {mqValue && <Typography
         
          sx={btStyle}
          onClick={handleMove}
        >포트폴리오 메인페이지로 이동하기</Typography>}

      </Box>
    </Container>

  </>);
}
const btStyle = {
  border: '1px dotted #333',
  // color:'#fff',
  fontWeight:100,
  textAlign:'center',
  paddingY:1,
  borderRadius: 2,
  "&:hover": {
    bgcolor: '#ddd'
  }
}

const title = {
  borderBottom: '1px #fff dotted',
  textAlign: 'center',
  color: '#fff',
  fontWeight: 100,
  mb: 2
}


const mqtitle = {
  display: 'none'
}


const homebox = {
  bgcolor: '#333',
  zIndex: 1,
  p: 2,
  width: 500,
  cursor: 'pointer',
}

const mqhomebox = {
  zIndex: 1,
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
}

const hometypo = {
  color: '#fff',
  fontWeight: 100,
  textAlign: 'center'
}


const mqhometypo = {
  // color: '#333',
  fontWeight: 100,
  fontSize: 14,
  mb: 2,
  textAlign: 'center'
}

const welcomeTypo = {
  fontSize: 100,
  cursor: 'default',
  color: '#ddd',
  fontFamily: 'serif'
}

const typobox = {
  position: 'absolute',
  left: 0,
  top: 0
}

const containerbox = {
  height: '90vh',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const mqContainerbox = {
  height: '90vh',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}
