import { Divider, Typography } from "@mui/material";
import { MenuDetailData } from "../lib/menuData";

export default function HomeItem({ item }: any) {

  return (<>
    <Typography variant="h3" sx={title}> {item === "" ? "Portfolio" : `${item}`}</Typography>
    <Divider sx={divider} />
    {item !== "" ?

      <>
        {MenuDetailData.map((one) => {
          return item === one.title && <Typography sx={typo} key={one.id}>{one.description}</Typography>
        })}
      </>

      : <Typography sx={typo}>
        포트폴리오 메인 페이지입니다.<br />
        스크롤하여 프로그래밍 스킬과 프로젝트를 확인하실 수 있습니다.<br />
        각 메뉴를 클릭하셔도 이동 가능합니다.<br />
        반응형으로 제작되어 웹과 모바일에서 모두 편하게 보실 수 있습니다. <br />
      </Typography>}
  </>);
}

const typo = {
  fontWeight: 300
}

const title = {
  fontWeight: 100
}

const divider = {
  mb: 2
}