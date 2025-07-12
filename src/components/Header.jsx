import Container from 'react-bootstrap/Container';
import logo from '../assets/transparent-logo.png'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { ModalContext } from '../context/ModalContext';
import { toast } from 'react-toastify';

const Header = () => {
    const { user, logout } = useContext(UserContext);
    const { setType, setShow } = useContext(ModalContext)

    return (
        <>
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
                            <NavLink to="/library" className='nav-link'>Thư viện</NavLink>
                            <NavLink to="/contact" className='nav-link'>Liên hệ</NavLink>
                            <NavLink to="/faqs" className='nav-link'>Trợ giúp</NavLink>
                        </Nav>
                        {!user ?
                            <Nav className='d-flex gap-2'>
                                <button className='btn btn-outline-primary' onClick={() => { setType('login'); setShow(true); }}>Đăng nhập</button>
                                <button className='btn btn-primary' onClick={() => { setType('signup'); setShow(true); }}>Đăng ký</button>
                            </Nav> :
                            <NavDropdown title={`Xin chào, ${user.name}`} id="basic-nav-dropdown">
                                <NavDropdown.Item>
                                    <span>Giáo viên yêu thích</span>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <span>Sách yêu thích</span>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <span onClick={() => { logout(); toast.success('Đăng xuất thành công') }}>Đăng xuất</span>
                                </NavDropdown.Item>
                            </NavDropdown>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;