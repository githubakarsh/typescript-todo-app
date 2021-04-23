import { useEffect, useState } from 'react';

const useFetch = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(
        {
        'todo':[{id: 1, description: '', status: ''}],
        'progress' :[{id: 1, description: '', status: ''}],
        'done': [{id: 1, description: '', status: ''}]
        }
        );
    const [error, setError] = useState();

    const uri = '/todo.json';

    useEffect(() => {
        fetch(uri,
            
            )
        .then(response => response.json())
        .then(setData)
        .then(() => setLoading(false))
        .catch(setError)
    }, []);

    return {
        loading, data, error
    }
}

export default useFetch;
