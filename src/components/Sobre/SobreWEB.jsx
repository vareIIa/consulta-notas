import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{minWidth: '40vh', maxWidth:'40vw', minHeight:'35vh'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          <Tab label="Critérios"  {...a11yProps(0)} />
          <Tab label="Dúvidas" {...a11yProps(1)} />

        </Tabs>
      </Box>
      <Box sx={{}}>
      <CustomTabPanel value={value} index={0}>
      <h5>Objetivo:</h5>Este desafio tem como finalidade colocar em prática todo o conhecimento adquirido nas trilhas de Interface e Programação Web. É uma oportunidade para exercitar e aprimorar suas habilidades de desenvolvimento web, além de estimular a criatividade na criação de um site personalizado.
        
        <h5>Avaliamos: </h5> Responsividade (3 pontos),	Estrutura HTML (2 pontos),	Estilo CSS (2 pontos),	Layout e Design (1 ponto),	Footer (1 ponto),	Acessibilidade (1 ponto),	Uso de Flexbox (2 pontos),	Originalidade (2 pontos),	Interatividade (2 pontos),	Dark Mode (1 ponto),	Comentários no Código (1 ponto),	Hierarquização de Conteúdo (2 pontos).
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1} >
        Qualquer dúvida com as avaliações, <a target="_blank" href="https://ajuda-projetodesenvolve.freshdesk.com/support/login">Clique aqui</a> ou em "Suporte", no canto superior direito da página.
        <h5>Aviso: </h5> Plágios e/ou sites prontos, baixados da internet serão ANULADOS.
      </CustomTabPanel>
      </Box>
    </Box>
  );
}