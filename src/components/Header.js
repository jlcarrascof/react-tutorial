import React from 'react';

const Header = () => {
  const headerStyle = {
    padding: '20px 0',
    lineHeight: '1.5em',
  };
  return (
    <header style={headerStyle}>
      <h1
        style={{
          fontSize: '6rem',
          fontWeight: '600',
          marginBottom: '2rem',
          lineHeight: '1em',
          color: '#ececec',
          textTransform: 'lowercase',
          textAlign: 'center',
        }}
      >
        Todos
      </h1>
      <h3
        style={{
          fontSize: '1.5rem',
          fontWeight: '600',
          marginBottom: '2rem',
          lineHeight: '1em',
          color: '#ececec',
          textTransform: 'lowercase',
          textAlign: 'center',
        }}
      >
        Items will persist in the browser local storage
      </h3>
    </header>
  );
};

export default Header;
