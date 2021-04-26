import { createSlice } from '@reduxjs/toolkit';
import { fetchTodo } from '../../hooks/fetchTodo';

let dataObjType: Array<{ id: number, description: string, status: string }>;

interface ToDoInterface {
    todo: typeof dataObjType,
    progress : typeof dataObjType,
    done : typeof dataObjType,
    loading: boolean,
    error? : string
}

const initialState = { 
    todo: [],
    progress: [],
    done: [],
    loading: true,
    error: ''
} as ToDoInterface;

export const todo = createSlice({
    name: 'todo',
    initialState,
    reducers : {
        addTodo(state, action) {
            return state;
        },
        addProgress(state, action) {
            return state;
        },
        addDone(state, action) {
            return state;     
        } 
    },

    // handling fetch for todo list ....
    extraReducers : {
        [fetchTodo.fulfilled.toString()] : (state, action) => { // will generate getTodoItems/fullfilled
            state.todo = (action.payload.todo);
            state.progress = (action.payload.progress);
            state.done = (action.payload.done);
            state.loading = false;
        },
        [fetchTodo.pending.toString()] : (state) => { // will generate getTodoItems/pending
            state.loading = true;
        },
        [fetchTodo.rejected.toString()] : (state, action) => { // will generate getTodoItems/rejected 
            state.loading = false;
           state.error = action.error.message;
        }
    }
});

const { actions, reducer } = todo;

export const { addTodo, addProgress, addDone } = actions;

export { reducer as todoReducer };
