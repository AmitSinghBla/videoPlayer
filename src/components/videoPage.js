import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/VideoPage.css';

const videoData = {
    Folder1: [
        { id: 1, title: 'Video 1', thumbnail: '/thumbnail/1.png', videoUrl: '/videos/1.mp4' },
        { id: 2, title: 'Video 2', thumbnail: '/thumbnail/2.png', videoUrl: '/videos/2.mp4' },
        { id: 3, title: 'Video 3', thumbnail: '/thumbnail/3.png', videoUrl: '/videos/3.mp4' },
        { id: 4, title: 'Video 4', thumbnail: '/thumbnail/4.png', videoUrl: '/videos/4.mp4' },
        { id: 5, title: 'Video 5', thumbnail: '/thumbnail/5.png', videoUrl: '/videos/5.mp4' },
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
    console.log("videoUrl", videoUrl);
    setSelectedVideo(videoUrl);
  };

  const closeVideoPlayer = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="video-page">
    <h2 style={{ color: 'white', fontFamily: 'Roboto Slab, serif' }}>{folderName} Videos</h2>
    
    <div className="video-list">
      {videos ? videos.map((video) => (
        <div key={video.id} className="video-item" onClick={() => handleVideoClick(video.videoUrl)}>
          <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
        </div>
      )): <h5>No videos Avaialable</h5>}
    </div>

    {/* Show selected video if there is one */}
    {selectedVideo && (
      <div className="video-overlay" onClick={closeVideoPlayer}>
        <div className="video-player" onClick={e => e.stopPropagation()}>
            <iframe
              src={selectedVideo}
                title="Video Player"
                width="800"
                height="450"
                frameBorder="0"
                allowFullScreen
            />
          <button onClick={closeVideoPlayer}>X</button>
        </div>
      </div>
    )}
  </div>
  );
};

export default VideoPage;
