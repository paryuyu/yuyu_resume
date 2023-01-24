import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import { useContext, useRef, useState } from "react";
import { BsGithub } from "react-icons/bs";
import { MdCall, MdMail } from "react-icons/md";
import { SiGit, SiNotion } from "react-icons/si";
import { MqContext } from "../../mq_context/context";

function ContactItem() {
  const router = useRouter();
  const mqValue = useContext(MqContext);
  const [call, setCall] = useState(false);
  const [mail, setMail] = useState(false);
  const [git, setGit] = useState(false);
  const [notion, setNotion] = useState(false);
  const handleMove = (evt: any) => {

    if (evt.target.innerText === "u_00y@naver.com") {
      router.push("mailto:u_00y@naver.com")
    } else if (evt.target.innerText === "+82 10-9653-9311") {
    } else if (evt.target.innerText === "github.com/paryuyu") {
      window.open("https://github.com/paryuyu")
    } else if (evt.target.innerText === "developer-yu.notion.site") {
      window.open("https://developer-yu.notion.site/bdaa15c7c18f44afa3d474bf93e04352")
    }
  }

  return (<>
    <Box sx={box} onClick={handleMove} ><MdMail />
      <Typography
        onMouseMove={() => { setMail(true) }}
        onMouseLeave={() => { setMail(false) }}
        sx={typo}
        onClick={handleMove}>u_00y@naver.com</Typography>

      {!mqValue ? <>
        {mail &&
          <Box sx={{ ...mentbox }}>
            <Typography sx={{ ...ment, fontSize: 18, fontWeight: 400 }} >메일</Typography>
            <Divider />

            <Typography sx={ment}>메일로 연락주시면 자정 전까지 확인하여 회신드립니다. 메일주소 클릭 시 바로 메일 보내기가 가능합니다.</Typography>
          </Box>
        }
      </> : <></>}

    </Box>


    <Box
      sx={box}
      onClick={handleMove}
      onMouseMove={() => { setCall(true) }}
      onMouseLeave={() => { setCall(false) }}>
      <MdCall /> <Typography sx={typo}>+82 10-9653-9311</Typography>

      {!mqValue ? <>
        {call &&
          <Box sx={{ ...mentbox }}>
            <Typography sx={{ ...ment, fontSize: 18, fontWeight: 400 }} >통화 & 문자</Typography>
            <Divider />

            <Typography sx={ment}>혹시나 바로 응답이 없을 경우 확인 후 바로 회신드리오니 회신 가능한 연락처로 연락주시길 바랍니다. </Typography>
          </Box>
        }
      </> : <></>}

    </Box>


    <Box sx={box}
      onMouseMove={() => { setGit(true) }}
      onMouseLeave={() => { setGit(false) }}
      onClick={handleMove}>
      <BsGithub /> <Typography sx={typo}>github.com/paryuyu</Typography>

      {!mqValue ? <>
        {git &&
          <Box sx={{ ...mentbox }}>
            <Typography sx={{ ...ment, fontSize: 18, fontWeight: 400 }} >깃허브</Typography>
            <Divider />
            <Typography sx={ment}>진행 중인 프로젝트가 궁금하시다면 깃허브 링크를 클릭해주세요.</Typography>
          </Box>
        }
      </> : <></>}
    </Box>

    <Box sx={box}
      onMouseMove={() => { setNotion(true) }}
      onMouseLeave={() => { setNotion(false) }}
      onClick={handleMove}><SiNotion /> <Typography sx={typo}>developer-yu.notion.site</Typography>

      {!mqValue ? <>
        {notion &&
          <Box sx={{ ...mentbox }}>
            <Typography sx={{ ...ment, fontSize: 18, fontWeight: 400 }} >노션</Typography>
            <Divider />
            <Typography sx={ment}>노션으로 만들어진 포트폴리오가 궁금하시다면 노션 링크를 클릭해주세요.</Typography>
          </Box>
        }
      </> : <></>}
    </Box>


  </>);
}

export default ContactItem;
const ment = {
  fontWeight: 100,
  fontSize: 13,
  color:'#fff'
}
const mentbox = {
  position: 'absolute',
  width: 300,
  left: 200,
  border: '1px #333 solid',
  p: 1,
  borderRadius: 2,
  bgcolor: '#333',
}

const box = {
  mb: 1,
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  position: 'relative'

}

const typo = {
  ml: 1,
  fontWeight: 100,
  fontSize: 15,

}