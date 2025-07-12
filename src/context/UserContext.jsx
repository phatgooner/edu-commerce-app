import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);

    // Load dữ liệu từ localStorage
    useEffect(() => {
        const savedUser = JSON.parse(localStorage.getItem("currentUser"));
        const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
        setUser(savedUser);
        setUsers(savedUsers);
    }, []);

    const login = (loginUser) => {
        setUser(loginUser);
        localStorage.setItem("currentUser", JSON.stringify(loginUser));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("currentUser");
        setTimeout(() => {
            window.location.reload();
        }, 500)
    };

    const register = (newUser) => {
        const updatedUsers = [...users, newUser];
        setUsers(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers));
    };

    const setFavoriteTeacher = (teacherId) => {
        let updatedUser = { ...user };
        updatedUser.likedTeachers.push(teacherId);
        setUser(updatedUser);
        localStorage.setItem("currentUser", JSON.stringify(updatedUser));
    }

    const setFavoriteBook = (bookId) => {
        let updatedUser = { ...user };
        updatedUser.likedBooks.push(bookId);
        setUser(updatedUser);
        localStorage.setItem("currentUser", JSON.stringify(updatedUser));
    }

    const removeFavoriteBook = (bookId) => {
        let updatedUser = { ...user };
        updatedUser.likedBooks = user.likedBooks.filter(book => book.id !== bookId);
        setUser(updatedUser);
        localStorage.setItem("currentUser", JSON.stringify(updatedUser));
    }

    const removeFavoriteTeacher = (teacherId) => {
        let updatedUser = { ...user };
        updatedUser.likedTeachers = user.likedTeachers.filter(teacher => teacher.id !== teacherId);
        setUser(updatedUser);
        localStorage.setItem("currentUser", JSON.stringify(updatedUser));
    }

    return (
        <UserContext.Provider value={{ user, users, login, logout, register, setFavoriteBook, setFavoriteTeacher, removeFavoriteBook, removeFavoriteTeacher }}>
            {children}
        </UserContext.Provider>
    );
};