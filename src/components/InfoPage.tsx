import { Alert, Box, Container, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { TabPanel } from "./TabPanel";
import { ChatGptInfo } from "./ChatGptInfo";
import { BardInfo } from "./BardInfo";

export function InfoPage() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <main>
      <Container>
        <Box m={1}>
          <Box mb={2} sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs variant="fullWidth" value={selectedTab} onChange={(_, value) => setSelectedTab(value)}>
              <Tab label="ChatGPT-3.5" style={{ textTransform: "none" }} />
              <Tab label="Bard" style={{ textTransform: "none" }} />
            </Tabs>
          </Box>
          <Alert severity="info">Запит: "Назви 10 функцій інформаційних технологій"</Alert>
          <TabPanel value={selectedTab} index={0}>
            <ChatGptInfo />
          </TabPanel>
          <TabPanel value={selectedTab} index={1}>
            <BardInfo />
          </TabPanel>
        </Box>
      </Container>
    </main >
  );
}