interface IUser {
    name: string,
    email: string,
    image: string,
    permissions: string[]
}

interface CheckboxItem {
    name: string
    value: boolean
}

export type { IUser, CheckboxItem }