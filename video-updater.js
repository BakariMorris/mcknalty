// Video Data Updater for Mcknalty's Channel
// This file contains functions to update video data

// Manual video data - Update this object with latest videos
const latestVideos = [
    {
        id: "VIDEO_ID_1",
        title: "I Spent 7 DAYS Learning Captain America To PROVE He's UNDERRATED In Marvel Rivals",
        description: "Video description or snippet",
        uploadDate: "3 days ago",
        thumbnail: "video_thumbnails/video_1.avif"
    },
    {
        id: "VIDEO_ID_2", 
        title: "I Spent a 100 HOURS Learning Venom To PROVE He's ACTUALLY INSANE In Marvel Rivals",
        description: "Video description or snippet",
        uploadDate: "1 week ago",
        thumbnail: "video_thumbnails/video_2.avif"
    },
    {
        id: "VIDEO_ID_3",
        title: "I Spent a 100 HOURS Learning Storm To PROVE She's THE BEST DPS In Marvel Rivals", 
        description: "Video description or snippet",
        uploadDate: "2 weeks ago",
        thumbnail: "video_thumbnails/video_3.avif"
    },
    {
        id: "VIDEO_ID_4",
        title: "I Spent a 100 HOURS Learning Ultron To PROVE He can carry In Marvel Rivals",
        description: "Video description or snippet", 
        uploadDate: "3 weeks ago",
        thumbnail: "video_thumbnails/video_4.avif"
    },
    {
        id: "VIDEO_ID_5",
        title: "WHAT!?!? Marvel Rivals Fighting Game?!?! (Marvel Tokon Fighting Souls Trailer REACTION)",
        description: "Video description or snippet", 
        uploadDate: "3 weeks ago",
        thumbnail: "video_thumbnails/video_5.avif"
    },
    {
        id: "VIDEO_ID_6",
        title: "I Spent a 100 HOURS Learning Black Panther To PROVE He’s BROKEN In Marvel Rivals",
        description: "Video description or snippet", 
        uploadDate: "3 weeks ago",
        thumbnail: "video_thumbnails/video_6.avif"
    }
];

// Function to update video cards with latest data
function updateVideoCards() {
    const videoCards = document.querySelectorAll('.video-card');
    
    videoCards.forEach((card, index) => {
        if (index < latestVideos.length) {
            const video = latestVideos[index];
            
            // Update video URL
            card.setAttribute('data-video-url', `https://www.youtube.com/watch?v=${video.id}`);
            
            // Update title
            const titleElement = card.querySelector('.video-info h3');
            if (titleElement) {
                titleElement.textContent = video.title;
            }
            
            // Update description
            const descElement = card.querySelector('.video-info p');
            if (descElement) {
                descElement.textContent = video.description;
            }
            
            // Update date
            const dateElement = card.querySelector('.video-date');
            if (dateElement) {
                dateElement.textContent = video.uploadDate;
            }
            
            // Update thumbnail background
            const thumbnailElement = card.querySelector('.video-thumbnail');
            if (thumbnailElement && video.thumbnail) {
                thumbnailElement.style.backgroundImage = `url(${video.thumbnail})`;
                thumbnailElement.style.backgroundSize = 'cover';
                thumbnailElement.style.backgroundPosition = 'center';
            }
        }
    });
}

// Function to manually set video data (call this with real data)
function setVideoData(videos) {
    latestVideos.length = 0; // Clear existing data
    latestVideos.push(...videos); // Add new data
    updateVideoCards(); // Update the UI
}

// Auto-update when page loads
document.addEventListener('DOMContentLoaded', updateVideoCards);

// Example of how to use this:
// setVideoData([
//     {
//         id: "dQw4w9WgXcQ",
//         title: "Rick Astley - Never Gonna Give You Up",
//         description: "The official video for Rick Astley",
//         uploadDate: "15 years ago",
//         thumbnail: "video_thumbnails/video_1.avif"
//     }
// ]);

// Export for potential future API integration
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { setVideoData, updateVideoCards, latestVideos };
}