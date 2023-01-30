import { Box, Chip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { skillType } from "../../lib/dataType";

export default function ProjectDetailSkill({ skill }: any) {

  const [skills, setSkills] = useState<skillType>()
  useEffect(() => {
    if (skill) {
      setSkills(skill)
    }
  }, [skill])

  return (<>
          <Box sx={boxStyle}>
            <Typography sx={titleStyle}>/</Typography>
            <Typography sx={{...typoStyle, fontWeight:'bold'}}>Skills</Typography>
          </Box>

          <Box sx={boxStyle}>
            <Typography sx={titleStyle}>language</Typography>
            <Typography sx={typoStyle}>{skills?.language}</Typography>
          </Box>
          <Box sx={boxStyle}>
            <Typography sx={titleStyle}>Database</Typography>
            <Typography sx={typoStyle}>{skills?.Database}</Typography>
          </Box>

          <Box sx={boxStyle}>
            <Typography sx={titleStyle}>library & Framework</Typography>

            <Typography sx={typoStyle}>
              {skills?.libraryAndFramework.map((one, index) => {
                return <Chip 
                size="small"
                label={one} 
                variant={"outlined"}
                color="success"
                sx={{m:0.2}}
                key={index} />
              })}
            </Typography>

          </Box>
          <Box sx={boxStyle}>
            <Typography sx={titleStyle}>Tools</Typography>

            <Typography sx={typoStyle}>
              {skills?.tools.map((one, index) => {
                return <Chip 
                size="small"
                label={one} 
                variant={"outlined"}
                color="success"
                sx={{m:0.2}}
                key={index} />
              })}
            </Typography>

          </Box>


  </>);
}
const titleStyle ={
  flex:2
}

const typoStyle ={
flex:2,
fontWeight:100
}
const boxStyle={
  display:'flex',
  borderBottom:"1px solid #ddd",
  pb:1,
  mt:1
}

