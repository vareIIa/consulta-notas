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

function createData(nome, PDITA, MOVIMENTO, COLECIONAVEL, PONTUACAO, COLISAO, INTERFACE, GAMEOVER, RESTART, JOGABILIDADE, DIFICULDADE, SONS,  TOTAL) {
  return { nome, PDITA, MOVIMENTO, COLECIONAVEL, PONTUACAO, COLISAO, INTERFACE, GAMEOVER, RESTART, JOGABILIDADE, DIFICULDADE, SONS,  TOTAL};
}

// Dados dos alunos
// nome, PDITA, MOVIMENTO, COLECIONAVEL, PONTUACAO, COLISAO, INTERFACE, GAMEOVER, RESTART, JOGABILIDADE, DIFICULDADE, SONS,  TOTAL
// o CREATEDATA é utilizado para criar a tabela presente no site, onde mostra os critérios e os resultados.

const rows = [
  createData('Rafael Lucas Do Nascimento Sales', 'PDITA157', 1.00, 1.00, 1.00, 2.00, 2.00, 2.00, 2.00, 3.00, 3.00, 3.00, 20.00),
  createData('Vincenth Sabino Souza Martins', 'PDITA003', 1.00, 1.00, 1.00, 2.00, 2.00, 2.00, 2.00, 3.00, 3.00, 3.00, 20.00),
  createData('Rafael Pastor Pereira', 'PDITA009', 1.00, 1.00, 1.00, 2.00, 1.00, 2.00, 2.00, 3.00, 3.00, 3.00, 19.00),
  createData('Thiago Santos Madeira', 'PDITA010', 1.00, 1.00, 1.00, 1.00, 1.00, 2.00, 0.00, 1.00, 0.00, 2.00, 10.00),
  createData('João Victor de Jesus Augusto', 'PDITA015', 0.50, 1.00, 1.00, 2.00, 1.00, 2.00, 2.00, 1.00, 3.00, 3.00, 16.50),
  createData('Julia Fernandes De Almeida', 'PDITA016', 1.00, 1.00, 1.00, 2.00, 1.00, 2.00, 2.00, 3.00, 1.00, 3.00, 17.00),
  createData('Ricardo Ruiz Rubio', 'PDITA018', 1.00, 0.00, 0.00, 0.50, 1.00, 0.00, 0.00, 0.00, 0.00, 0.00, 2.50),
  createData('Vitória Leticia Silva Gomes', 'PDITA019', 1.00, 1.00, 1.00, 2.00, 0.00, 2.00, 0.00, 3.00, 0.00, 2.00, 12.00),
  createData('Esther De Faria', 'PDITA021', 1.00, 1.00, 1.00, 1.00, 2.00, 2.00, 0.00, 3.00, 3.00, 3.00, 17.00),
  createData('Lucas Martins', 'PDITA024', 1.00, 1.00, 1.00, 2.00, 1.00, 2.00, 2.00, 3.00, 0.00, 1.00, 14.00),
  createData('Lucas Santos Moura', 'PDITA040', 1.00, 1.00, 1.00, 1.00, 2.00, 2.00, 0.00, 1.00, 3.00, 3.00, 15.00),
  createData('Roberta Miranda Procopio de Araujo', 'PDITA042', 1.00, 1.00, 1.00, 2.00, 2.00, 2.00, 2.00, 2.00, 0.00, 2.00, 15.00),
  createData('Bianca Karen Dias Oliveira', 'PDITA049', 1.00, 1.00, 1.00, 1.00, 2.00, 2.00, 0.00, 2.00, 3.00, 1.00, 14.00),
  createData('Cesar Augusto Tiago Toto', 'PDITA054', 1.00, 1.00, 1.00, 2.00, 2.00, 2.00, 1.00, 2.00, 0.00, 2.00, 14.00),
  createData('Helly Pablo Vieira Ribeiro', 'PDITA060', 1.00, 1.00, 1.00, 2.00, 0.00, 0.00, 0.00, 2.00, 0.00, 1.00, 8.00),
  createData('Kennedy Darlan Oliveira Duarte', 'PDITA065', 1.00, 1.00, 1.00, 2.00, 0.00, 2.00, 1.00, 2.00, 0.00, 2.00, 12.00),
  createData('Ronaldo Andrade Ribeiro', 'PDITA073', 1.00, 1.00, 0.00, 2.00, 0.00, 2.00, 2.00, 3.00, 0.00, 1.00, 12.00),
  createData('Scárlath Eduarda Pereira De Souza', 'PDITA074', 1.00, 1.00, 1.00, 2.00, 1.00, 2.00, 2.00, 3.00, 0.00, 2.00, 15.00),
  createData('Yan Eduardo Carneiro Cruz', 'PDITA075', 1.00, 1.00, 1.00, 2.00, 2.00, 2.00, 2.00, 3.00, 2.00, 3.00, 19.00),
  createData('Eduardo Ruiz Rubio', 'PDITA077', 1.00, 1.00, 1.00, 2.00, 1.00, 0.00, 0.00, 1.00, 0.00, 2.00, 9.00),
  createData('Joao Vitor Moreira Silva', 'PDITA079', 1.00, 1.00, 1.00, 2.00, 2.00, 2.00, 2.00, 2.00, 1.00, 2.00, 16.00),
  createData('Robson Cornelio Kawanishi', 'PDITA090', 1.00, 1.00, 1.00, 2.00, 0.00, 2.00, 0.00, 3.00, 0.00, 0.00, 10.00),
  createData('Arthur Józef Alves Rosa', 'PDITA094', 1.00, 1.00, 0.00, 2.00, 2.00, 2.00, 2.00, 1.00, 0.00, 2.00, 13.00),
  createData('Bernardo Carvalho Guerra Martins da Costa', 'PDITA096', 1.00, 1.00, 1.00, 2.00, 0.00, 2.00, 0.00, 2.00, 0.00, 0.00, 9.00),
  createData('Breno Mencalha Pereira Horsts Da Costa', 'PDITA098', 1.00, 1.00, 0.00, 2.00, 1.00, 2.00, 0.00, 2.00, 0.00, 1.00, 10.00),
  createData('Juliana Elen Silva Oliveira', 'PDITA109', 1.00, 1.00, 1.00, 2.00, 1.00, 2.00, 0.00, 1.00, 0.00, 1.00, 10.00),
  createData('Pedro Arthur Andrade Lopes', 'PDITA114', 1.00, 1.00, 1.00, 2.00, 2.00, 2.00, 2.00, 3.00, 3.00, 3.00, 20.00),
  createData('Ana Carolina Lopes Gorino', 'PDITA119', 1.00, 1.00, 1.00, 2.00, 2.00, 2.00, 2.00, 3.00, 0.00, 3.00, 17.00),
  createData('Artur Henrique Almeida Magalhaes', 'PDITA123', 1.00, 1.00, 1.00, 2.00, 2.00, 2.00, 0.00, 2.00, 1.00, 3.00, 15.00),
  createData('Carlos Henrico De Oliveira Maciel', 'PDITA124', 1.00, 1.00, 1.00, 2.00, 1.00, 2.00, 1.00, 2.00, 0.00, 1.00, 12.00),
  createData('Joao Vitor Amaral De Oliveira', 'PDITA140', 1.00, 1.00, 1.00, 2.00, 0.00, 2.00, 0.00, 3.00, 0.00, 3.00, 13.00),
  createData('Julio Cesar De Souza Oliveira', 'PDITA142', 1.00, 1.00, 1.00, 2.00, 1.00, 2.00, 1.00, 2.00, 0.00, 3.00, 14.00),
  createData('Karolline Carvalho Silva', 'PDITA145', 1.00, 1.00, 1.00, 1.00, 1.00, 2.00, 0.00, 2.00, 0.00, 3.00, 12.00),
  createData('Larissa Gabrielly Dos Santos De Assis', 'PDITA146', 1.00, 1.00, 1.00, 2.00, 0.00, 2.00, 0.00, 3.00, 0.00, 3.00, 13.00),
  createData('Pedro Henrique Silva Correia', 'PDITA155', 1.00, 1.00, 1.00, 2.00, 2.00, 2.00, 2.00, 3.00, 0.00, 2.00, 16.00),
  createData('Alexandre Gonçalves Dias', 'PDITA171', 1.00, 1.00, 0.00, 1.00, 1.00, 1.00, 0.00, 1.00, 0.00, 2.50, 8.50),
  createData('Luke Malaquias Lage', 'PDITA172', 0.50, 1.00, 1.00, 2.00, 2.00, 1.00, 0.00, 1.00, 3.00, 3.00, 14.50),
  createData('Ana Paula Lopes Cruz', 'PDITA174', 1.00, 1.00, 1.00, 2.00, 0.00, 2.00, 0.00, 2.00, 0.00, 0.00, 9.00),
  createData('Diego Duarte Bretas', 'PDITA180', 1.00, 1.00, 1.00, 1.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 4.00),
  createData('Filipe Rodrigues Alvarenga', 'PDITA185', 1.00, 1.00, 1.00, 2.00, 0.00, 2.00, 0.00, 1.00, 3.00, 3.00, 14.00),
  createData('Henrique Santos Da Silva', 'PDITA190', 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 1.00, 1.00),
  createData('Kaio Luan Souza Pio', 'PDITA194', 1.00, 1.00, 1.00, 2.00, 2.00, 2.00, 0.00, 2.00, 2.00, 3.00, 16.00),
  createData('Livia Santos Macarenhas', 'PDITA197', 1.00, 1.00, 1.00, 2.00, 1.00, 2.00, 2.00, 3.00, 0.00, 3.00, 16.00),
  createData('Maria Clara Souza Araujo', 'PDITA199', 1.00, 1.00, 1.00, 2.00, 0.00, 0.00, 0.00, 2.00, 0.00, 0.00, 7.00),
  createData('Nayara Nunes Fonseca Dos Reis', 'PDITA203', 1.00, 1.00, 1.00, 1.00, 0.00, 0.00, 0.00, 1.00, 0.00, 2.00, 7.00),
  createData('Leandro Anastacio De Freitas', 'PDITA238', 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00),
  createData('Lucas Cotta Padula', 'PDITA239', 1.00, 0.00, 0.00, 0.00, 2.00, 2.00, 0.00, 0.00, 0.00, 3.00, 8.00),
  createData('Lucas Pavão', 'PDITA242', 1.00, 1.00, 1.00, 2.00, 0.00, 0.00, 0.00, 1.00, 0.00, 3.00, 9.00),
  createData('Willyans Estevam Da Guia', 'PDITA261', 1.00, 1.00, 1.00, 2.00, 2.00, 2.00, 0.00, 1.00, 3.00, 3.00, 16.00),
  createData('Diego Penna Andrade Barros', 'PDITA274', 0.50, 1.00, 0.00, 2.00, 2.00, 2.00, 0.00, 1.00, 3.00, 3.00, 14.50),
  createData('Erick Paula De Oliveira', 'PDITA277', 1.00, 1.00, 1.00, 2.00, 1.00, 2.00, 2.00, 3.00, 3.00, 2.00, 19.00),
  createData('Ernando Marques Madeira', 'PDITA278', 0.50, 0.00, 0.00, 2.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 2.50),
  createData('Frederico Matheus Costa Duarte', 'PDITA284', 1.00, 1.00, 1.00, 2.00, 1.50, 0.00, 0.00, 3.00, 0.00, 3.00, 12.50),
  createData('Geovanna Carla Patricio', 'PDITA288', 1.00, 1.00, 1.00, 0.00, 0.00, 0.00, 0.00, 3.00, 0.00, 3.00, 9.00),
  createData('Helimara Vieira Ribeiro', 'PDITA290', 1.00, 1.00, 1.00, 2.00, 2.00, 2.00, 0.00, 2.00, 0.00, 1.00, 12.00),
  createData('Marcos Vinicius Sousa Ferreira', 'PDITA298', 1.00, 1.00, 1.00, 2.00, 1.00, 0.00, 0.00, 2.00, 0.00, 3.00, 11.00),
  createData('Raul Antonio Horta Campos', 'PDITA307', 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00),
  createData('Alisson Vinicius Ferreira Gonçalves', 'PDITA321', 1.00, 1.00, 1.00, 2.00, 0.00, 2.00, 0.00, 3.00, 0.00, 3.00, 13.00),
  createData('Bernardo Campos Soares', 'PDITA324', 1.00, 1.00, 0.00, 2.00, 0.00, 0.00, 0.00, 1.00, 0.00, 3.00, 8.00),
  createData('Danielli Meilene Coutinho Arcari', 'PDITA329', 1.00, 1.00, 1.00, 2.00, 0.00, 0.00, 0.00, 3.00, 0.00, 3.00, 11.00),
  createData('Henrique Waichert Rodrigues', 'PDITA339', 1.00, 1.00, 1.00, 2.00, 2.00, 2.00, 2.00, 2.00, 2.00, 2.00, 17.00),
  createData('Mayra Laudislaine Mendes Dos Santos', 'PDITA355', 1.00, 1.00, 1.00, 2.00, 2.00, 2.00, 2.00, 1.00, 0.00, 3.00, 15.00),
  createData('Thulio Henrique Santos Nicodemos', 'PDITA366', 1.00, 1.00, 1.00, 2.00, 1.00, 2.00, 2.00, 3.00, 0.00, 2.00, 15.00),
  createData('Indianara Dos Santos Rodrigues Guia', 'PDITA382', 1.00, 1.00, 1.00, 2.00, 2.00, 0.00, 0.00, 2.00, 3.00, 2.00, 14.00),
  createData('Jucilene Dos Santos', 'PDITA385', 1.00, 1.00, 1.00, 0.00, 1.00, 0.00, 0.00, 1.00, 1.00, 3.00, 9.00),
  createData('Leiriane De Lins Oliveira', 'PDITA389', 1.00, 1.00, 1.00, 2.00, 0.00, 2.00, 0.00, 3.00, 0.00, 3.00, 13.00),
  createData('Mateus Henrique Caldeira Da Silva', 'PDITA391', 1.00, 1.00, 1.00, 1.00, 2.00, 2.00, 0.00, 3.00, 3.00, 3.00, 17.00),
  createData('Pedro Lucas Moraes', 'PDITA393', 1.00, 1.00, 0.00, 2.00, 0.00, 0.00, 0.00, 2.50, 0.00, 0.00, 6.50),
  createData('Rafael Rodrigues Oliveira', 'PDITA394', 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00),
  createData('Victor Hugo Da Silva Ferreira', 'PDITA403', 1.00, 1.00, 1.00, 2.00, 1.00, 2.00, 2.00, 3.00, 1.00, 3.00, 17.00),
  createData('Gabriel Vitor De Oliveira Reis', 'PDITA416', 1.00, 1.00, 1.00, 2.00, 1.00, 2.00, 2.00, 2.00, 0.00, 3.00, 15.00),
  createData('Pedro Henrique Ferreira Da Silva', 'PDITA433', 1.00, 1.00, 1.00, 2.00, 2.00, 2.00, 1.00, 3.00, 2.50, 3.00, 18.50),
  createData('Thiago Vinicius Santos Batista', 'PDITA437', 1.00, 1.00, 1.00, 2.00, 1.00, 1.00, 0.00, 2.00, 0.00, 2.50, 11.50),
  createData('Lucas Rodrigues Da Cunha', 'PDITA452', 1.00, 1.00, 1.00, 2.00, 0.00, 0.00, 0.00, 3.00, 0.00, 2.50, 10.50),
  createData('Renato de Almeida Silva', 'PDITA462', 1.00, 1.00, 0.50, 1.50, 0.00, 0.00, 0.00, 2.00, 0.00, 0.00, 6.00),
  createData('Gabriel Oliveira Araújo', 'PDITA471', 1.00, 1.00, 1.00, 2.00, 2.00, 2.00, 1.00, 2.00, 1.00, 3.00, 16.00),
  createData('Ghabriela de Oliveira Santos Luminato', 'PDITA472', 1.00, 1.00, 1.00, 2.00, 1.00, 2.00, 0.00, 3.00, 3.00, 3.00, 17.00),
  createData('Ruthiele Couto Rosa', 'PDITA478', 1.00, 1.00, 1.00, 2.00, 0.00, 0.00, 0.00, 1.00, 1.00, 2.00, 9.00),
  createData('Hiago Espindola Ambrosio', 'PDITA481', 1.00, 1.00, 1.00, 2.00, 1.00, 2.00, 2.00, 1.00, 0.00, 1.00, 12.00),
  createData('Leticia Izamara Ferreira', 'PDITA494', 1.00, 1.00, 1.00, 2.00, 0.00, 0.00, 0.00, 1.00, 0.00, 1.00, 7.00),
  createData('Jeysa Alves', 'PDITA543', 1.00, 1.00, 1.00, 2.00, 2.00, 2.00, 2.00, 2.00, 0.00, 2.00, 16.00),
  createData('Ana Carolina Lopes Gorino', 'PDITA119', 1.00, 1.00, 1.00, 2.00, 2.00, 2.00, 2.00, 3.00, 0.00, 3.00, 17.00),

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
        style={{maxWidth:'50%',marginBottom: '20px',marginTop: '20px',}}
      />
      </box>
<TableContainer style={{maxHeight: 600,  overflow: 'auto', minWidth: 1200 }}>
  <Table stickyHeader aria-label="sticky table" style={{minWidth: 1200}}>
    <TableHead>
      <TableRow>
              <TableCell align="center">Nome</TableCell>
              <TableCell align="center">PDITA</TableCell>
              <TableCell align="center">Movimento</TableCell>
              <TableCell align="center">Colecionável</TableCell>
              <TableCell align="center">Pontuacao</TableCell>
              <TableCell align="center">Colisao</TableCell>
              <TableCell align="center">Interface</TableCell>
              <TableCell align="center">Gameover</TableCell>
              <TableCell align="center">Restart</TableCell>
              <TableCell align="center">Jogabilidade</TableCell>
              <TableCell align="center">Dificuldade</TableCell>
              <TableCell align="center">Sons</TableCell>
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
                <TableCell align="center">{row.MOVIMENTO}</TableCell>
                <TableCell align="center">{row.COLECIONAVEL}</TableCell>
                <TableCell align="center">{row.PONTUACAO}</TableCell>
                <TableCell align="center">{row.COLISAO}</TableCell>
                <TableCell align="center">{row.INTERFACE}</TableCell>
                <TableCell align="center">{row.GAMEOVER}</TableCell>
                <TableCell align="center">{row.RESTART}</TableCell>
                <TableCell align="center">{row.JOGABILIDADE}</TableCell>
                <TableCell align="center">{row.DIFICULDADE}</TableCell>
                <TableCell align="center">{row.SONS}</TableCell>
                <TableCell align="center">{row.TOTAL}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
