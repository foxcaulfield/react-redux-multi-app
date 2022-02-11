import React from 'react';

const reactionEmoji = {
  thumbsUp: '👍',
  hooray: '🎉',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀',
};

const ReactionButtons = ({ post }) => {
  const reactionButtons = Object.entries(reactionEmoji).map(
    ([name, emoji]) => {
      return (
        <button
          key={name}
          type="button"
          className="muted-button reaction-button"
        >
          {emoji} {post.reactions[name]}
        </button>
      );
    }
  );
  return <div>{reactionButtons}</div>;
};

export default ReactionButtons;
