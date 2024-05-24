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

function createData(nome, PDITA, RESPONSIVIDADE, ESTRUTURA, CSS, DESING, FOOTER, ACESSIBILIDADE, FLEXBOX, ORIGINALIDADE, INTERATIVIDADE, DARKMODE, COMENTARIOS, HIERARQUIZACAO, TOTAL) {
  return { nome, PDITA, RESPONSIVIDADE, ESTRUTURA, CSS, DESING, FOOTER, ACESSIBILIDADE, FLEXBOX, ORIGINALIDADE, INTERATIVIDADE, DARKMODE, COMENTARIOS, HIERARQUIZACAO, TOTAL };
}


// Dados dos alunos
// Nome, PDITA, Responsividade, Estrutura, CSS, Desing, Footer, Acessibilidade, Flexbox, Originalidade, Interatividade, Darkmode, Comentários, Hierarquização, Total
// o CREATEDATA é utilizado para criar a tabela presente no site, onde mostra os critérios e os resultados.

const rows = [
  createData('Alexandre Gonçalves Dias', 'PDITA171', 2, 2, 2, 1, 1, 0, 2, 2, 2, 0, 1, 2, 17),
  createData('Alisson Vinicius Ferreira Goncalves', 'PDITA321', 2.5, 1.5, 2, 1, 1, 0, 2, 2, 2, 0, 1, 1, 16),
  createData('Ana Laura Dos Santos Franco', 'PDITA214', 1, 2, 1, 0.5, 1, 0, 2, 1, 0, 0, 0, 1, 9.5),
  createData('Anna Rita Tomich Magalhães Felippe', 'PDITA093', 3, 1, 1, 0.5, 1, 0, 0, 2, 0, 0, 0, 1, 9.5),
  createData('Arthur Breno Silva Rosa', 'PDITA122', 3, 2, 0, 1, 0, 0, 0, 2, 1, 0, 0, 0, 9),
  createData('Artur Henrique Almeida Magalhaes', 'PDITA123', 2, 1, 1.5, 0.5, 0.5, 0, 2, 1.5, 1, 0, 0, 2, 12),
  createData('Bianca Karen Dias Oliveira', 'PDITA049', 3, 0.5, 1, 1, 1, 1, 2, 2, 1, 0, 1, 2, 15.5),
  createData('Carlos Alejandro Campos Alvarez', 'PDITA178', 0, 2, 1.5, 0, 0, 1, 2, 1, 0, 0, 0.5, 0, 8),
  createData('Carlos Henrico De Oliveira Maciel', 'PDITA124', 0, 1.5, 2, 0.5, 1, 0.5, 2, 2, 0, 0, 0, 1, 10.5),
  createData('Carlos Paulo Rubim Ferreira Silva', '', 1.5, 2, 1, 0.5, 1, 1, 2, 2, 1, 1, 1, 1, 15),
  createData('Cleiton De Souza Silva', 'PDITA179', 0, 1.5, 2, 1, 1, 0, 2, 2, 1, 0, 0, 1.5, 12),
  createData('Cynthia Ferreira Costa', 'PDITA219', 1, 2, 2, 0.5, 0.5, 1, 2, 2, 1, 0, 1, 1, 14),
  createData('Diego Penna Andrade Barros', 'PDITA274', 0, 0.5, 2, 1, 1, 0, 2, 1, 1, 0, 0, 2, 10.5),
  createData('Erick Paula De Oliveira', 'PDITA277', 2, 0.5, 2, 1, 1, 0, 2, 2, 2, 1, 0, 1, 14.5),
  createData('Esther De Faria', 'PDITA021', 2, 2, 2, 1, 1, 1, 2, 2, 1, 0, 0, 2, 16),
  createData('Felipe Moreira Dos Santos', 'PDITA280', 3, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 2, 20),
  createData('Flavio Henrique De Carvalho', 'PDITA059', 0, 1, 1, 0.5, 1, 0, 0, 1, 0, 0, 0, 1, 5.5),
  createData('Frederico Matheus Costa Duarte', 'PDITA284', 1.5, 2, 1, 0.5, 1, 1, 2, 2, 0.5, 0, 0, 2, 13.5),
  createData('Gabriel Henrique Oliveira Pedro', 'PDITA130', 0, 2, 2, 1, 1, 1, 2, 2, 0, 1, 1, 2, 15),
  createData('Gabriel Oliveira Araujo', 'PDITA471', 0, 1, 2, 1, 1, 1, 2, 1.5, 1, 0, 0.5, 2, 13),
  createData('Gabriel Ribeiro Rocha', 'PDITA131', 3, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 2, 20),
  createData('Gabriel Vitor De Oliveira Reis', 'PDITA416', 0, 2, 1, 0.5, 1, 0.5, 0, 1, 0, 0, 0, 2, 8),
  createData('Gerusa Leite Caetano', 'PDITA105', 1, 2, 2, 1, 1, 1, 1, 2, 1, 0, 0.5, 2, 14.5),
  createData('Ghabriela De Oliveira Santos Luminato', 'PDITA472', 1, 1, 1, 0.5, 1, 0, 2, 2, 0, 0, 0, 2, 10.5),
  createData('Guilherme Geraldo Silva', 'PDITA227', 0, 1, 2, 1, 1, 0, 2, 1, 1, 0, 0, 1, 10),
  createData('Helimara Vieira Ribeiro', 'PDITA290', 1.5, 2, 2, 0.5, 1, 0, 2, 2, 1, 0, 0, 2, 14),
  createData('Helly Pablo Vieira Ribeiro', 'PDITA060', 0, 2, 1, 0.5, 1, 1, 1, 2, 0, 0, 1, 2, 11.5),
  createData('Henrique Waichert Rodrigues', 'PDITA339', 3, 2, 2, 1, 1, 0.5, 2, 2, 1.5, 1, 0, 1, 17),
  createData('Hiago Espindola Ambrosio', 'PDITA481', 1, 2, 2, 0.5, 1, 0.5, 2, 2, 2, 1, 0, 2, 16),
  createData('Indianara Dos Santos Rodrigues Guia', 'PDITA382', 0, 1, 2, 1, 1, 0, 2, 2, 1, 0, 1, 2, 13),
  createData('Jairo Lucas Dos Santos', 'PDITA383', 0, 1, 1.5, 0.5, 0, 0, 2, 2, 0, 0, 0, 1.5, 8.5),
  createData('Joao Victor De Jesus Augusto', 'PDITA015', 3, 1, 2, 1, 0.5, 0, 2, 2, 1, 0, 1, 1, 14.5),
  createData('Joao Victor Gomes', 'PDITA448', 0, 1, 2, 0.5, 0.5, 1, 2, 1, 0, 0, 0, 0.5, 8.5),
  createData('Joao Vitor Moreira Silva', 'PDITA079', 0, 1, 2, 0, 1, 1, 2, 1, 0, 0, 1, 2, 11),
  createData('Jose Airton Marques Junior', 'PDITA063', 3, 2, 2, 1, 1, 0.5, 2, 2, 2, 1, 0.5, 2, 19),
  createData('Julia Fernandes De Almeida', 'PDITA016', 3, 2, 2, 1, 1, 0, 2, 2, 2, 1, 0.5, 2, 18.5),
  createData('Juliana Elen Silva Oliveira', 'PDITA109', 3, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 2, 20),
  createData('Julio Cesar De Souza Oliveira', 'PDITA142', 2, 2, 2, 0.5, 1, 0.5, 1, 1, 0.5, 0, 1, 2, 13.5),
  createData('Kaique Vitor Malaquias Pereira', 'PDITA294', 0, 2, 2, 1, 0, 1, 2, 1, 2, 0, 0, 1, 12),
  createData('Karolline Carvalho Silva', 'PDITA145', 3, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 2, 20),
  createData('Kennedy Darlan Oliveira Duarte', 'PDITA065', 3, 1, 2, 0.5, 1, 0, 2, 1, 1, 0, 0, 2, 13.5),
  createData('Kennyson Chaves Florencio', 'PDITA017', 2.5, 1.5, 2, 0.5, 1, 1, 2, 2, 2, 1, 1, 1, 17.5),
  createData('Leandro Anastacio De Freitas', 'PDITA238', 1.5, 2, 1, 0.5, 1, 0, 2, 2, 0, 0, 0, 2, 12),
  createData('Leiriane De Lins Oliveira', 'PDITA389', 3, 2, 2, 1, 1, 1, 2, 2, 1, 0, 1, 1.5, 17.5),
  createData('Leonardo Duarte De Freitas', 'PDITA081', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
  createData('Lucas De Souza Martins', 'PDITA240', 2, 2, 2, 1, 0.5, 0, 2, 2, 1, 1, 0, 1, 14.5),
  createData('Lucas Martins', 'PDITA024', 2, 1, 2, 1, 1, 1, 2, 2, 1, 0, 1, 1.5, 15.5),
  createData('Lucas Vinicius De Oliveira Siqueira', 'PDITA453', 1.5, 1, 1, 1, 1, 0, 2, 2, 0.5, 0, 1, 1, 12),
  createData('Luke Lage', 'PDITA172', 0, 1, 1, 0.5, 1, 1, 0, 1, 0.5, 0, 1, 1, 8),
  createData('Marcio Paulo Cardoso Ferreira', 'PDITA427', 0, 0.5, 0.5, 0.5, 1, 0, 1, 1, 0, 0, 0, 0, 4.5),
  createData('Marcos Vinicius Sousa Ferreira', 'PDITA298', 3, 1, 2, 0.5, 1, 0, 2, 1.5, 0.5, 0, 0, 2, 13.5),
  createData('Maria Clara Souza Araujo', 'PDITA199', 0, 2, 2, 0.5, 1, 1, 2, 1, 0.5, 0, 1, 2, 13),
  createData('Matheus Felipe Martins Goncalves', 'PDITA245', 2, 2, 1, 0.5, 0.5, 0, 2, 2, 1.5, 0, 0, 2, 13.5),
  createData('Matheus Rodrigues Marques Martins', 'PDITA429', 2, 0.5, 2, 1, 0, 0, 2, 2, 0, 0, 0, 1, 10.5),
  createData('Michele Vitoria Terezinha Dos Santos', 'PDITA356', 0, 2, 2, 1, 1, 0, 2, 1, 0, 0, 1, 2, 12),
  createData('Nicolas Souza Moreira', 'PDITA085', 2, 1, 2, 1, 1, 0, 2, 2, 1.5, 0, 0, 2, 14.5),
  createData('Pedro Arthur Andrade Lopes', 'PDITA114', 0, 1, 2, 1, 1, 0, 2, 2, 2, 0, 1, 1, 13),
  createData('Pedro Augusto De Oliveira Reis', 'PDITA001', 0, 2, 2, 0.5, 0, 1, 0, 2, 1, 1, 0, 1, 10.5),
  createData('Pedro Henrique da Silva', 'PDITA251', 0, 1.5, 1.5, 0.5, 0, 1, 2, 2, 0, 0, 0, 0.5, 9),
  createData('Pedro Henrique Ferreira Da Silva', 'PDITA433', 3, 1.5, 2, 1, 1, 1, 2, 2, 2, 0, 0.5, 2, 18),
  createData('Pedro Henrique Silva Correia', 'PDITA155', 0, 2, 0, 1, 1, 0.5, 0, 2, 1.5, 1, 1, 2, 12),
  createData('Pedro Lucas Moraes', 'PDITA393', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
  createData('Poliane Silva Madureira', 'PDITA461', 2, 1, 1.5, 1, 1, 0, 2, 2, 0, 0, 0, 2, 12.5),
  createData('Rafael Jose Dos Reis Macieira', 'PDITA002', 0, 1, 1, 1, 1, 0.5, 2, 2, 0, 0, 0, 1.5, 10),
  createData('Rafael Lucas Do Nascimento Sales', 'PDITA157', 3, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 2, 20),
  createData('Rafael Lucas Martins Almeida Dos Reis', 'PDITA087', 1, 1, 1, 0.5, 0, 0, 2, 1, 0, 0, 0, 1.5, 8),
  createData('Rafael Pastor Pereira', 'PDITA009', 3, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 2, 20),
  createData('Rafael Rodrigues Oliveira', 'PDITA394', 3, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 2, 20),
  createData('Raissa Ruthielle Taveira Cruz', 'PDITA159', 0, 1, 2, 0.5, 1, 1, 2, 1, 0, 0, 0, 1, 9.5),
  createData('Renato De Almeida Silva', 'PDITA462', 0, 2, 2, 0.5, 0, 0, 2, 2, 0, 0, 0, 2, 10.5),
  createData('Raul Antonio Horta Campos', 'PDITA307', 2, 1, 2, 0, 0, 0, 2, 2, 2, 1, 1, 1, 14),
  createData('Robson Cornelio Kawanishi', 'PDITA090', 0, 2, 2, 1, 1, 1, 2, 2, 0.5, 0, 0.5, 2, 14),
  createData('Rubia Luisa Prudencio Goncalves', 'PDITA253', 2, 2, 2, 1, 1, 0.5, 2, 2, 2, 0, 1, 1.5, 17),
  createData('Thiago Oliveira Maia', 'PDITA166', 3, 2, 2, 1, 1, 1, 2, 2, 2, 0, 0.5, 2, 18.5),
  createData('Thiago Santos Madeira', 'PDITA010', 1.5, 2, 2, 1, 1, 1, 2, 2, 1.5, 0, 0, 1, 15),
  createData('Thiago Vinicius Santos Batista', 'PDITA437', 2, 2, 1.5, 0.5, 1, 0, 2, 2, 0.5, 1, 1, 1, 14.5),
  createData('Tiago Francisco Orozimbo', 'PDITA046', 3, 1.5, 2, 0.5, 1, 0, 2, 2, 1, 1, 1, 2, 17),
  createData('Vinicius Davi Lage Dias', 'PDITA207', 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1),
  createData('Vinicius Kener Souza', 'PDITA260', 3, 2, 2, 1, 1, 0, 5, 2, 1, 1, 5, 1, 1, 2, 18),
  createData('Vinicius Martins Gonzaga', 'PDITA004', 0, 2, 2, 0, 5, 0, 0, 0, 1, 2, 0, 0, 2, 9.5),
  createData('Wesley Victor Ferreira', 'PDITA209', 3, 2, 2, 1, 0, 5, 0, 2, 2, 0, 0, 1, 2, 15.5),
  createData('Rhuan Costa Colombo', 'PDITA565', 3, 2, 1, 1, 1, 1, 2, 2, 2, 0, 1, 2, 18),
  createData('Vanessa Pereira De Souza', 'PDITA259', 0, 2, 1, 0.5, 1, 1, 0, 2, 1, 0, 1, 1, 10),

  ``
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);

  };

  return (
    <div>
      <box style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <TextField
          label="Pesquisar seu resultado..."
          variant="outlined"
          value={searchTerm}
          onChange={handleSearch}
          fullWidth
          style={{ maxWidth: '40%', marginBottom: '20px', marginTop: '60px', }}
        />
      </box>
      <TableContainer style={{ maxHeight: 800, overflow: 'auto', overflowX: 'auto' }}>
        <Table stickyHeader aria-label="sticky table" style={{ minWidth: '100%' }}>
          <TableHead>
            <TableRow>
              <TableCell align="center">Nome</TableCell>
              <TableCell align="center">PDITA</TableCell>
              <TableCell align="center">RESPONSIVIDADE</TableCell>
              <TableCell align="center">ESTRUTURA</TableCell>
              <TableCell align="center">CSS</TableCell>
              <TableCell align="center">DESING</TableCell>
              <TableCell align="center">FOOTER</TableCell>
              <TableCell align="center">ACESSIBILIDADE</TableCell>
              <TableCell align="center">FLEXBOX</TableCell>
              <TableCell align="center">ORIGINALIDADE</TableCell>
              <TableCell align="center">INTERATIVIDADE</TableCell>
              <TableCell align="center">DARKMODE</TableCell>
              <TableCell align="center">COMENTÁRIOS</TableCell>
              <TableCell align="center">HIERARQUIZAÇÃO</TableCell>
              <TableCell align="center">Total</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {rows.filter((row) => {
              const values = Object.values(row)
              return values.some((value) =>
                value.toString().toLowerCase().includes(searchTerm.toLowerCase())
              );
            }).map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">{row.nome}</TableCell>
                <TableCell align="center">{row.PDITA}</TableCell>
                <TableCell align="center">{row.RESPONSIVIDADE}</TableCell>
                <TableCell align="center">{row.ESTRUTURA}</TableCell>
                <TableCell align="center">{row.CSS}</TableCell>
                <TableCell align="center">{row.DESING}</TableCell>
                <TableCell align="center">{row.FOOTER}</TableCell>
                <TableCell align="center">{row.ACESSIBILIDADE}</TableCell>
                <TableCell align="center">{row.FLEXBOX}</TableCell>
                <TableCell align="center">{row.ORIGINALIDADE}</TableCell>
                <TableCell align="center">{row.INTERATIVIDADE}</TableCell>
                <TableCell align="center">{row.DARKMODE}</TableCell>
                <TableCell align="center">{row.COMENTARIOS}</TableCell>
                <TableCell align="center">{row.HIERARQUIZACAO}</TableCell>
                <TableCell align="center">{row.TOTAL}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
