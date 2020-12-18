

export const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED'
export const reducer = (state: StateType, action: ActionType): StateType => {
    if (action.type === TOGGLE_COLLAPSED) {
        const stateCopy = {...state}
        stateCopy.collapsed = !state.collapsed
        return stateCopy
    }
    return state
}

export type ActionType = {
    type: string
}

export type StateType = {
    collapsed: boolean
}