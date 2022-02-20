import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value)
        setError('')
    }
    const addUser = () => {
        if (name === '') {
            setError('Введите имя')

        } else if (name.startsWith(' ')) {
            setError('Введите имя')
            setName('')
        } else {
            alert(`Hello  ${name}!`)
            setName('')
            addUserCallback(name)
        }
        // need to fix
    }

    const keyPresAddUser = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === 'Enter' && addUser()
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            keyPresAddUser={keyPresAddUser}
        />
    )
}

export default GreetingContainer
