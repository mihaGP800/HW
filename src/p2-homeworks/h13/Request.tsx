import React, {ChangeEvent, useState} from 'react';
import {RequestErrorType, RequestsAPI} from './api/API';

export const Request = () => {
    const [checked, setChecked] = useState<boolean>(false)
    const [request, setRequest] = useState<string>('------')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.currentTarget.checked)
    }

    const sendRequest = () => {
        return RequestsAPI.creatRequest(checked)
            .then(res => setRequest(res.data.errorText))
            .catch((error: RequestErrorType) => {
                console.log({...error});
                console.log(error.response ? error.response.data.errorText : error.message)
                setRequest(error.response ? error.response.data.errorText : error.message)
            })


    }

    return (
        <div>
            <button onClick={sendRequest}>send</button>
            <input checked={checked} type="checkbox" onChange={onChangeHandler}/>
            <h3>request: {request}</h3>
        </div>
    );
}