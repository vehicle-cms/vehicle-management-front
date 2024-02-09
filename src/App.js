// routes
import Router from './routes';
// theme
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
// components
import ScrollToTop from './components/ScrollToTop';
import './styles/user.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Gateway from './sections/authentication';
import { GetCampaign } from './Actions/OrderAction';
import { useDispatch } from 'react-redux';
// ----------------------------------------------------------------------

export default function App() {
  const navigate = useNavigate();
  const token = localStorage.getItem('admin');
  const dispatch = useDispatch();

  useEffect(() => {
    if (token !== 'undefined') {
      navigate('/dashboard/app');
    }
  }, [token]);

  useEffect(() => {
    dispatch(GetCampaign());
  }, []);

  // if (token === 'undefined') {
  //   return (
  //     <>
  //       <Gateway />
  //     </>
  //   );
  // }
  // if (!token) {
  //   return (
  //     <>
  //       <Gateway />
  //     </>
  //   );
  // }

  return (
    <ThemeConfig>
      <ScrollToTop />
      <GlobalStyles />
      <Router />
    </ThemeConfig>
  );
}
