import { type FC, type FormEvent } from 'react';
import {
  Box,
  TextField,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Typography,
  IconButton,
} from '@mui/material';
import { Close } from '@mui/icons-material';

import { Modal } from '../../../common/components/ui/modal';
import Button from '../../../common/components/ui/button/Button';

export interface AddUserModalProps {
  open: boolean;
  onClose: () => void;
}

const AddUserModal: FC<AddUserModalProps> = ({ open, onClose }) => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // TODO: hook up submit handler
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <Modal.Header>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 1.5,
          }}
        >
          <Box>
            <Typography variant="h6" component="div">
              Add Users
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipisc
            </Typography>
          </Box>

          <IconButton
            size="small"
            onClick={onClose}
            aria-label="Close add user modal"
          >
            <Close fontSize="small" />
          </IconButton>
        </Box>
      </Modal.Header>

      <Modal.Body dividers>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <TextField
            label="Name"
            placeholder="Anandha Ramachandra"
            required
            fullWidth
            size="small"
          />

          <TextField
            label="Email ID"
            placeholder="anandharamchandras98@gmail.com"
            required
            fullWidth
            size="small"
          />

          <TextField
            label="Workspace Role"
            required
            fullWidth
            size="small"
            select
            defaultValue="Admin"
          >
            <MenuItem value="Admin">Admin</MenuItem>
            <MenuItem value="Owner">Owner</MenuItem>
            <MenuItem value="Member">Member</MenuItem>
          </TextField>

          <TextField
            label="Workspace Name"
            placeholder="Workspace name - 1"
            required
            fullWidth
            size="small"
          />

          <TextField
            label="Map Client Accounts"
            placeholder="Christopher Nolan, Mathew Perry, Nick Jonas"
            fullWidth
            size="small"
            select
          >
            <MenuItem value="christopher-nolan">
              Christopher Nolan
            </MenuItem>
            <MenuItem value="mathew-perry">
              Mathew Perry
            </MenuItem>
            <MenuItem value="nick-jonas">
              Nick Jonas
            </MenuItem>
          </TextField>

          <FormControlLabel
            control={<Checkbox />}
            label="Access all amazon accounts"
          />

          <Box sx={{ mt: 2 }}>
            <Button
              type="submit"
              variant="primary"
              size="medium"
              style={{ width: '100%' }}
            >
              Add User
            </Button>
          </Box>
        </Box>
      </Modal.Body>
    </Modal>
  );
};

export default AddUserModal;


