// Video Data Updater for Mcknalty's Channel
// This file contains functions to update video data

// Manual video data - Update this object with latest videos
const latestVideos = [
    {
        id: "XQM2h6slU6E",
        title: "I Spent 7 DAYS Learning Captain America To PROVE He's UNDERRATED In Marvel Rivals",
        description: "Watch Mcknalty's epic 7-day journey mastering Captain America's shield mechanics, team synergies, and game-changing strategies that prove why Cap deserves S-tier respect!",
        uploadDate: "3 days ago",
        thumbnail: "video_thumbnails/video_1.avif"
    },
    {
        id: "bHrL5CuTwno", 
        title: "I Spent a 100 HOURS Learning Venom To PROVE He's ACTUALLY INSANE In Marvel Rivals",
        description: "Discover the symbiote's true potential! 100 hours of grinding revealed Venom's devastating combos, positioning secrets, and why he's the most underestimated tank in Marvel Rivals.",
        uploadDate: "1 week ago",
        thumbnail: "video_thumbnails/video_2.avif"
    },
    {
        id: "9GfxrbjcbC8",
        title: "I Spent a 100 HOURS Learning Storm To PROVE She's THE BEST DPS In Marvel Rivals", 
        description: "Harness the power of weather warfare! Storm's lightning combos, flight mechanics, and area control abilities make her the ultimate DPS carry. Master the tempest within!",
        uploadDate: "2 weeks ago",
        thumbnail: "video_thumbnails/video_3.avif"
    },
    {
        id: "zRc7yvwC9vs",
        title: "I Spent a 100 HOURS Learning Ultron To PROVE He can carry In Marvel Rivals",
        description: "The age of Ultron is here! Learn advanced AI positioning, drone swarm tactics, and team fight domination strategies that make this robot an unstoppable force.", 
        uploadDate: "3 weeks ago",
        thumbnail: "video_thumbnails/video_4.avif"
    },
    {
        id: "yP4VugEjT4Q",
        title: "WHAT!?!? Marvel Rivals Fighting Game?!?! (Marvel Tokon Fighting Souls Trailer REACTION)",
        description: "Mind-blowing news! Dive into the shocking reveal of Marvel's new fighting game. Mcknalty breaks down the trailer, characters, and what this means for Marvel gaming!", 
        uploadDate: "3 weeks ago",
        thumbnail: "video_thumbnails/video_5.avif"
    },
    {
        id: "m3S3Qt3P8oY",
        title: "WHAT!?!? Marvel Rivals Fighting Game?!?! (Marvel Tokon Fighting Souls Trailer REACTION)",
        description: "The Marvel universe expands! Get Mcknalty's exclusive reaction and analysis of this game-changing announcement that has the entire gaming community buzzing.", 
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
document.addEventListener('DOMContentLoaded', () => {
    updateVideoCards();
    
    // Re-initialize click handlers after updating video data
    setTimeout(() => {
        if (typeof initVideoClickHandlers === 'function') {
            initVideoClickHandlers();
        }
    }, 50);
});

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