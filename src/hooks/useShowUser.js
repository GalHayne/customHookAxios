import { useState, useEffect } from 'react';
import axios from 'axios';


const useShowUser = (id) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);

    const fetchData = () => {
        axios
            .get(`http://localhost:3001/users/${id}`)
            .then((res) => {
                setResponse(res.data);
                setError('');
            })
            .catch((err) => {
                setError(err);
                setResponse(null);
            })
            .finally(() => {
                setloading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    return { response, error, loading };
};

export default useShowUser;