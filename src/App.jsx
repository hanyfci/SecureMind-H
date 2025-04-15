import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ChatBot from './pages/ChatBot';
import Summarize from './pages/Summarize';
import DBSearch from './pages/DBSearch';
import WebSearch from './pages/WebSearch';
import Settings from './pages/Settings';

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/chatbot" element={<ChatBot />} />
          <Route path="/summarize" element={<Summarize />} />
          <Route path="/dbsearch" element={<DBSearch />} />
          <Route path="/websearch" element={<WebSearch />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;