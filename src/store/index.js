import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import ReduxThunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const middlewares = [ReduxThunk];
const store = createStore(persistedReducer, applyMiddleware(...middlewares));
export   let persistor = persistStore(store)
export default store;
