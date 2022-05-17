export type ContentActionsType = setInitializedContentACType | setInitializedSelfStatusACType

type setInitializedContentACType = ReturnType<typeof setInitializedContentAC>
type setInitializedSelfStatusACType = ReturnType<typeof setInitializedSelfStatusAC>

type InitialContentStateType = {
    initialized: boolean
}
let initialContentState: InitialContentStateType = {
    initialized: false
};

const contentReducer = (state: InitialContentStateType = initialContentState, action: ContentActionsType): InitialContentStateType => {
    switch (action.type) {
        case 'SET-INITIALIZED-CONTENT': {
            return {
                ...state,
                initialized: true
            }
        }

        default:
            return state
    }
}

export const setInitializedContentAC = () => ({type: 'SET-INITIALIZED-CONTENT'} as const)
export const setInitializedSelfStatusAC = () => ({type: 'SET-INITIALIZED-SELF-STATUS'} as const)


export default contentReducer