import { useState } from "react";

function TwitterCard({ name, username }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followers, setFollowers] = useState(0);

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };
  const sumarFollowers = () => {
    setFollowers(followers + 1);
  };

  const restarFollowers = () => {
    if (followers <= 0) {
      alert("No puedes tener menos de 0 seguidores");
    } else {
      setFollowers(followers - 1);
    }
  };

  const imageSrc = `https://unavatar.io/${username}`;
  const isFollowingText = isFollowing ? "Siguiendo" : "Seguir";
  return (
    <article>
      <header>
        <img alt="Avatar de reddit" src={imageSrc}></img>
        <div>
          <strong>{name}</strong>
          <br />
          <span>@{username}</span>
        </div>
      </header>

      <aside>
        <button onClick={handleClick}>{isFollowingText}</button>
      </aside>
      <aside>
        <button onClick={sumarFollowers}>{followers}</button>
      </aside>
      <aside>
        <button onClick={restarFollowers}>Restar</button>
      </aside>
    </article>
  );
}
export default TwitterCard;
