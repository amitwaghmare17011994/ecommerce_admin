import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "../reducer/index";
import { fetchProductsSaga } from "../saga/prodcutsSaga";
const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  root: reducer,
});
export default createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(fetchProductsSaga);
