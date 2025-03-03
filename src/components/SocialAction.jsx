/* eslint-disable react/prop-types */
import ReplyIcon from "@mui/icons-material/Reply";
import { Box, Stack, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IconWrapper } from "../styles/style";

const SocialAction = ({
  isLike,
  hasVoted,
  handleLike,
  handleVote,
  handleShare,
  handleNextVideo,
  handlePrevVideo,
}) => {

  

  return (
    <Stack
      sx={{
        justifyContent: "space-between",
        height: "100%",
        width: "100px",
        paddingLeft: "30px",
      }}
    >
      <IconWrapper onClick={handleNextVideo}>
        <KeyboardArrowUpIcon sx={{ fontSize: "38px" }} />
      </IconWrapper>
      <Box
        sx={{
          position: "relative",
          bottom: "7px",
        }}
      >
        <IconWrapper
          onClick={handleLike}
          sx={{ background: "transparent", mb: 1 }}
        >
          {isLike ? (
            <FavoriteIcon
              sx={{ fontSize: "44px", color: isLike ? "red" : "transparent" }}
            />
          ) : (
            <FavoriteBorderIcon sx={{ fontSize: "44px" }} />
          )}
        </IconWrapper>
        <IconWrapper
          onClick={handleVote}
          sx={{ background: hasVoted ? "green" : "#000" }}
        >
          <ArrowUpwardRoundedIcon sx={{ fontSize: "44px", color: "#fff" }} />
        </IconWrapper>
        <Box sx={{ height: "20px" }}>
          {hasVoted && (
            <Typography
              sx={{
                fontSize: "14px",
                color: "#019f3c",
                letterSpacing: "1.2px",
              }}
            >
              Voted!
            </Typography>
          )}
        </Box>
        <IconWrapper onClick={handleShare} sx={{ background: "#e4e4e7" }}>
          <ReplyIcon sx={{ fontSize: "33px", color: "#4a4848" }} />
        </IconWrapper>
      </Box>
      <IconWrapper onClick={handlePrevVideo}>
        <KeyboardArrowDownIcon sx={{ fontSize: "38px" }} />
      </IconWrapper>
    </Stack>
  );
};

export default SocialAction;
