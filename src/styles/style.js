import { Box, styled } from "@mui/material";
import { video } from "framer-motion/m";

export const IconWrapper = styled(Box)({
  height: "50px",
  width: "50px",
  display: "flex",
  cursor: "pointer",
  borderRadius: "50%",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#fbb13c",
});

export const ButtonWrapper = styled(Box)(({ theme }) => ({
  border: 0,
  margin: "6px",
  width: "35px",
  height: "35px",
  display: "flex",
  cursor: "pointer",
  borderRadius: "50%",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#33323278",
  [theme.breakpoints.down("md")]: {
    width: "45px",
    height: "45px",
  },
}));

export const VideoWrapper = styled(Box)(({ theme }) => ({
  gap: "0px",
  width: "250px",
  height: "460px",
  display: "flex",
  background: "#000",
  borderRadius: "6px",
  overflowY: "scroll",
  scrollbarWidth: "none",
  flexDirection: "column",
  scrollSnapType: "y mandatory",
  [theme.breakpoints.down("md")]: {
    height: "100vh",
    width: "100%",
    borderRadius: "0px",
  },
}));

export const Wrapper = styled(Box)(({ theme }) => ({
  height: "460px",
  flexShrink: 0,
  scrollSnapAlign: "center",
  [theme.breakpoints.down("md")]: {
    height: "100vh",
  },
}));

export const Container = styled(Box)(({ theme }) => ({
  maxWidth: "1018px",
  width: "100%",
  display: "flex",
  paddingTop: "40px",
  [theme.breakpoints.down("md")]: {
    paddingTop: "0px",
  },
}));

export const Video = styled(video)(({ theme }) => ({
  width: "100%",
  height: "460px",
  objectFit: "cover",
  [theme.breakpoints.down("md")]: {
    height: "100vh",
  },
}));

