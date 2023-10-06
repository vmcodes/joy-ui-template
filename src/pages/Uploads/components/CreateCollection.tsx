import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Textarea from '@mui/joy/Textarea';

export default function CreateCollection() {
  return (
    <Box
      sx={{
        pt: 3,
        pb: 10,
        display: 'grid',
        gridTemplateColumns: {
          xs: '100%',
          sm: 'minmax(120px, 30%) 1fr',
          lg: '280px 1fr minmax(120px, 208px)',
        },
        columnGap: { xs: 2, sm: 3, md: 4 },
        rowGap: { xs: 2, sm: 2.5 },
        '& > hr': {
          gridColumn: '1/-1',
        },
      }}
    >
      <FormLabel sx={{ display: { xs: 'none', sm: 'block' } }}>
        Collection Name
      </FormLabel>
      <Box sx={{ display: { xs: 'contents', sm: 'flex' }, gap: 2 }}>
        <FormControl sx={{ flex: 1 }}>
          <FormLabel>Collection</FormLabel>
          <Input placeholder="Name" type="text" />
        </FormControl>
        <FormControl sx={{ flex: 1 }}></FormControl>
      </Box>
      <Divider role="presentation" />
      <FormLabel sx={{ display: { xs: 'none', sm: 'block' } }}>
        Content Description
      </FormLabel>
      <Box sx={{ display: { xs: 'contents', sm: 'flex' }, gap: 2 }}>
        <FormControl sx={{ flex: 1 }}>
          <FormLabel>Content</FormLabel>
          <Textarea placeholder="Description" minRows={3} />
        </FormControl>
        <FormControl sx={{ flex: 1 }}></FormControl>
      </Box>
      <Divider role="presentation" />
      <Box
        sx={{
          gridColumn: '1/-1',
          justifySelf: 'flex-start',
          display: 'flex',
          gap: 1,
        }}
      >
        <Button variant="outlined" color="neutral" size="sm">
          Cancel
        </Button>
        <Button size="sm">Create</Button>
      </Box>
    </Box>
  );
}
