import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    setUsers: (users: Array<UserType>) => void
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, setUsers, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    // const [error, setError] = useState<string>('') // need to fix any

    const error = name.trim() ? '' : 'error'

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value)
    }
    // const addUser = () => {
    //     if (name.trim() === '') {
    //         setError('Введите имя')
    //
    //     }  else {
    //         alert(`Hello  ${name.trim()}!`)
    //         setName('')
    //         setError('')
    //         addUserCallback(name)
    //     }
    //     // need to fix
    // }

    const showAlert = () => {
        if (error) {
            alert('введите текст...')
        } else {
            alert(name.trim())
            addUserCallback(name)// если нет ошибки показать текст
        }
        setName('')
    }

    // const keyPresAddUser = (e: KeyboardEvent<HTMLInputElement>) => {
    //     e.key === 'Enter' && addUser()
    // }

    const totalUsers = users.length // need to fix
    const reset = () => users.length !== 0 ? setUsers([]) : alert('the list is empty')
    return (
        <Greeting
            name={name}
            setName={setName}
            reset={reset}
            setNameCallback={setNameCallback}
            // addUser={addUser}
            showAlert={showAlert}
            error={error}
            totalUsers={totalUsers}
            // keyPresAddUser={keyPresAddUser}
        />
    )
}

export default GreetingContainer
