import React from 'react';

function FinalDebugApp() {
  return (
    <div style={{ padding: '2rem', backgroundColor: '#003366', color: 'white', fontFamily: 'sans-serif', minHeight: '100vh' }}>
      <h1>Final Debug: React is Working</h1>
      <p>If you can see this, the Vite + React setup is fully functional.</p>
      <p>The issue lies within one of the portfolio components.</p>
      <p>Current Time: {new Date().toLocaleTimeString()}</p>
    </div>
  );
}

export default FinalDebugApp;
