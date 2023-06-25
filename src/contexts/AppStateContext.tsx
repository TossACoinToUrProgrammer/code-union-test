import { PropsWithChildren, createContext, useRef, useState } from "react";
import users from '../users.json'

const initialState = {
    alert: null as string | null,
    users
}

export const AppStateContext = createContext({ state: initialState, setAlert: (prop: any) => { }, deleteUser: (email: any) => { }, sendMail: (email: string) => { } });

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

    return (
        <AppStateContext.Provider value={{ state: appState, setAlert, deleteUser, sendMail }}>
            {children}
        </AppStateContext.Provider>
    );
};

