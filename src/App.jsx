import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ChatBot from './pages/ChatBot';
import Summarize from './pages/Summarize';
import DBSearch from './pages/DBSearch';
import WebSearch from './pages/WebSearch';
import Settings from './pages/Settings';
import DailyReport from './pages/reports/Daily';
import MonthlyReport from './pages/reports/Monthly';
import YearlyReport from './pages/reports/Yearly';
import SecureMind from './pages/Maher/SecureMind';
import Islamic from './pages/Maher/Islamic';
import Robotics from './pages/Maher/Robotics';
import Agents from './pages/Agents';

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
          <Route path="/agents" element={<Agents />} />
          <Route path="/reports/daily" element={<DailyReport />} />
          <Route path="/reports/monthly" element={<MonthlyReport />} />
          <Route path="/reports/yearly" element={<YearlyReport />} />
          <Route path="/maher/securemind" element={<SecureMind />} />
          <Route path="/maher/islamic" element={<Islamic />} />
          <Route path="/maher/robotics" element={<Robotics />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;