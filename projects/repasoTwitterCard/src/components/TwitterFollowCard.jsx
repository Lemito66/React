import { React, useState } from "react";

export const TwitterFollowCard = ({ children, user, initialIsFollowing }) => {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const handleClick = () => setIsFollowing(!isFollowing);
  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="El avatar de Lemito66"
          src={`https://unavatar.io/${user}`}
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{user}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
      <br></br>
    </article>
  );
};
