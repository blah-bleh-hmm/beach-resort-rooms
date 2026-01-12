import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { RoomProvider } from './context';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RoomProvider>
      <Router>
        <App />
      </Router>
    </RoomProvider>
  </StrictMode>
);
