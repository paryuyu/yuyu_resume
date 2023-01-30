import { Container } from "@mui/material";
import Footer from "./ui/footer";
import Header from "./ui/header";
import { MqContextProvider, PageManageProvider } from "../mq_context/context";

type props = {
  children : JSX.Element
}

export default function Layout({ children }:props) {

  return (
      <MqContextProvider>
        <PageManageProvider>
          <Container
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
  display: 'flex', 
  flexDirection: 'column', 
  justifyContent: "space-between"
}