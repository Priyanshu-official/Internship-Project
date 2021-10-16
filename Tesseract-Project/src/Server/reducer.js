/* eslint-disable default-case */
export const initialState = {
    basket:[],
    loggedinuser: null
}

const reducer = (state, action) => {
    // eslint-disable-next-line default-case
    switch(action.type){
        case 'Add_to_Basket':
            return{
                ...state,
                basket:[...state.basket, action.item]
            }

        case 'SET_LOGIN':
            return{
                ...state,
                loggedinuser: action.user
            }
    }
}

export default reducer