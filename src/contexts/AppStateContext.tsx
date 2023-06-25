import { PropsWithChildren, createContext, useRef, useState } from "react";
import users from '../users.json'
import { IUser } from "../types";

const initialState = {
    alert: null as string | null,
    users: users as IUser[],
    permissions: [
        "Все",
        "Модерация объявлений",
        "Блог",
        "Тех. поддержка",
        "Обращения клиентов",
        "Аналитика",
        "Акции",
        "Администратор",
    ] as string[]
}

export const AppStateContext = createContext({
    state: initialState,
    setAlert: (prop: any) => { },
    deleteUser: (email: any) => { },
    sendMail: (email: string) => { },
    addUser: (user: IUser) => { },
    editUser: (permissions: string[], email: string) => { }
});

export const AppStateProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [appState, setAppState] = useState(initialState)

    const setAlert = (message: string | null) => {
        setAppState(prev => ({ ...prev, alert: message }))
    }

    const deleteUser = (email: string) => {
        setAppState(prev => ({ ...prev, users: prev.users.filter(item => item.email !== email) }))
        setAlert('Пользователь успешно удален')
    }

    const sendMail = (email: string) => {
        setAlert(`Приглашение отправлено на почту ${email}`)
    }

    const addUser = (user: IUser) => {
        setAppState(prev => ({ ...prev, users: [...prev.users, user] }))
        setAlert(`Новый пользователь добавлен`)
    }

    const editUser = (permissions: string[], email: string) => {
        setAppState(prev => {
            return {
                ...prev,
                users: prev.users.map(user => user.email === email ? { ...user, permissions } : user)
            }
        })
        setAlert(`Права доступа пользователя изменены`)
    }

    return (
        <AppStateContext.Provider value={{ state: appState, setAlert, deleteUser, sendMail, addUser, editUser }}>
            {children}
        </AppStateContext.Provider>
    );
};

