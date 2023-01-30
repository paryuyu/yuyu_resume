import MobileMainSkillItems from "../../Item/skill_detail/mobile_mainSkills";
import { skills } from "../../lib/skills";
import { Container, SwipeableDrawer, Typography, Box } from '@mui/material'
import { RxCross2 } from 'react-icons/rx';
import SkillprojectList from "../../Item/skill_detail/project_list";
import { useState } from "react";
import { projectData } from "../../lib/projectData";



function MSkillsPage() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [specificProject, setSpecificProject] = useState<any[]>([]);
  const [specificCategory, setSpecificCategory] = useState<string>("")
  const handleSkillsClick = (category: string, title: string) => {
   
    const arr = [] as any[]
    setSpecificCategory(title)
    switch (category) {
      case "Language":
        projectData.forEach(one => {
          if (one.usedSkills.language === title) {
            arr.push(one)
          }
        })
        setSpecificProject(arr)
        break;

      case "Library":

        projectData.forEach((one) => {
          one.usedSkills.libraryAndFramework.forEach((elm) => {
            if (elm === title) {
              arr.push(one)
            }
          })
        })

        setSpecificProject(arr)
        break;

      case "Framework":

        projectData.forEach((one) => {
          one.usedSkills.libraryAndFramework.forEach((elm) => {
            if (elm === title) {
              arr.push(one)
            }
          })
        })

        setSpecificProject(arr)
        break;

      case "Runtime Environment":
        projectData.forEach((one) => {
          one.usedSkills.libraryAndFramework.forEach((elm) => {
            if (elm === "express") {
              arr.push(one)
            }
          })
        })

        setSpecificProject(arr)
        break;

      case "Database":
        projectData.forEach(one => {
          if (one.usedSkills.Database === title) {
            arr.push(one)
          }
        })
        setSpecificProject(arr)
        break;

      case "Tools":
        projectData.forEach((one) => {
          one.usedSkills.tools.forEach((elm) => {
            if (elm === title) {
              arr.push(one)
            }
          })
        })

        setSpecificProject(arr)
        break;


      case "Frameworks that help with CSS":
        if (title === "Material-UI") {
          projectData.forEach((one) => {
            one.usedSkills.libraryAndFramework.forEach((elm) => {
              if (elm === "mui") {
                arr.push(one)
              }
            })
          })
          setSpecificProject(arr)

        } else if (title === "styled-Components") {
          setSpecificProject([])
        }


        break;
    }

  }

  const HandleDrawerClose = () => {
    setDrawerOpen(false)
  }

  const HandleDrawerOpen = () => {
    setDrawerOpen(true)
  }


  return (<Container
    sx={container}
    disableGutters={true}
    maxWidth={false}>

    <Typography variant="body1" color="initial" sx={stickyment}>부족한 부분은 공부하며 채워나가고 있습니다.<br />더 많은 부분을 알고싶으시다면 프로젝트로 넘어가주세요.</Typography>



    {skills.map((one) => {
      return <MobileMainSkillItems 
      item={one}
      key={one.id} 
      onProject={handleSkillsClick} 
      onOpen={HandleDrawerOpen} 
      onClose={HandleDrawerClose} />
    })
    }

    <SwipeableDrawer
      onOpen={() => { setDrawerOpen(true) }}
      onClose={HandleDrawerClose}
      open={drawerOpen}
      anchor={"bottom"}
    >

      <Box sx={modalBoxStyle}>

        <Box sx={modalHeader}>

          <Typography variant="h6">{specificCategory}</Typography>
          <RxCross2 size={30} onClick={HandleDrawerClose} />
        </Box>
        <Box sx={modalBody}>
          {specificProject.map((one,index) => {
            return <SkillprojectList item={one} key={index} />
          })
          }

          {specificProject.length === 0 && <Typography sx={emptyMentStyle}>해당 스킬을 이용한 프로젝트는 없습니다.</Typography>}
        </Box>
      </Box>
    </SwipeableDrawer>


  </Container>);
}

export default MSkillsPage;

const emptyMentStyle ={
m:1,
display:'flex',
justifyContent: 'center',
mb:2
}

const modalBody = {
  overflow: 'scroll'
}
const modalBoxStyle = {
  position: 'relative',
}

const modalHeader = {

  display: 'flex',
  justifyContent: 'space-between',
  paddingX: 2,
  paddingY: 1,
}

const stickyment = {
  position: 'sticky',
  top: 3,
  textAlign: 'center',
  padding: 1,
  margin: 1,
  fontWeight: 100,
  fontSize: 13,
  borderRadius: 10,
  bgcolor: '#333',
  color: '#fff'
}

const container = {
  position: 'relative'
}