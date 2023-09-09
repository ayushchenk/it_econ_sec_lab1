import { Link, Paper, Stack, Typography } from "@mui/material";

interface ThesisProps {
  title: string,
  url: string
}

export function Thesis({ title, url, children }: React.PropsWithChildren<ThesisProps>) {
  return (
    <Paper elevation={5} sx={{ p: 3, pl: 5, mb: 3 }}>
      <Stack>
        <Typography variant="h6">
          {title}
        </Typography>
        <Typography variant="body2">
          {children}
        </Typography>
        <Link variant="overline" href={url}>Посилання на запит</Link>
      </Stack>
    </Paper>
  );
}