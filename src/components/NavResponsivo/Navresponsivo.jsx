import * as React from 'react';
import { BrowserRouter as Router, Route, Switch, Link as RouterLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import HomeIcon from '@mui/icons-material/Home';
import GrainIcon from '@mui/icons-material/Grain';

export default function IconBreadcrumbs() {
  return (
    <Breadcrumbs aria-label="breadcrumb">
<Link
        underline="hover"
        sx={{ display: 'flex', alignItems: 'center' }}
        color="inherit"
        href="https://projetodesenvolve.edusense.app/"
      >
        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        Início
      </Link>

    <RouterLink
      to="/"
      style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}
    >
      <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
      Seleção resultado
    </RouterLink>
      <Typography
        sx={{ display: 'flex', alignItems: 'center' }}
        color="text.primary"
      >
        <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        Resultados
      </Typography>
    </Breadcrumbs>
  );
}
