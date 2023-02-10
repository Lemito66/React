import './App.css'
import TwitterCard from './TwitterCard'


function App() {
  return (
    <div className="App">
      <TwitterCard
      name="Emill"
      username="lemito66"
      initialIsFollowing={false}
      />

    </div>
  )
}

export default App
