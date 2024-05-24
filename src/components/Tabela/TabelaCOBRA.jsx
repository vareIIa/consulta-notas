import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(nome, PDITA, MOVIMENTO, CRESCIMENTO, COLISAO, PONTUACAO, INTERFACE, ANIMACAO, RESTART, DIFICULDADE, GAMEOVER, CENARIO, TOTAL, PREMIACAO) {
  return { nome, PDITA, MOVIMENTO, CRESCIMENTO, COLISAO, PONTUACAO, INTERFACE, ANIMACAO, RESTART, DIFICULDADE, GAMEOVER, CENARIO, TOTAL, PREMIACAO};
}

// Dados dos alunos
// nome, PDITA, MOVIMENTO, CRESCIMENTO, COLISAO, PONTUACAO, INTERFACE, ANIMACAO, RESTART, DIFICULDADE, GAMEOVER, CENARIO, TOTAL, PREMIACAO
// o CREATEDATA é utilizado para criar a tabela presente no site, onde mostra os critérios e os resultados.

const rows = [
  createData('Adan Vinicius Da Silva Gonçalves Simões', 211, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20, 700),
  createData('João Victor De Jesus Augusto', 15, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20, 500),
  createData('Rafael Pastor Pereira', 9, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20, 500),
  createData('Vincenth Sabino Souza Martins', 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20, 300),
  createData('Guilherme Azevedo Leão', 23, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20, 300),
  createData('Bryan Vinicius Almeida Da Silva', 31, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20, 300),
  createData('Willyans Estevam Da Guia', 261, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20, 300),
  createData('Pedro Augusto Rodrigues Da Cruz Comunian', 432, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20, 300),
  createData('Ana Laura Dos Santos Franco', 214, 2, 2, 1.5, 2, 2, 2, 2, 2, 2, 2, 19.5, 300),
  createData('Ricardo Ruiz Rubio', 18, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1.5, 19.5, 300),
  createData('Joao Vitor Moreira Silva', 79, 2, 1.5, 2, 2, 2, 2, 2, 2, 2, 2, 19.5, 300),
createData('Gabriel Ribeiro Rocha', 131, 2, 2, 2, 2, 2, 2, 2, 1.5, 2, 2, 19.5, 300),
createData('Pedro Henrique Ferreira da Silva', 433, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 19, 300),
createData('Eduardo Ruiz Rubio', 77, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 19, 300),
createData('Julio Cesar Albino Silva', 110, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 19, 300),
createData('Bernardo Campos Soares', 324, 2, 2, 2, 2, 2, 1.5, 2, 2, 2, 1.5, 19, 300),
createData('Kennedy Darlan Oliveira Duarte', 65, 2, 2, 2, 2, 2, 1.5, 2, 2, 2, 1, 18.5, 300),
createData('Cleiton De Souza Silva', 179, 2, 2, 1.5, 2, 2, 1.5, 2, 2, 2, 1.5, 18.5, 300),
createData('Gabriel Oliveira Araújo', 471, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 18, 300),
createData('Gabriel Leandro Fonseca Silva', 334, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 18, 300),
createData('Yan Eduardo Carneiro Cruz', 75, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 19.5, 300),
createData('Hiago Espindola Ambrosio', 481, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 18, 300),
createData('Raul Antonio Horta Campos', 307, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 18, 300),
createData('Vinicius Martins Gonzaga', 4, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 18, 300),
createData('Rafael Lucas Do Nascimento Sales', 157, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 18, 300),
createData('Saullo Gabryel Souza Barbosa', 0, 2, 2, 2, 2, 1.5, 1, 2, 2, 2, 1.5, 18, 300),
createData('Lucas Cotta Padula', 239, 2, 2, 1.5, 2, 2, 1.5, 1.5, 2, 1.5, 2, 18, 300),
createData('Thiago Santos Madeira', 10, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 18, 300),
createData('Alexandre Ferreira Santos', 47, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 18, 300),
createData('Bianca Karen Dias Oliveira', 49, 2, 2, 2, 2, 2, 1.5, 1, 2, 1.5, 1.5, 17.5, 300),
createData('Marlon Rodrigues Soares', 201, 2, 2, 2, 2, 1, 1, 2, 1.5, 2, 2, 17.5, 300),
createData('Kaio Luan Souza Pio', 194, 2, 2, 2, 2, 2, 1.5, 2, 2, 0, 2, 17.5, 300),
createData('Lucas Pavao', 242, 2, 2, 2, 2, 2, 2, 0, 2, 2, 1.5, 17.5, 300),
createData('Fernanda Araujo Macieira Monteiro', 182, 2, 2, 2, 2, 2, 0.5, 1.5, 2, 2, 1.5, 17.5, 300),
createData('Lucas Martins', 24, 2, 2, 2, 2, 2, 1.5, 0, 2, 2, 2, 17.5, 300),
createData('Petronio Augusto Rezende Lucindo', 71, 2, 2, 2, 2, 2, 1.5, 0, 2, 2, 2, 17.5, 300),
createData('Ana Carolina Lopes Gorino', 119, 2, 2, 2, 2, 1.5, 1, 2, 2, 2, 1, 17.5, 300),
createData('Artur Henrique Almeida Magalhaes', 123, 2, 2, 2, 2, 1, 1.5, 2, 2, 2, 1, 17.5, 300),
createData('Júlio César De Souza Oliveira', 142, 2, 2, 2, 2, 2, 1, 2, 2, 2, 0.5, 17.5, 300),
createData('Frederico Matheus Costa Durate', 284, 2, 2, 2, 2, 2, 1, 2, 1, 2, 1.5, 17.5, 300),
createData('Henrique Waichert Rodrigues', 339, 1.5, 2, 2, 2, 2, 2, 2, 0, 2, 2, 17.5, 300),
createData('Ruthiele Couto Rosa', 478, 2, 1.5, 2, 2, 2, 2, 0, 2, 2, 2, 17.5, 300),
createData('Gabriel Vitor De Oliveira Reis', 416, 2, 2, 2, 2, 2, 2, 1, 2, 0.5, 2, 17.5, 300),
createData('Bernardo Carvalho Guerra Martins da Costa', 665, 2, 2, 2, 2, 2, 1, 1, 2, 2, 1, 17, 300),
createData('Joaquim Estevan Rodrigues Correia', 347, 2, 2, 2, 2, 2, 2, 1, 2, 0, 2, 17, 300),
createData('Ghabriela De Oliveira Santos Luminato', 472, 2, 2, 2, 2, 2, 2, 0, 1, 2, 2, 17, 300),
createData('Carlos Paulo Rubim Ferreira Silva', 643, 2, 2, 2, 2, 1.5, 1.5, 0, 2, 2, 2, 17, 300),
createData('Jonathan Augusto Carlos Cruz', 62, 2, 2, 1, 2, 1, 2, 2, 2, 2, 1, 17, 300),
createData('Nicolas Gomes Marques', 650, 2, 2, 2, 2, 2, 1, 2, 2, 0, 2, 17, 300),
createData('Thiago Oliveira Maia', 166, 0, 2, 2, 2, 2, 1, 2, 2, 2, 2, 17, 300),
createData('Otavio Augusto Fernandes E Silva', 248, 2, 2, 2, 2, 0, 2, 1, 2, 2, 2, 17, 300),
createData('Kennyson Chaves Florencio', 17, 2, 2, 2, 2, 2, 2, 0, 1, 2, 2, 17, 300),
createData('Esther De Faria', 21, 2, 2, 2, 2, 1, 2, 1, 1, 2, 2, 17, 300),
createData('Guilherme Alves Assis', 133, 2, 2, 2, 2, 2, 2, 1, 2, 0, 2, 17, 300),
createData('Talyson Disues Silva', 45, 1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 17, 300),
createData('José Airton Marques Júnior', 63, 2, 2, 2, 2, 2, 2, 0, 2, 2, 1, 17, 300),
createData('Robson Cornelio Kawanishi', 90, 1, 2, 1, 2, 2, 1, 2, 2, 2, 2, 17, 300),
createData('Juliana Elen Silva Oliveira', 109, 2, 2, 2, 2, 2, 0, 2, 1, 2, 2, 17, 300),
createData('Lenice Druck Guimaraes Souza', 111, 2, 2, 2, 2, 2, 2, 0, 2, 1, 2, 17, 300),
createData('Fabiano Ramos De Oliveira', 181, 2, 2, 2, 2, 2, 1, 0, 2, 2, 2, 17, 300),
createData('Thuany Rodrigues Damasceno Silva', 206, 2, 2, 2, 2, 2, 0, 2, 1, 2, 2, 17, 300),
createData('Pedro Augusto De Oliveira Reis', 1, 2, 2, 2, 2, 2, 1, 1, 2, 1, 2, 17, 300),
createData('Felipe Aparecido Santos Da Silva', 222, 2, 2, 2, 2, 2, 2, 1, 2, 0, 2, 17, 300),
createData('Diego Penna Andrade Barros', 274, 2, 2, 2, 2, 2, 2, 0, 2, 2, 1, 17, 300),
createData('Danielli Meilene Coutinho Arçari', 329, 2, 2, 1, 2, 1, 2, 1, 2, 2, 2, 17, 300),
createData('Pedro Henrique Silva Correia', 155, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 17, 300),
createData('Eduarda Araújo Silva', 536, 2, 2, 1, 2, 2, 1, 2, 2, 0.5, 2, 16.5, 300),
createData('Jean Basílio Fernandes', 514, 2, 1.5, 1.5, 2, 2, 1.5, 1, 1.5, 2, 1.5, 16.5, 300),
createData('Jose Vitor Gomes Dos Santos Nascimento', 419, 2, 2, 2, 2, 0.5, 1, 2, 2, 1, 2, 16.5, 300),
createData('Pedro Arthur Andrade Lopes', 114, 2, 2, 2, 2, 1, 2, 0, 2, 2, 1.5, 16.5, 300),
createData('Jairo Lucas Dos Santos', 383, 2, 2, 2, 2, 2, 1.5, 0, 1, 2, 2, 16.5, 300),
createData('Thulio Henrique Santos Nicodemos', 366, 2, 1.5, 2, 2, 2, 1, 2, 1, 2, 1, 16.5, 300),
createData('Barbara Marcela Martins Lima', 373, 2, 2, 2, 2, 1.5, 2, 1, 1.5, 1, 1.5, 16.5, 300),
createData('Erick Paula De Oliveira', 277, 2, 2, 2, 2, 2, 2, 1, 0, 1.5, 1.5, 16.5, 300),
createData('Davi Monteiro Andrade', 524, 1.75, 1.5, 2, 2, 1, 2, 0, 2, 2, 2, 16.3, 300),
createData('Claudio Max Moreira Silva', 218, 2, 2, 1, 2, 2, 1, 1, 2, 2, 1, 16, 300),
createData('Miguel Dos Santos Silva', 303, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 16, 300),
createData('Lucas Martins Frassi', 82, 2, 2, 1, 2, 2, 1, 2, 2, 0, 2, 16, 300),
createData('Valter Rodrigues De Oliviera', 515, 2, 2, 2, 2, 0, 2, 0, 2, 2, 2, 16, 300),
createData('Roberto Pedro Dos Santos Junior', 28, 2, 1, 2, 1, 2, 2, 2, 1, 1, 2, 16, 300),
createData('Helly Pablo Vieira Ribeiro', 60, 2, 2, 1, 2, 2, 2, 1, 2, 0, 2, 16, 300),
createData('Scárlath Eduarda Pereira De Souza', 74, 2, 2, 0, 2, 2, 1.5, 1.5, 1, 2, 2, 16, 300),
createData('Renata Ketelyn Costa Silva', 162, 2, 2, 2, 2, 2, 2, 0, 1, 2, 1, 16, 300),
createData('Roger Magalhães Ferreira', 165, 2, 2, 2, 2, 1, 2, 0, 2, 2, 1, 16, 300),
createData('Henrique Santos Da Silva', 190, 2, 2, 1, 2, 2, 2, 0, 2, 2, 1, 16, 300),
createData('Marcos Vinicios Oliveira Dias', 198, 2, 2, 1.5, 2, 1.5, 2, 1, 1.5, 1, 1.5, 16, 300),
createData('Leandro Anastacio De Freitas', 238, 2, 2, 2, 2, 2, 2, 0, 2, 0, 2, 16, 300),
createData('Marcela Deiró Andrade', 243, 2, 2, 2, 2, 1, 1, 0, 2, 2, 2, 16, 300),
createData('Michele Vitoria Terezinha Dos Santos', 356, 2, 2, 2, 2, 0.5, 2, 0.5, 1, 2, 2, 16, 300),
createData('Karolline Carvalho Silva', 145, 2, 2, 1.5, 2, 2, 1.5, 2, 2, 0, 1, 16, 300),
createData('Matheus Henrique Alvarenga Meireles', 202, 2, 2, 2, 2, 2, 1, 1.5, 0, 2, 1.5, 16, 300),
createData('Emanuel Felipe Silva Ferreira', 414, 2, 2, 2, 2, 1, 1, 0, 2, 2, 2, 16, 300),
createData('Heliel Madeira Costa Pastor', 379, 2, 0, 2, 2, 2, 2, 2, 0, 2, 2, 16, 300),
createData('Luiz Guilherme Gomes', 483, 2, 2, 2, 2, 1, 2, 2, 0, 2, 1, 16, 300),
createData('Hector Henrique Lage Ferreira', 512, 2, 2, 2, 2, 2, 0, 2, 0, 2, 2, 16, 300),
createData('Guilherme Henrique Fernandes', 527, 2, 2, 2, 2, 2, 2, 0, 2, 0, 2, 16, 300),
createData('Maria Fernanda Madeira Santos', 649, 2, 2, 2, 2, 2, 2, 0, 2, 0, 2, 16, 300),
createData('Arthur Breno Silva Rosa', 122, 2, 2, 2, 2, 0.5, 2, 1, 0, 2, 2, 15.5, 300),
createData('William Mateus Cruz Barbosa', 210, 2, 2, 2, 2, 1, 1.5, 0, 2, 2, 1, 15.5, 300),
createData('Nayara Nunes Fonseca Dos Reis', 203, 2, 2, 2, 2, 2, 2, 0, 2, 0, 1.5, 15.5, 300),
createData('Filipe Menezes Fernandes', 184, 2, 2, 2, 2, 1.5, 0, 2, 2, 1, 1, 15.5, 300),
createData('Rúbia Luisa Prudencio Gonçalves', 253, 2, 2, 1, 1, 2, 2, 2, 0, 2, 1.5, 15.5, 300),
createData('Gabriel Henrique Oliveira Pedro', 130, 2, 0, 2, 2, 2, 2, 1, 0, 2, 2, 15, 100),
createData('Eliabner Wellesson Goncalves', 275, 0.5, 2, 1, 2, 2, 1, 2, 1, 2, 1.5, 15, 100),
createData('Giovanna Maira Soares Chaves', 132, 1, 2, 1, 2, 2, 2, 0, 1, 2, 2, 15, 100),
createData('Mayra Laudislaine Mendes Dos Santos', 355, 2, 2, 2, 2, 1, 1, 0, 2, 1, 2, 15, 100),
createData('José Vitor Gomes Dos Santos Nascimento', 419, 2, 2, 2, 2, 1, 1, 2, 0, 1.5, 1.5, 15, 100),
createData('Lauro Malaquias Lage', 38, 2, 2, 2, 2, 0, 1.5, 0, 2, 2, 1.5, 15, 100),
createData('Matheus Henrique De Souza', 246, 2, 2, 2, 2, 1.5, 0, 2, 0, 2, 1, 14.5, 100),
createData(' Luke Malaquias Lage', 172, 2, 1.5, 2, 2, 1, 1.5, 0, 2, 1, 1.5, 14.5, 100),
createData('Camila Freitas Viana', 467, 2, 2, 2, 2, 1.5, 1, 0, 0, 2, 1.5, 14, 100),
createData('Arthur Filipe Nascimento Oliveira', 48, 2, 2, 2, 2, 2, 0, 0, 2, 0, 2, 14, 100),
createData('Cesar Augusto Tiago Toto', 54, 2, 2, 1, 1, 1, 2, 1, 1, 1, 2, 14, 100),
createData('Arthur Józef Alves Rosa', 94, 2, 2, 1, 2, 1, 0, 2, 1, 1, 2, 14, 100),
createData('Gerusa Leite Caetano', 105, 2, 2, 2, 2, 2, 1, 0, 1, 0, 2, 14, 100),
createData('Maria Eduarda Moura Carvalho', 457, 1, 2, 1, 2, 2, 1, 2, 0, 2, 1, 14, 100),
createData('Indianara Dos Santos Rodrigues Guia', 382, 2, 2, 1, 2, 2, 2, 0, 1, 0, 2, 14, 100),
createData('Isabela Maria De Sa Teixeira', 341, 2, 2, 2, 2, 2, 1.5, 0, 0, 0.5, 2, 14, 100),
createData('Karolaine Kethelin Silva', 668, 2, 2, 2, 2, 2, 1, 0, 0, 2, 1, 14, 100),
createData('Lais Viana de Souza', 563, 2, 2, 2, 2, 0, 1.5, 0, 0, 2, 2, 13.5, 100),
createData('Vinicius Davi Lage Dias', 207, 1.5, 2, 1, 2, 0, 2, 0, 2, 2, 1, 13.5, 100),
createData('Daniel Júlio Gonçalves Assis', 220, 2, 2, 1, 2, 0, 2, 0, 2, 1.5, 1, 13.5, 100),
createData('Felipe Moreira Dos Santos', 280, 2, 2, 2, 2, 0, 1.5, 0, 2, 0, 2, 13.5, 100),
createData('Alisson Vinícius Ferreira Gonçalves', 321, 2, 2, 2, 2, 0, 1.5, 0, 2, 0, 2, 13.5, 100),
createData('Rayssa Couto Rosa Caetano', 435, 2, 2, 1.5, 2, 0, 1.75, 0, 0, 2, 2, 13.3, 100),
createData('Tiago Francisco Orozimbo', 46, 2, 2, 2, 2, 0, 1, 0, 2, 0, 2, 13, 100),
createData('Helimara Vieira Ribeiro', 290, 1, 1, 1, 2, 2, 2, 0, 2, 0, 2, 13, 100),
createData('Leiriane De Lins Oliveira', 389, 2, 2, 2, 1, 2, 1, 0, 0, 2, 1, 13, 100),
createData('Leticia Izamara Ferreira', 494, 2, 2, 2, 2, 1.5, 1.5, 0, 1, 0, 1, 13, 100),
createData('Rogerio Moreira Vilela', 43, 2, 2, 2, 2, 1, 0, 0, 2, 0, 2, 13, 100),
createData('Jefte Ebiasafe Alves De Souza', 345, 2, 2, 2, 2, 0, 1, 0, 2, 0.5, 1, 12.5, 100),
createData('Julia Pacifico Ramos Barbosa', 450, 0, 2, 2, 2, 2, 0.5, 0, 0, 2, 2, 12.5, 100),
createData('Alice Lage', 465, 2, 2, 2, 2, 0, 0, 0, 1, 2, 1.5, 12.5, 100),
createData('Yasmin Silvestre Monteiro', 29, 1.5, 2, 2, 2, 0, 0, 2, 0, 2, 1, 12.5, 100),
createData('Nicolas Souza Moreira', 85, 2, 2, 2, 2, 0, 0, 0, 2, 0, 2, 12, 100),
createData('Ana Vitoria Nunes Pereira', 322, 2, 2, 2, 2, 0, 0, 0, 1, 1, 2, 12, 100),
createData('Tiago Mateus Valadares Silva', 655, 2, 1.5, 1, 2, 0, 1, 0, 2, 0, 2, 11.5, 100),
createData('Filipe Rodrigues Alvarenga', 185, 2, 2, 2, 2, 0, 0, 0, 2, 0.5, 1, 11.5, 100),
createData('Ramon Godoi Fonseca', 648, 2, 2, 2, 2, 0.5, 0.5, 0.5, 1, 0, 1, 11.5, 100),
createData('Gisele Dos Santos Fernandes', 442, 2, 2, 1, 2, 0, 2, 0, 0, 0, 2, 11, 100),
createData('Vinicius Kener Souza', 260, 2, 2, 2, 2, 0, 1, 0, 1, 0, 1, 11, 100),
createData('Rian Wilson Sousa Carvalho', 360, 2, 2, 2, 2, 0, 1, 0, 0, 0, 2, 11, 100),
createData('Kaique Vitor Malaquias Pereira', 294, 2, 2, 2, 2, 0, 1, 0, 0, 0, 2, 11, 100),
createData('Julio Cesar Couto', 80, 2, 2, 2, 2, 0, 1, 0, 0, 0, 2, 11, 100),
createData('Cristiano Mateus De Souza Junior', 101, 2, 2, 2, 2, 1, 0, 0, 1, 0, 1, 11, 100),
createData('Andréia P Santos', 268, 2, 2, 1.5, 2, 1, 1, 0, 0, 1, 0.5, 11, 100),
createData('Roberta Miranda Procopio De Araujo', 42, 2, 2, 1.5, 1, 0, 1, 0, 1, 0, 2, 10.5, 100),
createData('Jucilene dos Santos',385, 2, 2, 1, 2, 0, 2, 0, 1, 0, 1, 10.5, 100),
createData('Larissa Gabrielly Dos Santos De Assis', 146, 2, 2, 2, 2, 0, 0, 0, 0, 0, 2, 10, 100),
createData('Wesley Victor Ferreira', 209, 2, 2, 2, 2, 0, 0, 1, 0, 0, 1, 10, 100),
createData('Lara Lage Andrade', 237, 2, 2, 2, 2, 0, 0, 0, 0, 1, 0, 10, 100),
createData('Ingrid Caroline Santos De Oliveira', 443, 2, 2, 2, 2, 0, 0, 0, 0, 0, 2, 10, 100),
createData('Renato De Almeida Silva', 462, 2, 2, 2, 2, 0, 0, 0, 1, 0, 1, 10, 100),
createData('Michelle Salgado Martins', 68, 2, 2, 2, 2, 0, 1, 0, 0, 0, 1, 10, 100),
createData('Alexsandro Meireles De Almeida', 265, 2, 2, 2, 2, 0, 1, 0, 0, 0, 1, 10, 100),
createData('Rosemary Silva Gomes', 398, 2, 2, 2, 2, 0, 1, 0, 0, 0, 1, 10, 100),
createData('Thiago Vinicius S. Batista', 437, 2, 1, 1, 2, 0, 2, 0, 0, 0, 2, 10, 100),
createData('Ana Paula Alberto', 267, 2, 2, 2, 2, 0, 0, 0, 0, 0.5, 1, 9.5, 100),
createData('Carlos Alejandro Campos Alvarez', 178, 2, 1, 2, 2, 0, 0, 0, 0, 0, 2, 9, 100),
createData('Pablo Henrique De Souza Nilo', 357, 2, 1, 1, 2, 0, 1, 0, 0, 0, 2, 9, 100),
createData('Ernando Marques Madeira', 278, 2, 2, 2, 2, 0, 0, 0, 0, 0, 1, 9, 100),
createData('Felipe Augusto De Carvalho', 279, 2, 2, 2, 2, 0, 0, 0, 0, 0, 1, 9, 100),
createData('Waldeck Batista De Almeida', 368, 2, 2, 1, 2, 0, 1, 0, 0, 0, 1, 9, 100),
createData('Larissa Gabrielly Dos Santos De Assis', 667, 2, 2, 2, 2, 0, 0, 0, 0, 0, 1, 9, 100),
createData('Aline Aparecida Siqueira Felix', 118, 2, 2, 2, 2, 0, 0, 0, 0, 0, 1, 9, 100),
createData('Livia Santos Macarenhas', 197, 2, 2, 2, 2, 0, 0, 0, 0, 0, 1, 9, 100),
createData('Gisele Fontes De Almeida Silva', 289, 2, 1.5, 2, 2, 0, 0, 0, 0, 0, 1.5, 9, 100),
createData('Yuri Emanuel De Almeida', 317, 1.5, 2, 2, 2, 0, 0, 0, 0, 0, 1.5, 9, 100),
createData('Márcio Paulo Cardoso Ferreira', 427, 2, 2, 2, 2, 0, 0, 0, 0, 0, 1, 9, 100),
createData('Alexandre Gonçalves Dias', 171, 2, 2, 2, 1.5, 0, 0, 0, 0, 0, 1, 8.5, 100),
createData('Samuel Rosa Dos Anjos Silva', 399, 1, 2, 1.5, 1, 1, 0, 0, 0, 0, 2, 8.5, 100),
createData('Alan Carlos Siqueira', 264, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0.5, 8.5, 100),
createData('Guilherme Geraldo Silva', 227, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0.5, 8.5, 100),
createData('Matheus Felipe Martins Gonçalves', 245, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 8, 100),
createData('Thayna vitoria silva gonçalves', 436, 2, 2, 1, 2, 0, 0, 0, 0, 0, 1, 8, 100),
createData('Leonardo Duarte de Freitas', 81, 2, 2, 1, 0, 0, 2, 0, 0, 0, 1, 8, 100),
createData('Julia Pereira Milanio', 386, 2, 2, 1, 2, 0, 0, 0, 0, 0, 1, 8, 100),
createData('João Victor Gomes', 448, 1.5, 2, 2, 2, 0, 0, 0, 0, 0, 0.5, 8, 100),
createData('Lucas Alexandre Brandao Alves', 548, 1, 2, 0.5, 2, 0, 1, 0, 0, 0, 0.5, 7, 100),
createData('Gabriel Dias Lage', 646, 2, 2, 1, 2, 0, 0, 0, 0, 0, 0, 7, 100),
createData('Jefferson Estevam Amorim', 491, 1.5, 2, 0, 2, 0, 0, 0, 0, 0, 1, 6.5, 100),
createData('Gabriel Zozimo Costa Da Silva', 287, 1.5, 2, 0, 2, 0, 0, 0, 0, 0, 1, 6.5, 100),
createData('Ray Oliveira Coelho', 666, 0.5, 1, 1, 2, 0, 0, 0, 0, 0, 1, 5.5, 100),
createData('Jheniffe Santos Andrade', 346, 2, 0.5, 1, 2, 0, 0, 0, 0, 0, 0, 5.5, 100),
createData('Adriana Helena de Sá Ambrósio', 30, 0, 0, 2, 1, 0, 0, 0, 0, 0, 2, 5, 100),
createData('Maycom Campos Godoi', 302, 2, 0.5, 0, 0, 0, 0, 0, 0, 0, 1, 3.5, 100),
createData('Kairon Luca Rodrigues Costa', 235, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),

``   
];


const MyTable = () => {
  
  // Definir o estado para os dados

  return (
    <div style={{ overflow: 'scroll', maxHeight: '500px' }}>
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Nome</TableCell>
              <TableCell align="center">PDITA</TableCell>
              <TableCell align="center">Movimento</TableCell>
              <TableCell align="center">Crescimento</TableCell>
              <TableCell align="center">Colisao</TableCell>
              <TableCell align="center">Pontuacao</TableCell>
              <TableCell align="center">Interface</TableCell>
              <TableCell align="center">Animacao</TableCell>
              <TableCell align="center">Restart</TableCell>
              <TableCell align="center">Dificuldade</TableCell>
              <TableCell align="center">Gameover</TableCell>
              <TableCell align="center">Cenario</TableCell>
              <TableCell align="center">Total</TableCell>
              <TableCell align="center">PREMIAÇÃO</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.nome}>
                <TableCell component="th" scope="row">{row.nome}</TableCell>
                <TableCell align="center">{row.PDITA}</TableCell>
                <TableCell align="center">{row.MOVIMENTO}</TableCell>
                <TableCell align="center">{row.CRESCIMENTO}</TableCell>
                <TableCell align="center">{row.COLISAO}</TableCell>
                <TableCell align="center">{row.PONTUACAO}</TableCell>
                <TableCell align="center">{row.INTERFACE}</TableCell>
                <TableCell align="center">{row.ANIMACAO}</TableCell>
                <TableCell align="center">{row.RESTART}</TableCell>
                <TableCell align="center">{row.DIFICULDADE}</TableCell>
                <TableCell align="center">{row.GAMEOVER}</TableCell>
                <TableCell align="center">{row.CENARIO}</TableCell>
                <TableCell align="center">{row.TOTAL}</TableCell>
                <TableCell align="center">{row.PREMIACAO}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MyTable;