import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Logo from '../../assets/img/logo-hori.png';

export default function PDLOGO() {
  return (
    
      <CardMedia
      sx={{ width: 'auto',
      padding: '2vh',
      maxHeight: '3vh',
      
    }}
       
        component="img"
        alt="Imagem de Exemplo"
        
        image={Logo}
      />
      
    
  );
}
