import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import expensesReducer from '../reducers/expenses';

export const rootReducer = combineReducers({});

export const store = createStore(rootReducer, applyMiddleware(thunk));