import { type FC } from 'react';
import { Avatar, Box, Typography } from '@mui/material';

import styles from './dashboardSection.module.scss';

const WorkspaceTopSection: FC = () => {
  return (
    <Box>
      <Typography variant="subtitle1" className={styles.cardTitle}>
        My Workspace
      </Typography>

      <Box className={styles.profileRow}>
        <Avatar sx={{ width: 40, height: 40 }}>N</Avatar>

        <Box>
          <Typography variant="body2" fontWeight={600}>
            Your Workspace
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Short description about your workspace appears here.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default WorkspaceTopSection;


