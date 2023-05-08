import { useState } from "react";
import "./App.css";
import { Users } from "./users";
import Table from "./components/Table";

function App() {
  const [query, setQuery] = useState("");
  const keys = ["first_name", "last_name", "email"];

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };
  return (
    <div className="app">
      <input
        type="text"
        placeholder="search..."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Table data={search(Users)} />
      {/* <ul className="list">
        {Users.filter((user) =>
          user.first_name.toLowerCase().includes(query)
        ).map((user) => (
          <li className="listItem" key={user.id}>
            {user.first_name}
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;
