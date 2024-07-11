import React from 'react';
import { Outlet } from 'react-router-dom';
import { useConfig } from './context/ConfigContext';

const App = () => {
  const context = useConfig();

  return (
    <div>
      <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
        <h1 className="text-xl font-bold text-center">🚀 Rick and Morty - Fan Service</h1>
      </div>
      <Outlet />
      <p>Wersja aplikacji: {context.appVersion}</p>
    </div>
  );
};

export default App;
