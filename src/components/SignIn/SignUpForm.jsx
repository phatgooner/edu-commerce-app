import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';

const SignUpForm = () => {
    const [showPass, setShowPass] = useState(false);
    const [showConfirmPass, setShowConfirmPass] = useState(false);

    const handleShowPass = () => {
        setShowPass(!showPass)
    }

    const handleShowConfirmPass = () => {
        setShowConfirmPass(!showConfirmPass)
    }

    return (
        <Form className="p-4">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <FormControl type="text" placeholder="Tên" />
            </Form.Group>

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

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <InputGroup>
                    <FormControl type={showConfirmPass ? 'text' : 'password'} placeholder="Xác nhận mật khẩu" />
                    <InputGroup.Text style={{ cursor: 'pointer' }} onClick={() => { handleShowConfirmPass() }}>
                        {showConfirmPass ? <FaEyeSlash /> : <FaEye />}
                    </InputGroup.Text>
                </InputGroup>
            </Form.Group>

            <Button variant="primary" className="w-100">
                Đăng ký
            </Button>
        </Form>
    );
}

export default SignUpForm;