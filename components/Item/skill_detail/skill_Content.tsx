import { Typography } from "@mui/material";
import { skillDataType } from "../../lib/dataType";
import LevelBar from "./level_bar";
type props = {
  item : skillDataType
}
export default function SkillContent({ item }:props) {

  return (<>
      <Typography sx={minititleStyle} variant='h5'>{item.title}</Typography>
      <Typography sx={mentStyle}>{item.description}</Typography>
      <LevelBar level={item.level} />
  </>);
}


const minititleStyle = {
  mt: 1
}


const mentStyle = {
  fontSize: 14,
  fontWeight: 400
}
