import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';

// Icons import
import LaunchIcon from '@mui/icons-material/Launch';

// custom
import InnerLayout from '../../layouts/InnerLayout';

export default function Gallery() {
  return (
    <InnerLayout>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 2,
        }}
      >
        <Card
          variant="outlined"
          sx={{
            '--Card-radius': (theme) => theme.vars.radius.sm,
            boxShadow: 'none',
          }}
        >
          <CardOverflow
            sx={{
              borderBottom: '1px solid',
              borderColor: 'neutral.outlinedBorder',
            }}
          >
            <AspectRatio ratio="16/9" color="primary">
              <Typography
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'primary.plainColor',
                }}
              >
                .zip
              </Typography>
            </AspectRatio>
          </CardOverflow>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ flex: 1 }}>
              <Typography>photos-travel.zip</Typography>
              <Typography level="body-xs" mt={0.5}>
                Added 25 May 2011
              </Typography>
            </Box>
            <IconButton variant="plain" color="neutral">
              <LaunchIcon />
            </IconButton>
          </Box>
        </Card>
        <Card
          variant="outlined"
          sx={{
            '--Card-radius': (theme) => theme.vars.radius.sm,
            boxShadow: 'none',
          }}
        >
          <CardOverflow
            sx={{
              borderBottom: '1px solid',
              borderColor: 'neutral.outlinedBorder',
            }}
          >
            <AspectRatio ratio="16/9" color="primary">
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'primary.plainColor',
                }}
              >
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&w=774"
                />
              </Box>
            </AspectRatio>
          </CardOverflow>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ flex: 1 }}>
              <Typography>torres-del-paine.png</Typography>
              <Typography level="body-xs" mt={0.5}>
                Added 5 Aug 2016
              </Typography>
            </Box>
            <IconButton variant="plain" color="neutral">
              <LaunchIcon />
            </IconButton>
          </Box>
        </Card>
        <Card
          variant="outlined"
          sx={{
            '--Card-radius': (theme) => theme.vars.radius.sm,
            boxShadow: 'none',
          }}
        >
          <CardOverflow
            sx={{
              borderBottom: '1px solid',
              borderColor: 'neutral.outlinedBorder',
            }}
          >
            <AspectRatio ratio="16/9" color="primary">
              <Typography
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'primary.plainColor',
                }}
              >
                .zip
              </Typography>
            </AspectRatio>
          </CardOverflow>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ flex: 1 }}>
              <Typography>platform_ios.zip</Typography>
              <Typography level="body-xs" mt={0.5}>
                Added 26 May 2011
              </Typography>
            </Box>
            <IconButton variant="plain" color="neutral">
              <LaunchIcon />
            </IconButton>
          </Box>
        </Card>
      </Box>
      <br />
    </InnerLayout>
  );
}
