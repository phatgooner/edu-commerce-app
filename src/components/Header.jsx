import Container from 'react-bootstrap/Container';
import logo from '../assets/transparent-logo.png'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import SignInModal from './SignIn/SignInModal';

const Header = () => {
    const [modalShow, setModalShow] = useState(false);
    const [modalType, setModalType] = useState('loading');

    return (
        <>
            <SignInModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                modalType={modalType}
            />
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <NavLink to="/" className='navbar-brand'><img onClick={() => {
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth',
                        });
                    }} src={logo} width={"150"} alt="logo" /></NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/teachers" className='nav-link'>Tìm giáo viên</NavLink>
                            <NavLink to="/community" className='nav-link'>Cộng đồng</NavLink>
                            <NavLink to="/library" className='nav-link'>Thư viện sách</NavLink>
                        </Nav>
                        <Nav>
                            <button className='btn btn-outline-primary me-2' onClick={() => { setModalType('login'); setModalShow(true); }}>Đăng nhập</button>
                            <button className='btn btn-primary' onClick={() => { setModalType('signup'); setModalShow(true); }}>Đăng ký</button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;