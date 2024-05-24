import React, { useState } from 'react';

const EmailSearchField = ({ onSearch }) => {
  const [email, setEmail] = useState('');

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSearch = () => {
    onSearch(email);
  };

  return (
    <div>
      <input type="text" value={email} onChange={handleChange} />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default EmailSearchField;