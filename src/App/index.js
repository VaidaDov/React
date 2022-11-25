import React from 'react';
import styles from './styles.module.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from '../components/Navbar';
import RegisterPage from '../pages/RegisterPage';
import QuestionsPage from '../pages/QuestionsPage';
import SourceryForDevelopersPage from '../pages/Academies/SourceryForDevelopersPage';
import SourceryForFrontEndPage from '../pages/Academies/SourceryForFrontEndPage';
import SourceryForTestersPage from '../pages/Academies/SourceryForTestersPage';
import SourceryForKidsPage from '../pages/Academies/SourceryForKidsPage';
import HomePage from '../pages/Home/Home';

const App = () => {
  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route
              exact
              path="/sourcery-for-developers"
              element={<SourceryForDevelopersPage />}
            />
            <Route
              exact
              path="/sourcery-for-testers"
              element={<SourceryForTestersPage />}
            />
            <Route
              exact
              path="/sourcery-for-front-end"
              element={<SourceryForFrontEndPage />}
            />
            <Route
              exact
              path="/sourcery-for-kids"
              element={<SourceryForKidsPage />}
            />
            <Route exact path="/register" element={<RegisterPage />} />
            <Route exact path="/questions" element={<QuestionsPage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
