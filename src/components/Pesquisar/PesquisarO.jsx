import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Tooltip from '@mui/material/Tooltip';


const alunos = [
 
  { id: 1, nome: 'Vincenth Sabino Souza Martins', nota: 20.00 },
  { id: 2, nome: 'Rafael Pastor Pereira', nota: 19.00 },
  { id: 3, nome: 'Thiago Santos Madeira', nota: 10.00 },
  { id: 4, nome: 'João Victor de Jesus Augusto', nota: 16.50 },
  { id: 5, nome: 'Julia Fernandes De Almeida', nota: 17.00 },
  { id: 6, nome: 'Ricardo Ruiz Rubio', nota: 2.50 },
  { id: 7, nome: 'Vitória Leticia Silva Gomes', nota: 12.00 },
  { id: 8, nome: 'Esther De Faria', nota: 17.00 },
  { id: 9, nome: 'Lucas Martins', nota: 14.00 },
  { id: 10, nome: 'Lucas Santos Moura', nota: 15.00 },
  { id: 11, nome: 'Roberta Miranda Procopio de Araujo', nota: 15.00 },
  { id: 12, nome: 'Bianca Karen Dias Oliveira', nota: 14.00 },
  { id: 13, nome: 'Cesar Augusto Tiago Toto', nota: 14.00 },
  { id: 14, nome: 'Helly Pablo Vieira Ribeiro', nota: 8.00 },
  { id: 15, nome: 'Kennedy Darlan Oliveira Duarte', nota: 12.00 },
  { id: 16, nome: 'Ronaldo Andrade Ribeiro', nota: 12.00 },
  { id: 17, nome: 'Scárlath Eduarda Pereira De Souza', nota: 15.00 },
  { id: 18, nome: 'Yan Eduardo Carneiro Cruz', nota: 19.00 },
  { id: 19, nome: 'Eduardo Ruiz Rubio', nota: 9.00 },
  { id: 20, nome: 'Joao Vitor Moreira Silva', nota: 16.00 },
  { id: 21, nome: 'Lucas Martins Frassi', nota: 3.00 },
  { id: 22, nome: 'Robson Cornelio Kawanishi', nota: 10.00 },
  { id: 23, nome: 'Arthur Józef Alves Rosa', nota: 13.00 },
  { id: 24, nome: 'Bernardo Carvalho Guerra Martins da Costa', nota: 9.00 },
  { id: 25, nome: 'Breno Mencalha Pereira Horsts Da Costa', nota: 10.00 },
  { id: 26, nome: 'Juliana Elen Silva Oliveira', nota: 10.00 },
  { id: 27, nome: 'Pedro Arthur Andrade Lopes', nota: 20.00 },
  { id: 28, nome: 'Ana Carolina Lopes Gorino', nota: 0.00 },
  { id: 29, nome: 'Artur Henrique Almeida Magalhaes', nota: 12.00 },
  { id: 30, nome: 'Artur Henrique Almeida Magalhaes', nota: 15.00 },
  { id: 31, nome: 'Carlos Henrico De Oliveira Maciel', nota: 12.00 },
  { id: 32, nome: 'Joao Vitor Amaral De Oliveira', nota: 13.00 },
  { id: 33, nome: 'Julio Cesar De Souza Oliveira', nota: 14.00 },
  { id: 34, nome: 'Karolline Carvalho Silva', nota: 12.00 },
  { id: 35, nome: 'Larissa Gabrielly Dos Santos De Assis', nota: 13.00 },
  { id: 36, nome: 'Pedro Henrique Silva Correia', nota: 16.00 },
  { id: 37, nome: 'Rafael Lucas Do Nascimento Sales', nota: 20.00 },
  { id: 38, nome: 'Ramon', nota: 0.00 },
  { id: 39, nome: 'Alexandre Gonçalves Dias', nota: 8.50 },
  { id: 40, nome: 'Luke Malaquias Lage', nota: 14.50 },
  { id: 41, nome: 'Ana Paula Lopes Cruz', nota: 9.00 },
  { id: 42, nome: 'Diego Duarte Bretas', nota: 4.00 },
  { id: 43, nome: 'Filipe Rodrigues Alvarenga', nota: 14.00 },
  { id: 44, nome: 'Henrique Santos Da Silva', nota: 1.00 },
  { id: 45, nome: 'Kaio Luan Souza Pio', nota: 16.00 },
  { id: 46, nome: 'Livia Santos Macarenhas', nota: 16.00 },
  { id: 47, nome: 'Maria Clara Souza Araujo', nota: 7.00 },
  { id: 48, nome: 'Nayara Nunes Fonseca Dos Reis', nota: 7.00 },
  { id: 49, nome: 'Leandro Anastacio De Freitas', nota: 0.00 },
  { id: 50, nome: 'Lucas Cotta Padula', nota: 8.00 },
  { id: 51, nome: 'Lucas Pavão', nota: 9.00 },
  { id: 52, nome: 'Willyans Estevam Da Guia', nota: 16.00 },
  { id: 53, nome: 'Diego Penna Andrade Barros', nota: 14.50 },
  { id: 54, nome: 'Erick Paula De Oliveira', nota: 19.00 },
  { id: 55, nome: 'Ernando Marques Madeira', nota: 2.50 },
  { id: 56, nome: 'Frederico Matheus Costa Duarte', nota: 12.50 },
  { id: 57, nome: 'Geovanna Carla Patricio', nota: 9.00 },
  { id: 58, nome: 'Helimara Vieira Ribeiro', nota: 12.00 },
  { id: 59, nome: 'Marcos Vinicius Sousa Ferreira', nota: 11.00 },
  { id: 60, nome: 'Raul Antonio Horta Campos', nota: 0.00 },
  { id: 61, nome: 'Alisson Vinicius Ferreira Gonçalves', nota: 13.00 },
  { id: 62, nome: 'Bernardo Campos Soares', nota: 8.00 },
  { id: 63, nome: 'Danielli Meilene Coutinho Arcari', nota: 11.00 },
  { id: 64, nome: 'Henrique Waichert Rodrigues', nota: 17.00 },
  { id: 65, nome: 'Mayra Laudislaine Mendes Dos Santos', nota: 15.00 },
  { id: 66, nome: 'Thulio Henrique Santos Nicodemos', nota: 15.00 },
  { id: 67, nome: 'Indianara Dos Santos Rodrigues Guia', nota: 14.00 },
  { id: 68, nome: 'Jucilene Dos Santos', nota: 9.00 },
  { id: 69, nome: 'Leiriane De Lins Oliveira', nota: 13.00 },
  { id: 70, nome: 'Mateus Henrique Caldeira Da Silva', nota: 17.00 },
  { id: 71, nome: 'Pedro Lucas Moraes', nota: 6.50 },
  { id: 72, nome: 'Rafael Rodrigues Oliveira', nota: 0.00 },
  { id: 73, nome: 'Victor Hugo Da Silva Ferreira', nota: 17.00 },
  { id: 74, nome: 'Gabriel Vitor De Oliveira Reis', nota: 15.00 },
  { id: 75, nome: 'Pedro Henrique Ferreira Da Silva', nota: 19.00 },
  { id: 76, nome: 'Thiago Vinicius Santos Batista', nota: 11.50 },
  { id: 77, nome: 'Lucas Rodrigues Da Cunha', nota: 10.50 },
  { id: 78, nome: 'Renato de Almeida Silva', nota: 6.00 },
  { id: 79, nome: 'Gabriel Oliveira Araújo', nota: 16.00 },
  { id: 80, nome: 'Ghabriela de Oliveira Santos Luminato', nota: 17.00 },
  { id: 81, nome: 'Rafael Colombo Fernandes Silva', nota: 0 },
  { id: 82, nome: 'Ana Carolina Lopes Gorino', nota: 17.00 },
  { id: 83, nome: 'Jeysa Alves', nota: 16.00 },
];


function TabelaAlunos() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredAlunos, setFilteredAlunos] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    filterTable();
  }, [searchTerm]);

  const filterTable = () => {
    if (searchTerm.trim() === '') {
      setFilteredAlunos([]);
      return;
    }

    const filteredData = alunos
      .filter((aluno) => aluno.nome.toLowerCase().includes(searchTerm.toLowerCase()))
      .slice(0, 5); // Limita os resultados a 5

    setFilteredAlunos(filteredData);
  };

  return (
    <div>
      <div style={{ marginBottom: 80, display: 'flex', alignItems: 'center', position: 'relative' }}>
        <TextField
          style={{ minWidth: '350px', marginRight: '8px' }}
          label="Escreva seu nome para encontra o resultado!"
          variant="outlined"
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        {filteredAlunos.length > 0 && (
          <TableContainer component={Paper} style={{ position: 'absolute', top: '100%', zIndex: 1, maxWidth: '350px' }}>
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
      </div>
    </div>
  );
}


export default TabelaAlunos;