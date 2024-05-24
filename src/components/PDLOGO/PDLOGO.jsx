import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Logo from '../../assets/img/logorgb.png';

export default function PDLOGO() {
  return (
    
      <CardMedia
      sx={{ width: 'auto',
      maxHeight: '20vh',
      
      
    }}
       
        component="img"
        image={Logo}
      />
      
    
  );
}
