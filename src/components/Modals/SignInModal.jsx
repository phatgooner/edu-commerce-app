import Modal from 'react-bootstrap/Modal';
import LoginForm from '../Forms/LoginForm';
import RegisterForm from '../Forms/RegisterForm';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SignInModal = (props) => {
    const [modalType, setModalType] = useState('');
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        setModalType(props.modalType)
    }, [props.modalType]);

    const handleChange = () => {
        setModalType('loading');
        setTimeout(() => {
            modalType === 'signup' ? setModalType('login') : setModalType('signup')
        }, 1000);
    }

    const handleShowModal = (isShow) => {
        setIsOpen(isShow)
    }

    return (
        <>
            {isOpen && <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Chào mừng bạn đến với <span className="text-main">talkable!</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {modalType === 'login' && <LoginForm handleShowModal={handleShowModal} />}
                    {modalType === 'loading' && (
                        <div>
                            <Skeleton height={40} className="mb-3" />
                            <Skeleton height={40} className="mb-3" />
                            <Skeleton height={40} className="mb-3" />
                            <Skeleton height={40} />
                        </div>
                    )}
                    {modalType === 'signup' && <RegisterForm setModalType={setModalType} />}
                </Modal.Body>
                <Modal.Footer>
                    {modalType === 'loading' ?
                        ''
                        :
                        <>Bạn {modalType === 'signup' ? 'đã' : 'chưa'} có tài khoản?
                            <strong
                                style={{ cursor: 'pointer' }}
                                onClick={() => { handleChange() }}
                            >Đăng {modalType === 'signup' ? 'nhập' : 'ký'}</strong></>}
                </Modal.Footer>
            </Modal>}
        </>
    );
}

export default SignInModal