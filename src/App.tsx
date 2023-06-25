import React from 'react';
import { Route, Routes } from 'react-router-dom';

import MainLayout from './components/layout';
import TeamPage from './pages/team';
import Alert from './components/alert';

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<TeamPage />} />
      </Routes>
      <Alert />
    </MainLayout>
  );
}

export default App;
