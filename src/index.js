import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import LoadingScreen from './components/Layouts/LoadingScreen';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Library from './pages/Library';
import Teachers from './pages/Teachers';
import Homepage from './pages/Homepage';
import ContactUs from './pages/ContactUs';
import Error from './pages/Error';
import FAQs from './pages/FAQs';
import LikedBooks from './pages/LikedBooks';
import LikedTeachers from './pages/LikedTeachers';
import ScrollToTop from './components/Tools/ScrollToTop';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoadingScreen />
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Homepage />} />
          <Route path="/library" element={<Library />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/liked-teachers" element={<LikedTeachers />} />
          <Route path="/liked-books" element={<LikedBooks />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);