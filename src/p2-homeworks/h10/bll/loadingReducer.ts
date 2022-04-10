const initState = {
isloading: false
}

export type InitStateType = typeof initState

export const loadingReducer = (state: InitStateType = initState, action: LoadingACType): InitStateType => { // fix any
    switch (action.type) {
        case 'LOADING': {
            return {...state, isloading: action.payload.isloading}
        }
        default: return state
    }
}

type LoadingACType = ReturnType<typeof loadingAC>

export const loadingAC = (isloading: boolean)=> {
    return {
        type: 'LOADING',
        payload: {isloading}
    }as const
} // fix any