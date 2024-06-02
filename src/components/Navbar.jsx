import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: 'rgba(0, 0, 0, 0.8)', 
      top: 0,
      zIndex: 10,
      justifyContent: "space-between",
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} style={{ marginRight: '8px' }} />
      <Typography
        variant="h5"
        fontWeight="bold"
        color="white"
        sx={{ display: { xs: 'none', md: 'block' } }}
      >
        Pixillion
      </Typography>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
