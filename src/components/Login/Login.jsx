import React, { useState } from 'react';
import BuscarEmail from '../BuscarEmail/BuscaEmail';

const App = () => {
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = async (email) => {
    try {
      const response = await fetch(`https://api-hml.pdcloud.dev/enrolled/email/${email}`, {

        headers: {
          'API-KEY': "Rm9ybUFwaUZlaXRhUGVsb0plYW5QaWVycmVQYXJhYURlc2Vudm9sdmU=",
        }
      });

      if (!response.ok) {
        throw new Error(`Deu erro :( código do erro: ${response.status}`);
      }

      const data = await response.json();

      setSearchResult(data);

    } catch (error) {

      console.error('Erro ao buscar e-mails:', error);
    }
  };

  return (
    <div>
      <BuscarEmail onSearch={handleSearch} />
      {searchResult && (
        <div>
          <h2>Resultado da busca:</h2>
          <pre>{JSON.stringify(searchResult, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default App;
