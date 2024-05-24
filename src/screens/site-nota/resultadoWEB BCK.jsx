


import React, { useState, useEffect } from 'react';
import { Box, useMediaQuery, useTheme, Grid, Fade, CircularProgress, Typography, Card, CardContent } from '@mui/material';
import TabelaWEB from '../../components/Tabela/TabelaWEB';
import TabelaWEBmobile from '../../components/Tabela/TabelaWEBmobile';
import Sobre from '../../components/Sobre/SobreWEB';
import PDLOGO from '../../components/PDLOGO/PDLOGO3';
import Navbar from '../../components/Navbar/Navbar';
import NavResponsivo from '../../components/NavResponsivo/Navresponsivo';
import Footer from '../../components/Footer/Footer';


const Cidade = () => {
  // A função useTheme é utilizada para acessar o tema do Material-UI.
  const theme = useTheme();
  // A função useMediaQuery é utilizada para verificar se a tela é pequena.
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  // A função useState é utilizada para criar um estado local chamado checked e a função setChecked é utilizada para atualizar o estado de checked.
  const isMobile = useMediaQuery('(max-width:600px)');
  const [loading] = useState(false);
  const [error] = useState(null);

  // A função useEffect é utilizada para atualizar o estado de checked para true, fazendo com que o componente Fade seja renderizado.
  useEffect(() => {

  }, []);

  return (

    <>
      <Navbar />
      <Box sx={{ display: "flex", flexDirection: "column", maxWidth: "auto" }}>

        <Box sx={{ marginTop: isSmallScreen ? '20vh' : '15vh', display: "flex", justifyContent: "center" }}>
          <NavResponsivo />
        </Box>


        <Box elevation={10} sx={{ marginBottom: "15vh", maxWidth: "auto" }}>

          
            <Fade in={true} style={{ transitionDelay: '500ms' }}>
              <Box
                sx={{
                  marginTop: theme.spacing(5),
                  maxWidth: isSmallScreen ? 'auto' : 'auto',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >


                <Fade>

                  <PDLOGO />
                </Fade>

                <Box sx={{minHeight:"42vh"}}>
                <Sobre />
                </Box>


                <Grid item xs={12} md={6}>
                  <Box elevation={2} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    pt: 0
                  }}>


                  </Box>
                </Grid>
                <Grid item xs={12} sx={{ minHeight: '5vh', maxWidth: isSmallScreen ? '90vw' : 'auto' }}>
                  {loading ? (
                    <Box display="flex" justifyContent="center" alignItems="center">
                      <CircularProgress />
                    </Box>
                  ) : error ? (
                    <Typography variant="body1" color="error">{error}</Typography>
                  ) : (
                    <Box>
                      {isMobile ? <TabelaWEBmobile /> : <TabelaWEB />}
                    </Box>
                  )}
                </Grid>
              </Box>
            </Fade>
          

        </Box>
      </Box>
      <Footer />

    </>
  );
};

export default Cidade;
