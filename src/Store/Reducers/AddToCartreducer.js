const InitialState = {
    Cart: [],
};

export const AddToCartReducer = (state = InitialState, { type, payload }) => {
    switch (type) {
        case 'cart':
            return {
                ...state,
                Cart: [...state.Cart, payload], 
            };

        case 'remove':
            return {
                ...state,
                Cart: state.Cart.filter((item) => item.id !== payload.id), 
            };

        default:
            return state;
    }
};
