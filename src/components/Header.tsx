// src/components/Header.tsx

import React from 'react';
import './Header.css'; // Подключение стилей

// Определение типа пропсов (если нужно)
const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="left-section">
                <button>КС</button>
                <button>ГРС</button>
                <button>ЛИН.ЧАСТЬ</button>
                <button>КАП.СТРОЙ</button>
                <button>ПРОЧЕЕ</button>
            </div>
            <div className="right-section">
                <button>ГТТ</button>
                <button>ФИЛИАЛЫ</button>
            </div>
        </header>
    );
};

export default Header;
