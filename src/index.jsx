import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import HomePage from './pages/HomePage';
import FolioPage from './pages/FolioPage';
import SkillsPage from './pages/SkillsPage';
import ExperiencesPage from './pages/ExperiencesPage';
import ContactPage from './pages/ContactPage';
import ProjectPage from './pages/ProjectPage';
import GlobalStyle from './utils/styles/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <GlobalStyle />

      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/folio" element={ <FolioPage /> } />
        <Route path="/folio/:projectId" element={ <ProjectPage /> } />
        <Route path="/skills" element={ <SkillsPage /> } />
        <Route path="/experiences" element={ <ExperiencesPage /> } />
        <Route path="/contact" element={ <ContactPage /> } />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
