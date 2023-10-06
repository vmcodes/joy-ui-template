import Box from '@mui/joy/Box';
import { chipClasses } from '@mui/joy/Chip';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import CreateCollection from './components/CreateCollection';
import UploadFolder from './components/UploadFolder';
import UploadFile from './components/UploadFile';
import { TabPanel } from '@mui/joy';
import InnerLayout from '../../layouts/InnerLayout';

export default function Uploads() {
  return (
    <InnerLayout>
      <Box
        sx={{
          flex: 1,
          maxWidth: 1200,
          width: '100%',
          mx: 'auto',
        }}
      >
        <Tabs defaultValue={0} sx={{ bgcolor: 'transparent' }}>
          <Box
            sx={{
              '--_shadow-height': '16px',
              height: 0,
              position: 'sticky',
              top: 'calc(48px - var(--main-paddingTop, 0px) + var(--Header-height, 0px) - (var(--_shadow-height) / 2))',
              zIndex: 1,
              '&::before': {
                content: '""',
                display: 'block',
                position: 'relative',
                zIndex: 1,
                height: 'var(--_shadow-height)',
                background:
                  'radial-gradient(closest-side, rgba(0 0 0 / 0.12), transparent 100%)',
              },
            }}
          />
          <TabList
            sticky="top"
            variant="plain"
            sx={(theme) => ({
              '--Chip-minHeight': '20px',
              '--ListItem-minHeight': '48px',
              top: 'calc(-1 * (var(--main-paddingTop, 0px) - var(--Header-height, 0px)))',
              zIndex: 10,
              width: '100%',
              overflow: 'auto hidden',
              alignSelf: 'flex-start',
              scrollSnapType: 'inline',
              '&::after': {
                pointerEvents: 'none',
                display: { xs: 'block', sm: 'none' },
                content: '""',
                position: 'sticky',
                top: 0,
                width: 40,
                flex: 'none',
                zIndex: 1,
                right: 0,
                borderBottom: '1px solid transparent',
                background: `linear-gradient(to left, ${theme.vars.palette.background.body}, rgb(0 0 0 / 0))`,
                backgroundClip: 'content-box',
              },
              '&::-webkit-scrollbar': {
                width: 0,
                display: 'none',
              },
              [`& .${tabClasses.root}`]: {
                '--focus-outline-offset': '-2px',
                '&:first-of-type': {
                  ml: 'calc(-1 * var(--ListItem-paddingX))',
                },
                scrollSnapAlign: 'start',
                bgcolor: 'transparent',
                flex: 'none',
                '&:hover': {
                  bgcolor: 'transparent',
                },
                [`&.${tabClasses.selected}`]: {
                  color: 'primary.plainColor',
                  bgcolor: 'transparent',
                  [`& .${chipClasses.root}`]: theme.variants.solid.primary,
                },
              },
            })}
          >
            <Tab indicatorInset value={0}>
              Create Collection
            </Tab>
            <Tab indicatorInset value={1}>
              Upload File
            </Tab>
            <Tab indicatorInset value={2}>
              Upload Folder
            </Tab>
          </TabList>
          <TabPanel value={0}>
            <CreateCollection />
          </TabPanel>
          <TabPanel value={1}>
            <UploadFile />
          </TabPanel>
          <TabPanel value={2}>
            <UploadFolder />
          </TabPanel>
        </Tabs>
      </Box>
    </InnerLayout>
  );
}
