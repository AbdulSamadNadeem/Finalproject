import { combineReducers, createStore } from "redux";
import { AllProductsReducer ,  } from "./Reducers/AllProductsReducer"; 
import { SelectedProductReducer } from "./Reducers/SelecetedProductReducer";
import { AddToCartReducer } from "./Reducers/AddToCartreducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  

}

const rootreducers = combineReducers({
  All_Product_Reducer  : AllProductsReducer,
  Selected_Product_Reducer : SelectedProductReducer,
  CartReducer : AddToCartReducer
})

const persistedReducer = persistReducer(persistConfig, rootreducers)

export let store = createStore(persistedReducer)
export let persistor = persistStore(store)


