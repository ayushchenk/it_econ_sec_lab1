import { Box, Typography } from "@mui/material";

export function Footer() {
  return (
    <footer>
      <Box
        height="35px"
        display="flex"
        justifyContent="center"
        alignItems="center">
        <Typography variant="caption">Інформаційні технології в забезпеченні економічної безпеки держави</Typography>
      </Box>
    </footer>
  );
}