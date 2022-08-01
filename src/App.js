import { useState } from "react";
import "./styles.css";
import { Users } from "./user";

export default function App() {
  const [query, setQuery] = useState("");
  return (
    <div className="App">
      <input onChange={(e) => setQuery(e.target.value)} placeholder="search" />
      <ul>
        {Users.filter((user) =>
          user.first_name.toLowerCase().includes(query)
        ).map((user) => (
          <li key={user.id}>{user.first_name}</li>
        ))}
      </ul>
    </div>
  );
}
