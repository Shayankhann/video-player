
const apiKey = 'AIzaSyBSXetHZOT50XJa1GBgEhp6aLOy5y4NGbM';
const videoId = 'OEEpNSiY1dQ';

const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`;

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    return response.json();
  })
  .then(data => {
    const videoTitle = data.items[0].snippet.title;
    const videoDescription = data.items[0].snippet.description;
    const videoThumbnail = data.items[0].snippet.thumbnails.default.url;
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

    // Display the fetched video details in the HTML elements
    document.getElementById('video-title').textContent = videoTitle;
    document.getElementById('video-description').textContent = videoDescription;
    document.getElementById('video-thumbnail').src = videoThumbnail;

    // Update the video source and autoplay
    const videoPlayer = document.getElementById('custom-video');
    videoPlayer.src = videoUrl;
    videoPlayer.autoplay = true; // Optionally start playing automatically
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
