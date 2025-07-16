import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);

    // Load dữ liệu từ localStorage
    useEffect(() => {
        const savedUser = JSON.parse(localStorage.getItem("currentUser")) || JSON.parse(sessionStorage.getItem("currentUser"));
        const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
        setUser(savedUser);
        setUsers(savedUsers);
    }, []);

    const login = (loginUser) => {
        setUser(loginUser);
        localStorage.setItem("currentUser", JSON.stringify(loginUser));
    };

    const loginWithoutStayLogged = (loginUser) => {
        setUser(loginUser);
        sessionStorage.setItem("currentUser", JSON.stringify(loginUser));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("currentUser");
        sessionStorage.removeItem("currentUser");
        setTimeout(() => {
            window.location.href = '/';
        }, 500)
    };

    const register = (newUser) => {
        const updatedUsers = [...users, newUser];
        setUsers(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers));
    };

    const updateUserToList = (newUser) => {
        let newList = users.filter(u => u.email !== newUser.email)
        newList.push(newUser);
        setUsers(newList);
        localStorage.setItem("users", JSON.stringify(newList));
    };

    const setFavoriteTeacher = (teacherId) => {
        let updatedUser = { ...user };
        updatedUser.likedTeachers.push(teacherId);
        setUser(updatedUser);
        localStorage.setItem("currentUser", JSON.stringify(updatedUser));
        updateUserToList(updatedUser);
    }

    const setFavoriteBook = (bookId) => {
        let updatedUser = { ...user };
        updatedUser.likedBooks.push(bookId);
        setUser(updatedUser);
        localStorage.setItem("currentUser", JSON.stringify(updatedUser));
        updateUserToList(updatedUser);
    }

    const removeFavoriteBook = (bookId) => {
        let updatedUser = { ...user };
        updatedUser.likedBooks = user.likedBooks.filter(b => b !== bookId);
        setUser(updatedUser);
        localStorage.setItem("currentUser", JSON.stringify(updatedUser));
        updateUserToList(updatedUser);
    }

    const removeFavoriteTeacher = (teacherId) => {
        let updatedUser = { ...user };
        updatedUser.likedTeachers = user.likedTeachers.filter(t => t !== teacherId);
        setUser(updatedUser);
        localStorage.setItem("currentUser", JSON.stringify(updatedUser));
        updateUserToList(updatedUser);
    }

    return (
        <UserContext.Provider value={{ user, users, login, loginWithoutStayLogged, logout, register, setFavoriteBook, setFavoriteTeacher, removeFavoriteBook, removeFavoriteTeacher }}>
            {children}
        </UserContext.Provider>
    );
};