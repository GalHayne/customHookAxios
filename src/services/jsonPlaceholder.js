import axios from "axios";

const getUserById = async (userId) => {

    return await axios.get(`http://localhost:3001/users/${userId}`)
        .then((res) => { return { isLoading: false, data: res.data, error: null } })
        .catch((err) => { return { isLoading: false, data: null, error: err } })
}

export default getUserById;