import { Form, Button, InputGroup, FormControl, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { toast } from 'react-toastify';

const LoginForm = ({ handleShowModal }) => {
    const [showPass, setShowPass] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { users, login } = useContext(UserContext);

    const handleShowPass = () => {
        setShowPass(!showPass)
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const user = users.find(
            (u) => u.email === email && u.password === password
        );
        if (user) {
            login(user);
            toast.success("Đăng nhập thành công!");
            handleShowModal(false);
        } else {
            toast.error("Sai tài khoản hoặc mật khẩu.");
        }
    };

    return (
        <Form className="p-4" onSubmit={(e) => handleLogin(e)}>
            <h5 className='mb-4 text-main text-center'>Đăng nhập ngay để trải nghiệm tốt nhất!</h5>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <FormControl type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <InputGroup>
                    <FormControl type={showPass ? 'text' : 'password'} placeholder="Mật khẩu" required onChange={(e) => setPassword(e.target.value)} />
                    <InputGroup.Text style={{ cursor: 'pointer' }} onClick={() => { handleShowPass() }}>
                        {showPass ? <FaEyeSlash /> : <FaEye />}
                    </InputGroup.Text>
                </InputGroup>
            </Form.Group>

            <Row className="align-items-center mb-3">
                <Col>
                    <Form.Check type="checkbox" label="Duy trì đăng nhập" />
                </Col>
                <Col className="text-end">
                    <Link to="#" className='nav-link'>Quên mật khẩu</Link>
                </Col>
            </Row>

            <Button variant="primary" type='submit' className="w-100">
                Đăng nhập
            </Button>
        </Form>
    );
};

export default LoginForm;
