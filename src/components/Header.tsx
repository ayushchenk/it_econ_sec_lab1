import { AppBar, Box, Toolbar, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Box display="flex">
          <Link
            variant="h6"
            color="inherit"
            underline="none"
            mr={3}
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/")}>
            Домашня сторінка
          </Link>
          <Link
            variant="h6"
            color="inherit"
            underline="none"
            mr={3}
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/info")}>
            Тези
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}