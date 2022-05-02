import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/auth/'
})

type RequestType = {
    errorText: string
    info: string
    yourBody: { success: boolean }
    yourQuery: {}
}

export type RequestErrorType = {
    code: string
    config: {}
    message: string
    name: string
    request: any
    response: {
        data: { errorText: string, info: string }
        config: any
        headers: any
        request: any
        status: number
        statusText: string
    }
}

export const RequestsAPI = {
    creatRequest: (checked: boolean) => instance
        .post<RequestType>('test', {success: checked})
}