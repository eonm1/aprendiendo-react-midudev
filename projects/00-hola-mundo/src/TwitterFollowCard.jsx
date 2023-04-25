import { useState } from 'react';

export function TwitterFollowCard( { children, username = 'unknow', initialIsFollowing } )
{
	const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
	
	
	const text = isFollowing ? 'Siguiendo' : 'Seguir';
	const buttonClassName = isFollowing ?
		'tw-followCard-button following' :
		'tw-followCard-button';
	
	const imgaeSrc = `https://unavatar.io/twitter/${username}`;
	return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img className="tw-followCard-avatar" src={imgaeSrc} alt="Avatar..." />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUsername">@{username}</span>
        </div>
      </header>
      <aside>
        <button
          onClick={() => setIsFollowing(!isFollowing)}
          className={buttonClassName}
        >
          <span className="tw-followCard-button-text">
            {text}
          </span>
          <span className="tw-followCard-button-text-stopFollow">
            Dejar de seguir
          </span>
        </button>
      </aside>
    </article>
  );
}