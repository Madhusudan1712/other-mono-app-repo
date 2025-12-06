import { type FC } from 'react';
import { Box, IconButton, Paper, Typography } from '@mui/material';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import WorkspacesOutlinedIcon from '@mui/icons-material/WorkspacesOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import styles from './topToolbar.module.scss';

const TopToolbar: FC = () => {
  return (
    <Paper elevation={2} className={styles.toolbarRoot} square={false}>
      <Box className={styles.rightSection}>
        <IconButton size="small" className={styles.iconButton} aria-label="notifications">
          <NotificationsNoneOutlinedIcon fontSize="small" />
        </IconButton>

        <Box className={styles.workspaceChip}>
          <Box className={styles.workspaceIcon}>
            <WorkspacesOutlinedIcon fontSize="small" />
          </Box>

          <Box className={styles.workspaceMeta}>
            <Typography variant="body2" fontWeight={600} noWrap>
              Dummy User
            </Typography>
            <Typography variant="caption" color="text.secondary" noWrap>
              Workspace
            </Typography>
          </Box>

          <KeyboardArrowDownIcon fontSize="small" className={styles.chevronIcon} />
        </Box>
      </Box>
    </Paper>
  );
};

export default TopToolbar;
