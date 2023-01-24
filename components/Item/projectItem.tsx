import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import { useContext } from "react";
import { MqContext } from "../../mq_context/context";

function ProjectItem({ item }: any) {
  const router = useRouter()
  const mqValue = useContext(MqContext)
  const handleMove = () => {
    router.push(`/${item.id}`)
  }


  return (<>
  
    <Box>
    {mqValue &&<>
    <Box sx={headerOut} onClick={handleMove}>
    <Box sx={mqheaderTextBox}>
      <Typography sx={mqnum}>{item.id}</Typography>
      <Typography sx={mqtitle}>{item.title}</Typography>
      </Box>

      </Box>
      </> }

      <Typography 
      sx={!mqValue ? {...titleNumText}:{...mqtitleNumText}}
       onClick={handleMove}>{item.id}</Typography>

      <Box sx={!mqValue ? {...itembox}:{...mqitembox}}>
        <Typography variant='h6' sx={!mqValue ? {...titleText}:{...mqtitleText}}>{item.title}</Typography>

        <Box sx={!mqValue ? {...detailBox}:{...mqdetailBox}}>
          <Box sx={!mqValue ?{...detailList}:{...mqdetailList}}>
            <Typography>진행상황</Typography>
            {item.process ? <Typography sx={detailStyle}>완료</Typography> : <Typography sx={detailStyle}>진행중</Typography>}
          </Box>

     
          <Box sx={!mqValue ?{...detailList}:{...mqdetailList}}>
            <Typography>시작날짜</Typography>
            <Typography sx={detailStyle}>{item.period[0]}</Typography> 
          </Box>

         {item.period.length > 1 &&  
         <Box sx={!mqValue ?{...detailList}:{...mqdetailList}}>
            <Typography>마지막날짜</Typography>
            <Typography sx={detailStyle}>{item.period[1]}</Typography> 
          </Box>}

        </Box>
      </Box>
    </Box>

  </>);
}

export default ProjectItem;
const mqheaderTextBox ={
  display:'flex',
  justifyContent: 'center',
}
const headerOut={
  border:'1px #333 solid',
  borderRadius:2,
  paddingX:1,
  display:'flex',
  // justifyContent: 'center',
  alignItems: 'center',
  cursor:'pointer',
  "&:hover":{
    bgcolor:'#ddd'
  }
  
}

const mqdetailBox={
  width:'100%',
  
}

const mqdetailList={
  display:'flex',
  justifyContent: 'space-between',
  paddingX:1,
  borderBottom:'1px solid #333'
}
const itembox={

}

const mqitembox={
  display:'flex',
  justifyContent: 'center',
}
const mqnum ={
fontSize:20
}

const mqtitle={
  fontSize:20,
  fontWeight:100,
  ml:1
}
const mqminiheader ={
  display:'flex',
  justifyContent: 'center',
  alignItems: 'center',
  
}
const mqtitleText ={
  display:'none'
}

const mqtitleNumText ={
  display:'none'
}

const detailList = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width:'90%',
  borderBottom:'1px #333 dashed'
}

const detailStyle = {
  fontWeight: 100,

}
const detailBox = {
  display: 'flex',
  flexDirection: 'column',
}

const titleNumText = {
  fontSize: 40,
  border: '1px solid #333',
  borderRadius: '50%',
  paddingX: 10,
  textAlign: 'center',
  cursor: 'pointer',
  "&:hover": {
    backgroundColor: '#dddddd70'
  }
}

const titleText = {
  marginBottom: 1,
  textAlign: 'center',
  fontWeight: 100
}
