import './styles/App.scss';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className="app-container">
      <div className='header-container'>
        <Header />
      </div>
      <div className='main-container'>
        <div className='main-content'>
          <Outlet />
        </div>
      </div>
      <div className='footer-container'>

      </div>
    </div>
  );
}

export default App;
