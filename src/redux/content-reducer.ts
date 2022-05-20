export type ContentActionsType = setInitializedContentACType

type setInitializedContentACType = ReturnType<typeof setInitializedContentAC>

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

//actions

export const setInitializedContentAC = () => ({type: 'SET-INITIALIZED-CONTENT'} as const)

export default contentReducer