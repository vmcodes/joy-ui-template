import { useEffect, useState } from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';

import Box from '@mui/joy/Box';
import CssBaseline from '@mui/joy/CssBaseline';
import IconButton from '@mui/joy/IconButton';

// Icons import
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';

import framesxTheme from '../../theme/home';
import HeroLeft01 from './components/HeroLeft01';
import HeroLeft02 from './components/HeroLeft02';
import HeroLeft03 from './components/HeroLeft03';
import HeroLeft04 from './components/HeroLeft04';
import HeroLeft05 from './components/HeroLeft05';
import HeroLeft06 from './components/HeroLeft06';
import HeroLeft07 from './components/HeroLeft07';
import HeroLeft08 from './components/HeroLeft08';
import HeroLeft09 from './components/HeroLeft09';
import HeroLeft10 from './components/HeroLeft10';

function HomeSchemeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <IconButton
      id="toggle-mode"
      size="lg"
      variant="soft"
      color="neutral"
      onClick={() => {
        if (mode === 'light') {
          setMode('dark');
        } else {
          setMode('light');
        }
      }}
      sx={{
        position: 'fixed',
        zIndex: 999,
        top: '1rem',
        right: '2rem',
        borderRadius: '50%',
        boxShadow: 'sm',
      }}
    >
      {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
    </IconButton>
  );
}

export default function Home() {
  return (
    <CssVarsProvider disableTransitionOnChange theme={framesxTheme}>
      <CssBaseline />
      <HomeSchemeToggle />
      <Box
        sx={{
          height: '100vh',
          overflowY: 'scroll',
          scrollSnapType: 'y mandatory',
          '& > div': {
            scrollSnapAlign: 'start',
          },
        }}
      >
        <HeroLeft01 />
        <HeroLeft02 />
        <HeroLeft03 />
        <HeroLeft04 />
        <HeroLeft05 />
        <HeroLeft06 />
        <HeroLeft07 />
        <HeroLeft08 />
        <HeroLeft09 />
        <HeroLeft10 />
      </Box>
    </CssVarsProvider>
  );
}
