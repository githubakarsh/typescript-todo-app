import { combineReducers, createStore, applyMiddleware } from 'redux';
import  { todoReducer }   from './reducer/todoReducer';
import { useDispatch } from 'react-redux';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    todoJourneyData : todoReducer,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = (arg: any) => typeof useDispatch<AppDispatch>();

export const store = createStore(reducer, 
    applyMiddleware(thunk));
