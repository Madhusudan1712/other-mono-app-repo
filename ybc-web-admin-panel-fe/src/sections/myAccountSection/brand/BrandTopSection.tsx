import { type FC } from 'react';
import { Box, Typography } from '@mui/material';

import styles from '../myAccountSection.module.scss';

const BrandTopSection: FC = () => {
  return (
    <Box>
      <Typography variant="subtitle1" className={styles.cardTitle}>
        Brand Settings
      </Typography>

      <Box className={styles.profileRow}>
        <Box>
          <Typography variant="body2" fontWeight={600}>
            Your Brand
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Manage your organisation&apos;s branding preferences here.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default BrandTopSection;



