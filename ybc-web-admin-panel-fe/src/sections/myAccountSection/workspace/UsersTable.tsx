import { type FC, useMemo, useState } from 'react';
import {
  Avatar,
  Box,
  IconButton,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material';
import { MoreVert, UnfoldMore } from '@mui/icons-material';

interface WorkspaceUser {
  id: number;
  name: string;
  email: string;
  workspaceName: string;
  role: string;
  clientAccountsCount: number;
}

const USERS: WorkspaceUser[] = [
  {
    id: 1,
    name: 'Hema Chandra',
    email: 'hemachandra98@gmail.com',
    workspaceName: 'Workspace name - 1',
    role: 'Owner',
    clientAccountsCount: 3,
  },
  {
    id: 2,
    name: 'Anandha Ramachandra',
    email: 'anandharamachandras98@gmail.com',
    workspaceName: 'Workspace name - 2',
    role: 'Admin',
    clientAccountsCount: 2,
  },
];

const UsersTable: FC = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(2);

  const pagedUsers = useMemo(
    () =>
      USERS.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [page, rowsPerPage],
  );

  const handleChangePage = (
    _event: unknown,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const renderInitials = (name: string) => {
    const [first, second] = name.split(' ');
    if (!second) {
      return first?.[0] ?? '';
    }
    return `${first?.[0] ?? ''}${second?.[0] ?? ''}`;
  };

  return (
    <Paper variant="outlined">
      <TableContainer>
        <Table size="small" aria-label="Workspace users table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.5,
                    fontWeight: 600,
                    fontSize: 12,
                    color: 'text.secondary',
                  }}
                >
                  NAME
                  <UnfoldMore fontSize="inherit" />
                </Box>
              </TableCell>
              <TableCell>
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.5,
                    fontWeight: 600,
                    fontSize: 12,
                    color: 'text.secondary',
                  }}
                >
                  EMAIL
                  <UnfoldMore fontSize="inherit" />
                </Box>
              </TableCell>
              <TableCell>
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.5,
                    fontWeight: 600,
                    fontSize: 12,
                    color: 'text.secondary',
                  }}
                >
                  WORKSPACE NAME
                  <UnfoldMore fontSize="inherit" />
                </Box>
              </TableCell>
              <TableCell>
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.5,
                    fontWeight: 600,
                    fontSize: 12,
                    color: 'text.secondary',
                  }}
                >
                  WORKSPACE ROLE
                  <UnfoldMore fontSize="inherit" />
                </Box>
              </TableCell>
              <TableCell>
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.5,
                    fontWeight: 600,
                    fontSize: 12,
                    color: 'text.secondary',
                  }}
                >
                  CLIENT ACCOUNTS
                  <UnfoldMore fontSize="inherit" />
                </Box>
              </TableCell>
              <TableCell padding="checkbox" />
            </TableRow>
          </TableHead>
          <TableBody>
            {pagedUsers.map((user) => (
              <TableRow key={user.id} hover>
                <TableCell>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.5,
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 32,
                        height: 32,
                        bgcolor: 'primary.main',
                        fontSize: 14,
                      }}
                    >
                      {renderInitials(user.name)}
                    </Avatar>
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: 500 }}
                    >
                      {user.name}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">
                    {user.email}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">
                    {user.workspaceName}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 500 }}
                  >
                    {user.role}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Link
                    component="button"
                    underline="always"
                    sx={{ fontSize: 13 }}
                  >
                    {user.clientAccountsCount} Accounts
                  </Link>
                </TableCell>
                <TableCell padding="checkbox" align="right">
                  <IconButton size="small">
                    <MoreVert fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 2,
          py: 1,
        }}
      >
        <Typography variant="caption" color="text.secondary">
          Showing results {pagedUsers.length} of {USERS.length}
        </Typography>

        <TablePagination
          component="div"
          count={USERS.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[2, 5, 10]}
          labelRowsPerPage="Rows per page"
        />
      </Box>
    </Paper>
  );
};

export default UsersTable;


