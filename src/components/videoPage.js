import React, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/VideoPage.css';

const videoData = {
    Folder1: [
        { id: 0, title: 'Video 1', videoUrl: '/videos/M09-1317.mp4' },
        { id: 1, title: 'Video 2', videoUrl: '/videos/M09-1317.mp4' },
        { id: 2, title: 'Video 3', videoUrl: '/videos/M09-1317.mp4' },
        { id: 3, title: 'Video 4', videoUrl: '/videos/M09-1317.mp4' },
        { id: 4, title: 'Video 5', videoUrl: '/videos/M09-1317.mp4' },
        { id: 5, title: 'Video 1', videoUrl: '/videos/M09-1317.mp4' },
        { id: 6, title: 'Video 2', videoUrl: '/videos/M09-1317.mp4' },
        { id: 7, title: 'Video 3', videoUrl: '/videos/M09-1317.mp4' },
        { id: 8, title: 'Video 4', videoUrl: '/videos/M09-1317.mp4' },
        { id: 9, title: 'Video 5', videoUrl: '/videos/M09-1317.mp4' },
        
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
  const videoRefs = useRef({});
  const handleVideoClick = (videoUrl) => {
    console.log("videoUrl", videoUrl);
    setSelectedVideo(videoUrl);
  };

  const handleMouseEnter = (videoUrl, videoId) => {
    // Play the video on hover
    const videoElement = videoRefs.current[videoId];
    if (videoElement) {
      videoElement.play();
    }
  };

  const handleMouseLeave = (videoId) => {
    // Pause the video when hover ends
    const videoElement = videoRefs.current[videoId];
    if (videoElement) {
      videoElement.pause();
    }
  };

  const closeVideoPlayer = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="video-page">
    {/* <h2 style={{ color: 'white', fontFamily: 'Roboto Slab, serif' }}>{folderName} Videos</h2> */}
    
    <div className="video-list">
      {videos ? videos.map((video,index) => (
        <div key={video.id} className="video-item" 
        onClick={() => handleVideoClick(video.videoUrl)}
        onMouseEnter={()=>handleMouseEnter(video.url,index)}
        onMouseLeave={()=>handleMouseLeave(video.id || index)}
        >
           <video
           className="video-thumbnail"
                ref={(el) => (videoRefs.current[video.id || index] = el)}
                src={video.videoUrl}
                width="200"
                height="112"
                muted
                preload="metadata"
                loop
              />
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
