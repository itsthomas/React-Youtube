import React from "react";

// Destructuring: instead of (props) we wrote {( video )}
const VideoItem = ({ video, onVideoSelect }) => {
  // console.log(props);
  // console.log(video);

  // Shorten the title text
  let title = video.snippet.title.slice(0, 30);

  return (
    <div onClick={() => onVideoSelect(video)} className="item-container">
      <div className="title">{`${title}...`}</div>
      <img
        className="thumbnail"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
    </div>
  );
};

export default VideoItem;
