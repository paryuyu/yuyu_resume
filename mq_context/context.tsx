import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
import { PageContextType } from "../components/lib/dataType";

export const MqContext = createContext({});
export const PageManageContext = createContext<PageContextType | null>(null);


export function MqContextProvider({ children }: { children: React.ReactNode }) {

  const mqWidth = useMediaQuery("(max-width:700px)");

  return (<MqContext.Provider value={mqWidth}>
    {children}
  </MqContext.Provider>)
}


export function PageManageProvider({ children }: { children: React.ReactNode }) {

  const [headerMenu, setHeaderMenu] = useState(false);
  const { asPath, push, pathname } = useRouter();
  const handleMenuOpen = () => {
    setHeaderMenu(c => !c)
  }

  const [page, setPage] = useState<string | null>("home");
  const [fresh, setFresh] = useState(true);
  const [routerHistory, setRouterHistory] = useState<string[]>([]);
  const [pageHistory, setPageHistory] = useState<string[]>(["home"]);


  const handlePage = (val: string) => {
    setPage(val)
  }

  const handleFresh = () => {
    setFresh(c => !c)
  }

  useEffect(() => {
    setRouterHistory([asPath, ...routerHistory])

    window.onpopstate = () => { //뒤로가기 앞으로 가기 다 감지함.

      if (asPath === "/resume") {

        if (pageHistory[0] === "Resume") {
          setPage("home")
        } else {
          setPage(pageHistory[0])
        }

      } else if (asPath === "/home") {
        setPage("home")

      } else if (asPath === "/") {

        if (pageHistory[0] === "Intro") {
          setPage("home")
        } else {
          setPage(pageHistory[0])
        }

      }
    }


  }, [asPath])


  const mainPageHandle = (val: string) => {
    setPageHistory([val, ...pageHistory])
  }


  return (
    <PageManageContext.Provider value={{
      handleMenuOpen,
      headerMenu,
      handlePage,
      page,
      fresh,
      handleFresh,
      routerHistory,
      pageHistory,
      mainPageHandle
    }}>
      {children}
    </PageManageContext.Provider >
  )
}



