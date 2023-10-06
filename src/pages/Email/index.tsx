import { useState } from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Input from '@mui/joy/Input';
import IconButton from '@mui/joy/IconButton';

// Icons import
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import MenuIcon from '@mui/icons-material/Menu';
import BookRoundedIcon from '@mui/icons-material/BookRounded';

// custom
import Menu from './components/Menu';
import Layout from './components/Layout';
import Navigation from './components/Navigation';
import Mails from './components/Mails';
import EmailContent from './components/EmailContent';
import ColorSchemeToggle from '../../components/ColorSchemeToggle';
import { Link } from 'react-router-dom';

export default function EmailExample() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      {drawerOpen && (
        <Layout.SideDrawer onClose={() => setDrawerOpen(false)}>
          <Navigation />
        </Layout.SideDrawer>
      )}
      <Layout.Root
        sx={{
          ...(drawerOpen && {
            height: '100vh',
            overflow: 'hidden',
          }),
        }}
      >
        <Layout.Header>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 1.5,
            }}
          >
            <IconButton
              variant="outlined"
              size="sm"
              onClick={() => setDrawerOpen(true)}
              sx={{ display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Link to="/dashboard">
              <IconButton
                size="sm"
                variant="soft"
                sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
              >
                <DashboardRoundedIcon />
              </IconButton>
            </Link>
            <Typography component="h1" fontWeight="xl">
              Dashboard
            </Typography>
          </Box>
          <Input
            size="sm"
            variant="outlined"
            placeholder="Search anything…"
            startDecorator={<SearchRoundedIcon color="primary" />}
            endDecorator={
              <IconButton variant="outlined" color="neutral">
                <Typography fontWeight="lg" fontSize="sm" textColor="text.icon">
                  ⌘ + k
                </Typography>
              </IconButton>
            }
            sx={{
              flexBasis: '500px',
              display: {
                xs: 'none',
                sm: 'flex',
              },
              boxShadow: 'sm',
            }}
          />
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1.5 }}>
            <IconButton
              size="sm"
              variant="outlined"
              color="neutral"
              sx={{ display: { xs: 'inline-flex', sm: 'none' } }}
            >
              <SearchRoundedIcon />
            </IconButton>

            <IconButton
              size="sm"
              variant="soft"
              color="neutral"
              component="a"
              href="/dashboard"
            >
              <BookRoundedIcon />
            </IconButton>
            <Menu
              id="app-selector"
              control={
                <IconButton
                  size="sm"
                  variant="soft"
                  color="neutral"
                  aria-label="Apps"
                >
                  <GridViewRoundedIcon />
                </IconButton>
              }
              menus={[
                {
                  label: 'Email',
                  active: true,
                  href: '/dashboard/email',
                  'aria-current': 'page',
                },
                {
                  label: 'Team',
                  href: '/dashboard/team',
                },
                {
                  label: 'Dashboard',
                  href: '/dashboard',
                },
              ]}
            />
            <ColorSchemeToggle />
          </Box>
        </Layout.Header>
        <Layout.SideNav>
          <Navigation />
        </Layout.SideNav>
        <Layout.SidePane>
          <Box
            sx={{
              p: 2,
              mb: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography level="title-sm" textColor="text.tertiary">
              Unread
            </Typography>
            <IconButton size="sm" variant="plain" color="primary">
              <KeyboardArrowDownRoundedIcon fontSize="small" color="primary" />
            </IconButton>
          </Box>
          <Box sx={{ py: 10 }}>
            <Typography
              textColor="text.tertiary"
              level="body-sm"
              sx={{ textAlign: 'center' }}
            >
              You&apos;ve read all messages in your inbox.
            </Typography>
          </Box>
          <Box
            sx={{
              p: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography level="title-sm" textColor="text.tertiary">
              Everything else
            </Typography>
            <IconButton size="sm" variant="plain" color="primary">
              <KeyboardArrowDownRoundedIcon fontSize="small" color="primary" />
            </IconButton>
          </Box>
          <Mails />
        </Layout.SidePane>
        <Layout.Main>
          <EmailContent />
        </Layout.Main>
      </Layout.Root>
    </CssVarsProvider>
  );
}
