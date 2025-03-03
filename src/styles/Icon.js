import { styled } from "@mui/material";
import PauseIcon from "@mui/icons-material/Pause";
import ShareIcon from "@mui/icons-material/Share";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const ArrowIcon = styled(ArrowBackIosIcon)(({ theme }) => ({
  color: "#fff",
  fontSize: "18px",
  paddingLeft: "8px",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.5rem",
    paddingLeft: "8px",
  },
}));

export const VolumeOff = styled(VolumeOffIcon)(({ theme }) => ({
  color: "#fff",
  fontSize: "18px",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.5rem",
  },
}));

export const VolumeOn = styled(VolumeUpIcon)(({ theme }) => ({
  color: "#fff",
  fontSize: "18px",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.5rem",
  },
}));

export const PauseIcons = styled(PauseIcon)({
  padding: "16px",
  color: "#fff",
  fontSize: "3rem",
  borderRadius: "50%",
  background: "#33323278",
});

export const PlayIcon = styled(PlayArrowIcon)({
  padding: "16px",
  color: "#fff",
  fontSize: "3rem",
  borderRadius: "50%",
  background: "#33323278",
});

export const FavoriteIconBorder = styled(FavoriteBorderIcon)({
  color: "#fff",
  fontSize: "35px",
});

export const ShareIcons = styled(ShareIcon)({
  color: "#fff",
  fontSize: "35px",
});

export const ArrowUp = styled(ArrowUpwardIcon)({
  color: "#000",
  fontSize: "22px",
  fontWeight: "bold",
});
