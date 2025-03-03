/* eslint-disable react/prop-types */
import { useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { AnimatePresence, motion } from "framer-motion";
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import {
  Video,
  Wrapper,
  IconWrapper,
  VideoWrapper,
  ButtonWrapper,
} from "../styles/style";

import {
  ArrowIcon,
  FavoriteIconBorder,
  PauseIcons,
  PlayIcon,
  ShareIcons,
  VolumeOff,
  VolumeOn,
} from "../styles/Icon";

const VideoPlayr = ({
  likes,
  videos,
  isMuted,
  variants,
  direction,
  isPlaying,
  videoRefs,
  hidebutton,
  handleLike,
  toggleMute,
  handleShare,
  productsData,
  currentIndex,
  togglePlayPause,
}) => {
  const theme = useTheme();

  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  useEffect(() => {
    if (videoRefs.current[currentIndex]) {
      const currentVideo = videoRefs.current[currentIndex];
      currentVideo.muted = isMuted;
    }
  }, [isMuted, currentIndex, videoRefs]);

  return (
    <Box
      sx={(theme) => ({
        position: "relative",
        [theme.breakpoints.down("md")]: {
          width: "100%",
        },
      })}
    >
      {!isMdUp ? (
        <VideoWrapper>
          {videos?.map((video, index) => (
            <Wrapper sx={{ position: "relative" }} key={video.id}>
              <Video
                onClick={togglePlayPause}
                ref={(el) => {
                  if (el) videoRefs.current[index] = el;
                }}
                autoPlay={isPlaying}
                loop
                preload="auto"
                playsInline
                muted={isMuted}
                src={video.url}
              />

              <Box
                sx={{
                  right: 0,
                  top: "15rem",
                  position: "absolute",
                  display: { xs: "block", md: "  none" },
                }}
              >
                <Stack
                  sx={{ gap: "10px", alignItems: "center", color: "white" }}
                >
                  <IconWrapper
                    onClick={() => handleLike(index)}
                    sx={{ background: "transparent" }}
                  >
                    {likes[index] ? (
                      <FavoriteIcon
                        sx={{
                          fontSize: "35px",
                          color: likes[index] ? "red" : "transparent",
                        }}
                      />
                    ) : (
                      <FavoriteIconBorder />
                    )}
                  </IconWrapper>
                  <Typography>{video?.likes}</Typography>
                  <ShareIcons onClick={handleShare} />
                  <Typography>{video?.share}</Typography>
                  <ModeCommentOutlinedIcon sx={{ fontSize: "30px" }} />
                  <Typography>{video?.comments}</Typography>
                </Stack>
              </Box>
            </Wrapper>
          ))}
        </VideoWrapper>
      ) : (
        <VideoWrapper>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={productsData[currentIndex].id}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              custom={direction}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <Video
                ref={(el) => (videoRefs.current[currentIndex] = el)}
                key={productsData[currentIndex].id}
                autoPlay={isPlaying}
                loop
                playsInline
                preload="auto"
                muted={isMuted}
                src={productsData[currentIndex].url}
              />
            </motion.div>
          </AnimatePresence>
        </VideoWrapper>
      )}

      {/* Sound */}
      <Stack
        sx={{
          top: 0,
          width: "100%",
          alignItems: "center",
          position: "absolute",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <ButtonWrapper>
            <ArrowIcon />
          </ButtonWrapper>
          <ButtonWrapper onClick={toggleMute}>
            {!isMuted ? <VolumeOn /> : <VolumeOff />}
          </ButtonWrapper>
        </Box>

        {hidebutton && (
          <Box sx={{ position: "absolute", top: { xs: "18rem", md: "10rem" } }}>
            {isPlaying ? <PauseIcons /> : <PlayIcon />}
          </Box>
        )}
      </Stack>
    </Box>
  );
};

export default VideoPlayr;
