import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

import { projectData } from "../../components/lib/projectData";
import { dataType, PageContextType,skillType } from "../../components/lib/dataType";


import { IoIosArrowForward } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import { BsFillCursorFill, BsGithub } from "react-icons/bs";

import { MqContext, PageManageContext } from "../../mq_context/context";

import ProjectDetaiItem from "../../components/Item/project_detail/projectDetailItem";
import ProjectDetailSkill from "../../components/Item/project_detail/projectDetailSkill";


export default function ProjectDetail() {

  const { handleMenuOpen, headerMenu } = useContext(PageManageContext) as PageContextType;

  const { query } = useRouter();
  const MqValue = useContext(MqContext);



  const [item, setItem] = useState<dataType>();
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [skills, setSkills] = useState<skillType>();
  const [partBoxView, setPartBoxView] = useState(true);
  const [serviceView, setServiceView] = useState(true);
  const [detailView, setDetailView] = useState(true);
  const [gitView, setGitView] = useState(true);
  const [siteView, setSiteView] = useState(true);
  const [skillView, setSkillView] = useState(true);


  useEffect(()=>{
    if(MqValue){
      setDetailView(false);
      setGitView(false);
      setSiteView(false);
      setSkillView(false);
    }

  },[])


  useEffect(() => {
    
    if (projectData) {
      let newItem = projectData.filter((one) => { return (one.id === Number(query.projectId)) }) as dataType[];
      
      setItem(newItem[0])
      setSkills(newItem[0]?.usedSkills)
      
    } else {
      return;
    }
  }, [query])
  
  useEffect(() => {

    if (item && item.period.length >= 1) {
      let date = new Date(item.period[0])
      let newDate = date.toLocaleDateString('ko', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }
      )
      setStart(newDate)



      if (item && item.period.length === 2) {
        let date = new Date(item.period[1])
        let newDate = date.toLocaleDateString('ko', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }
        )
        setEnd(newDate)
      }
    }
  }, [item])



  const handlesite = () => {
    window.open(item?.WebSite)
  }
  const handleGitMove = (evt: any) => {
    window.open(evt.target.innerText)
  }
  const handleHeaderListOpen = () => {

    if (headerMenu) {
      handleMenuOpen()
    } else {
      return;
    }
  }

  return (
    <>

      {item && query ?
        <>
          <Container
            onClick={handleHeaderListOpen}
            disableGutters={true}
            maxWidth={false}
            sx={containerStyle}>

            <Grid sx={MqValue ? {...outSideBox}:{...outSideBox,width:'80%'}}>
              <Box sx={titleBox}>
                <Box>
                  <Typography sx={MqValue ? {...title, fontSize:20} :{...title, fontSize:30}}>{item.title}</Typography>
                  <Typography sx={description}>{item.description}</Typography>

                  {!item.process ?
                    <Typography>진행중</Typography> :
                    <Typography>완료</Typography>
                  }
                </Box>
              </Box>

              {item.period.length > 0 &&
                <Box sx={dateBox} >
                  <Box sx={line}></Box>
                  <Box sx={ball}></Box>
                  {end.length > 0 ? <Box sx={{ ...ball, left: '90%' }}></Box> : <Box sx={iconBox}><IoIosArrowForward size={25} /></Box>}

                  <Box sx={datetextBox}>
                    <Typography sx={startStyle}>{start}</Typography>
                    {end.length > 0 ? <Typography sx={endStyle}>{end}</Typography> : <Typography>진행중</Typography>}
                  </Box>
                </Box>
              }


              <Box sx={detailBox}>
                <Box sx={partBox}>
                  <Box sx={miniheader} onClick={() => { setPartBoxView(c => !c) }}>
                    <Typography variant="h6">담당 파트</Typography>
                    <MdArrowDropDown size={30} />
                  </Box>


                  {partBoxView &&
                    <> {item?.responsiblePart?.map((one, index) => {
                      return <ProjectDetaiItem item={one} key={index} />
                    })}</>
                  }
                </Box>



                <Box sx={partBox}>
                  <Box sx={miniheader} onClick={() => { setServiceView(c => !c) }}>
                    <Typography variant="h6">구현 기능</Typography>
                    <MdArrowDropDown size={30} />
                  </Box>

                  {serviceView && <>
                    {item?.service?.map((one, index) => {
                      return <ProjectDetaiItem item={one} key={index} />
                    })
                    }</>}

                </Box>
                <Box sx={partBox}>
                  <Box sx={miniheader} onClick={() => { setDetailView(c => !c) }}>
                    <Typography variant="h6">상세설명</Typography>
                    <MdArrowDropDown size={30} />
                  </Box>
                  {detailView && <>{item?.detail?.map((one, index) => {
                    return <ProjectDetaiItem item={one} key={index} />
                  })
                  }
                  </>}

                </Box>




                <Box sx={partBox}>
                  <Box sx={miniheader} onClick={() => { setGitView(c => !c) }}>
                    <Typography variant="h6">깃허브 링크</Typography>
                    <MdArrowDropDown size={30} />
                  </Box>
                  {gitView && <>
                    {item.githubLink.length > 0 && <Box onClick={handleGitMove} sx={styledSiteBox}>
                      <BsGithub />
                      <Typography sx={{ ml: 1 ,width:'100%'}}>{item.githubLink[0]}</Typography></Box>}


                    {item.githubLink.length > 1 &&
                      <Box onClick={handleGitMove} sx={styledSiteBox}>
                        <BsGithub />
                        <Typography sx={{ ml: 1, width:'100%'}}>{item.githubLink[1]}</Typography>
                      </Box>
                    }


                  </>}
                </Box>




                {item?.WebSite &&
                  <Box sx={partBox}>
                    <Box sx={miniheader} onClick={() => { setSiteView(c => !c) }}>
                      <Typography variant="h6">배포 사이트</Typography>
                      <MdArrowDropDown size={30} />
                    </Box>
                    {siteView &&
                      <Box sx={styledSiteBox} onClick={handlesite}>
                        <BsFillCursorFill />
                        <Typography sx={{ ml: 1 }}>사이트로 바로가기</Typography>
                      </Box>
                    }

                  </Box>

                }


                <Box sx={partBox}>
                  <Box sx={miniheader} onClick={() => { setSkillView(c => !c) }}>
                    <Typography variant="h6">사용된 기술</Typography>
                    <MdArrowDropDown size={30} />
                  </Box>
                  {skillView &&
                    <ProjectDetailSkill skill={item.usedSkills} />}

                </Box>

              </Box>

            </Grid>

          </Container></>
        : <></>}
    </>);
}

const styledSiteBox = {
  display: 'flex',
  alignItems: 'center',
  p: 0.5,
  cursor: 'pointer',
  width:'100%',
  '&:hover': {
    bgcolor: "#ddd",
    borderRadius: 1,
    textDecoration: 'underline #333 2px'
  }
}
const miniheader = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px #ddd solid',
  paddingX: 1,
  "&:hover": {
    bgcolor: '#ddd',

  }
}

const partBox = {
  overflow:'hidden',
  mb: 1,
  pb: 1
}

const detailBox = {
  border: "1px #333 solid",
  p: 2,
  minHeight: 500,
}

const datetextBox = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  mt: 1.5
}

const endStyle = {
  fontSize: 15
}
const startStyle = {
  fontSize: 15
}

const dateBox = {
  position: 'relative',
  mb: 4
}

const line = {
  width: '100%',
  height: 2,
  bgcolor: '#7c7c7c',
  mt: 1,
  position: 'relative'
}

const ball = {
  width: 13,
  height: 13,
  bgcolor: '#fff',
  mt: -0.9,
  left: '8%',
  border: '2px #7c7c7c solid',
  borderRadius: '50%',
  position: 'absolute'
}

const iconBox = {
  left: '90%',
  top: -3.5,
  position: 'absolute',

}

const description = {
  fontWeight: 100,
  fontSize: 14,
}

const title = {

}

const outSideBox = {
  display: 'flex',
  flexDirection: 'column',
  minWidth: '50%',
  width:"100%",
  margin:1

}

const titleBox = {
  border: "1px #333 solid",
  p: 2,
  mb: 1,
  pr: 5,
  borderRadius: 2,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

}

const containerStyle = {
  minHeight: '96vh',
  cursor: 'default',
  flexDirection: 'row',
  display: 'flex',
  justifyContent: 'space-around',
  pt: 2,
  pb: 2
}
