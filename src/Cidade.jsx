// Essa aplicação foi feita com o intuito de armazenar todas as notas dos alunos e mostrar os resultados de cada aluno.
//As notas e todos os alunos você vai encontrar no db.json

// Importações necessárias para o funcionamento da aplicação.
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import NavbarResponsivo from "./components/NavResponsivo/NavCIDADE";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Dialog from "./components/Dialogo/Dialog";
import Fade from "@mui/material/Fade";
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider, useMediaQuery } from "@mui/material";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Logo from "./components/PDLOGO/PDLOGO";
import { useHistory } from 'react-router-dom';

const theme = createTheme({
  // o theme é para personalizar o tema da aplicação.

  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: "#f44336",
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: "Rajdhani",
    fontSize: 13,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

function GradeInfo({ gradeData, navigateTo }) {
  console.log("GradeInfo:", gradeData);

  const handleClicks = gradeData.map((item, index) => ({
    challenge: item.challenge,
    comment: item.comment,
    onClick: () => {
      console.log(`Clicked challenge ${index + 1}`);
      navigateTo(`/challenge/${index + 1}`); // Navega para a rota correspondente
    },
  }));

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {handleClicks.map((item, index) => (
          <Fade in={true}>
            <Box>
              <Card
                style={{ margin: 10, minHeight: 150, width: 270, overflow: 'visible' }}
                elevation={5}
                key={index}
              >
                <CardContent>
                  <Box>
                    <p>
                      <strong>Disciplina:</strong> {item.challenge}
                    </p>
                  </Box>
                  <Box>
                    <p>
                      <strong>Nota:</strong> {gradeData[index].grade}
                    </p>
                  </Box>
                  <Box style={{ overflow: 'visible' }}>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ArrowDropDownIcon />}
                      aria-controls="panel2-content"
                      id="panel2-header"
                      onClick={(event) => {
                        event.stopPropagation();
                      }}
                    >
                      <Typography>Detalhes</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <p>
                        <strong>Comentário:</strong> {item.comment}
                      </p>
                      <Box style={{display: 'flex', justifyContent: 'center'}}>
                      <Dialog />
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Fade>
        ))}
      </Box>
    </Box>
  );
}

function App() {
  // o useState é para armazenar o valor digitado no TextField.
  const [email, setemail] = useState("");
  // o useMediaQuery é para verificar se a tela é mobile ou desktop.
  const isMobile = useMediaQuery("(max-width:800px)");
  // o useState é para armazenar o aluno encontrado.
  const [alunoEncontrado, setAlunoEncontrado] = useState(null);
  // essa função é para redirecionar para a página do aluno
  const [grades, setGrades] = useState(null);

  const [searchResult, setSearchResult] = useState(null);

  const [open, setOpen] = React.useState(false);

  const history = useHistory();
  


  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api-hml.pdcloud.dev/enrolled/email/${email}`,
        {
          headers: {
            "API-KEY":
              "Rm9ybUFwaUZlaXRhUGVsb0plYW5QaWVycmVQYXJhYURlc2Vudm9sdmU=",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Deu erro :( código do erro: ${response.status}`);
      }

      const data = await response.json();

      // Se a chamada de API for bem-sucedida e os dados forem retornados, imprima a mensagem no console
      if (data) {
        console.log("O email foi encontrado");
      }

      setSearchResult(data);

      // Buscar as notas do aluno

      handleFetchGrades(data.id);
    } catch (error) {
      console.error("Erro ao buscar e-mails:", error);
    }
  };

  const handleFetchGrades = async (enrolledId) => {
    try {
      const response = await fetch(
        `https://api-hml.pdcloud.dev/challenge/enrolled/${enrolledId}`,
        {
          headers: {
            "API-KEY":
              "Rm9ybUFwaUZlaXRhUGVsb0plYW5QaWVycmVQYXJhYURlc2Vudm9sdmU=",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Erro ao buscar as notas: ${response.status}`);
      }

      const data = await response.json();
      setGrades(data);
      console.log("Notas do aluno:", data);
    } catch (error) {
      console.error("Erro ao buscar as notas:", error);
    }
  };

  return (




    // o themeProvider é para aplicar o mesmo tema em toda a aplicação.
    <ThemeProvider theme={theme}>
      {/* o Router e o Switch são utilizados para transitar entre as 3 telas. */}

      <Navbar />

      <Box
        sx={{
          marginTop: "20vh",
          marginBottom: "2vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <NavbarResponsivo />

        {/* // o NavbarResponsivo é para mostrar o menu responsivo. */}
      </Box>

      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          minHeight: "20vh",
          paddingBottom: "5vh",
        }}
      >
        <Fade in={true}>
          <Box sx={{ width: isMobile ? "100%" : "90%" }}>
            {/* Esse é o box principal */}
            <Card
              elevation={10}
              sx={{
                fontFamily: "Rajdhani",
                marginTop: "2vh",
                marginBottom: "5vh",
                display: "flex",
                justifyContent: "center",
                minHeight: "20vh",
              }}
            >


              {/* Card principal e CardContent principal */}
              <CardContent sx={{ fontFamily: "Rajdhani" }}>
                <Box sx={{ marginTop: 5 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >

                    <Logo />


                  </Box>

                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginTop: 5,
                        marginBottom: 5,
                      }}
                    >
                      {/* o TextField é onde o usuário irá informar o email para ver os resultados. */}
                      <p>
                        Escolha sua <strong>CIDADE</strong> e veja seus resultados.
                      </p>



                      <Box sx={{display: "flex", justifyContent: "center"}} >

                      <Button
                        color="primary"
                        variant="contained"
                        href="https://site-notas-pac.vercel.app/"
                        style={{ minWidth: isMobile ? "20%" : "70%" , height: isMobile ? "70%" : "auto", fontSize: 17}}
                      >
                        Bom Despacho
                      </Button>


                      <Button
                        color="primary"
                        variant="contained"
                        href="https://avaliacoespd.vercel.app/"
                        style={{ minWidth: isMobile ? "30%" : "70%", height: isMobile ? "70%" : "auto", marginLeft: 10, fontSize: 17}}
                      >
                        Itabira
                      </Button>
                      </Box>
                      
                      
                      <a
                        style={{ marginTop: 25, marginBottom: 20}}
                        target="_blank"
                        href="https://ajuda-projetodesenvolve.freshdesk.com/support/login"
                      >
                        Precisa de ajuda para encontrar seus resultados? 
                      </a>

                      {/* // o Button é para chamar a função buscarDadosPorEMAIL. */}
                      
                    </Box>
                  </Box>

                  <Box sx={{ maxWidth: "auto", marginBottom: 5 }}>
                    {grades && <GradeInfo gradeData={grades} />}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Fade>
      </Box>

      <Footer />
    </ThemeProvider>

  );
}

export default App;
