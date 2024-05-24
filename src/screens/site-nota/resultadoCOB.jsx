import React, { useState, useEffect } from 'react';
import { Box, useMediaQuery, useTheme, Grid, Zoom } from '@mui/material';
import TabelaCOBRA from '../../components/Tabela/TabelaCOBRA';
import Pesquisar from '../../components/Pesquisar/Pesquisar';
import Sobre from '../../components/Sobre/Sobre';
import Fade from '@mui/material/Fade';
import PDLOGO from '../../components/PDLOGO/PDLOGO3';
import Navbar from '../../components/Navbar/Navbar';
import NavResponsivo from '../../components/NavResponsivo/Navresponsivo';

const Aluno = () => {
  // A função useTheme é utilizada para acessar o tema do Material-UI.
  const theme = useTheme();
  // A função useMediaQuery é utilizada para verificar se a tela é pequena.
  const [checked, setChecked] = useState(false);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
 
// A função useEffect é utilizada para atualizar o estado de checked para true, fazendo com que o componente Fade seja renderizado.
  useEffect(() => {
    // A função setChecked é utilizada para atualizar o estado de checked para true.
    setChecked(true);
  }, []);

  return (
    <Fade in={checked} style={{ transitionDelay: checked ? '500ms' : '0ms' }}>
      <Box
        sx={{
          marginTop: theme.spacing(14),
          maxWidth: isSmallScreen ? '100%' : 'auto',
          overflow: 'hidden',
          elevation: 3,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          p: theme.spacing(4),
          fontSize: isSmallScreen ? '10px' : '10px',
        }}
      >
        <Navbar />
        <NavResponsivo />
        <Fade>
        
        <PDLOGO/>
        </Fade>
        <Sobre />
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Box elevation={2} sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center',
            pt: 0
          }}>
            <Pesquisar />
          </Box>
        </Grid>
        <Grid item xs={12} sx={{ maxWidth: isSmallScreen ? '90vw' : 'auto' }}>
          {isSmallScreen ? null : <TabelaCOBRA />}
        </Grid>
      </Grid>
    </Box>
    </Fade>
  );
};

export default Aluno;