import { useRef, useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

import { alpha } from '@mui/material/styles';
import {
  Button,
  Box,
  Divider,
  Typography,
  Avatar,
  IconButton,
} from '@mui/material';

import MenuPopover from '../../components/MenuPopover';
import isLoggedIn from '../../utils/Hooks/isLoggedIn';
import { LogoutHandler } from '../../utils/HandlerFunctions/AdminHandler';

export default function AccountPopover() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [admin, admin_id] = isLoggedIn();
  const [decode, setDecode] = useState();
  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (admin != null && admin_id != null) {
      try {
        const decodetoken = jwtDecode(admin);
        setDecode(decodetoken);
      } catch (e) {
        // console.log(e)
      }
    }
  }, [admin, admin_id]);

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: theme => alpha(theme.palette.grey[900], 0.72),
            },
          }),
        }}
      >
        <Avatar alt="photoURL" />
      </IconButton>

      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{ width: 220 }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle1" noWrap>
            {decode?.firstName ? decode?.firstName : 'unknown'}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {decode?.email ? decode?.email : 'unknown@email.com'}
          </Typography>
        </Box>

        <Divider sx={{ my: 1 }} />
        <Box sx={{ p: 2, pt: 1.0 }}>
          <Button
            fullWidth
            color="inherit"
            variant="outlined"
            onClick={() => navigate('/dashboard/reset-password')}
          >
            Change Password
          </Button>
        </Box>
        <Box sx={{ p: 2, pt: 0.2 }}>
          {admin_id ? (
            <Button
              fullWidth
              color="inherit"
              variant="outlined"
              onClick={() => LogoutHandler(navigate)}
            >
              Logout
            </Button>
          ) : (
            <Button
              fullWidth
              color="inherit"
              variant="outlined"
              onClick={() => navigate('/login')}
            >
              Login
            </Button>
          )}
        </Box>
      </MenuPopover>
    </>
  );
}
