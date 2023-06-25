import React, { useState, useRef, useContext } from 'react'

import Form from '../form'
import SelectPermissions from '../select-permissions'
import { AppStateContext } from '../../contexts/AppStateContext'

interface AddUserFormProps {
    submit: (data: any) => void
    close: () => void
}

const AddUserForm: React.FC<AddUserFormProps> = ({ submit, close }) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const { permissions: statePermissions } = useContext(AppStateContext)

    const [permissions, setPermissions] = useState(statePermissions.map(item => ({ name: item, value: false })))

    const onSubmit = (e: any) => {
        e.preventDefault()
        submit({ email: inputRef.current?.value, permissions: permissions.filter(item => item.value).map(item => item.name) })
    }

    return (
        <Form submit={onSubmit} close={close} title="Отправить приглашение" buttonText='Отправить приглашение'>
            <input required ref={inputRef} type="email" placeholder='Email' />
            <SelectPermissions onChange={setPermissions} permissions={permissions} />
        </Form>
    )
}

export default AddUserForm