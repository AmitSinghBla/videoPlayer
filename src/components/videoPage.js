import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const videoData = {
    Folder1: [
        { id: 1, title: 'Video 1', thumbnail: 'https://via.placeholder.com/200x120', videoUrl: 'https://www.example.com/video1' },
        { id: 2, title: 'Video 2', thumbnail: 'https://via.placeholder.com/200x120', videoUrl: 'https://www.example.com/video2' },
        { id: 3, title: 'Video 3', thumbnail: 'https://via.placeholder.com/200x120', videoUrl: 'https://www.example.com/video3' },
        { id: 4, title: 'Video 4', thumbnail: 'https://via.placeholder.com/200x120', videoUrl: 'https://www.example.com/video4' },
        { id: 5, title: 'Video 5', thumbnail: 'https://via.placeholder.com/200x120', videoUrl: 'https://www.example.com/video5' },
      ],
  Folder2: [
    { title: 'Video A', url: 'https://www.example.com/videoA' },
    { title: 'Video B', url: 'https://www.example.com/videoB' },
  ],
  Folder3: [
    { title: 'Video X', url: 'https://www.example.com/videoX' },
    { title: 'Video Y', url: 'https://www.example.com/videoY' },
  ],
};

const VideoPage = () => {
  const { folderName } = useParams();

  const videos = videoData[folderName];
  const [selectedVideo, setSelectedVideo] = useState(null);
  const handleVideoClick = (videoUrl) => {
    setSelectedVideo(videoUrl);
  };

  return (
    <div className="video-page">
    <h2>{folderName} Videos</h2>
    
    <div className="video-list">
      {videos ? videos.map((video) => (
        <div key={video.id} className="video-item" onClick={() => handleVideoClick(video.videoUrl)}>
          <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
          <h4>{video.title}</h4>
        </div>
      )): <h5>No videos Avaialable</h5>}
    </div>

    {/* Show selected video if there is one */}
    {selectedVideo && (
      <div className="video-player">
        <h3>Now Playing</h3>
        <iframe
          src={selectedVideo}
          title="Video Player"
          width="100%"
          height="500px"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    )}
  </div>
  );
};

export default VideoPage;
