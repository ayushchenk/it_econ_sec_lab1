import { Avatar, Container, Stack, Typography } from "@mui/material";
import avatar from "../static/avatar_cropped.png";

export function HomePage() {
  return (
    <main>
      <Container>
        <Stack mt={10} justifyContent="center" alignItems="center">
          <Avatar src={avatar} sx={{ width: 200, height: 200 }} />
          <Typography mt={2} variant="h5" component="div">Ющенко Олександр</Typography>
          <Typography mt={1} variant="body2" component="div">o.yushchenko_fit_2m_22_m_d@knute.edu.ua</Typography>
          <Typography mt={1} variant="body2" component="div">Державний торговельно-економічний університет</Typography>
          <Typography mt={1} variant="body2" component="div">ФІТ 2-2м, Інженерія програмного забезпечення</Typography>
        </Stack>
      </Container>
    </main>
  );
}