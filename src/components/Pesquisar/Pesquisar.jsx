import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CustomizedSnackbars from '../Snack/Snack';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


const alunos = [
  { id: 1, nome: 'Adan Vinicius Da Silva Gonçalves Simões', nota: 20, premiacao: 700 },
  { id: 2, nome: 'João Victor De Jesus Augusto', nota: 20, premiacao: 500 },
  { id: 3, nome: 'Rafael Pastor Pereira', nota: 20, premiacao: 500 },
  { id: 4, nome: 'Vincenth Sabino Souza Martins', nota: 20, premiacao: 300 },
  { id: 5, nome: 'Guilherme Azevedo Leão', nota: 20, premiacao: 300 },
  { id: 6, nome: 'Bryan Vinicius Almeida Da Silva', nota: 20, premiacao: 300 },
  { id: 7, nome: 'Willyans Estevam Da Guia', nota: 20, premiacao: 300 },
  { id: 8, nome: 'Pedro Augusto Rodrigues Da Cruz Comunian', nota: 20, premiacao: 300 },
  { id: 9, nome: 'Ana Laura Dos Santos Franco', nota: 20, premiacao: 300 },
  { id: 10, nome: 'Ricardo Ruiz Rubio', nota: 20, premiacao: 300 },
  { id: 11, nome: 'Joao Vitor Moreira Silva', nota: 19, premiacao: 300 },
  { id: 12, nome: 'Gabriel Ribeiro Rocha', nota: 19, premiacao: 300 },
  { id: 13, nome: 'Pedro Henrique Ferreira da Silva', nota: 19, premiacao: 300 },
  { id: 14, nome: 'Eduardo Ruiz Rubio', nota: 19, premiacao: 300 },
  { id: 15, nome: 'Julio Cesar Albino Silva', nota: 19, premiacao: 300 },
  { id: 16, nome: 'Bernardo Campos Soares', nota: 19, premiacao: 300 },
 { id: 17, nome: 'Kennedy Darlan Oliveira Duarte', nota: 18, premiacao: 300 },
 { id: 18, nome: 'Cleiton De Souza Silva', nota: 18, premiacao: 300 },
 { id: 19, nome: 'Gabriel Oliveira Araújo', nota: 18, premiacao: 300 },
 { id: 20, nome: 'Gabriel Leandro Fonseca Silva', nota: 18, premiacao: 300 },
 { id: 21, nome: 'Yan Eduardo Carneiro Cruz', nota: 19.5, premiacao: 300 },
 { id: 22, nome: 'Hiago Espindola Ambrosio', nota: 18, premiacao: 300 },
 { id: 23, nome: 'Raul Antonio Horta Campos', nota: 18, premiacao: 300 },
 { id: 24, nome: 'Vinicius Martins Gonzaga', nota: 18, premiacao: 300 },
 { id: 25, nome: 'Rafael Lucas Do Nascimento Sales', nota: 18, premiacao: 300 },
 { id: 26, nome: 'Lucas Cotta Padula', nota: 18, premiacao: 300 },
 { id: 27, nome: 'Bianca Karen Dias Oliveira', nota: 17.5, premiacao: 300 },
  { id: 28, nome: 'Marlon Rodrigues Soares', nota: 17.5, premiacao: 300 },
  { id: 29, nome: 'Kaio Luan Souza Pio', nota: 17.5, premiacao: 300 },
  { id: 30, nome: 'Lucas Pavao', nota: 17.5, premiacao: 300 },
  { id: 31, nome: 'Fernanda Araujo Macieira Monteiro', nota: 17.5, premiacao: 300 },
  { id: 32, nome: 'Lucas Martins', nota: 17.5, premiacao: 300 },
  { id: 33, nome: 'Petronio Augusto Rezende Lucindo', nota: 17.5, premiacao: 300 },
  { id: 34, nome: 'Ana Carolina Lopes Gorino', nota: 17.5, premiacao: 300 },
  { id: 35, nome: 'Artur Henrique Almeida Magalhaes', nota: 17.5, premiacao: 300 },
  { id: 36, nome: 'Júlio César De Souza Oliveira', nota: 17.5, premiacao: 300 },
  { id: 37, nome: 'Frederico Matheus Costa Durate', nota: 17.5, premiacao: 300 },
  { id: 38, nome: 'Henrique Waichert Rodrigues', nota: 17.5, premiacao: 300 },
  { id: 39, nome: 'Ruthiele Couto Rosa', nota: 17.5, premiacao: 300 },
  { id: 40, nome: 'Gabriel Vitor De Oliveira Reis', nota: 17.5, premiacao: 300 },
  { id: 41, nome: 'Bernardo Carvalho Guerra Martins da Costa', nota: 17, premiacao: 300 },
  { id: 42, nome: 'Joaquim Estevan Rodrigues Correia', nota: 17, premiacao: 300 },
  { id: 43, nome: 'Ghabriela De Oliveira Santos Luminato', nota: 17, premiacao: 300 },
  { id: 44, nome: 'Carlos Paulo Rubim Ferreira Silva', nota: 17, premiacao: 300 },
  { id: 45, nome: 'Jonathan Augusto Carlos Cruz', nota: 17, premiacao: 300 },
  { id: 46, nome: 'Nicolas Gomes Marques', nota: 17, premiacao: 300 },
  { id: 47, nome: 'Thiago Oliveira Maia', nota: 17, premiacao: 300 },
  { id: 48, nome: 'Otavio Augusto Fernandes E Silva', nota: 17, premiacao: 300 },
  { id: 49, nome: 'Kennyson Chaves Florencio', nota: 17, premiacao: 300 },
  { id: 50, nome: 'Esther De Faria', nota: 17, premiacao: 300 },
  { id: 51, nome: 'Guilherme Alves Assis', nota: 17, premiacao: 300 },
  { id: 52, nome: 'Talyson Disues Silva', nota: 17, premiacao: 300 },
  { id: 53, nome: 'José Airton Marques Júnior', nota: 17, premiacao: 300 },
  { id: 54, nome: 'Robson Cornelio Kawanishi', nota: 17, premiacao: 300 },
  { id: 55, nome: 'Juliana Elen Silva Oliveira', nota: 17, premiacao: 300 },
  { id: 56, nome: 'Lenice Druck Guimaraes Souza', nota: 17, premiacao: 300 },
  { id: 57, nome: 'Fabiano Ramos De Oliveira', nota: 17, premiacao: 300 },
  { id: 58, nome: 'Thuany Rodrigues Damasceno Silva', nota: 17, premiacao: 300 },
  { id: 59, nome: 'Pedro Augusto De Oliveira Reis', nota: 17, premiacao: 300 },
  { id: 60, nome: 'Felipe Aparecido Santos Da Silva', nota: 17, premiacao: 300 },
  { id: 61, nome: 'Cesar Vieira Quintao', nota: 17, premiacao: 300 },
  { id: 62, nome: 'Diego Penna Andrade Barros', nota: 17, premiacao: 300 },
  { id: 63, nome: 'Danielli Meilene Coutinho Arçari', nota: 17, premiacao: 300 },
  { id: 300, nome: 'Pedro Henrique Silva Correia', nota: 17, premiacao: 300 },
  { id: 64, nome: 'Eduarda Araújo Silva', nota: 16.5, premiacao: 300 },
  { id: 65, nome: 'Jean Basílio Fernandes', nota: 16.5, premiacao: 300 },
  { id: 66, nome: 'Jose Vitor Gomes Dos Santos Nascimento', nota: 16.5, premiacao: 300 },
  { id: 67, nome: 'Pedro Arthur Andrade Lopes', nota: 16.5, premiacao: 300 },
  { id: 68, nome: 'Jairo Lucas Dos Santos', nota: 16.5, premiacao: 300 },
  { id: 69, nome: 'Thulio Henrique Santos Nicodemos', nota: 16.5, premiacao: 300 },
  { id: 70, nome: 'Barbara Marcela Martins Lima', nota: 16.5, premiacao: 300 },
  { id: 71, nome: 'Davi Monteiro Andrade', nota: 16.3, premiacao: 300 },
  { id: 72, nome: 'Claudio Max Moreira Silva', nota: 16, premiacao: 300 },
  { id: 73, nome: 'Miguel Dos Santos Silva', nota: 16, premiacao: 300 },
  { id: 74, nome: 'Lucas Martins Frassi', nota: 16, premiacao: 300 },
  { id: 75, nome: 'Valter Rodrigues De Oliviera', nota: 16, premiacao: 300 },
  { id: 76, nome: 'Roberto Pedro Dos Santos Junior', nota: 16, premiacao: 300 },
  { id: 77, nome: 'Helly Pablo Vieira Ribeiro', nota: 16, premiacao: 300 },
  { id: 78, nome: 'Scárlath Eduarda Pereira De Souza', nota: 16, premiacao: 300 },
  { id: 79, nome: 'Renata Ketelyn Costa Silva', nota: 16, premiacao: 300 },
  { id: 80, nome: 'Roger Magalhães Ferreira', nota: 16, premiacao: 300 },
  { id: 81, nome: 'Henrique Santos Da Silva', nota: 16, premiacao: 300 },
  { id: 82, nome: 'Marcos Vinicios Oliveira Dias', nota: 16, premiacao: 300 },
  { id: 83, nome: 'Leandro Anastacio De Freitas', nota: 16, premiacao: 300 },
  { id: 84, nome: 'Marcela Deiró Andrade', nota: 16, premiacao: 300 },
  { id: 85, nome: 'Michele Vitoria Terezinha Dos Santos', nota: 16, premiacao: 300 },
  { id: 86, nome: 'Karolline Carvalho Silva', nota: 16, premiacao: 300 },
  { id: 87, nome: 'Breno Carlos Lavandeira De Resende', nota: 16, premiacao: 300 },
  { id: 88, nome: 'Matheus Henrique Alvarenga Meireles', nota: 16, premiacao: 300 },
  { id: 89, nome: 'Emanuel Felipe Silva Ferreira', nota: 16, premiacao: 300 },
  { id: 90, nome: 'Heliel Madeira Costa Pastor', nota: 16, premiacao: 300 },
  { id: 91, nome: 'Luiz Guilherme Gomes', nota: 16, premiacao: 300 },
  { id: 92, nome: 'Hector Henrique Lage Ferreira', nota: 16, premiacao: 300 },
  { id: 93, nome: 'Guilherme Henrique Fernandes', nota: 16, premiacao: 300 },
  { id: 94, nome: 'Maria Fernanda Madeira Santos', nota: 16, premiacao: 300 },
  { id: 95, nome: 'Arthur Breno Silva Rosa', nota: 15.5, premiacao: 300 },
  { id: 96, nome: 'William Mateus Cruz Barbosa', nota: 15.5, premiacao: 300 },
  { id: 97, nome: 'Nayara Nunes Fonseca Dos Reis', nota: 15.5, premiacao: 300 },
  { id: 98, nome: 'Filipe Menezes Fernandes', nota: 15.5, premiacao: 300 },
  { id: 99, nome: 'Thiago Santos Madeira', nota: 18, premiacao: 300 },
  { id: 500, nome: 'Alexandre Ferreira Santos', nota: 18, premiacao: 300 },
  { id: 100, nome: 'Gabriel Henrique Oliveira Pedro', nota: 15, premiacao: 100 },
  { id: 101, nome: 'Eliabner Wellesson Goncalves', nota: 15, premiacao: 100 },
  { id: 102, nome: 'Giovanna Maira Soares Chaves', nota: 15, premiacao: 100 },
  { id: 103, nome: 'Mayra Laudislaine Mendes Dos Santos', nota: 15, premiacao: 100 },
  { id: 104, nome: 'José Vitor Gomes Dos Santos Nascimento', nota: 15, premiacao: 100 },
  { id: 301, nome: 'Lauro Malaquias Lage', nota: 15, premiacao: 100 },
  { id: 105, nome: 'Matheus Henrique De Souza', nota: 14.5, premiacao: 100 },
  { id: 106, nome: 'Luke Malaquias Lage', nota: 14.5, premiacao: 100 },
  { id: 107, nome: 'Camila Freitas Viana', nota: 14, premiacao: 100 },
  { id: 108, nome: 'Arthur Filipe Nascimento Oliveira', nota: 14, premiacao: 100 },
  { id: 109, nome: 'Cesar Augusto Tiago Toto', nota: 14, premiacao: 100 },
  { id: 110, nome: 'Arthur Józef Alves Rosa', nota: 14, premiacao: 100 },
  { id: 111, nome: 'Gerusa Leite Caetano', nota: 14, premiacao: 100 },
  { id: 112, nome: 'Maria Eduarda Moura Carvalho', nota: 14, premiacao: 100 },
  { id: 113, nome: 'Indianara Dos Santos Rodrigues Guia', nota: 14, premiacao: 100 },
  { id: 114, nome: 'Isabela Maria De Sa Teixeira', nota: 14, premiacao: 100 },
  { id: 400, nome: 'Karolaine Kethelin Silva', nota: 13.3, premiacao: 100 },
  { id: 115, nome: 'Lais Viana de Souza', nota: 13.5, premiacao: 100 },
  { id: 116, nome: 'Vinicius Davi Lage Dias', nota: 13.5, premiacao: 100 },
  { id: 501, nome: 'Daniel Júlio Gonçalves Assis', nota: 13.5, premiacao: 100 },
  { id: 117, nome: 'Felipe Moreira Dos Santos', nota: 13.5, premiacao: 100 },
  { id: 118, nome: 'Alisson Vinícius Ferreira Gonçalves', nota: 13.5, premiacao: 100 },
  { id: 119, nome: 'Rayssa Couto Rosa Caetano', nota: 13.3, premiacao: 100 },
  { id: 120, nome: 'Tiago Francisco Orozimbo', nota: 13, premiacao: 100 },
  { id: 121, nome: 'Helimara Vieira Ribeiro', nota: 13, premiacao: 100 },
  { id: 122, nome: 'Leiriane De Lins Oliveira', nota: 13, premiacao: 100 },
  { id: 123, nome: 'Leticia Izamara Ferreira', nota: 13.0, premiacao: 100 },
{ id: 124, nome: 'Rogerio Moreira Vilela', nota: 13.0, premiacao: 100 },
{ id: 125, nome: 'Jefte Ebiasafe Alves De Souza', nota: 12.5, premiacao: 100 },
{ id: 126, nome: 'Julia Pacifico Ramos Barbosa', nota: 12.5, premiacao: 100 },
{ id: 127, nome: 'Alice Lage', nota: 12.5, premiacao: 100 },
{ id: 128, nome: 'Yasmin Silvestre Monteiro', nota: 12.5, premiacao: 100 },
{ id: 129, nome: 'Nicolas Souza Moreira', nota: 12.0, premiacao: 100 },
{ id: 130, nome: 'Ana Vitoria Nunes Pereira', nota: 12.0, premiacao: 100 },
{ id: 131, nome: 'Tiago Mateus Valadares Silva', nota: 11.5, premiacao: 100 },
{ id: 132, nome: 'Filipe Rodrigues Alvarenga', nota: 11.5, premiacao: 100 },
{ id: 133, nome: 'Gisele Dos Santos Fernandes', nota: 11.0, premiacao: 100 },
{ id: 134, nome: 'Vinicius Kener Souza', nota: 11.0, premiacao: 100 },
{ id: 135, nome: 'Rian Wilson Sousa Carvalho', nota: 11.0, premiacao: 100 },
{ id: 136, nome: 'Kaique Vitor Malaquias Pereira', nota: 11.0, premiacao: 100 },
{ id: 137, nome: 'Julio Cesar Couto', nota: 11.0, premiacao: 100 },
{ id: 138, nome: 'Cristiano Mateus De Souza Junior', nota: 11.0, premiacao: 100 },
{ id: 139, nome: 'Andréia P Santos', nota: 11.0, premiacao: 100 },
{ id: 140, nome: 'Roberta Miranda Procopio De Araujo', nota: 10.5, premiacao: 100 },
{ id: 141, nome: 'Larissa Gabrielly Dos Santos De Assis', nota: 10.0, premiacao: 100 },
{ id: 142, nome: 'Wesley Victor Ferreira', nota: 10.0, premiacao: 100 },
{ id: 143, nome: 'Lara Lage Andrade', nota: 10.0, premiacao: 100 },
{ id: 144, nome: 'Ingrid Caroline Santos De Oliveira', nota: 10.0, premiacao: 100 },
{ id: 145, nome: 'Renato De Almeida Silva', nota: 10.0, premiacao: 100 },
{ id: 146, nome: 'Michelle Salgado Martins', nota: 10.0, premiacao: 100 },
{ id: 147, nome: 'Alexsandro Meireles De Almeida', nota: 10.0, premiacao: 100 },
{ id: 401, nome: 'Rosemary Silva Gomes', nota: 10.0, premiacao: 100 },
{ id: 405, nome: 'Ana Paula Alberto', nota: 9.5, premiacao: 100 },
{ id: 148, nome: 'Carlos Alejandro Campos Alvarez', nota: 9.0, premiacao: 100 },
{ id: 149, nome: 'Pablo Henrique De Souza Nilo', nota: 9.0, premiacao: 100 },
{ id: 150, nome: 'Ernando Marques Madeira', nota: 9.0, premiacao: 100 },
{ id: 151, nome: 'Felipe Augusto De Carvalho', nota: 9.0, premiacao: 100 },
{ id: 152, nome: 'Waldeck Batista De Almeida', nota: 9.0, premiacao: 100 },
{ id: 153, nome: 'Larissa Gabrielly Dos Santos De Assis', nota: 9.0, premiacao: 100 },
{ id: 154, nome: 'Aline Aparecida Siqueira Felix', nota: 9.0, premiacao: 100 },
{ id: 155, nome: 'Livia Santos Macarenhas', nota: 9.0, premiacao: 100 },
{ id: 156, nome: 'Gisele Fontes De Almeida Silva', nota: 9.0, premiacao: 100 },
{ id: 157, nome: 'Yuri Emanuel De Almeida', nota: 9.0, premiacao: 100 },
{ id: 158, nome: 'Márcio Paulo Cardoso Ferreira', nota: 9.0, premiacao: 100 },
{ id: 159, nome: 'Alexandre Gonçalves Dias', nota: 8.5, premiacao: 100 },
{ id: 160, nome: 'Samuel Rosa Dos Anjos Silva', nota: 8.5, premiacao: 100 },
{ id: 161, nome: 'Alan Carlos Siqueira', nota: 8.5, premiacao: 100 },
{ id: 162, nome: 'Guilherme Geraldo Silva', nota: 8.5, premiacao: 100 },
{ id: 163, nome: 'Matheus Felipe Martins Gonçalves', nota: 8.0, premiacao: 100 },
{ id: 164, nome: 'Thayna Vitoria Silva Gonçalves', nota: 8.0, premiacao: 100 },
{ id: 201, nome: 'Leonardo Duarte de Freitas', nota: 8.0, premiacao: 100 },
{ id: 202, nome: 'Julia Pereira Milanio', nota: 8.0, premiacao: 100 },
{ id: 203, nome: 'João Victor Gomes', nota: 8.0, premiacao: 100 },
{ id: 204, nome: 'Lucas Alexandre Brandao Alves', nota: 7.0, premiacao: 100 },
{ id: 205, nome: 'Gabriel Dias Lage', nota: 7.0, premiacao: 100 },
{ id: 206, nome: 'Jefferson Estevam Amorim', nota: 6.5, premiacao: 100 },
{ id: 207, nome: 'Ray Oliveira Coelho', nota: 5.5, premiacao: 100 },
{ id: 208, nome: 'Jheniffe Santos Andrade', nota: 5.5, premiacao: 100 },
{ id: 209, nome: 'Adriana Helena de Sá Ambrósio', nota: 5.0, premiacao: 100 },
{ id: 210, nome: 'Maycom Campos Godoi', nota: 3.5, premiacao: 100 },
{ id: 211, nome: 'Kairon Luca Rodrigues Costa', nota: 0.0, premiacao: 0 },
{ id: 212, nome: 'Erick Paula De Oliveira', nota: 16.5, premiacao: 300 },
{ id: 213, nome: 'Rúbia Luisa Prudencio Gonçalves', nota: 15.5, premiacao: 300 },






];


function TabelaAlunos() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredAlunos, setFilteredAlunos] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);


  const filterTable = () => {
    if (searchTerm.trim() === '') {
      setFilteredAlunos([]);
      return;
    }
    
    const filteredData = alunos.filter((aluno) =>
      aluno.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredAlunos(filteredData);
    setSnackbarOpen(true);
  };

  return (
    <div>
      <div style={{ marginBottom: 16, display: 'flex', alignItems: 'center' }}>
        <TextField
          style={{ minWidth: '270px', marginRight: '8px' }}
          label="Encontre sua nota! Digite seu nome..."
          variant="outlined"
          onInput={(event) => setSearchTerm(event.target.value)}
        />
        <Tooltip title="Clique para buscar sua nota..." arrow>
          <Button variant="contained" onClick={filterTable}>
            Buscar
          </Button>
        </Tooltip>
      </div>
      {filteredAlunos.length > 0 && (
        <TableContainer component={Paper} style={{ marginBottom: 16 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell>Nota</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {filteredAlunos.map((aluno) => (
                <TableRow key={aluno.id}>
                  <TableCell>{aluno.nome}</TableCell>
                  <TableCell>{aluno.nota}</TableCell>


                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="info">
          {`Encontrados ${filteredAlunos.length} resultados:`}
          {filteredAlunos.map((aluno) => (
            <div key={aluno.id}>
              {`${aluno.nome} - Nota: ${aluno.nota}, Recompensa: ${aluno.premiacao}`}
            </div>
          ))}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default TabelaAlunos;