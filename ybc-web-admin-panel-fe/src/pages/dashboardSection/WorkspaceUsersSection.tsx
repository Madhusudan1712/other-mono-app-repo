import { type FC } from 'react';
import { Box, Button, Typography } from '@mui/material';

import styles from './dashboardSection.module.scss';

const WorkspaceUsersSection: FC = () => {
  return (
    <Box>
      <Box className={styles.workspaceUsersHeader}>
        <Typography variant="subtitle1" className={styles.cardTitle}>
          Workspace Users
        </Typography>

        <Button size="small" variant="outlined">
          Add User
        </Button>
      </Box>

      <table className={styles.workspaceUsersTable}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Workspace Name</th>
            <th>Workspace Role</th>
            <th>Linked Accounts</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Hema Chandran</td>
            <td>hemachandran@example.com</td>
            <td>Workspace name – 1</td>
            <td>Owner</td>
            <td>All accounts (3)</td>
          </tr>
        </tbody>
      </table>
    </Box>
  );
};

export default WorkspaceUsersSection;


