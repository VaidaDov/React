import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './styles.module';

// components
import Navbar from '../Navbar';
import Footer from '../Footer';

// pages
import AboutUsPage from '../../pages/AboutUsPage';
import SourceryForDevelopersPage from '../../pages/Academies/SourceryForDevelopersPage';
import SourceryForFrontEndPage from '../../pages/Academies/SourceryForFrontEndPage';
import SourceryForTestersPage from '../../pages/Academies/SourceryForTestersPage';
import SourceryForKidsPage from '../../pages/Academies/SourceryForKidsPage';
import RegisterPage from '../../pages/RegisterPage';
import QuestionsPage from '../../pages/QuestionsPage';
import NotFoundPage from '../../pages/NotFoundPage';

const cn = classNames.bind(styles);

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutUsPage />} />
        <Route
          path="/sourcery-for-developers"
          element={<SourceryForDevelopersPage />}
        />
        <Route
          path="/sourcery-for-testers"
          element={<SourceryForTestersPage />}
        />
        <Route
          path="/sourcery-for-front-end"
          element={<SourceryForFrontEndPage />}
        />
        <Route path="/sourcery-for-kids" element={<SourceryForKidsPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/questions" element={<QuestionsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
