import { Container, Typography, Box, Grid } from "@mui/material";
import { useContext } from "react";
import ProjectItem from "../../Item/projectItem";
import { projectData } from "../../lib/projectData";
import { MqContext } from "../../../mq_context/context";

type data = {
  id: number,
  title: string,
  description: string,
  period: string[],
  responsiblePart: string[],
  service: string[],
  detail: string[],
  language: string,
  Database: string,
  libraryAndFramework: string[],
  tools: string,
  githubLink: string[],
  process: boolean
}


function ProjectsPage() {
  const mqValue = useContext(MqContext)

  return (<Container
    disableGutters={true}
    maxWidth={false}
    sx={!mqValue ? containerStyle : mqcontainerStyle }>
    {mqValue &&

      <Typography sx={ment}>프로젝트명을 클릭하시면 상세페이지로 넘어갑니다.</Typography>}
    <Grid
      sx={!mqValue ? outlineBox : mqoutlineBox }
    >

      {projectData.slice(0, 3).map((one, index) => {
        return <Box sx={mqValue ? mqitembox : itembox } key={index}><ProjectItem item={one} key={one.id} /></Box>
      })
      }

    </Grid>

    {!mqValue && <Box sx={boxStyle}></Box>}
    <Grid
      sx={!mqValue ? outlineBox : mqoutlineBox }
    >

      {projectData.slice(3, 6).map((one, index) => {
        return <Box  sx={mqValue ? mqitembox : itembox } key={index}><ProjectItem item={one} key={index} /></Box>
      })
      }
    </Grid>

    {!mqValue && <Box sx={boxStyle}></Box>}

    <Grid
      sx={!mqValue ? outlineBox : mqoutlineBox }
    >
      {projectData.slice(6, 9).map((one, index) => {
        return <Box  sx={mqValue ? mqitembox : itembox }  key={index}><ProjectItem item={one} key={index} /></Box>
      })
      }
    </Grid>


  </Container>);
}

export default ProjectsPage;

const ment = {
  position: 'sticky',
  top: 3,
  textAlign: 'center',
  padding: 1,
  margin: 1,
  fontWeight: 100,
  fontSize: 13,
  borderRadius: 10,
  bgcolor: '#333',
  color: '#fff',
  width: '97%',
}


const mqitembox ={
  marginBottom:2
}


const mqoutlineBox = {
  width: '90%'
}

const itembox = {
  height: 230
}

const boxStyle = {
  background: '#333333',
  height: 600,
  width: '2px',
  marginX: 2
}

const containerStyle = {
  height: '98vh',
  cursor: 'default',
  flexDirection: 'row',
  display: 'flex',
  alignItems: 'center',
}

const mqcontainerStyle = {
  cursor: 'default',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

const outlineBox = {
  width: '50vw',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'center'
}
