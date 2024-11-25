const InitialState = {
    AllProducts:[],
}


export const AllProductsReducer = (state=InitialState , {type, payload})=>{

     switch(type){
        case 'All':
            return{
                ...state , AllProducts:[...state.AllProducts , ...payload]
            }

    default:
        return state

}}