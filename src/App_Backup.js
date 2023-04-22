
import { useEffect, useState } from "react";
import ChooseUser from "./cmp/ChooseUser";
import UserCard from "./cmp/UserCard";
import useShowUser from "./hooks/useShowUser";
import getUserById from "./services/jsonPlaceholder";

function App() {
    const [userId, setUserId] = useState("");
    const [reqInfo, setReqInfo] = useState(null)


    const handleChooseUserId = (id) => {
        setUserId(id)
    }

    useEffect(() => {
        getUserById(userId)
            .then((res) => {
                console.log("the res:", res);
                setReqInfo(res)
            })

    }, [userId])



    return (
        <div>
            <ChooseUser onChooseUserId={handleChooseUserId} />
            <UserCard reqInfo={reqInfo} />
        </div>
    );
}

export default App;
