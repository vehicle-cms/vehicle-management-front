import { styled } from '@mui/material/styles';
import { Container, Typography } from '@mui/material';

import Page from '../components/Page';
import RegisterForm from '../sections/authentication/register/RegisterForm';

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0),
}));

export default function Register() {
  return (
    <RootStyle title="Login | Minimal-UI">
      <Container maxWidth="sm">
        <ContentStyle>
          <RegisterForm />
          <Typography
            variant="body2"
            align="center"
            sx={{
              mt: 3,
              display: { sm: 'none' },
            }}
          ></Typography>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
