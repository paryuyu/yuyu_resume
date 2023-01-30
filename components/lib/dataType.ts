export type skillType = {
  language: string,
  Database: string,
  libraryAndFramework: string[],
  tools: string[],
}

export type dataType = {
  id: number,
  title: string,
  description: string,
  period: string[],
  responsiblePart: string[],
  service: string[],
  detail: string[],
  usedSkills: skillType,
  githubLink: string[],
  WebSite?:string,
  process: boolean,
  images?:string[]
}

export type menuType={
    id: number;
    title: string;
    description: string;
}

export type skillDataType ={
  id:number;
  title:string;
  description:string;
  category:string;
  level:string;
}

export type PageContextType ={
  headerMenu:boolean,
  handleMenuOpen:()=>void,
  handlePage:(val:string)=>void,
  page:string | null,
  handleFresh:()=>void,
  fresh:boolean,
  routerHistory:string[],
  pageHistory:string[],
  mainPageHandle:(val:string)=>void
}

export type selfIntroduceType = {
  id:number;
  title:string;
  content:string;
}