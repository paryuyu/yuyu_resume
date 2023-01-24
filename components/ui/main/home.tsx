import { Box, Container, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import { MqContext } from '../../../mq_context/context';
import HomeItem from '../../Item/homeItem';
import HomemenuDetail from '../../Item/home_detail/homeMenu';
import { MenuDetailData } from '../../lib/menuData';

function Home() {

  const mqValue = useContext(MqContext)
  const [hovered, setHovered] = useState("")
  const handlehover = (val:string)=>{
    setHovered(val)
  }


  return (
    <Container
      disableGutters={true}
      maxWidth={false}
      sx={!mqValue ? { ...containerStyle } : { ...mqcontainerStyle }}>
        
      <Box>
        {MenuDetailData.map((one, index) => {
          return (<HomemenuDetail 
            item={one} 
            key={index} 
            hovered={hovered} 
            onHover={handlehover} 
          />)
        })}
      </Box>

      {!mqValue &&
        <Box sx={itembox} >
          <HomeItem item={hovered} />
        </Box>
      }
    </Container>
  );
}

export default Home;

const itembox = {
  width: "50%",
  border: "1px solid #b2b2b2",
  height: '50%',
  borderRadius: 3,
  ml: 2,
  p: 2
}

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: 'center',
  height: '93vh',
  position: 'relative',
  // backgroundColor: '#fff',
  borderBottom: '2px dashed #333',
}

const mqcontainerStyle = {
  height: '90vh',
  display: "flex",
  flexDirection: 'column',
  position: 'relative',
  // backgroundColor: '#fff'
}
