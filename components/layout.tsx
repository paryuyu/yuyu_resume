import { Container } from "@mui/material";
import { useState } from "react";
import Footer from "./ui/footer";
import Header from "./ui/header";
import Main from "./ui/main";
import { MqContextProvider, PageManageProvider } from "../mq_context/context";
// import { goBackProvider } from "../mq_context/context";
export default function Layout({ children }: any) {

  const handleContainer = () => {

  }
  return (
      <MqContextProvider>
        <PageManageProvider>
          <Container
            onClick={handleContainer}
            disableGutters={true}
            maxWidth={false}
            sx={{ ...containerStyle }}>

            <header><Header /></header>

            <main>{children}</main>
            <footer><Footer /></footer>
          </Container>
        </PageManageProvider>
      </MqContextProvider>
  );
}

const containerStyle = {
  display: 'flex', flexDirection: 'column', justifyContent: "space-between"
}