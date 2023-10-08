import GlobalStyles from '@mui/joy/GlobalStyles';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Sheet from '@mui/joy/Sheet';
// icons
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import LogoutIcon from '@mui/icons-material/Logout';

import MuiLogo from '../../assets/icons/MuiLogo';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/joy';

export default function FirstSidebar() {
  return (
    <Sheet
      className="FirstSidebar"
      sx={{
        position: {
          xs: 'fixed',
        },
        transform: {
          xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))',
          lg: 'none',
        },
        transition: 'transform 0.4s',
        zIndex: 10000,
        height: '100dvh',
        maxWidth: 'var(--FirstSidebar-width)',
        top: 0,
        p: 2,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 1,
        borderRight: '1px solid',
        borderColor: 'divider',
      }}
    >
      <GlobalStyles
        styles={{
          ':root': {
            '--FirstSidebar-width': '68px',
          },
        }}
      />
      <MuiLogo />
      <List size="sm" sx={{ '--ListItem-radius': '6px', '--List-gap': '8px' }}>
        <ListItem>
          <Link to="/dashboard">
            <IconButton size="lg">
              <DashboardRoundedIcon />
            </IconButton>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/dashboard/profile">
            <IconButton size="lg">
              <PeopleRoundedIcon />
            </IconButton>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/dashboard/settings">
            <IconButton size="lg">
              <SettingsRoundedIcon />
            </IconButton>
          </Link>
        </ListItem>
      </List>
      <List
        sx={{
          mt: 'auto',
          flexGrow: 0,
          '--ListItem-radius': '8px',
          '--List-gap': '4px',
        }}
      >
        <ListItem>
          <Link to="/">
            <IconButton size="lg">
              <HomeRoundedIcon />
            </IconButton>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/sign-in">
            <IconButton size="lg">
              <LogoutIcon />
            </IconButton>
          </Link>
        </ListItem>
      </List>
      <Divider />
    </Sheet>
  );
}
