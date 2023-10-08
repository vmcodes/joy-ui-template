import Box from '@mui/joy/Box';
import Sheet from '@mui/joy/Sheet';
import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemButton from '@mui/joy/ListItemButton';
// icons
import KeyIcon from '@mui/icons-material/Key';
import CollectionsIcon from '@mui/icons-material/Collections';
import ViewListIcon from '@mui/icons-material/ViewList';
import GroupsIcon from '@mui/icons-material/Groups';
import EmailIcon from '@mui/icons-material/Email';
import MessageIcon from '@mui/icons-material/Message';
import UploadIcon from '@mui/icons-material/Upload';

import { closeSidebar } from '../../utils';
import { Link } from 'react-router-dom';

export default function SecondSidebar() {
  return (
    <>
      <Box
        className="SecondSidebar-overlay"
        sx={{
          position: 'fixed',
          zIndex: 9998,
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          opacity: 'var(--SideNavigation-slideIn)',
          backgroundColor: 'var(--joy-palette-background-backdrop)',
          transition: 'opacity 0.4s',
          transform: {
            xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--FirstSidebar-width, 0px)))',
            lg: 'translateX(-100%)',
          },
        }}
        onClick={() => closeSidebar()}
      />
      <Sheet
        className="SecondSidebar"
        color="neutral"
        sx={{
          position: {
            xs: 'fixed',
          },
          transform: {
            xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--FirstSidebar-width, 0px)))',
            lg: 'none',
          },
          transition: 'transform 0.4s',
          zIndex: 9999,
          height: '100dvh',
          top: 0,
          p: 2,
          ml: { lg: 8 },
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRight: '1px solid',
          borderColor: 'divider',
        }}
      >
        <List
          size="sm"
          sx={{
            '--ListItem-radius': '6px',
            '--List-gap': '6px',
          }}
        >
          <ListSubheader role="presentation" sx={{ fontWeight: 'lg' }}>
            Dashboard
          </ListSubheader>
          <ListItem>
            <Link to="/dashboard/rentals" style={{ textDecoration: 'none' }}>
              <ListItemButton>
                <ListItemDecorator>
                  <KeyIcon />
                </ListItemDecorator>
                <ListItemContent>Rentals</ListItemContent>
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/dashboard/orders" style={{ textDecoration: 'none' }}>
              <ListItemButton onClick={() => closeSidebar()}>
                <ListItemDecorator>
                  <ViewListIcon />
                </ListItemDecorator>
                <ListItemContent>Orders</ListItemContent>
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/dashboard/gallery" style={{ textDecoration: 'none' }}>
              <ListItemButton>
                <ListItemDecorator>
                  <CollectionsIcon />
                </ListItemDecorator>
                <ListItemContent>Gallery</ListItemContent>
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/dashboard/uploads" style={{ textDecoration: 'none' }}>
              <ListItemButton>
                <ListItemDecorator>
                  <UploadIcon />
                </ListItemDecorator>
                <ListItemContent>Uploads</ListItemContent>
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/dashboard/messages" style={{ textDecoration: 'none' }}>
              <ListItemButton onClick={() => closeSidebar()}>
                <ListItemDecorator>
                  <MessageIcon />
                </ListItemDecorator>
                <ListItemContent>Messages</ListItemContent>
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/dashboard/email" style={{ textDecoration: 'none' }}>
              <ListItemButton onClick={() => closeSidebar()}>
                <ListItemDecorator>
                  <EmailIcon />
                </ListItemDecorator>
                <ListItemContent>Email</ListItemContent>
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/dashboard/team" style={{ textDecoration: 'none' }}>
              <ListItemButton onClick={() => closeSidebar()}>
                <ListItemDecorator>
                  <GroupsIcon />
                </ListItemDecorator>
                <ListItemContent>Team</ListItemContent>
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
      </Sheet>
    </>
  );
}
