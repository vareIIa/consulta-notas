import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch('https://gist.githubusercontent.com/vareIIa/ad98f88cd7dff2855868c54065b5ccbe/raw/adf5e3881f0aa884730df4d9cb013e34204444bf/Tabela')
      .then(response => response.json()) // Parse JSON
      .then(data => {
        setRows(data.alunos);
      })
      .catch(error => console.error('Error fetching JSON:', error));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <div style={{
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
          style={{ maxWidth: '50%', marginBottom: '20px', marginTop: '20px' }}
        />
      </div>
      <TableContainer component={Paper} style={{ maxHeight: 500, minWidth: '100%', overflow: 'auto' }}>
        <Table stickyHeader aria-label="sticky table" style={{ minWidth: '100%' }}>
          <TableHead>
            <TableRow>
              {Object.keys(rows[0] || {}).map(header => (
                <TableCell key={header} align="center">{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.filter(row => {
              const values = Object.values(row);
              return values.some(value =>
                value.toString().toLowerCase().includes(searchTerm.toLowerCase())
              );
            }).map((row, index) => (
              <TableRow key={index}>
                {Object.values(row).map((cell, index) => (
                  <TableCell key={index} align="center">{cell}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
