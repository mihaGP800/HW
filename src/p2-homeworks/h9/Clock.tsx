import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        window.clearTimeout(timerId)
        // stop
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
            // setDate
        }, 10)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)// show
    }
    const onMouseLeave = () => {
        setShow(false)// close
    }

    const stringTime = date && date.getMilliseconds()// fix with date
    const stringDate = date && date.toLocaleDateString() // fix with date

    return (
        <div>
            <div className={s.timeDateBlock} style={{backgroundColor: `#${stringTime}`}}>
                <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    {stringTime}
                </div>

                {show && (
                    <div>
                        {stringDate}
                    </div>
                )}</div>

            <div className={s.buttonBlock}>
                <SuperButton onClick={start} default1>start</SuperButton>
                <SuperButton onClick={stop} red>stop</SuperButton>
            </div>

        </div>
    )
}

export default Clock
