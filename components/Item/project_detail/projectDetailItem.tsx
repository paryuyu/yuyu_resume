import { Box } from '@mui/material';
import Typography from '@mui/material/Typography'
export default function ProjectDetaiItem({ item }: any) {

  return (<Box sx={typobox}>
    <Box sx={ball}></Box>
    <Typography sx={typo} variant="body1" >{item}</Typography>
  </Box>);
}

const typobox={
display:'flex',
alignItems: 'center',
mt:0.5
}

const ball = {
height:7,
width:7,
border:'1px solid #333',
mr:1,
borderRadius:1,

}

const typo = {
  fontWeight: 300,
  fontSize: 16,


}
