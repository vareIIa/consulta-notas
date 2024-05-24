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
        <a target="_blank" href="https://docs.google.com/document/d/19I9hS8DwxbWno1OB9WF2ejz4lyN-r9AgpQJ7QJy-_Ao/edit?usp=sharing">Clique aqui</a> para ver todos os critérios de avaliação detalhadamente.
        
        <h5>Avaliamos: </h5> Movimento, Colecionável, Pontuação, Colisão, Interface do usuário, Game Over, Restart, Jogabilidade, Dificuldade, Sons.
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1} >
        Qualquer dúvida com as avaliações, <a target="_blank" href="https://ajuda-projetodesenvolve.freshdesk.com/support/login">Clique aqui</a> ou em "Suporte", no canto superior direito da página.
        <h5>Aviso: </h5> Plágios e/ou jogos prontos baixados da internet serão ANULADOS.
      </CustomTabPanel>
      </Box>
    </Box>
  );
}