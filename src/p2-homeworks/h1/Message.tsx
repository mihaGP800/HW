import React from 'react'
import s from './Message.module.css'

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

const Message: React.FC<MessageType> = (props) => {
    return (
        <div className={s.messageBlock}>
            <img className={s.avatar} src={props.avatar} alt=""/>
            <div className={s.single}></div>
            <div className={s.complexText}>
                <div className={s.name}>{props.name}</div>
                <div className={s.message}>{props.message}</div>
                <div className={s.time}>{props.time}</div>

            </div>
        </div>
    )
}

export default Message

