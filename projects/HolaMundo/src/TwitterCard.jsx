import { useState } from "react";

function TwitterCard ({name, username, }){

    const [isFollowing, setIsFollowing] = useState(false);

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    const imageSrc = `https://unavatar.io/${username}`;
    const isFollowingText = isFollowing ? 'Siguiendo' : 'Seguir';
    return(
        <article>
            <header>
                <img alt="Avatar de reddit" src={imageSrc}></img>
                <div>
                    <strong>{name}</strong><br/>
                    <span>@{username}</span>
                </div>
            </header>

            <aside>
                <button onClick={handleClick}>
                    {isFollowingText}
                </button>
            </aside>
        </article>
    )
}
export default TwitterCard;
