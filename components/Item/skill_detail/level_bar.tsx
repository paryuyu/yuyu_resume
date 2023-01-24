import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function LevelBar({ level }:any) {
  return (<>

    <Box sx={{ display: 'flex', alignItems: 'center' }}>

      <Box
        sx={level === "100%" ? { ...percentBlack, width: 200 } :
          level === "95%" ? { ...percentBlack, width: 180 } :
            level === "90%" ? { ...percentBlack, width: 170 } :
              level === "85%" ? { ...percentBlack, width: 160 } :
                level === "80%" ? { ...percentBlack, width: 150 } :
                  level === "70%" ? { ...percentBlack, width: 140 } :
                    level === "20%" ? { ...percentBlack, width: 50 } :
                      { ...percentBlack }}>

      </Box>
      <Box
        sx={level === "100%" ? { ...percentWhite, width: 0 } :
          level === "95%" ? { ...percentWhite, width: 20 } :
            level === "90%" ? { ...percentWhite, width: 30 } :
              level === "85%" ? { ...percentWhite, width: 40 } :
                level === "80%" ? { ...percentWhite, width: 50 } :
                  level === "70%" ? { ...percentWhite, width: 60 } :
                    level === "20%" ? { ...percentWhite, width: 150 } :
                      { ...percentWhite }}>
      </Box>

      <Typography sx={{ marginLeft: 2, color: '#333', fontWeight: '100' }}>{level}</Typography>
    </Box>


  </>);
}


const percentBlack = {
  bgcolor: '#333',
  height: 10,
}
const percentWhite = {
  bgcolor: '#ddd',
  height: 10,
}
