import { Button, styled } from "@mui/material";

export const UpvoteButton = styled(Button)(({ theme }) => ({
  gap: "4px",
  color: "white",
  width: "136px",
  display: "flex",
  height: "3.5rem",
  fontSize: "15px",
  fontWeight: "bold",
  alignItems: "center",
  textTransform: "none",
  background: "#16a34a",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    width: "300px",
  },
}));
