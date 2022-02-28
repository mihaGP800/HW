import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";

type GreetingPropsType = {
    name: string // need to fix any
    setName: (name: string) => void
    reset : () =>void
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    // addUser: () => void // need to fix any
    showAlert: () => void
    error: string // need to fix any
    totalUsers: number // need to fix any
    // keyPresAddUser: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setName,reset, setNameCallback,  showAlert, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = name.startsWith(' ') ? s.error : s.someClass  // need to fix with (?:)


    return (
        <div className={s.greeting}>

            {/*<input value={name} onChange={setNameCallback} onKeyPress={keyPresAddUser} className={inputClass}/>*/}

            <SuperInputText
                value={name}
                onChangeText={setName}
                onEnter={showAlert}
                error={error}
                spanClassName={s.testSpanError}
            />

            <SuperButton default1 onClick={showAlert}>ADD</SuperButton>


            {/*<button onClick={addUser}>add</button>*/}
            <span>{totalUsers}</span>

            <SuperButton red onClick={reset}>reset</SuperButton>
            {/*<div>{error}</div>*/}
        </div>
    )
}

export default Greeting
