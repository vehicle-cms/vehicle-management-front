import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';

import { Stack, TextField, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import Iconify from '../../../components/Iconify';
import { loginAdminHandler } from '../../../utils/HandlerFunctions/AdminHandler';

export default function LoginForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: true,
    },

    onSubmit: () => {
      navigate('/dashboard/app', { replace: true });
    },
  });

  const { errors, touched, isSubmitting, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={(e) => loginAdminHandler(e, email, password, navigate)}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            autoComplete="username"
            type="username"
            label="Username"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
                  <IconButton onClick={handleShowPassword} edge="end">
                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Stack>
        <br></br>
        <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
          Login
        </LoadingButton>
        <br></br>
      </Form>
    </FormikProvider>
  );
}
