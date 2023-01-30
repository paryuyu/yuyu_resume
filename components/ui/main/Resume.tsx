import { Container, Typography, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import ContactItem from "../../Item/contact";
import IntoduceItem from "../../Item/introduceItem";
import { EducationItem } from "../../Item/education";
import { SkillItem } from "../../Item/skillsItem";
import { introduce } from '../../lib/selfIntroduceData';
import { skills } from '../../lib/skills';
import { MqContext, PageManageContext } from "../../../mq_context/context";
import { PageContextType } from "../../lib/dataType";

function ResumePages() {
  const mqValue = useContext(MqContext);
  const { handleMenuOpen, headerMenu } = useContext(PageManageContext) as PageContextType;


  const [contact, setContact] = useState(true);
  const [edu, setEdu] = useState(true);
  const [selectedId, setSelectedId] = useState<number[]>([1, 2, 3, 4, 5]);
  const [skillTogle, setSkillTogle] = useState(true);


  useEffect(() => {
    if (mqValue) {
      setContact(false);
      setEdu(false);
      setSkillTogle(false);
      setSelectedId([])
    }
  }, [mqValue])


  const handleSelectedId = (val: number) => {
    if (selectedId.includes(val)) {
      setSelectedId(selectedId.filter((o) => val !== o))
    } else {
      setSelectedId([...selectedId, val])
    }
  }


  const handlecertification = () => {
    window.open("/certification.pdf")
  }


  const handleHeaderListOpen = () => {
    if (headerMenu) {
      handleMenuOpen()
    } else {
      return;
    }
  }





  return (<>
    <Container
      onClick={handleHeaderListOpen}
      maxWidth={false}
      disableGutters={true}
      sx={!mqValue ? { ...containerStyle } : { ...mqcontainerStyle }}>


      <Box sx={mqValue ? { ...mqoutbox } : { ...outbox }}>

        <Grid sx={!mqValue ? { ...grid } : { ...mqgrid }}>
          <Box sx={gridInnerBox}>
            <Box sx={!mqValue ? { ...paper } : { ...mqpaper }}>

              <Typography variant="h4"
                sx={!mqValue ? { ...minititle } : { ...mqminititle }}
                onClick={() => {
                  setSkillTogle(c => !c);
                }}>Skills</Typography>
              <Typography sx={ment}>각 스킬별 레벨 및 상세설명이 필요하시면 스킬명을 클릭해주세요.</Typography>





              {skillTogle && <Box>
                {skills?.map((one) => {
                  return (
                    <SkillItem item={one} key={one.id} />
                  )
                })}
              </Box>}

            </Box>

            <Box sx={!mqValue ? { ...paper } : { ...mqpaper }}>

              <Typography onClick={() => { setEdu(c => !c) }} variant="h4" sx={!mqValue ? { ...minititle } : { ...mqminititle }}>Education</Typography>
              <Typography onClick={handlecertification}
                sx={certificationMent}>수료 상세내역이 궁금하시다면 클릭해주세요. 수료증을 확인하실 수 있습니다.</Typography>

              {edu &&
                <EducationItem />
              }

            </Box>

            <Box sx={!mqValue ? { ...paper } : { ...mqpaper }}>

              <Typography
                onClick={() => { setContact(c => !c) }}
                variant="h4"
                sx={!mqValue ? { ...minititle } : { ...mqminititle }}>Contact</Typography>
              <Typography sx={ment}>메일이나 문자로 연락주시면 24시간 내에 확인하고 있습니다.</Typography>

              {contact &&
                <ContactItem />
              }

            </Box>
          </Box>

        </Grid>


        <Grid sx={mqValue ? { ...mqrightGrid } : { ...rightGrid }}>

          {introduce?.map((one: any) => {
            return (
              <IntoduceItem
                key={one.id}
                item={one}
                onSelec={handleSelectedId}
                selectedId={selectedId}
              />
            )
          })
          }

        </Grid>
      </Box>
    </Container>

  </>);
}

export default ResumePages;


const mqpaper = {
  borderBottom: "1px solid #ddd",
  boxShadow: 0,
  p: 1
}

const mqminititle = {
  fontSize: 25
}


const minititle = {
  fontFamily: 'serif',
  '&:hover': {
    color: '#b1b1b1',
    textDecoration: ' underline grey 2px'
  }
}

const mqcontainerStyle = {
  display: "flex",
  flexDirection: 'column',
  justifyContent: 'start',
  minHeight: "90vh",
  cursor: 'default'

}

const containerStyle = {
  display: "flex",
  flexDirection: 'column',
  position: 'relative',
  minHeight: "90vh",
  alignItems: 'center',
  cursor: 'default'
}

const mqoutbox = {
  p: 1
}

const outbox = {
  display: 'flex',
  mt: 2
}

const grid = {
  display: 'flex',
  flexDirection: "row",
  border: '2px solid #ddd',
  padding: 2,
  borderRadius: 5,
  marginRight: 4,
  marginBottom: 2,
  minWidth: 280,
}

const mqgrid = {
  width: '100%',
  border: '1px solid #ddd',
  borderRadius: 3,
  padding: 1

}

const rightGrid = {
  display: 'flex',
  flexDirection: "column",
  width: '70%',
  mb: 1
}

const mqrightGrid = {
  display: 'flex',
  flexDirection: "column",
  width: '100%',
  mb: 1
}

const gridInnerBox = {
  display: 'flex',
  flexDirection: "column"
}

const paper = {
  cursor: 'default',
  marginBottom: 5,
  boxShadow: 0
}

const ment = {
  fontWeight: 100, fontSize: 12
}

const certificationMent = {
  fontWeight: 100,
  fontSize: 12,
  cursor: 'pointer',
  "&:hover": {
    fontWeight: 'bold',
    textDecoration: 'underline 1px',

  }
}