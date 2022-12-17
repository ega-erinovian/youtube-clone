import React from 'react'
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia} from '@mui/material'
import { CheckCircle } from "@mui/icons-material";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/contants";

const VideoCard = ({ video: { id: { videoId }, snippet}}) => {
  return (
    <Card sx={{ width: { xs: '93vw', sm: '358px', md: '320px' }, boxShadow: 'none', borderRadius: 0, border: 'none' }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl } alt={snippet?.title} sx={{ width: '100%', height: 180}} />
      </Link>
      <CardContent sx={{ backgroundColor: '#1e1e1e', height: 106}}>
      <Link to={ videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      <Link to={ snippet?.channelId ? `/video/${snippet?.channelId}` : demoChannelUrl}>
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
          {snippet?.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}
          <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px'}} />
        </Typography>
      </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard