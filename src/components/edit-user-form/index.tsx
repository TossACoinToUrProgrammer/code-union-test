import React, { useState, useContext } from 'react'
import Form from '../form'
import SelectPermissions from '../select-permissions'
import { AppStateContext } from '../../contexts/AppStateContext'

interface AddUserFormProps {
    submit: (data: any) => void
    close: () => void,
    userPermissions: string[]
}

const EditUserForm: React.FC<AddUserFormProps> = ({ submit, close, userPermissions }) => {
    const { state: { permissions: statePermissions } } = useContext(AppStateContext)

    const [permissions, setPermissions] = useState(statePermissions.map(item => ({ name: item, value: userPermissions.includes(item) })))

    const onSubmit = (e: any) => {
        e.preventDefault()
        console.log('permissions', permissions)
        submit({ permissions: permissions.filter(item => item.value).map(item => item.name) })
    }

    return (
        <Form title='Изменить права доступа' close={close} submit={onSubmit} buttonText='Изменить'>
            <SelectPermissions permissions={permissions} onChange={setPermissions} />
        </Form>
    )
}

export default EditUserForm