import { Divider, Typography } from "@mui/material";

function Footer() {
  return (<> 

 
  <Typography sx={font}>© 2023 Yuyuyu. All rights reserved.</Typography> 
  
  </>);
}

export default Footer;

const font = {
  fontWeight:'100',
  fontSize:15,
  textAlign:'center',
  fontStyle:'italic',
  borderTop:'2px dashed #333',
  p:1
}
