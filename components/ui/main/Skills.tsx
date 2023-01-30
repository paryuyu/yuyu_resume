
import { Box, Container, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { skills } from '../../lib/skills';
import SkillContent from '../../Item/skill_detail/skill_Content';
export default function Skills({ menu }: any) {
  const [lang, setLang] = useState(true);
  const [data, setData] = useState(true);
  const [runtime, setRuntime] = useState(true);
  const [library, setLibrary] = useState(true);
  const [tool, setTool] = useState(true);
  const [framework, setFramework] = useState(true);
  const [frameCss, setFrameCss] = useState(true);

  return (
    <Container

      sx={containerStyle}>

      <Grid sx={gridStyle}>

        <Box sx={boxStyle}>
          <Box
            sx={miniheader}
            onClick={() => { setLang(c => !c) }}>
            <Typography sx={titleStyle} variant='h4'>Language</Typography>
            <FiChevronDown size={30} />
          </Box>

          {lang && skills.filter(one => one.category === "Language").map((one) => {
            return (<SkillContent item={one} key={one.id} />)
          })}

        </Box>
        <Box sx={boxStyle}>
          <Box
            sx={miniheader}
            onClick={() => { setData(c => !c) }}>
            <Typography sx={titleStyle} variant='h4'>Database</Typography>
            <FiChevronDown size={30} />
          </Box>

          {data && skills.filter(one => one.category === "Database").map((one) => {
            return (<SkillContent item={one} key={one.id} />)
          })}

        </Box>
      </Grid>

      <Grid className='middle' sx={gridStyle}>
        <Box sx={runtime ? { ...boxStyle } : { ...boxStyle, height: "100%" }}>

          <Box
            onClick={() => { setRuntime(c => !c) }}
            sx={miniheader}>
            <Typography sx={titleStyle} variant='h5'>Runtime Environment</Typography>
            <FiChevronDown size={30} />
          </Box>
          {runtime && <>
            {runtime && skills.filter(one => one.category === "Runtime Environment").map((one) => {
              return (<SkillContent item={one} key={one.id} />)
            })}
          </>}
        </Box>

        <Box sx={library ? { ...boxStyle } : { ...boxStyle, height: '100%' }}>
          <Box
            sx={miniheader}
            onClick={() => { setLibrary(c => !c) }}
          >
            <Typography sx={titleStyle} variant='h4'>Library</Typography>
            <FiChevronDown size={30} />
          </Box>
          {library && <>
            {library && skills.filter(one => one.category === "Library").map((one) => {
              return (<SkillContent item={one} key={one.id} />)
            })}
          </>}
        </Box>

        <Box sx={tool ? { ...boxStyle } : { ...boxStyle, height: '100%' }}>
          <Box
            onClick={() => { setTool(c => !c) }}
            sx={miniheader}>
            <Typography sx={titleStyle} variant='h4'>Tools</Typography>
            <FiChevronDown size={30} />
          </Box>
          {tool && <>
            {tool && skills.filter(one => one.category === "Tools").map((one) => {
              return (<SkillContent item={one} key={one.id} />)
            })}
          </>}
        </Box>

      </Grid>

      <Grid sx={gridStyle}>
        <Box sx={framework ? { ...boxStyle } : { ...boxStyle, height: '100%' }}>
          <Box sx={miniheader} onClick={() => { setFramework(c => !c) }}>
            <Typography sx={titleStyle} variant='h4'>Framework</Typography>
            <FiChevronDown size={30} />
          </Box>
          {framework && <>
            {framework && skills.filter(one => one.category === "Framework").map((one) => {
              return (<SkillContent item={one} key={one.id} />)
            })}
          </>}
        </Box>

        <Box sx={frameCss ? { ...boxStyle } : { ...boxStyle, height: '100%' }}>
          <Box
            onClick={() => { setFrameCss(c => !c) }}
            sx={miniheader}>
            <Typography sx={titleStyle} variant='h4'>Frameworks that help with CSS</Typography>
            <FiChevronDown size={30} />
          </Box>
          {frameCss && <>
            {frameCss && skills.filter(one => one.category === "Frameworks that help with CSS").map((one) => {
              return (<SkillContent item={one} key={one.id} />)
            })}
          </>}
        </Box>
      </Grid>


    </Container>
  );
}

const miniheader = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: '1px #333 dotted',
  pb: 1,
  cursor: 'pointer',
  p: 1,
  '&:hover': {
    bgcolor: '#ddd',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  }
}

const gridStyle = {
  height: '100%',
  mt: 1,
  minWidth: "40%",
  mr: 2,
}


const titleStyle = {
}


const containerStyle = {
  width: "80%",
  minHeight: '95vh',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  pb: 1,
  cursor: 'default'
}

const boxStyle = {
  border: '1px #333 solid',
  p: 1,
  marginTop: 1,
}