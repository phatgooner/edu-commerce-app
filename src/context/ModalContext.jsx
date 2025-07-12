import { createContext, useState, useContext } from "react";
import { UserContext } from "./UserContext";
import SignInModal from "../components/SignIn/SignInModal";

export const ModalContext = createContext();
export const ModalProvider = ({ children }) => {
    const { user } = useContext(UserContext);
    const [modalShow, setModalShow] = useState(false);
    const [modalType, setModalType] = useState('loading');

    const setType = (type) => {
        setModalType(type)
    }

    const setShow = () => {
        if (!user) setModalShow(true);
    };

    const setClose = () => setModalShow(false);

    return (
        <ModalContext.Provider value={{ modalShow, setShow, setClose, setType }}>
            {children}

            <SignInModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                modalType={modalType}
            />
        </ModalContext.Provider>
    );
};
