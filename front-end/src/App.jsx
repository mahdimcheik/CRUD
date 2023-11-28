import { useState, useEffect } from "react";

import { fetchUsers } from "./services/Api";

import "./App.css";

function App() {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers()
      .then((users) => setUserList(users))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <h1>REACT + Vite + Tailwind starter project</h1>

      {loading ? (
        <p>Chargement en cours ...</p>
      ) : (
        userList.map((user) => (
          <p key={user.id}>
            {user.id} - {user.username}
          </p>
        ))
      )}
    </>
  );
}

export default App;
