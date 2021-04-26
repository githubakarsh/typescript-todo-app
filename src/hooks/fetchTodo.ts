// import { useEffect, useState } from 'react';
// import { store } from '../redux/store';

// const useFetch = (getTodoListSuccess, getTodoListFailure ) => {
//     const [loading, setLoading] = useState(true);
//     const [data, setData] = useState(
//         {
//         'todo':[{id: 1, description: '', status: ''}],
//         'progress' :[{id: 1, description: '', status: ''}],
//         'done': [{id: 1, description: '', status: ''}]
//         }
//         );
//     const [error, setError] = useState();

//     const uri = '/todo.json';

//     useEffect(() => {
//         fetch(uri,
            
//             )
//         .then(response => response.json())
//         .then(store.dispatch(getTodoListSuccess()))
//         .then(() => setLoading(false))
//         .catch(store.dispatch(getTodoListFailure))
//     }, []);

//     return {
//         loading, data, error
//     }
// }

// export default useFetch;

import { createAsyncThunk,  } from '@reduxjs/toolkit';
import axios from 'axios';

// by default its type is void .... 

export const fetchTodo = createAsyncThunk( 
    "fetchTodo", () =>
    axios
    .get('./todo.json')
    .then(response => response.data)
    .catch(error => error),
);
