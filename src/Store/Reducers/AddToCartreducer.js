const InitialState = {
    Cart: [],
};

export const AddToCartReducer = (state = InitialState, { type, payload }) => {
    switch (type) {
        case 'cart':
            return {
                ...state,
                Cart: [...state.Cart, payload], // Fixed unnecessary spread
            };

        case 'remove':
            return {
                ...state,
                Cart: state.Cart.filter((item) => item.id !== payload.id), // Simplified removal logic
            };

        default:
            return state;
    }
};
