// src/App.tsx

import React from 'react';
import Header from './components/Header';
import TableContainer from "./components/TableContainer";

const App: React.FC = () => {
  return (
      <div className="App">
        <Header />
        <main>
          <p>Добро пожаловать на главную страницу!</p>
            <TableContainer />
          {/* Здесь может быть основной контент страницы */}
        </main>
      </div>
  );
};

export default App;
