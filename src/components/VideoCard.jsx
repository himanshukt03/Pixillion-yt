import React from 'react';
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia, Avatar, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { demoThumbnailUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

const VideoCard = ({ video: { id: { videoId }, snippet } }) => (
  <Card sx={{
    width: { xs: '100%', sm: '330px', md: '390px' },
    boxShadow: 'none',
    borderRadius: '12px',
    transition: 'all 0.3s ease',
    boder: 'none',
    '&:hover': {
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
      transform: 'scale(1.02)',
    },
  }}>
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <CardMedia
        image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
        alt={snippet?.title}
        sx={{
          width: '100%',
          height: 185,
          borderTopLeftRadius: '12px',
          borderTopRightRadius: '12px',
        }}
      />
      <CardContent sx={{
        backgroundColor: "#28282B",
        padding: '16px',
        borderRadius: '0 0 12px 12px',
      }}>
        <Typography
          variant="subtitle1"
          fontWeight="bold"
          color="#FFF"
          overflow="hidden"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
          mb={1}
        >
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
        <Stack direction="row" alignItems="center">
          <Avatar
            alt={snippet?.channelTitle || demoChannelTitle}
            src={snippet?.channelThumbnails?.high?.url || demoThumbnailUrl}
            sx={{ width: 24, height: 24, mr: 1 }}
          />
          <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography
              variant="subtitle2"
              color="gray"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
            >
              {snippet?.channelTitle || demoChannelTitle}
              <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
            </Typography>
          </Link>
        </Stack>
      </CardContent>
    </Link>
  </Card>
);

export default VideoCard;
