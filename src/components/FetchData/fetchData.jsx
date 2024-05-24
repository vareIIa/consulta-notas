import React, { useState, useEffect } from 'react';

function fetchData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://gist.githubusercontent.com/vareIIa/ad98f88cd7dff2855868c54065b5ccbe/raw/adf5e3881f0aa884730df4d9cb013e34204444bf/Tabela');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return data;
}

export default fetchData;