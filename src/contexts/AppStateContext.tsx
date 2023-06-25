import { PropsWithChildren, createContext, useRef, useState } from "react";
import users from '../users.json'
import { IUser } from "../types";

const initialState = {
    alert: null as string | null,
    users: users as IUser[]
}

export const AppStateContext = createContext({
    state: initialState,
    setAlert: (prop: any) => { },
    deleteUser: (email: any) => { },
    sendMail: (email: string) => { },
    addUser: (user: IUser) => { }
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

    return (
        <AppStateContext.Provider value={{ state: appState, setAlert, deleteUser, sendMail, addUser }}>
            {children}
        </AppStateContext.Provider>
    );
};

