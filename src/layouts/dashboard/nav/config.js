// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'homebanner',
    path: '/dashboard/homebanner',
    icon: icon('ic_user'),
  },
  {
    title: 'courses',
    path: '/dashboard/courses',
    icon: icon('ic_user'),
  },
  {
    title: 'shop',
    path: '/dashboard/shop',
    icon: icon('ic_user'),
  },
  {
    title: 'testimonial',
    path: '/dashboard/testimonial',
    icon: icon('ic_user'),
  },
  {
    title: 'user',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  
  {
    title: 'enquiry',
    path: '/dashboard/enquiry',
    icon: icon('ic_user'),
  },

  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
