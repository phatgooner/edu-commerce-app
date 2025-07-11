import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Library from './pages/Library';
import Teachers from './pages/Teachers';
import Homepage from './pages/Homepage';
import FAQs from './pages/FAQs';
import ScrollToTop from './components/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Homepage />} />
          <Route path="/library" element={<Library />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/faqs" element={<FAQs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);