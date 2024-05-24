import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Desafio from "../../assets/img/desafio.png";

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button sx={{minWidth: 120}} color="primary" variant="contained" onClick={handleClickOpen}>
        Critérios
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Onde encontro todos os critérios de avaliação?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <strong>
              Os critérios dos desafios são encontrados na nossa plataforma{" "}
              <a href="https://projetodesenvolve.edusense.app/#/platform/achievements">
                {" "}
                Projeto Desenvolve
              </a>
            </strong>
          </DialogContentText>
          <img
            style={{ maxHeight: 300, padding: 5, margin: 7 }}
            src={Desafio}
            alt="Desafio"
          />
          <DialogContentText id="alert-dialog-description">
            <strong>
              Basta você ir em{" "}
              <a href="https://projetodesenvolve.edusense.app/#/platform/achievements">
                DESAFIOS
              </a>{" "}
              na nossa plataforma, após isso, escolha o desafio que deseja ver
              todos os critérios, documentos e dicas disponiveis. 😉
            </strong>
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{marginBottom: 3, marginRight: 4}}>
          <Button href="https://api.whatsapp.com/send?phone=553131570760&text=Ol%C3%A1!%20" color="primary" variant="contained" onClick={handleClose}>
            Não consegui, preciso de ajuda
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={handleClose}
            autoFocus
            href="https://projetodesenvolve.edusense.app/#/platform/achievements"
          >
            Ok, ir para a plataforma
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={handleClose}
            autoFocus
            sx={{ minWidth: 120 }}
          >
            fechar
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
