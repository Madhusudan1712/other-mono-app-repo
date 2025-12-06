import { type FC } from 'react';
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import styles from './leftSidebar.module.scss';
import { AccountBoxTwoTone } from '@mui/icons-material';

type LeftSidebarProps = {
  isExpanded: boolean;
  activeItemId?: string | null;
  onToggle?: () => void;
  onChangeActive?: (id: string) => void;
};

type NavItem = {
  id: string;
  label: string;
  icon: React.ElementType;
};

type CurrentUserType = 'super_admin' | 'user';

const navItems_SuperAdmin: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: DashboardOutlinedIcon },
  { id: 'ai-chat', label: 'AI Chat', icon: PsychologyOutlinedIcon },
  { id: 'accounts-management', label: 'Accounts Management', icon: AccountBoxTwoTone }
];

const navItems_User: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: DashboardOutlinedIcon },
  { id: 'ai-chat', label: 'AI Chat', icon: PsychologyOutlinedIcon },
  { id: 'inventory', label: 'Inventory', icon: Inventory2OutlinedIcon },
  { id: 'campaigns', label: 'Campaigns', icon: CampaignOutlinedIcon }
];

function getNavItemsForUser(userType: CurrentUserType): NavItem[] {
  return userType === 'super_admin' ? navItems_SuperAdmin : navItems_User;
}

const user = {
  name: 'Dummy User',
  role: 'Owner'
};

const SidebarShell = styled(Box, {
  shouldForwardProp: prop => prop !== 'isExpanded'
})<{ isExpanded: boolean }>(({ theme, isExpanded }) => ({
  width: isExpanded ? 240 : 64,
  minHeight: '100%',
  borderRadius: 18,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[4],
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(2),
  transition: theme.transitions.create(['width'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.sharp
  }),
  overflow: 'hidden'
}));

const CollapseContent = styled('div', {
  shouldForwardProp: prop => prop !== 'isExpanded'
})<{ isExpanded: boolean }>(({ theme, isExpanded }) => ({
  display: 'flex',
  alignItems: 'center',
  flex: 1,
  opacity: isExpanded ? 1 : 0,
  maxWidth: isExpanded ? '100%' : 0,
  transform: isExpanded ? 'translateX(0)' : 'translateX(-8px)',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  transition: theme.transitions.create(['opacity', 'max-width', 'transform'], {
    duration: theme.transitions.duration.shorter,
    easing: theme.transitions.easing.easeOut
  })
}));

const LeftSidebar: FC<LeftSidebarProps> = ({ isExpanded, activeItemId, onToggle, onChangeActive }) => {
  // TODO: Replace with value from API / global store
  const currentUserType: CurrentUserType = 'super_admin';
  const navItems = getNavItemsForUser(currentUserType);
  return (
    <Box className={styles.sidebarRoot}>
      <SidebarShell isExpanded={isExpanded} className={styles.sidebarInner}>
        {/* Header / Logo */}
        <Box className={styles.headerRow}>
          <Box
            className={styles.logoBox}
            sx={theme => ({
              backgroundColor: theme.palette.warning.light,
              color: theme.palette.warning.main,
              borderRadius: 2,
              px: 1.5,
              py: 0.75,
              fontSize: 12
            })}
          >
            L
          </Box>
        </Box>

        {/* Navigation */}
        <Box className={styles.navSection}>
          <List disablePadding>
            {/* Conditionally render nav items based on the current user type */}
            {navItems.map(item => {
              const Icon = item.icon;
              const selected = item.id === activeItemId;

              return (
                <ListItem key={item.id} disablePadding sx={{ mb: 0.5 }}>
                  <ListItemButton
                    selected={selected}
                    onClick={() => onChangeActive?.(item.id)}
                    sx={{
                      borderRadius: 2,
                      minHeight: 44,
                      px: isExpanded ? 1.5 : 1,
                      justifyContent: isExpanded ? 'flex-start' : 'center',
                      '&.Mui-selected': {
                        backgroundColor: 'rgba(255, 145, 0, 0.12)',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 145, 0, 0.2)'
                        }
                      }
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: isExpanded ? 1.5 : 0,
                        justifyContent: 'center',
                        color: selected ? 'warning.main' : 'text.secondary'
                      }}
                    >
                      <Icon fontSize="small" />
                    </ListItemIcon>

                    <CollapseContent isExpanded={isExpanded}>
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          variant: 'body2',
                          noWrap: true
                        }}
                      />
                    </CollapseContent>
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Footer / Account */}
        <Box className={styles.footerSection}>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={theme => ({
              mb: 1,
              opacity: isExpanded ? 1 : 0,
              transition: theme.transitions.create('opacity')
            })}
          >
            MY ACCOUNT
          </Typography>

          <Box display="flex" alignItems="center" gap={1.5}>
            <Avatar sx={{ width: 32, height: 32 }}>C</Avatar>

            <CollapseContent isExpanded={isExpanded}>
              <Box>
                <Typography variant="body2" fontWeight={600} noWrap>
                  {user.name}
                </Typography>
                <Typography variant="caption" color="text.secondary" noWrap>
                  {user.role}
                </Typography>
              </Box>
            </CollapseContent>
          </Box>
        </Box>
      </SidebarShell>

      {/* Floating collapse / expand toggle on the edge of the sidebar column */}
      <IconButton
        size="small"
        onClick={onToggle}
        className={styles.toggleButton}
        sx={{
          p: 0
        }}
      >
        {isExpanded ? <ChevronLeftIcon fontSize="small" /> : <ChevronRightIcon fontSize="small" />}
      </IconButton>
    </Box>
  );
};

export default LeftSidebar;


