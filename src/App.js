import React from 'react';
import { Routes, Route } from 'react-router-dom'
import BatchPage from './pages/BatchPage';
import BatchDetailPage from './pages/BatchDetailPage';
import TeachersPage from './pages/TeachersPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Header from './features/mncc/Header';
import Footer from './features/mncc/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='batches' element={<BatchPage />} />
        <Route path='teachers' element={<TeachersPage />} />
        <Route path='batches/:batchId' element={<BatchDetailPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
