import Modal from 'react-bootstrap/Modal';
import LoginForm from './LoginForm';
import SignUpModal from '../SignUp/SignUpModal';
import { useState } from 'react';

const LoginModal = (props) => {
    const [modalSignUpShow, setModalSignUpShow] = useState(false);
    return (
        <>
            <SignUpModal
                show={modalSignUpShow}
                onHide={() => setModalSignUpShow(false)} />
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Chào mừng bạn đến với talkable!
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <LoginForm />
                </Modal.Body>
                <Modal.Footer>
                    Bạn chưa có tài khoản?
                    <strong
                        style={{ cursor: 'pointer' }}
                        onClick={() => { props.onHide(); setModalSignUpShow(true); }}>Đăng ký</strong>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default LoginModal