import { Form, Button, InputGroup, FormControl, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';

const LoginForm = () => {
    const [showPass, setShowPass] = useState(false)

    const handleShowPass = () => {
        setShowPass(!showPass)
    }

    return (
        <Form className="p-4">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <FormControl type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <InputGroup>
                    <FormControl type={showPass ? 'text' : 'password'} placeholder="Mật khẩu" />
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

            <Button variant="primary" className="w-100">
                Đăng nhập
            </Button>
        </Form>
    );
};

export default LoginForm;
