import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import BuscarEmail from "../BuscarEmail/BuscaEmail";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";

const App = () => {
  const [searchResult, setSearchResult] = useState(null);
  const [grade, setGrade] = useState("");
  const [email, setEmail] = useState("");
  const [challenge, setChallenge] = useState("");

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

      setSearchResult(data);
    } catch (error) {
      console.error("Erro ao buscar e-mails:", error);
    }
  };

  const challengeMap = {
    1: "Python",
    2: "Linux",
    3: "IntroWeb",
    4: "NoCode",
    5: "Scratch",
    6: "ElementosDeInterface",
  };

  const handleChange = (event) => {
    setChallenge(event.target.value);
  };

  const handleSubmitGrade = async () => {
    try {
      const challengeEnum = challengeMap[challenge];

      const response = await fetch("https://api-hml.pdcloud.dev/challenge/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "API-KEY": "Rm9ybUFwaUZlaXRhUGVsb0plYW5QaWVycmVQYXJhYURlc2Vudm9sdmU=",
        },
        body: JSON.stringify({
          enrolledId: searchResult.id,
          challenge: challengeEnum,
          grade: parseFloat(grade),
        }),
      });

      if (!response.ok) {
        throw new Error(`Erro ao enviar a nota: ${response.status}`);
      }

      console.log("Nota enviada com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar a nota:", error);
    }
  };

  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <TextField
          color="secondary"
          label="Email"
          focused
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          color="secondary"
          variant="contained"
          style={{ minWidth: 120 }}
          onClick={() => handleSearch(email)}
        >
          Buscar Email
        </Button>
      </Box>
      {searchResult && (
        <div style={{ fontSize: "15px", marginTop: 10 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <TextField
              color="secondary"
              focused
              label="Nota"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
            />
            <Button
              style={{ minWidth: 120 }}
              color="secondary"
              variant="contained"
              onClick={handleSubmitGrade}
            >
              Enviar Nota
            </Button>
          </Box>
        </div>
      )}
    </Box>
  );
};

export default App;
