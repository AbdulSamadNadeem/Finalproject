const InitialState = {
    Cart:[],
}


export const AddToCartReducer = (state=InitialState , {type, payload})=>{

     switch(type){
        case 'cart':
            return{
                ...state , Cart:[...state.Cart , ...[payload]]
            }
      
        case 'remove':
            const index = state.Cart.findIndex((item)=> item.id === payload.id)
            if(index !== -1){
                const updatedArray = [...state.Cart]
                updatedArray.splice(index , 1)
                return{
                 ...state , Cart:updatedArray
                   }  
                }
                return state    

    default:
        return state

}}