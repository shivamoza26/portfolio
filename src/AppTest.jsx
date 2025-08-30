import React from 'react';

function AppTest() {
  console.log('AppTest component is rendering');
  
  return (
    <div className="min-h-screen bg-blue-500 text-white p-8">
      <h1 className="text-4xl font-bold">Test App Working</h1>
      <p>Current time: {new Date().toLocaleTimeString()}</p>
      <div className="mt-4 p-4 bg-green-500 rounded">
        If you see this, React is working properly
      </div>
    </div>
  );
}

export default AppTest;
