type InitialContentStateType = {
    initialized: boolean
}
let initialContentState: InitialContentStateType = {
    initialized: false
};

const contentReducer = (state: InitialContentStateType = initialContentState, action: any): InitialContentStateType => {
    switch (action.type) {
        case 'SET-AUTH-USER': {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state
    }
}

// export const setAuthUserAC = (id: number, login: string, email: string) => ({
//     type: 'SET-AUTH-USER',
//     data: {id, login, email}
// } as const)
//
// export const authThunk = () => {
//     return (dispatch: Dispatch) => {
//         authAPI.setAuthUser()
//             .then(data => {
//                 if (data.resultCode === 0) {
//                     let {id, login, email} = data.data
//                     dispatch(setAuthUserAC(id, login, email))
//                     profileAPI.getProfileStatusUser(id)
//                         .then(data => {
//                             dispatch(setStatusToProfileAC(data))
//                         })
//                 }
//             })
//     }
// }


export default contentReducer