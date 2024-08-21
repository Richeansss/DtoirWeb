// src/App.tsx

import React from 'react';
import Header from './components/Header';

const App: React.FC = () => {
  return (
      <div className="App">
        <Header />
        <main>
          <p>Добро пожаловать на главную страницу!</p>
          {/* Здесь может быть основной контент страницы */}
        </main>
      </div>
  );
};

export default App;
