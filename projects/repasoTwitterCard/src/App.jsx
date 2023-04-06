import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import { TwitterFollowCard } from "./components/TwitterFollowCard";
import "../src/styles/App.css";

function App() {
  const [count, setCount] = useState(0);

  const users = [
    {
      user: "Lemito66",
      userName: "Lemito",
      initialIsFollowing: true,
    },
  ];

  return (
    <section>
      {users.map(({user, initialIsFollowing, userName}) => (
        <TwitterFollowCard
          key={user}
          user={user}
          initialIsFollowing={initialIsFollowing}
        >
          {userName}
        </TwitterFollowCard>
      ))}
    </section>
  );
}

export default App;
