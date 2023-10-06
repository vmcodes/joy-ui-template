import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import DropZone from './DropZone';
import { Option, Select } from '@mui/joy';

export default function UploadFile() {
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
        File Name
      </FormLabel>
      <Box sx={{ display: { xs: 'contents', sm: 'flex' }, gap: 2 }}>
        <FormControl sx={{ flex: 1 }}>
          <FormLabel sx={{ display: { sm: 'none' } }}>File Name</FormLabel>
          <Input placeholder="Name" />
        </FormControl>
        <FormControl sx={{ flex: 1 }}>
          <FormLabel sx={{ display: { sm: 'none' } }}></FormLabel>
        </FormControl>
      </Box>
      <Divider role="presentation" />
      <FormLabel sx={{ display: { xs: 'none', sm: 'block' } }}>
        Description
      </FormLabel>
      <Box sx={{ display: { xs: 'contents', sm: 'flex' }, gap: 2 }}>
        <FormControl sx={{ flex: 1 }}>
          <FormLabel sx={{ display: { sm: 'none' } }}>Description</FormLabel>
          <Input placeholder="Description" />
        </FormControl>
        <FormControl sx={{ flex: 1 }}>
          <FormLabel sx={{ display: { sm: 'none' } }}></FormLabel>
        </FormControl>
      </Box>
      <Divider role="presentation" />
      <FormLabel sx={{ display: { xs: 'none', sm: 'block' } }}>
        Collection
      </FormLabel>
      <Box sx={{ display: { xs: 'contents', sm: 'flex' }, gap: 2 }}>
        <FormControl sx={{ flex: 1 }}>
          <FormLabel sx={{ display: { sm: 'none' } }}>Collection</FormLabel>
          <Select placeholder="Collection">
            <Option value="option1">Option 1</Option>
            <Option value="option2">Option 2</Option>
            <Option value="option3">Option 3</Option>
          </Select>
        </FormControl>
        <FormControl sx={{ flex: 1 }}>
          <FormLabel sx={{ display: { sm: 'none' } }}></FormLabel>
        </FormControl>
      </Box>
      <Divider role="presentation" />
      <FormLabel>File Upload</FormLabel>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: 2.5,
        }}
      >
        <DropZone />
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
        <Button size="sm">Upload</Button>
      </Box>
    </Box>
  );
}
