import { useEffect, useState } from 'react';
import useShowUser from './hooks/useShowUser';
import ChooseUser from "./cmp/ChooseUser";
import UserCard from "./cmp/UserCard";

function App() {

  const [userId, setUserId] = useState("first option");
  const { response, loading, error } = useShowUser(userId)
  const [user, setUser] = useState(-1);

  useEffect(() => {
    setUser(response)
  }, [response])


  const handleChooseUserId = (id) => {
    setUserId(id)
  }


  return (
    <div>
      <ChooseUser onChooseUserId={handleChooseUserId} />
      <UserCard user={user} />
    </div>
  );
}

export default App;
