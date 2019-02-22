import React from "react";

const VideoDetail = props => {
  if (!props.video) {
    return <div className="erro">It seems that your API-Key is not valid</div>;
  }

  return (
    <React.Fragment>
      <div className="iframe-container">
        <iframe
          key={props.video.id.videoId}
          title={props.video.snippet.title}
          src={`https://www.youtube.com/embed/${props.video.id.videoId}`}
          width="100%"
          height="490"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
      <p className="description">{props.video.snippet.description} </p>
    </React.Fragment>
  );
};

export default VideoDetail;
