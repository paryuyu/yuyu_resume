import { Typography, Divider, Table, TableBody, TableRow, TableCell, TableHead, TableContainer } from "@mui/material";
import { Box } from "@mui/system";

export function EducationItem() {


  return (<>

    <Box sx={tableStyle}>
      <Box sx={boxStyle}>
        <Typography sx={title}>제목</Typography>
        <Typography sx={content}>내용</Typography>
      </Box>
      <Box sx={boxStyle}>
        <Typography sx={title}>과정명</Typography>
        <Typography  sx={content}>MERN FullStack 개발자 양성 과정</Typography>
      </Box>
      <Box sx={boxStyle}>
        <Typography sx={title}>기관</Typography>
        <Typography  sx={content}>한국경영원 인재개발원</Typography>
      </Box>
      <Box sx={boxStyle}>
        <Typography sx={title}>기간</Typography>
        <Typography  sx={content}>2022.06.07 ~ 2022.12.28</Typography>
      </Box>
      <Box sx={boxStyle}>
        <Typography sx={title}>Language</Typography>

        <Typography  sx={content}>JavaScript,Typography</Typography>
      </Box>
      <Box sx={boxStyle}>
        <Typography sx={title}>BackEnd</Typography>
        <Typography  sx={content}>MongoDB, Express, Nodejs</Typography>
      </Box>
      <Box sx={boxStyle}>
        <Typography sx={title}>FrontEnd</Typography>
        <Typography  sx={content}>React, React Native, Nextjs</Typography>
      </Box>

    </Box>
  </>);
}
const title={
  fontSize:14,
  flex:1

}
const content={
  fontWeight:100,
  fontSize:14,
  flex:2
}

const boxStyle = {
  display:'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  mt:1,
  borderBottom:"1px #ddd solid",
  pb:1
  
}

const tableStyle ={
  width:"100%"
}