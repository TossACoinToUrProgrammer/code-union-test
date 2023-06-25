import { PropsWithChildren, createContext, useRef, useState } from "react";
import defaulUsers from '../users.json'
import { IUser } from "../types";

const initialState = {
    alert: null as string | null,
    users: [] as IUser[],
    permissions: [] as string[],
    navbarOpen: false,
    setAlert: (prop: any) => { },
    deleteUser: (email: any) => { },
    sendMail: (email: string) => { },
    addUser: (user: IUser) => { },
    editUser: (permissions: string[], email: string) => { },
    toggleNavbar: () => { }
}

const defaultPermissions = [
    "Все",
    "Модерация объявлений",
    "Блог",
    "Тех. поддержка",
    "Обращения клиентов",
    "Аналитика",
    "Акции",
    "Администратор",
]

export const AppStateContext = createContext(initialState);

export const AppStateProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [users, setUsers] = useState<IUser[]>(defaulUsers)
    const [alert, setAlert] = useState<string | null>(null)
    const [navbarOpen, setNavbarOpen] = useState(false)

    const deleteUser = (email: string) => {
        setUsers(prev => prev.filter(item => item.email !== email))
        setAlert('Пользователь успешно удален')
    }

    const sendMail = (email: string) => {
        setAlert(`Приглашение отправлено на почту ${email}`)
    }

    const addUser = (user: IUser) => {
        setUsers(prev => [...prev, user])
        setAlert(`Новый пользователь добавлен`)
    }

    const editUser = (permissions: string[], email: string) => {
        setUsers(prev => {
            return prev.map(user => user.email === email ? { ...user, permissions } : user)
        })
        setAlert(`Права доступа пользователя изменены`)
    }

    const toggleNavbar = () => {
        setNavbarOpen(prev => !prev)
    }

    return (
        <AppStateContext.Provider value={{ users, navbarOpen, alert, permissions: defaultPermissions, setAlert, deleteUser, sendMail, addUser, editUser, toggleNavbar }}>
            {children}
        </AppStateContext.Provider>
    );
};

