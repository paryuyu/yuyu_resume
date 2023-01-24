import { Avatar, Container, IconButton, List, ListItem, ListItemAvatar, ListItemText, SwipeableDrawer, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";
import { MdAlternateEmail } from 'react-icons/md';
import { SiNotion } from 'react-icons/si';
import { FiGithub, FiUser, FiTool } from 'react-icons/fi';
import { RiMenuLine } from 'react-icons/ri';
import Head from "next/head";
import { MqContext, PageManageContext } from "../../mq_context/context";
import { PageContextType } from "../lib/dataType";
import DrawerItem from "../Item/drawer/drawerItem";



function Header() {
  const MqValue = useContext(MqContext);
  const { handleMenuOpen, headerMenu, handlePage } = useContext(PageManageContext) as PageContextType;
  const router = useRouter();
  const listRef = useRef();
  const [color, setColor] = useState(false);
  const [mailColor, setMailColor] = useState(false);
  const [gitColor, setGitColor] = useState(false);
  const [notionColor, setNotionColor] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const BtRef = useRef<HTMLDivElement>();

  const handleHome = () => {
    handlePage("home");
    router.push("/home");
  }

  const handleMail = () => {
    router.push("mailto:u_00y@naver.com")

  }

  const handleGit = () => {
    window.open("https://github.com/paryuyu");

  }

  const handleNotion = () => {
    window.open("https://developer-yu.notion.site/developer-yu/bdaa15c7c18f44afa3d474bf93e04352");

  }

  const handleList = () => {
    if (headerMenu) {
      handleMenuOpen()
    } else {
      return;
    }
  }

  const handleClickMenu = () => {
    if (!headerMenu) {
      handleMenuOpen()
    }
  }

  const handleDrawer = () => {
    setDrawerOpen(c => !c)
  }

  return (
    <Container
      disableGutters={true}
      maxWidth={false}
      onClick={handleList}
      sx={!MqValue ? { ...headerContainer } : { ...mqheaderContainer }}>

      <Head><title>{
        router.route === "/home" ? "유유유 | 포트폴리오" :
          router.route === "/resume" ? "유유유 | 이력서" :
            router.route === "/[projectId]" ? "유유유 | 프로젝트" :
              "유유유 | 환영합니다"
      }</title>
      </Head>

      <RiMenuLine
        style={menuicon}
        size={30}
        onClick={() => { setDrawerOpen(c => !c) }} />

      <Typography
        onClick={handleHome}
        sx={{ ...style, fontFamily: 'serif' }}>
        {router.route === '/resume' ? "Resume" :
          router.route === '/home' ? "Portfolio" :
            router.route === '/[projectId]' ? "Project" : "Intro"
        }
      </Typography>

      <Box sx={menubox} ref={BtRef}>


        <MdAlternateEmail
          onClick={handleClickMenu}
          style={emailicon}
          size={30}
        />

        {headerMenu &&
          <List sx={MqValue ? { ...list } : { ...list, left: -220 }} >
            <ListItem
              onClick={handleMail}
              onMouseMove={() => { setMailColor(true) }}
              onMouseLeave={() => { setMailColor(false) }}
              sx={!mailColor ? { ...itemcolor } : { ...itemcolorhover }}
            >

              <ListItemAvatar>
                <Avatar sx={avartarColor}>
                  <MdAlternateEmail />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                sx={{ color: '#333' }}
                primary="mail"
                secondary="메일보내기" />
            </ListItem>

            <ListItem
              onClick={handleGit}
              onMouseMove={() => { setGitColor(true) }}
              onMouseLeave={() => { setGitColor(false) }}
              sx={!gitColor ? { ...gitlistitem } : { ...gitlistitemhover }}
            >
              <ListItemAvatar>
                <Avatar sx={avartarColor}>
                  <FiGithub />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                sx={{ color: '#333' }}
                primary="GitHub"
                secondary="깃허브 프로필 바로가기" />
            </ListItem>

            <ListItem
              onClick={handleNotion}
              onMouseMove={() => { setNotionColor(true) }}
              onMouseLeave={() => { setNotionColor(false) }}
              sx={!notionColor ? { ...notionlistitem } : { ...notionlistitemhover }}>

              <ListItemAvatar>
                <Avatar sx={avartarColor}>
                  <SiNotion />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                sx={{ color: '#333' }}
                primary="Notion"
                secondary="노션 포트폴리오로 바로가기" />
            </ListItem>
          </List>
        }
        <DrawerItem onDrawer={handleDrawer} drawerOpen={drawerOpen} />

      </Box>
    </Container>);
}

export default Header;
const menuicon={
  cursor: 'pointer',
  margin:10,
}
const emailicon ={
margin:10,
cursor:'pointer'
}
const headerContainer = {
  display: 'flex',
  justifyContent: 'space-between',
  borderBottom: '2px dashed #333',
  height: 60,
  fontWeight: 'bold',
  alignItems: 'center',
  position: 'relative'
}
const mqheaderContainer = {
  display: 'flex',
  flexDirection: 'row-reverse',
  justifyContent: 'space-between',
  position: 'relative',
  borderBottom: '2px dashed #333',
  height: 60,
  fontWeight: 'bold',
  alignItems: 'center',

}

const style = {
  fontSize: 30,
  fontWeight: '300',
  cursor: 'pointer',
  marginLeft: 2,
}

const menubox = {
  position: "relative",
  display: 'flex',
  justifyContent: 'end'
}

const list = {
  position: 'absolute',
  overflow: 'visible',
  zIndex: 100,
  top: 40,
  background: '#fff',
  width: 250,
  border: '#333 solid 2px',
  borderRadius: 2,
  padding: 0,

  left: 10,
}

const itemcolor = {
  borderBottom: 'solid 2px #ddd',
  cursor: 'pointer'
}

const itemcolorhover = {
  borderBottom: 'solid 2px #ddd',
  cursor: 'pointer',
  bgcolor: '#ddd',
  borderTopRightRadius: 7,
  borderTopLeftRadius: 7
}

const avartarColor = {
  bgcolor: 'green'
}

const gitlistitem = {
  borderBottom: 'solid 2px #ddd',
  cursor: 'pointer'
}
const gitlistitemhover = {
  borderBottom: 'solid 2px #ddd',
  cursor: 'pointer',
  bgcolor: '#ddd'
}

const notionlistitemhover = {
  cursor: 'pointer',
  bgcolor: '#ddd',
  borderBottomLeftRadius: 7,
  borderBottomRightRadius: 7
}

const notionlistitem = {
  cursor: 'pointer'
}