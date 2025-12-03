import { useEffect, useState } from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

import AppLayout from '../../common/components/appLayout/AppLayout';
import LeftSidebar from '../../common/components/leftSidebar/LeftSidebar';
import styles from './dashboard.module.scss';

function Dashboard() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    setIsSidebarExpanded(!isSmallScreen);
  }, [isSmallScreen]);

  const handleToggleSidebar = () => {
    setIsSidebarExpanded(prev => !prev);
  };

  return (
    <AppLayout>
      <AppLayout.TopToolbar>
        <Box
          sx={theme => ({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: theme.spacing(2, 3),
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[2]
          })}
        >
          <Typography variant="h6" fontWeight={600}>
            Hello, Dummy User 👋
          </Typography>
        </Box>
      </AppLayout.TopToolbar>

      <AppLayout.LeftSidebar>
        <LeftSidebar isExpanded={isSidebarExpanded} onToggle={handleToggleSidebar} />
      </AppLayout.LeftSidebar>

      <AppLayout.RightBody>
        <Box className={styles.dashboardPage}>
          <Box className={styles.mainContent}>
            <Typography variant="h5" gutterBottom>
              Dashboard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Connect your accounts and explore your campaigns here.
            </Typography>
          </Box>
        </Box>
      </AppLayout.RightBody>
    </AppLayout>
  );
}

export default Dashboard;


