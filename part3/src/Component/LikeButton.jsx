import React, { useState } from 'react';

const LikeButton = () => {
  const [like, setLike] = useState(false);

  let toggleLikeButton = () => {
    setLike(!like);
  };

  return (
    <div>
      <h3>Like Button Activity</h3>
      <p onClick={toggleLikeButton}>
        {
          like ? (
            <i className='fa-solid fa-heart' style={{ color: "red" }}></i>
          ) : (
            <i className='fa-regular fa-heart'></i>
          )
        }
      </p>
    </div>
  );
};

export default LikeButton;