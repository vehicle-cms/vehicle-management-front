// @mui
import PropTypes from 'prop-types';
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';
// components
import Iconify from '../../../components/Iconify';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// ----------------------------------------------------------------------

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
}));

// ----------------------------------------------------------------------

AppWidgetSummary1.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  sx: PropTypes.object,
};

export function AppWidgetSummary1({
  title,
  total,
  icon,
  color = 'black',
  sx,
  ...other
}) {
  const admin = useSelector(state => state.AdminReducer.admin);
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        py: 5,
        boxShadow: 0,
        textAlign: 'center',
        color: theme => theme.palette[color].darker,
        bgcolor: theme => theme.palette[color].lighter,
        ...sx,
      }}
      {...other}
      onClick={() => {
        navigate('/dashboard/managers');
      }}
    >
      <IconWrapperStyle
        sx={{
          color: theme => theme.palette[color].dark,
          backgroundImage: theme =>
            `linear-gradient(135deg, ${alpha(
              theme.palette[color].dark,
              0
            )} 0%, ${alpha(theme.palette[color].dark, 0.24)} 100%)`,
        }}
      >
        <Iconify icon={icon} width={24} height={24} />
      </IconWrapperStyle>

      <Typography variant="h3">{fShortenNumber(admin)}</Typography>

      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        {title}
      </Typography>
    </Card>
  );
}
export function AppWidgetSummary2({
  title,
  total,
  icon,
  color = 'primary',
  sx,
  ...other
}) {
  const admin = useSelector(state => state.AdminReducer.campaign);
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        py: 5,
        boxShadow: 0,
        textAlign: 'center',
        color: theme => theme.palette[color].darker,
        bgcolor: theme => theme.palette[color].lighter,
        ...sx,
      }}
      {...other}
      onClick={() => navigate('/dashboard/vehicles')}
    >
      <IconWrapperStyle
        sx={{
          color: theme => theme.palette[color].dark,
          backgroundImage: theme =>
            `linear-gradient(135deg, ${alpha(
              theme.palette[color].dark,
              0
            )} 0%, ${alpha(theme.palette[color].dark, 0.24)} 100%)`,
        }}
      >
        <Iconify icon={icon} width={24} height={24} />
      </IconWrapperStyle>

      <Typography variant="h3">{fShortenNumber(admin)}</Typography>

      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        {title}
      </Typography>
    </Card>
  );
}
export function AppWidgetSummary3({
  title,
  total,
  icon,
  color = 'primary',
  sx,
  ...other
}) {
  const admin = useSelector(state => state.AdminReducer.brand);
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        py: 5,
        boxShadow: 0,
        textAlign: 'center',
        color: theme => theme.palette[color].darker,
        bgcolor: theme => theme.palette[color].lighter,
        ...sx,
      }}
      {...other}
      onClick={() => navigate('/dashboard/orders')}
    >
      <IconWrapperStyle
        sx={{
          color: theme => theme.palette[color].dark,
          backgroundImage: theme =>
            `linear-gradient(135deg, ${alpha(
              theme.palette[color].dark,
              0
            )} 0%, ${alpha(theme.palette[color].dark, 0.24)} 100%)`,
        }}
      >
        <Iconify icon={icon} width={24} height={24} />
      </IconWrapperStyle>

      <Typography variant="h3">{fShortenNumber(admin)}</Typography>

      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        {title}
      </Typography>
    </Card>
  );
}
export function AppWidgetSummary4({
  title,
  total,
  icon,
  color = 'primary',
  sx,
  ...other
}) {
  const admin = useSelector(state => state.AdminReducer.tag);
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        py: 5,
        boxShadow: 0,
        textAlign: 'center',
        color: theme => theme.palette[color].darker,
        bgcolor: theme => theme.palette[color].lighter,
        ...sx,
      }}
      {...other}
      onClick={() => navigate('/dashboard/tags')}
    >
      <IconWrapperStyle
        sx={{
          color: theme => theme.palette[color].dark,
          backgroundImage: theme =>
            `linear-gradient(135deg, ${alpha(
              theme.palette[color].dark,
              0
            )} 0%, ${alpha(theme.palette[color].dark, 0.24)} 100%)`,
        }}
      >
        <Iconify icon={icon} width={24} height={24} />
      </IconWrapperStyle>

      <Typography variant="h3">{fShortenNumber(admin)}</Typography>

      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        {title}
      </Typography>
    </Card>
  );
}
export function AppWidgetSummary5({
  title,
  total,
  icon,
  color = 'primary',
  sx,
  ...other
}) {
  const admin = useSelector(state => state.AdminReducer.platform);
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        py: 5,
        boxShadow: 0,
        textAlign: 'center',
        color: theme => theme.palette[color].darker,
        bgcolor: theme => theme.palette[color].lighter,
        ...sx,
      }}
      {...other}
      onClick={() => navigate('/dashboard/social-platform')}
    >
      <IconWrapperStyle
        sx={{
          color: theme => theme.palette[color].dark,
          backgroundImage: theme =>
            `linear-gradient(135deg, ${alpha(
              theme.palette[color].dark,
              0
            )} 0%, ${alpha(theme.palette[color].dark, 0.24)} 100%)`,
        }}
      >
        <Iconify icon={icon} width={24} height={24} />
      </IconWrapperStyle>

      <Typography variant="h3">{fShortenNumber(admin)}</Typography>

      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        {title}
      </Typography>
    </Card>
  );
}
export function AppWidgetSummary6({
  title,
  total,
  icon,
  color = 'primary',
  sx,
  ...other
}) {
  const admin = useSelector(state => state.AdminReducer.memerr);
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        py: 5,
        boxShadow: 0,
        textAlign: 'center',
        color: theme => theme.palette[color].darker,
        bgcolor: theme => theme.palette[color].lighter,
        ...sx,
      }}
      {...other}
      onClick={() => navigate('/dashboard/maintenance')}
    >
      <IconWrapperStyle
        sx={{
          color: theme => theme.palette[color].dark,
          backgroundImage: theme =>
            `linear-gradient(135deg, ${alpha(
              theme.palette[color].dark,
              0
            )} 0%, ${alpha(theme.palette[color].dark, 0.24)} 100%)`,
        }}
      >
        <Iconify icon={icon} width={24} height={24} />
      </IconWrapperStyle>

      <Typography variant="h3">{fShortenNumber(admin)}</Typography>

      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        {title}
      </Typography>
    </Card>
  );
}
export function AppWidgetSummary7({
  title,
  total,
  icon,
  color = 'primary',
  sx,
  ...other
}) {
  const admin = useSelector(state => state.AdminReducer.memedd);
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        py: 5,
        boxShadow: 0,
        textAlign: 'center',
        color: theme => theme.palette[color].darker,
        bgcolor: theme => theme.palette[color].lighter,
        ...sx,
      }}
      {...other}
      onClick={() => navigate('/dashboard/customers')}
    >
      <IconWrapperStyle
        sx={{
          color: theme => theme.palette[color].dark,
          backgroundImage: theme =>
            `linear-gradient(135deg, ${alpha(
              theme.palette[color].dark,
              0
            )} 0%, ${alpha(theme.palette[color].dark, 0.24)} 100%)`,
        }}
      >
        <Iconify icon={icon} width={24} height={24} />
      </IconWrapperStyle>

      <Typography variant="h3">{fShortenNumber(admin)}</Typography>

      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        {title}
      </Typography>
    </Card>
  );
}
export function AppWidgetSummary8({
  title,
  total,
  icon,
  color = 'primary',
  sx,
  ...other
}) {
  const admin = useSelector(state => state.AdminReducer.approved);

  return (
    <Card
      sx={{
        py: 4,
        boxShadow: 0,
        textAlign: 'center',
        color: theme => theme.palette[color].darker,
        bgcolor: theme => theme.palette[color].lighter,
        ...sx,
      }}
      {...other}
    >
      <Typography variant="h3">{fShortenNumber(admin)}</Typography>

      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        {title}
      </Typography>
    </Card>
  );
}
export function AppWidgetSummary9({
  title,
  total,
  icon,
  color = 'primary',
  sx,
  ...other
}) {
  const admin = useSelector(state => state.AdminReducer.pending);
  return (
    <Card
      sx={{
        py: 4,
        boxShadow: 0,
        textAlign: 'center',
        color: theme => theme.palette[color].darker,
        bgcolor: theme => theme.palette[color].lighter,
        ...sx,
      }}
      {...other}
    >
      <Typography variant="h3">{fShortenNumber(admin)}</Typography>

      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        {title}
      </Typography>
    </Card>
  );
}
export function AppWidgetSummary10({
  title,
  total,
  icon,
  color = 'primary',
  sx,
  ...other
}) {
  const admin = useSelector(state => state.AdminReducer.rejected);

  return (
    <Card
      sx={{
        py: 4,
        boxShadow: 0,
        textAlign: 'center',
        color: theme => theme.palette[color].darker,
        bgcolor: theme => theme.palette[color].lighter,
        ...sx,
      }}
      {...other}
    >
      <Typography variant="h3">{fShortenNumber(admin)}</Typography>

      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        {title}
      </Typography>
    </Card>
  );
}
