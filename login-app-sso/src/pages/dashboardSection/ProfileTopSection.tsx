import { type FC } from 'react';
import { Avatar, Box, Typography } from '@mui/material';

import styles from './dashboardSection.module.scss';

const ProfileTopSection: FC = () => {
  return (
    <Box>
      <Typography variant="subtitle1" className={styles.cardTitle}>
        My Profile
      </Typography>
      <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 3 }}>
        Update your profile details here
      </Typography>

      <Box className={styles.profileRow}>
        <Box className={styles.profileIdentity}>
          <Avatar sx={{ width: 48, height: 48 }}>H</Avatar>

          <Box>
            <Typography variant="body2" fontWeight={600}>
              Dummy User
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Super Admin
            </Typography>
          </Box>
        </Box>

        <Box className={styles.profileField}>
          <Typography variant="caption" color="text.secondary">
            Email ID
          </Typography>
          <Typography variant="body2">dummyuser@example.com</Typography>
        </Box>

        <Box className={styles.profileField}>
          <Typography variant="caption" color="text.secondary">
            Timezone
          </Typography>
          <Typography variant="body2">GMT - Greenwich Mean Time (Europe)</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileTopSection;

