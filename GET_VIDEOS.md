# How to Get Video Data from Mcknalty's YouTube Channel

Since YouTube doesn't allow direct programmatic access to video data without API keys, here are the manual steps to update the videos:

## Step 1: Visit the Channel
Go to: https://www.youtube.com/@Mcknalty/videos

## Step 2: Get Video Information
For each of the 4 most recent videos, you need:

1. **Video ID**: Right-click on the video → "Copy link address" 
   - Extract the ID from `https://www.youtube.com/watch?v=VIDEO_ID_HERE`
   
2. **Video Title**: Copy the exact title as shown

3. **Upload Date**: Note when it was uploaded (e.g., "3 days ago")

4. **Description**: Write a brief description or copy the first line of the video description

## Step 3: Update the video-updater.js file

Replace the `latestVideos` array in `video-updater.js` with real data:

```javascript
const latestVideos = [
    {
        id: "REAL_VIDEO_ID_1",
        title: "Real Video Title 1",
        description: "Brief description of the video",
        uploadDate: "2 days ago",
        thumbnail: "video_thumbnails/video_1.avif"
    },
    {
        id: "REAL_VIDEO_ID_2",
        title: "Real Video Title 2", 
        description: "Brief description of the video",
        uploadDate: "1 week ago",
        thumbnail: "video_thumbnails/video_2.avif"
    },
    // ... repeat for videos 3 and 4
];
```

## Step 4: Save and Test
1. Save the `video-updater.js` file
2. Refresh your website
3. The video cards should now show real titles, descriptions, and thumbnails
4. Clicking on them should link to the actual YouTube videos

## Alternative: Browser Console Method

If you're comfortable with browser development tools:

1. Open https://www.youtube.com/@Mcknalty/videos in your browser
2. Open Developer Tools (F12)
3. Go to Console tab
4. Run this code to extract video data:

```javascript
// Extract video data from YouTube page
const videos = [];
document.querySelectorAll('#contents ytd-rich-item-renderer').forEach((item, index) => {
    if (index < 4) {
        const titleElement = item.querySelector('#video-title');
        const linkElement = item.querySelector('a#video-title-link');
        const metaElement = item.querySelector('#metadata-line span:first-child');
        
        if (titleElement && linkElement) {
            const url = linkElement.href;
            const videoId = url.split('v=')[1]?.split('&')[0];
            
            videos.push({
                id: videoId,
                title: titleElement.textContent.trim(),
                description: "Click to watch on YouTube",
                uploadDate: metaElement ? metaElement.textContent : "Recent",
                thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
            });
        }
    }
});

console.log('Copy this data to your video-updater.js:');
console.log(JSON.stringify(videos, null, 2));
```

This will output the video data that you can copy into your `video-updater.js` file.

## Automation Note
For future updates, you could set up a simple script to run periodically and update the video data, but this requires YouTube API access which needs authentication.