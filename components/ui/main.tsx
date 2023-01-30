import { Box, Container, IconButton, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";
import { MqContext, PageManageContext } from "../../mq_context/context";
import { PageContextType } from "../lib/dataType";
import AboutMePage from "./main/AboutMe";
import Home from "./main/home";
import MSkillsPage from "./main/MSkills";
import ProjectsPage from "./main/Projects";
import Skills from "./main/Skills";

export default function MainPage() {

  const router = useRouter();
  const mqValue = useContext(MqContext);

  const skillRef = useRef<HTMLDivElement>(null);
  const aboutmeRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const mqskillRef = useRef<HTMLDivElement>(null);

  const { handleMenuOpen, headerMenu, handlePage, page, fresh, handleFresh, mainPageHandle } = useContext(PageManageContext) as PageContextType;

  const MenuArr = ['Intro', 'Skills', 'Projects', 'About Me', 'Resume']


  useEffect(() => {

    switch (page) {
    
      case "home":
        mainPageHandle("home")
        router.push("/home")
        break;
      case "Intro":
        mainPageHandle("Intro")
        router.push("/")
        break;
      case "Skills":
        mainPageHandle("Skills")
        if (!mqValue) {

          skillRef.current?.scrollIntoView({ behavior: 'auto' })
        } else {
          mqskillRef.current?.scrollIntoView({ behavior: 'auto' })
        }
        break;
      case "Projects":
        mainPageHandle("Projects")
        projectRef.current?.scrollIntoView({ behavior: 'auto' })
        break;
      case "About Me":
        mainPageHandle("About Me")
        aboutmeRef.current?.scrollIntoView({ behavior: 'auto' })
        break;
      case "Resume":
        mainPageHandle("Resume")
        router.push("/resume")
        break;
    }
  }, [page, fresh])


  const handleHeaderListOpen = () => {
    if (headerMenu) {
      handleMenuOpen()
    } else {
      return;
    }
  }


  return (
    <Container
      onClick={handleHeaderListOpen}
      disableGutters={true}
      maxWidth={false} >


      {!mqValue ? <Home /> : page === "home" ? <Home /> : <></>}


      <Box ref={skillRef}>
        {!mqValue &&
          <Box sx={menuBoxStyle}>
            {MenuArr.map((one: string, index: number) => {
              return <Box
                key={one + 1}
                onClick={() => {
                  handlePage(one);
                  handleFresh();
                }}
              >
                <Typography
                  sx={menuStyle}
                  key={index}
                >{one}</Typography>

              </Box>
            })}
          </Box>
        }

        {!mqValue ?
          <Box sx={skillbox}>
            <Skills menu={MenuArr} />
          </Box> :
          page === "Skills" ?
            <Box sx={skillbox} ref={mqskillRef}>
              <MSkillsPage />
            </Box> : <></>
        }

        {!mqValue ?
          <Box ref={projectRef} sx={borderLine}>
            <ProjectsPage />
          </Box> :
          page === "Projects" ?
            <Box ref={projectRef}>
              <ProjectsPage />
            </Box> : <></>
        }

        {!mqValue ?
          <Box ref={aboutmeRef} sx={borderLine}>
            <AboutMePage />
          </Box>
          : page === "About Me" ?
            <Box ref={aboutmeRef}>
              <AboutMePage />
            </Box> : <></>}

      </Box>
    </Container>);
}


const skillbox = {
  display: 'flex',
  flexDirection: 'column',
}

const borderLine = {
  borderTop: '2px dashed #333'
}

const menuStyle = {
  mt: 1,
  marginRight: 2,
  padding: 2,
  border: '1.5px solid #333',
  borderRadius: '50%',
  width: 120,
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  zIndex: 10,

  '&:hover': {
    background: '#333',
    color: '#fff'
  }
}


const menuBoxStyle = {
  zIndex: 100,
  display: 'flex',
  justifyContent: 'center',
  position: 'sticky',
  top: 0,
  mt: 1,
}