import { type FC } from 'react';
import { Box, List, ListItemButton, ListItemText, Typography } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import WorkspacesOutlinedIcon from '@mui/icons-material/WorkspacesOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import styles from './dashboardSection.module.scss';
import type { DashboardTabId } from './DashboardSection';

type DashboardNavProps = {
  activeTab: DashboardTabId;
  onChange: (tab: DashboardTabId) => void;
};

const DashboardNav: FC<DashboardNavProps> = ({ activeTab, onChange }) => {
  return (
    <Box className={styles.leftNavCard}>
      <Typography variant="subtitle2" className={styles.leftNavTitle}>
        My Account
      </Typography>

      <List disablePadding>
        <ListItemButton
          disableRipple
          selected={activeTab === 'profile'}
          onClick={() => onChange('profile')}
          className={styles.leftNavItem}
        >
          <PersonOutlineIcon
            fontSize="small"
            className={styles.leftNavIcon}
            sx={{
              color: activeTab === 'profile' ? 'warning.main' : 'text.primary'
            }}
          />
          <ListItemText
            primary="Profile"
            primaryTypographyProps={{
              variant: 'body2',
              sx: {
                color: activeTab === 'profile' ? 'warning.main' : 'text.primary',
                fontWeight: activeTab === 'profile' ? 600 : 400
              }
            }}
          />
        </ListItemButton>

        <ListItemButton
          disableRipple
          selected={activeTab === 'workspace'}
          onClick={() => onChange('workspace')}
          className={styles.leftNavItem}
        >
          <WorkspacesOutlinedIcon
            fontSize="small"
            className={styles.leftNavIcon}
            sx={{
              color: activeTab === 'workspace' ? 'warning.main' : 'text.primary'
            }}
          />
          <ListItemText
            primary="Workspace"
            primaryTypographyProps={{
              variant: 'body2',
              sx: {
                color: activeTab === 'workspace' ? 'warning.main' : 'text.primary',
                fontWeight: activeTab === 'workspace' ? 600 : 400
              }
            }}
          />
        </ListItemButton>

        <ListItemButton disableRipple className={styles.leftNavItem}>
          <SettingsOutlinedIcon fontSize="small" className={styles.leftNavIcon} />
          <ListItemText primary="Settings" primaryTypographyProps={{ variant: 'body2' }} />
        </ListItemButton>
      </List>
    </Box>
  );
};

export default DashboardNav;


