import React from 'react';
import VideoItem from './VideoItem';

const VideoList = props => {
  // console.log(props.videoArray);

  const list = props.videoArray.map(item => {
    return (
      <VideoItem
        onVideoSelect={props.onVideoSelect}
        video={item}
        key={item.id.videoId}
      />
    );
  });
  return <div>{list}</div>;
};

export default VideoList;
