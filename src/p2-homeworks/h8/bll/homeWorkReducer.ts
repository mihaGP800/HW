import {UserType} from '../HW8';

type ActionType = {
    type: 'sort' | 'check 18'
    payload: string
}

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            return [...state.sort((a, b) => action.payload === 'up' ? a.age - b.age : b.age - a.age)]
        }
        case 'check 18': {
            // need to fix
            return state.filter(el=>el.age >= 18)
        }
        default:
            return state
    }
}

