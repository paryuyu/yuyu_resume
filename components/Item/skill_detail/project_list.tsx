import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { dataType } from "../../lib/dataType"

type props = {
  item: dataType
}

function SkillprojectList({ item }: props) {

  const router = useRouter();

  const projectClickHandle = () => {
    router.push(`/${item.id}`);
  }

  return (<Box sx={itembox} onClick={projectClickHandle} >
    <Typography sx={title}>{item.title}</Typography>
    <Typography sx={des}>{item.description}</Typography>
    <Typography sx={des}>{item.process ? "완료" : "진행중"}</Typography>
  </Box>);
}


export default SkillprojectList;


const itembox = {
  marginX: 1.3,
  marginBottom: 1.3,
  border: '1px solid #ddd',
  p: 1,
  "&:hover": {
    bgcolor: '#ddd',
    cursor: 'pointer'
  }
}

const title = {
  fontWeight: 100,
  fontSize: 20,

}

const des = {
  fontSize: 13
}