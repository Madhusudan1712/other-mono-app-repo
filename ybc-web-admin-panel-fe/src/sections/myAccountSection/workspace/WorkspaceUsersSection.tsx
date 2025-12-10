import { type FC, useState } from 'react';
import { Box, Typography } from '@mui/material';

import styles from '../myAccountSection.module.scss';
import Button from '../../../common/components/ui/button/Button';
import { Add } from '@mui/icons-material';
import AddUserModal from './AddUserModal';
import UsersTable from './UsersTable';

const WorkspaceUsersSection: FC = () => {
  const [isAddUserOpen, setAddUserOpen] = useState(false);

  const handleOpenAddUser = () => {
    setAddUserOpen(true);
  };

  const handleCloseAddUser = () => {
    setAddUserOpen(false);
  };

  return (
    <Box>
      <Box className={styles.workspaceUsersHeader}>
        <Typography variant="subtitle1" className={styles.cardTitle}>
          Workspace Users
        </Typography>

        <Button size="small" variant="outline" onClick={handleOpenAddUser}>
          <Add />
          Add User
        </Button>
      </Box>

      <UsersTable />

      <AddUserModal open={isAddUserOpen} onClose={handleCloseAddUser} />
    </Box>
  );
};

export default WorkspaceUsersSection;


