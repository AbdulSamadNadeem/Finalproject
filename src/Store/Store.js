import { combineReducers, createStore } from "redux";
import { AllProductsReducer } from "./Reducers/AllProductsReducer";
import { SelectedProductReducer } from "./Reducers/SelecetedProductReducer";
import { AddToCartReducer } from "./Reducers/AddToCartreducer";

const rootReducers = combineReducers({
  All_Product_Reducer: AllProductsReducer,
  Selected_Product_Reducer: SelectedProductReducer,
  CartReducer: AddToCartReducer,
});


export let store = createStore(rootReducers);
