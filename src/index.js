import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import  Calculator  from './contexts/Calculator';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Calculator>
<App/>
</Calculator>
  </React.StrictMode>
);

