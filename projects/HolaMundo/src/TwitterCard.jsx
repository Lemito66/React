import { useState } from "react";

function TwitterCard({ name, username, initialIsFollowing}) {
  //Utilizar una prop para inicializar el estado, se lo debe poner initialIs--- 
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const [followers, setFollowers] = useState(0);

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };
  const addFollowers = () => {
    setFollowers(followers + 1);
  };

  const substractFollowers = () => {
    if (followers <= 0) {
      alert("No puedes tener menos de 0 seguidores");
    } else {
      setFollowers(followers - 1);
    }
  };
  const restartFollowers = () => {
    if (followers <= 0) {
      alert("No puedes tener menos de 0 seguidores");
    } else {
        setFollowers(0);
    }
  }

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
        <button onClick={addFollowers}>{followers}</button>
      </aside>
      <aside>
        <button onClick={substractFollowers}>Restar</button>
      </aside>
      <aside>
        <button onClick={restartFollowers}>Reiniciar</button>
      </aside>
    </article>
  );
}
export default TwitterCard;
