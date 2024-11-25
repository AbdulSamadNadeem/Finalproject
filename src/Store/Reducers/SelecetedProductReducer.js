const InitialState = {
    SelectedProduct:[],
}


export const SelectedProductReducer = (state=InitialState , {type, payload})=>{
     switch(type){
        case 'select':
            return{
                ...state , SelectedProduct:[payload]
            }

    default:
        return state

        }
    }