import './styles/App.scss';
import Header from './components/Layouts/Header';
import Footer from './components/Layouts/Footer';
import { Outlet } from 'react-router-dom';
import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from './context/UserContext';
import { ModalProvider } from './context/ModalContext';
import ChatbotWidget from './chatbot/ChatbotWidget';

const App = () => {
  return (
    <UserProvider>
      <ModalProvider>
        <div className="app-container">
          <div className='header-container'>
            <Header />
          </div>
          <div className='main-container'>
            <Outlet />
          </div>
          <div className='footer-container'>
            <Footer />
          </div>
          <ChatbotWidget />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            transition={Bounce}
          />
        </div>
      </ModalProvider>
    </UserProvider>
  );
}

export default App;
