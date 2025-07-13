import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { toast } from 'react-toastify';

const RegisterForm = ({ setModalType }) => {
    const [showPass, setShowPass] = useState(false);
    const [showConfirmPass, setShowConfirmPass] = useState(false);
    const { users, register } = useContext(UserContext);
    const [registerForm, setRegisterForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleRegister = (e) => {
        e.preventDefault();

        const existingUser = users.find((user) => user.email === registerForm.email);
        if (existingUser) {
            toast.error("Người dùng đã tồn tại.");
            return;
        }

        if (registerForm.password !== registerForm.confirmPassword) {
            toast.error("Xác nhận mật khẩu không trùng khớp.");
            return;
        }

        const newUser = { name: registerForm.name, email: registerForm.email, password: registerForm.password, likedTeachers: [], likedBooks: [] };
        register(newUser)

        const currentToast = {};
        currentToast.current = toast.loading('Đang gửi yêu cầu...')
        setModalType('loading');
        setTimeout(() => {
            setRegisterForm({
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
            });
            toast.update(currentToast.current, {
                render: "Tạo tài khoản thành công. Bạn có thể đăng nhập ngay bây giờ.",
                type: "success",
                isLoading: false,
                autoClose: 3000
            })
            setModalType('login')
        }, 2000)
    };

    const handleChange = (e) => {
        setRegisterForm({
            ...registerForm,
            [e.target.name]: e.target.value,
        });
    };

    const handleShowPass = () => {
        setShowPass(!showPass)
    }

    const handleShowConfirmPass = () => {
        setShowConfirmPass(!showConfirmPass)
    }

    return (
        <Form className="p-4" onSubmit={(e) => handleRegister(e)}>
            <h5 className='mb-4 text-main text-center'>Đăng ký ngay để tham gia cùng talkable!</h5>
            <Form.Group className="mb-3" controlId="formName">
                <FormControl name="name" type="text" value={registerForm.name} placeholder="Họ Tên" required onChange={(e) => handleChange(e)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
                <FormControl name="email" type="email" value={registerForm.email} placeholder="Email" required onChange={(e) => handleChange(e)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
                <InputGroup>
                    <FormControl name='password' type={showPass ? 'text' : 'password'} placeholder="Mật khẩu" value={registerForm.password} required onChange={(e) => handleChange(e)} />
                    <InputGroup.Text style={{ cursor: 'pointer' }} onClick={() => { handleShowPass() }}>
                        {showPass ? <FaEyeSlash /> : <FaEye />}
                    </InputGroup.Text>
                </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formConfirmPassword">
                <InputGroup>
                    <FormControl name='confirmPassword' type={showConfirmPass ? 'text' : 'password'} placeholder="Xác nhận mật khẩu" value={registerForm.confirmPassword} required onChange={(e) => handleChange(e)} />
                    <InputGroup.Text style={{ cursor: 'pointer' }} onClick={() => { handleShowConfirmPass() }}>
                        {showConfirmPass ? <FaEyeSlash /> : <FaEye />}
                    </InputGroup.Text>
                </InputGroup>
            </Form.Group>

            <Button variant="primary" type='submit' className="w-100">
                Đăng ký
            </Button>
        </Form>
    );
}

export default RegisterForm;