import * as React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(nome, PDITA, TOTAL) {
  return { nome, PDITA, TOTAL};
}
// Dados dos alunos
// Nome, PDITA, Total
// o CREATEDATA é utilizado para criar a tabela presente no site, onde mostra os critérios e os resultados.

//No caso essa tabela é feita com base em um array de objetos, onde cada objeto é uma linha da tabela.
//Essa é a versão MOBILE da tabela.
const rows = [
  createData('Alexandre Gonçalves Dias', 'PDITA171', 17),
  createData('Alexandre Gonçalves Dias', 'PDITA171', 17),
  createData('Alisson Vinicius Ferreira Goncalves', 'PDITA321', 16),
  createData('Ana Laura Dos Santos Franco', 'PDITA214', 9.5),
  createData('Anna Rita Tomich Magalhães Felippe', 'PDITA093', 9.5),
  createData('Arthur Breno Silva Rosa', 'PDITA122', 9),
  createData('Artur Henrique Almeida Magalhaes', 'PDITA123', 12),
  createData('Bianca Karen Dias Oliveira', 'PDITA049', 15.5),
  createData('Carlos Alejandro Campos Alvarez', 'PDITA178', 8),
  createData('Carlos Henrico De Oliveira Maciel', 'PDITA124', 10.5),
  createData('Carlos Paulo Rubim Ferreira Silva', '', 15),
  createData('Cleiton De Souza Silva', 'PDITA179', 12),
  createData('Cynthia Ferreira Costa', 'PDITA219', 14),
  createData('Diego Penna Andrade Barros', 'PDITA274', 10.5),
  createData('Erick Paula De Oliveira', 'PDITA277', 14.5),
  createData('Esther De Faria', 'PDITA021', 16),
  createData('Felipe Moreira Dos Santos', 'PDITA280', 20),
  createData('Flavio Henrique De Carvalho', 'PDITA059', 5.5),
  createData('Frederico Matheus Costa Duarte', 'PDITA284', 13.5),
  createData('Gabriel Henrique Oliveira Pedro', 'PDITA130', 15),
  createData('Gabriel Oliveira Araujo', 'PDITA012', 13),
  createData('Gabriel Ribeiro Rocha', 'PDITA131', 20),
  createData('Gabriel Vitor De Oliveira Reis', 'PDITA416', 8),
  createData('Gerusa Leite Caetano', 'PDITA105', 14.5),
  createData('Ghabriela De Oliveira Santos Luminato', 'PDITA472', 10.5),
  createData('Guilherme Geraldo Silva', 'PDITA227', 10),
  createData('Helimara Vieira Ribeiro', 'PDITA290', 14),
  createData('Helly Pablo Vieira Ribeiro', 'PDITA060', 11.5),
  createData('Henrique Waichert Rodrigues', 'PDITA339', 17),
  createData('Hiago Espindola Ambrosio', 'PDITA481', 16),
  createData('Indianara Dos Santos Rodrigues Guia', 'PDITA382', 13),
  createData('Jairo Lucas Dos Santos', 'PDITA383', 8.5),
  createData('Joao Victor De Jesus Augusto', 'PDITA015', 14.5),
  createData('Joao Victor Gomes', 'PDITA448', 8.5),
  createData('Joao Vitor Moreira Silva', 'PDITA079', 11),
  createData('Jose Airton Marques Junior', 'PDITA063', 19),
  createData('Julia Fernandes De Almeida', 'PDITA016', 18.5),
  createData('Juliana Elen Silva Oliveira', 'PDITA109', 20),
  createData('Julio Cesar De Souza Oliveira', 'PDITA142', 13.5),
  createData('Kaique Vitor Malaquias Pereira', 'PDITA294', 12),
  createData('Karolline Carvalho Silva', 'PDITA145', 20),
  createData('Kennedy Darlan Oliveira Duarte', 'PDITA065', 13.5),
  createData('Kennyson Chaves Florencio', 'PDITA017', 17.5),
  createData('Leandro Anastacio De Freitas', 'PDITA238', 12),
  createData('Leiriane De Lins Oliveira', 'PDITA389', 17.5),
  createData('Leonardo Duarte De Freitas', 'PDITA081', 0),
  createData('Lucas De Souza Martins', 'PDITA240', 14.5),
  createData('Lucas Martins', 'PDITA024', 15.5),
  createData('Lucas Vinicius De Oliveira Siqueira', 'PDITA453', 12),
  createData('Luke Lage', 'PDITA172', 8),
  createData('Marcio Paulo Cardoso Ferreira', 'PDITA427', 4.5),
  createData('Marcos Vinicius Sousa Ferreira', 'PDITA298', 13.5),
  createData('Maria Clara Souza Araujo', 'PDITA199', 13),
  createData('Matheus Felipe Martins Goncalves', 'PDITA245', 13.5),
  createData('Matheus Rodrigues Marques Martins', 'PDITA429', 10.5),
  createData('Michele Vitoria Terezinha Dos Santos', 'PDITA356', 12),
  createData('Nicolas Souza Moreira', 'PDITA085', 14.5),
  createData('Pedro Arthur Andrade Lopes', 'PDITA114', 13),
  createData('Pedro Augusto De Oliveira Reis', 'PDITA001', 10.5),
  createData('Pedro Henrique da Silva', 'PDITA251', 9),
  createData('Pedro Henrique Ferreira Da Silva', 'PDITA433', 18),
  createData('Pedro Henrique Silva Correia', 'PDITA155', 12),
  createData('Pedro Lucas Moraes', 'PDITA393', 0),
  createData('Poliane Silva Madureira', 'PDITA461', 12.5),
  createData('Rafael Jose Dos Reis Macieira', 'PDITA002', 10),
  createData('Rafael Lucas Do Nascimento Sales', 'PDITA157', 20),
  createData('Rafael Lucas Martins Almeida Dos Reis', 'PDITA087', 8),
  createData('Rafael Pastor Pereira', 'PDITA009', 20),
  createData('Rafael Rodrigues Oliveira', 'PDITA394', 20),
  createData('Raissa Ruthielle Taveira Cruz', 'PDITA159', 9.5),
  createData('Renato De Almeida Silva', 'PDITA462', 10.5),
  createData('Raul Antonio Horta Campos', 'PDITA307', 14),
  createData('Robson Cornelio Kawanishi', 'PDITA090', 14),
  createData('Rubia Luisa Prudencio Goncalves', 'PDITA253', 17),
  createData('Thiago Oliveira Maia', 'PDITA166', 18.5),
  createData('Thiago Santos Madeira', 'PDITA010', 15),
  createData('Thiago Vinicius Santos Batista', 'PDITA437', 14.5),
  createData('Tiago Francisco Orozimbo', 'PDITA046', 17),
  createData('Vinicius Davi Lage Dias', 'PDITA207', 1),
  createData('Vinicius Kener Souza', 'PDITA260', 18),
  createData('Vinicius Martins Gonzaga', 'PDITA004', 9.5),
  createData('Wesley Victor Ferreira', 'PDITA209', 15.5),
  createData('Rhuan Costa Colombo', 'PDITA565', 18),
  createData('Vanessa Pereira De Souza', 'PDITA259', 10),
``   
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    
  };

  return (
    <div>
      <box style={{display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',}}>
      <TextField
        label="Pesquisar seu resultado..."
        variant="outlined"
        value={searchTerm}
        onChange={handleSearch}
        fullWidth
        style={{maxWidth:'90%',marginBottom: '20px',marginTop: '60px',}}
      />
      </box>
<TableContainer style={{maxHeight: 600,  overflow: 'auto' }}>
  <Table stickyHeader aria-label="sticky table" style={{minWidth: 300}}>
    <TableHead>
      <TableRow>
              <TableCell align="center">Nome</TableCell>
              <TableCell align="center">PDITA</TableCell>
              <TableCell align="center">Total</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
          {rows.filter((row) => {
              const values = Object.values(row);
              return values.some((value) =>
                value.toString().toLowerCase().includes(searchTerm.toLowerCase())
              );
            }).map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">{row.nome}</TableCell>
                <TableCell align="center">{row.PDITA}</TableCell>
                <TableCell align="center">{row.TOTAL}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
