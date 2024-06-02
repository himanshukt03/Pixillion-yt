import React from 'react';
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia, Avatar, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { demoThumbnailUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

const VideoCard = ({ video: { id: { videoId }, snippet } }) => (
  <Card sx={{
    width: { xs: '100%', sm: '330px', md: '390px' },
    boxShadow: 'none',
    borderRadius: '16px',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
      transform: 'scale(1.05)',
    },
    backgroundColor: "#1E1E1F",
  }}>
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <CardMedia
        component="img"
        image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
        alt={snippet?.title}
        sx={{
          height: 185,
        }}
      />
      <CardContent sx={{
        backgroundColor: "#28282B",
        padding: '16px',
      }}>
        <Typography
          variant="subtitle1"
          fontWeight="bold"
          color="#FFFFFF"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            mb: 1,
          }}
        >
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Avatar
            alt={snippet?.channelTitle || demoChannelTitle}
            src={snippet?.channelThumbnails?.high?.url || demoThumbnailUrl}
            sx={{ width: 24, height: 24 }}
          />
          <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography
              variant="subtitle2"
              color="#B0B0B0"
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              {snippet?.channelTitle || demoChannelTitle}
              <CheckCircleIcon sx={{ fontSize: "14px", color: "#B0B0B0", ml: "5px" }} />
            </Typography>
          </Link>
        </Stack>
      </CardContent>
    </Link>
  </Card>
);

export default VideoCard;
