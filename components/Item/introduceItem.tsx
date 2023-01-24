import { Typography, Divider, Box } from "@mui/material";
import { useContext } from "react";

import { SlArrowDown } from 'react-icons/sl';
import { MqContext } from "../../mq_context/context";

export default function IntoduceItem({ item, selectedId, onSelec }: any) {
  const mqValue = useContext(MqContext);

  return (
    <Box sx={mqValue ? { ...mqitemBox } : { ...itemBox }}>

      <Box
        onClick={() => { onSelec(item.id) }}
        sx={[{ ...miniheader }, {
          '&:hover': {
            ...headerhover
          }
        }]}>

        <Typography variant={mqValue ? "body1" : "h6"} sx={mqValue ? { ...minititle } : { ...mqminititle }}>{item.title}</Typography>
        <SlArrowDown size={mqValue? 15:20}/>
      </Box>
      {selectedId.includes(item.id) &&
        <>
         
          <Box sx={contentBox}>
            <Typography sx={{ ...contentFont }}>
              {item.content}
            </Typography>
          </Box>
        </>
      }
    </Box>
  );
}

const contentBox = {
  borderTop:'1px #ddd solid',

}

const headerhover = {
  bgcolor: '#a6a6a6',
  borderRadius: 2,
  pl: 2,
  pr: 2,
  pt: 1,
  pb: 1
}

const miniheader = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  pl: 2,
  pr: 2,
  pt: 1,
  pb: 1
}

const mqminititle = {
  fontSize: 20
}

const minititle = {
  // color: '#333',
  fontFamily: 'inherit'
}

const itemBox = {
  cursor: 'default',
  border: '1px solid #ddd',
  padding: 1.5,
  borderRadius: 2,
  marginBottom: 0.4,
  width: '60vw'
}

const mqitemBox = {
  border: '1px solid #ddd',
  padding: 1.5,
  borderRadius: 2,
  marginTop: 1
}
const contentFont = {
  fontSize: 15,
  marginTop: 2,
  fontWeight:100,
  paddingX:2
}