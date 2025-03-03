import Header from "./Header";
import Details from "./Details";
import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import VideoPlayr from "./VideoPlayr";
import SocialAction from "./SocialAction";
import productsData from "../data/productsData";
import { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "../styles/style";

const Dashboard = () => {
  const videoRefs = useRef([]);
  const theme = useTheme();

  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const [isMuted, setIsMuted] = useState(true);
  const [direction, setDirection] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videos, setVideos] = useState(productsData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hideButton, setHideButton] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(null);

  const [likes, setLikes] = useState(
    new Array(productsData.length).fill(false)
  );

  const variants = {
    enter: (direction) => ({
      y: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: { y: 0, opacity: 1 },
    exit: (direction) => ({
      y: direction > 0 ? -50 : 50,
      opacity: 0,
    }),
  };

  useEffect(() => {
    if (!videoRefs.current || videoRefs.current.length === 0) return;
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          const idx = videoRefs.current.indexOf(video);
  
          if (entry.isIntersecting) {
            setCurrentVideoIndex(idx);
            setIsPlaying(true);
            setHasVoted(false);
  
            video.play().catch((err) => console.error("Play error:", err));
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.7 }
    );
  
    videoRefs.current.forEach((video) => {
      if (video) {
        observer.observe(video);
        video.onended = () => {
          video.currentTime = 0;
          video.play().catch((err) => console.error("Replay error:", err));
        };
      }
    });
  
    return () => {
      videoRefs.current.forEach((video) => {
        if (video) {
          observer.unobserve(video);
          video.onended = null;
        }
      });
      observer.disconnect();
    };
  }, [videoRefs]);
  

  const togglePlayPause = useCallback(() => {
    if (currentVideoIndex === null) return;
    const currentVideo = videoRefs.current[currentVideoIndex];
    if (!currentVideo) return;

    if (isPlaying) {
      currentVideo.pause();
    } else {
      currentVideo.play();
    }
    setIsPlaying(!isPlaying);

    setHideButton(true);
    setTimeout(() => {
      setHideButton(false);
    }, 1000);
  }, [isPlaying, currentVideoIndex]);

  const handleVote = () => setHasVoted(!hasVoted);

  const handleNextVideo = () => {
    setDirection(1);
    setHasVoted(false);
    setIsPlaying(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % productsData.length);
  };

  const handlePrevVideo = () => {
    setDirection(-1);
    setHasVoted(false);
    setIsPlaying(true);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + productsData.length) % productsData.length
    );
  };

  const handleShare = async () => {
    const video = productsData[currentIndex];
    try {
      if (navigator.share) {
        await navigator.share({
          title: video.title,
          text: video.shortDescription,
          url: video.url,
        });
      } else {
        navigator.clipboard.writeText(video.videoUrl);
        alert("Video URL copied to clipboard!");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
    videoRefs.current.forEach((video) => {
      if (video) {
        video.muted = !video.muted;
      }
    });
  };

  const handleLike = (index) => {
    const targetIndex = isMdUp ? currentIndex : index;
    setLikes((prevLikes) => {
      const updatedLikes = [...prevLikes];
      updatedLikes[targetIndex] = !updatedLikes[targetIndex];
      return updatedLikes;
    });
  };

  return (
    <Box>
      <Box
        sx={(theme) => ({
          display: "flex",
          [theme.breakpoints.down("md")]: {
            display: "none",
          },
        })}
      >
        <Header />
      </Box>

      <Stack
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container>
          {/* VideoPlayr */}
          <VideoPlayr
            videos={videos}
            direction={direction}
            variants={variants}
            isMuted={isMuted}
            isPlaying={isPlaying}
            videoRefs={videoRefs}
            toggleMute={toggleMute}
            hidebutton={hideButton}
            handleLike={handleLike}
            handleShare={handleShare}
            productsData={productsData}
            currentIndex={currentIndex}
            togglePlayPause={togglePlayPause}
            likes={likes}
          />
          <Box
            sx={(theme) => ({
              display: "flex",
              [theme.breakpoints.down("md")]: {
                display: "none",
              },
            })}
          >
            {/* SocialAction */}
            <SocialAction
              isLike={likes[currentIndex]}
              hasVoted={hasVoted}
              handleLike={handleLike}
              handleVote={handleVote}
              handleShare={handleShare}
              handleNextVideo={handleNextVideo}
              handlePrevVideo={handlePrevVideo}
            />
            {/* Details */}
            <Details
              direction={direction}
              variants={variants}
              productsData={productsData}
              currentIndex={currentIndex}
            />
          </Box>
        </Container>
      </Stack>
    </Box>
  );
};

export default Dashboard;
