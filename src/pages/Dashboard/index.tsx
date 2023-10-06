import AspectRatio from '@mui/joy/AspectRatio';
import Avatar from '@mui/joy/Avatar';
import AvatarGroup from '@mui/joy/AvatarGroup';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Divider from '@mui/joy/Divider';
import Sheet from '@mui/joy/Sheet';
import Table from '@mui/joy/Table';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemContent from '@mui/joy/ListItemContent';

// Icons import
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import PermMediaIcon from '@mui/icons-material/PermMedia';

// custom
import InnerLayout from '../../layouts/InnerLayout';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <InnerLayout>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 2,
        }}
      >
        <Sheet
          variant="outlined"
          sx={{
            borderRadius: 'sm',
            gridColumn: '1/-1',
            display: { xs: 'none', sm: 'inherit' },
          }}
        >
          <Table
            sx={{
              '--TableCell-paddingX': '1rem',
              '--TableCell-paddingY': '1rem',
            }}
          >
            <thead>
              <tr>
                <th>Folder name</th>
                <th>Date modified</th>
                <th>Size</th>
                <th>Users</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Link
                    to="/dashboard/gallery"
                    style={{ textDecoration: 'none' }}
                  >
                    <Typography
                      level="body-sm"
                      startDecorator={<FolderOpenIcon color="primary" />}
                      sx={{ alignItems: 'flex-start' }}
                    >
                      Travel pictures
                    </Typography>
                  </Link>
                </td>
                <td>21 October 2011, 3PM</td>
                <td>
                  <Typography level="body-sm" color="success">
                    987.5MB
                  </Typography>
                </td>
                <td>
                  <AvatarGroup
                    size="sm"
                    sx={{
                      '--AvatarGroup-gap': '-8px',
                      '--Avatar-size': '24px',
                    }}
                  >
                    <Avatar
                      src="https://i.pravatar.cc/24?img=6"
                      srcSet="https://i.pravatar.cc/48?img=6 2x"
                    />
                    <Avatar
                      src="https://i.pravatar.cc/24?img=7"
                      srcSet="https://i.pravatar.cc/48?img=7 2x"
                    />
                    <Avatar
                      src="https://i.pravatar.cc/24?img=8"
                      srcSet="https://i.pravatar.cc/48?img=8 2x"
                    />
                    <Avatar
                      src="https://i.pravatar.cc/24?img=9"
                      srcSet="https://i.pravatar.cc/48?img=9 2x"
                    />
                  </AvatarGroup>
                </td>
              </tr>
              <tr>
                <td>
                  <Link
                    to="/dashboard/gallery"
                    style={{ textDecoration: 'none' }}
                  >
                    <Typography
                      level="body-sm"
                      startDecorator={<FolderOpenIcon color="primary" />}
                      sx={{ alignItems: 'flex-start' }}
                    >
                      Important documents
                    </Typography>
                  </Link>
                </td>
                <td>26 May 2010, 7PM</td>
                <td>
                  <Typography level="body-sm" color="success">
                    123.3KB
                  </Typography>
                </td>
                <td>
                  <AvatarGroup
                    size="sm"
                    sx={{
                      '--AvatarGroup-gap': '-8px',
                      '--Avatar-size': '24px',
                    }}
                  >
                    <Avatar
                      src="https://i.pravatar.cc/24?img=6"
                      srcSet="https://i.pravatar.cc/48?img=6 2x"
                    />
                    <Avatar
                      src="https://i.pravatar.cc/24?img=7"
                      srcSet="https://i.pravatar.cc/48?img=7 2x"
                    />
                    <Avatar
                      src="https://i.pravatar.cc/24?img=8"
                      srcSet="https://i.pravatar.cc/48?img=8 2x"
                    />
                    <Avatar
                      src="https://i.pravatar.cc/24?img=9"
                      srcSet="https://i.pravatar.cc/48?img=9 2x"
                    />
                  </AvatarGroup>
                </td>
              </tr>
            </tbody>
          </Table>
        </Sheet>

        <Sheet
          variant="outlined"
          sx={{
            display: { xs: 'inherit', sm: 'none' },
            borderRadius: 'sm',
            overflow: 'auto',
            '& > *': {
              '&:nth-child(n):not(:nth-last-child(-n+4))': {
                borderBottom: '1px solid',
                borderColor: 'divider',
              },
            },
          }}
        >
          <List
            aria-labelledby="table-in-list"
            sx={{
              '& .JoyListItemButton-root': { p: '0px' },
            }}
          >
            <ListItem>
              <ListItemButton variant="soft" sx={{ bgcolor: 'transparent' }}>
                <ListItemContent sx={{ p: 2 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      mb: 1,
                    }}
                  >
                    <Typography
                      level="body-sm"
                      startDecorator={<FolderOpenIcon color="primary" />}
                      sx={{ alignItems: 'flex-start' }}
                    >
                      Travel pictures
                    </Typography>
                    <Typography level="body-sm" sx={{ color: 'success.600' }}>
                      987.5MB
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      mt: 2,
                    }}
                  >
                    <div>
                      <AvatarGroup
                        size="sm"
                        sx={{
                          '--AvatarGroup-gap': '-8px',
                          '--Avatar-size': '24px',
                        }}
                      >
                        <Avatar
                          src="https://i.pravatar.cc/24?img=6"
                          srcSet="https://i.pravatar.cc/48?img=6 2x"
                        />
                        <Avatar
                          src="https://i.pravatar.cc/24?img=7"
                          srcSet="https://i.pravatar.cc/48?img=7 2x"
                        />
                        <Avatar
                          src="https://i.pravatar.cc/24?img=8"
                          srcSet="https://i.pravatar.cc/48?img=8 2x"
                        />
                        <Avatar
                          src="https://i.pravatar.cc/24?img=9"
                          srcSet="https://i.pravatar.cc/48?img=9 2x"
                        />
                      </AvatarGroup>
                    </div>
                    <Typography level="body-sm">
                      21 October 2011, 3PM
                    </Typography>
                  </Box>
                </ListItemContent>
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemButton variant="soft" sx={{ bgcolor: 'transparent' }}>
                <ListItemContent sx={{ p: 2 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      mb: 1,
                    }}
                  >
                    <Typography
                      level="body-sm"
                      startDecorator={<FolderOpenIcon color="primary" />}
                      sx={{ alignItems: 'flex-start' }}
                    >
                      Important documents
                    </Typography>
                    <Typography level="body-sm" sx={{ color: 'success.600' }}>
                      123.3KB
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      mt: 2,
                    }}
                  >
                    <div>
                      <AvatarGroup
                        size="sm"
                        sx={{
                          '--AvatarGroup-gap': '-8px',
                          '--Avatar-size': '24px',
                        }}
                      >
                        <Avatar
                          src="https://i.pravatar.cc/24?img=6"
                          srcSet="https://i.pravatar.cc/48?img=6 2x"
                        />
                        <Avatar
                          src="https://i.pravatar.cc/24?img=7"
                          srcSet="https://i.pravatar.cc/48?img=7 2x"
                        />
                        <Avatar
                          src="https://i.pravatar.cc/24?img=8"
                          srcSet="https://i.pravatar.cc/48?img=8 2x"
                        />
                        <Avatar
                          src="https://i.pravatar.cc/24?img=9"
                          srcSet="https://i.pravatar.cc/48?img=9 2x"
                        />
                      </AvatarGroup>
                    </div>
                    <Typography level="body-sm">26 May 2010, 7PM</Typography>
                  </Box>
                </ListItemContent>
              </ListItemButton>
            </ListItem>
          </List>
        </Sheet>

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
            <Link to="/dashboard/gallery">
              <IconButton variant="plain" color="neutral">
                <PermMediaIcon />
              </IconButton>
            </Link>
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
            <Link to="/dashboard/gallery">
              <IconButton variant="plain" color="neutral">
                <PermMediaIcon />
              </IconButton>
            </Link>
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
            <Link to="/dashboard/gallery">
              <IconButton variant="plain" color="neutral">
                <PermMediaIcon />
              </IconButton>
            </Link>
          </Box>
        </Card>
      </Box>
      <br />
    </InnerLayout>
  );
}
