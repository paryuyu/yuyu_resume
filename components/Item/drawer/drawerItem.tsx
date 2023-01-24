import { AiFillProject } from 'react-icons/ai';
import { BsArrowDownRight } from 'react-icons/bs';
import { Avatar, Container, IconButton, List, ListItem, ListItemAvatar, ListItemText, SwipeableDrawer, Typography, Box } from "@mui/material";
import { FiGithub, FiUser, FiTool } from 'react-icons/fi';
import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { MqContext, PageManageContext } from '../../../mq_context/context';
import { PageContextType } from '../../lib/dataType';
type props = {
  onDrawer: () => void;
  drawerOpen: boolean;
}




function DrawerItem({ onDrawer, drawerOpen }: props) {
  const router = useRouter();
  const MqValue = useContext(MqContext);
  const { handleMenuOpen, headerMenu, handlePage, page, fresh, handleFresh } = useContext(PageManageContext) as PageContextType;




  return (<>

    <SwipeableDrawer
      onOpen={() => { onDrawer() }}
      onClose={() => { onDrawer() }}
      open={drawerOpen}
      anchor={MqValue ? "right" : "left"}

    >
      <Box sx={drawerboxStyle}>

        <List>
          <ListItem
            sx={listitemStyle}
            onClick={() => {
              router.push("/")
                .then(() => { handlePage("Intro") })
              onDrawer();
            }}>
            <ListItemAvatar><Avatar sx={drawerAvatar}><FiUser /></Avatar></ListItemAvatar>
            <ListItemText primary="intro" secondary="첫 화면으로 바로가기" />
          </ListItem>

          <ListItem
            sx={listitemStyle}
            onClick={() => {
              handlePage("home")
              onDrawer();
              router.push("/home")
            }}>
            <ListItemAvatar><Avatar sx={drawerAvatar}><AiFillProject /></Avatar></ListItemAvatar>
            <ListItemText primary="Portfolio" secondary="포트폴리오 메인화면으로 바로가기" />
          </ListItem>

          <ListItem
            sx={listitemStyle}
            onClick={() => {
              onDrawer();
              if (router.route === "/home") {
                handleFresh();
                handlePage("Skills");
              } else {
                router.push("/home");
                handlePage("Skills");
              }
            }}>
            <ListItemAvatar><Avatar sx={{ ...drawerAvatar, bgcolor: '#838383' }}><BsArrowDownRight /></Avatar></ListItemAvatar>
            <ListItemText primary="Skills" secondary="포트폴리오 스킬화면으로 바로가기" />
          </ListItem>

          <ListItem
            sx={listitemStyle}
            onClick={() => {
              onDrawer();
              if (router.route === "/home") {
                handleFresh();
                handlePage("Projects");
              } else {
                router.push("/home");
                handlePage("Projects");
              }

            }}>
            <ListItemAvatar><Avatar sx={{ ...drawerAvatar, bgcolor: '#838383' }}><BsArrowDownRight /></Avatar></ListItemAvatar>
            <ListItemText primary="Projects" secondary="포트폴리오 프로젝트 화면으로 바로가기" />
          </ListItem>

          <ListItem
            sx={listitemStyle}
            onClick={() => {
              router.push("/resume")
                .then(() => onDrawer())
                .then(() => handlePage("Resume"))
            }}>
            <ListItemAvatar><Avatar sx={drawerAvatar}><FiUser /></Avatar></ListItemAvatar>
            <ListItemText primary="Resume" secondary="이력서 화면으로 바로가기" />
          </ListItem>
        </List>

      </Box>
    </SwipeableDrawer>

  </>);
}

export default DrawerItem;

const drawerAvatar = {
  bgcolor: 'orange'
}

const drawerboxStyle = {
  width: "300px"
}

const listitemStyle = {
  borderBottom: '1px dashed #333',
  cursor: 'pointer',
  "&:hover": {
    bgcolor: '#ddd'
  }
}