const initState = {color: 'some'}

export type InitColorType = typeof initState

export const changeColorReducer = (state: InitColorType = initState, action: changeThemeACType): InitColorType => {
    switch (action.type) {
        case 'CHANGE-THEME':
            return {...state, ...action.payload}
        default:
            return state
    }
}

export type changeThemeACType = ReturnType<typeof changeThemeAC>

export const changeThemeAC = (color: string) =>
    ({type: 'CHANGE-THEME', payload: {color}}) as const