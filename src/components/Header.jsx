import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Button,
  Avatar,
  Box,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";
import logo from "../images/logoo.png";

const Search = styled("div")({
  position: "relative",
  borderRadius: "8px",
  backgroundColor: "#242424",
  "&:hover": {
    backgroundColor: "#333",
  },
  marginRight: "16px",
  "@media (min-width:600px)": {
    marginLeft: "24px",
    alignItems: "center",
    width: "350px",
  },
});

const SearchIconWrapper = styled(Box)({
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "10px",
});

const StyledInputBase = styled(InputBase)({
  width: "100%",
  color: "white",
  "& .MuiInputBase-input": {
    padding: "8px 8px 8px 0",
    paddingLeft: "calc(2em + 16px)",
    transition: "width 0.3s ease-in-out",
    width: "100%",
    color: "#b7b7b7",
  },
});

const Header = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "black", boxShadow: 3 }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingX: 2,
          paddingY: 1,
        }}
      >
        <IconButton
          size="large"
          edge="start"
          sx={{ color: "white", display: { xs: "block", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={logo}
            alt="Logo"
            width={160}
            height={60}
            style={{ objectFit: "contain" }}
          />
          <Search sx={{ display: { xs: "none", md: "flex" } }}>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: "#b7b7b7" }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search for something amazing..."
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Box>

        <Button
          variant="text"
          sx={{
            color: "#b7b7b7",
            display: "flex",
            alignItems: "center",
            gap: 1,
            textTransform: "none",
            fontWeight: "light",
          }}
        >
          <Typography className="hidden md:block" title="Sign in">
            Sign in
          </Typography>
          <Avatar
            sx={{
              width: 40,
              height: 40,
              backgroundColor: "#242424",
              color: "#b7b7b7",
              fontSize: "1.5rem",
              boxShadow: 3,
              "&:hover": { boxShadow: 4, transform: "scale(1.05)" },
            }}
          />
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
