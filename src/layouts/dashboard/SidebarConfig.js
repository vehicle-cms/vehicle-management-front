// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = name => <Iconify icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'Managers',
    path: '/dashboard/managers',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'Vehicles',
    path: '/dashboard/vehicles',
    icon: getIcon('icon-park:engineering-vehicle'),
  },
  {
    title: 'Drivers',
    path: '/dashboard/drivers',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'Orders',
    path: '/dashboard/orders',
    icon: getIcon('icon-park:transaction-order'),
  },
  {
    title: 'Maintenance',
    path: '/dashboard/maintenance',
    icon: getIcon('bi:tools'),
  },
  {
    title: 'Customers',
    path: '/dashboard/customers',
    icon: getIcon('eva:people-fill'),
  },
];

export default sidebarConfig;
