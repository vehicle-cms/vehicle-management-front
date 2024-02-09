import { useState } from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
import { useNavigate } from 'react-router-dom';
// material
import { Stack, TextField, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// component
import Iconify from '../../../components/Iconify';
import { registerAdminHandler } from '../../../utils/HandlerFunctions/AdminHandler';
// ----------------------------------------------------------------------
import { setShow } from '../../../Actions/ManagerActions';
import { useDispatch } from 'react-redux';

export default function RegisterForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      userName: '',
      email: '',
      password: '',
    },
    // validationSchema: RegisterSchema,
    onSubmit: () => {
      navigate('/dashboard', { replace: true });
    },
  });

  const { errors, touched, isSubmitting, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form
        autoComplete="off"
        noValidate
        onSubmit={e =>
          registerAdminHandler(e, userName, email, password, navigate)
        }
      >
        <Stack spacing={3}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              fullWidth
              label="username"
              {...getFieldProps('userName')}
              error={Boolean(touched.userName && errors.userName)}
              helperText={touched.userName && errors.userName}
              onChange={e => setUserName(e.target.value)}
              value={userName}
            />
          </Stack>

          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Email address"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Password"
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    onClick={() => setShowPassword(prev => !prev)}
                  >
                    <Iconify
                      icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
            onChange={e => setPassword(e.target.value)}
            value={password}
          />

          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
          >
            Register
          </LoadingButton>
          <span>Or</span>
        </Stack>
      </Form>
      <LoadingButton
        fullWidth
        size="large"
        // type="submit"
        variant="contained"
        // loading={isSubmitting}
        onClick={() => dispatch(setShow(true))}
      >
        Login
      </LoadingButton>
    </FormikProvider>
  );
}
