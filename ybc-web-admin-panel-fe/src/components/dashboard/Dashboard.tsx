import { useEffect, useState } from 'react';
import { Box, Paper, Typography, useMediaQuery, useTheme } from '@mui/material';

import AppLayout from '../../common/components/appLayout/AppLayout';
import LeftSidebar from '../../common/components/leftSidebar/LeftSidebar';
import TopToolbar from '../../common/components/topToolbar/TopToolbar';
import { useSectionRenderer } from '../../common/hook/useSectionRenderer';
import styles from './dashboard.module.scss';
import MyAccountSection from '../../sections/myAccountSection/myAccountSection';

function Dashboard() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const [activeItemId, setActiveItemId] = useState<string | null>(null);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    setIsSidebarExpanded(!isSmallScreen);
  }, [isSmallScreen]);

  const handleToggleSidebar = () => {
    setIsSidebarExpanded(prev => !prev);
  };

  const mainContent = useSectionRenderer({
    activeId: activeItemId ?? undefined,
    defaultId: 'landing',
    sections: {
      landing: (
        <>
          <Typography variant="h6" fontWeight={600}>
            Hello, Dummy User 👋
          </Typography>
        </>
      ),
      dashboard: (
        <>
          <Typography variant="h6" fontWeight={600}>
            Dashboard
          </Typography>
        </>
      ),
      'ai-chat': (
        <>
          <Typography variant="h6" fontWeight={600}>
            AI Chat
          </Typography>
        </>
      ),
      inventory: (
        <>
          <Typography variant="h5" gutterBottom>
            Inventory
          </Typography>
        </>
      ),
      campaigns: (
        <>
          <Typography variant="h5" gutterBottom>
            Campaigns
          </Typography>
        </>
      ),
      'my-account': <MyAccountSection />
    }
  });

  return (
    <AppLayout>
      <AppLayout.TopToolbar>
        <TopToolbar />
      </AppLayout.TopToolbar>

      <AppLayout.LeftSidebar>
        <LeftSidebar
          isExpanded={isSidebarExpanded}
          activeItemId={activeItemId}
          onToggle={handleToggleSidebar}
          onChangeActive={setActiveItemId}
        />
      </AppLayout.LeftSidebar>

      <AppLayout.RightBody>
        <Paper elevation={2} className={styles.dashboardContent} square={false}>
          <Box className={styles.mainContent}>{mainContent}</Box>
        </Paper>
      </AppLayout.RightBody>
    </AppLayout>
  );
}

export default Dashboard;


