import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import HolaMundo  from './HolaMundo'
import TwitterCard from './TwitterCard'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    {/* <App /> */}
    <HolaMundo />
    <TwitterCard 
      name="Emill"
      username="lemito66"
      isFollowing={true}
    />
    <TwitterCard 
      name="Emill"
      username="lemito66"
      isFollowing={false}
    />
  </React.StrictMode>,
)
