import './App.css'
import TwitterCard from './TwitterCard'

const users = [
  {
    name: "Emill",
    username: "lemito66",
    initialIsFollowing: false,
  },
  {
    name: "Emill",
    username: "reddit.com",
    initialIsFollowing: false,
  }
]

function App() {
  return (
    <div className="App">
      {
        users.map((user) => {
          const { name, username, initialIsFollowing } = user
          return (
            <TwitterCard
              name={name}
              username={username}
              initialIsFollowing={initialIsFollowing}
              key={username}
            />
          )
        })
      }
      {/* <TwitterCard
      name="Emill"
      username="lemito66"
      initialIsFollowing={false}
      /> */}

    </div>
  )
}

export default App
