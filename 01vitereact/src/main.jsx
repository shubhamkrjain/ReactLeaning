import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const anotherElement =(
    <a href='https://example.com' target='_blank'>
        Click me to visit example.com
    </a>
)
const reactElement = React.createElement(
    'a',
    {herf: 'https://example.com', target:'_blank' },
    'Click me to visit example.com',
    anotherElement
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
    reactElement
    //<App />
    
);


