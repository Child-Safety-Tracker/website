// material-ui
import { useTheme } from '@mui/material/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
*
*/
import logo from '../../../childLocatorAvatar.png';

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
  const theme = useTheme();

  return (
   <img src={logo} alt="CLS" width="50" />
  );
};

export default Logo;
