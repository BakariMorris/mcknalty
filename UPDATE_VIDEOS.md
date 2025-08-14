# How to Update Latest Videos Section

To update the videos section with Mcknalty's actual latest videos, follow these steps:

## Step 1: Get Video Information
1. Go to https://www.youtube.com/@Mcknalty/videos
2. Copy the titles and URLs of the 4 most recent videos

## Step 2: Update the HTML
In `index.html`, find the videos section (around line 62-102) and update each video card:

### Video Card 1 (Latest Video)
```html
<div class="video-card" data-video-url="PASTE_YOUTUBE_URL_HERE">
    <div class="video-thumbnail">
        <div class="play-button">▶</div>
    </div>
    <div class="video-info">
        <h3>PASTE_VIDEO_TITLE_HERE</h3>
        <p>PASTE_SHORT_DESCRIPTION_HERE</p>
        <span class="video-date">X days ago</span>
    </div>
</div>
```

## Step 3: Example Update
Replace:
- `data-video-url=""` → `data-video-url="https://www.youtube.com/watch?v=VIDEO_ID"`
- `Latest Video #1` → `Actual Video Title`
- `Click to watch on YouTube` → `Short description of the video`
- `Recent` → `2 days ago` (or actual upload time)

## Step 4: Add Thumbnails (Optional)
To add actual YouTube thumbnails, you can:
1. Use local thumbnail files (format: `video_thumbnails/video_1.avif`)
2. Update the CSS to use background images instead of the gradient placeholder

## Step 5: Test
1. Save the file
2. Refresh the website
3. Click on video cards to ensure they link to the correct videos

## Current Structure
The videos section now has 4 placeholder cards that you can easily customize with real video data. Each card will automatically link to the YouTube video when the `data-video-url` attribute is populated.