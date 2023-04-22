import { useState, useEffect } from 'react';
import axios from 'axios';


const useShowUser = (id) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);

    const timeOutDealy = Math.floor(Math.random() * (1200 - 100 + 1)) + 100;


    const fetchData = () => {
        setloading(true)
        axios
            .get(`http://localhost:3001/users/${id}`)
            .then((res) => {
                setTimeout(() => {
                    setResponse(res.data);
                    setError('');
                }, timeOutDealy);
            })
            .catch((err) => {
                setTimeout(() => {
                    setError(err);
                    setResponse(null);
                }, timeOutDealy);
            })
            .finally(() => {
                setTimeout(() => {
                    setloading(false);
                }, timeOutDealy);
            });
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    return { response, error, loading };
};

export default useShowUser;