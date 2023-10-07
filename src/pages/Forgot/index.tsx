import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel, { formLabelClasses } from '@mui/joy/FormLabel';
import Link from '@mui/joy/Link';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import OuterLayout from '../../layouts/OuterLayout';

interface FormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
  persistent: HTMLInputElement;
}
interface SignInFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

export default function Forgot() {
  return (
    <OuterLayout>
      <Box
        component="main"
        sx={{
          my: 'auto',
          py: 2,
          pb: 5,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          width: 400,
          maxWidth: '100%',
          mx: 'auto',
          borderRadius: 'sm',
          '& form': {
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          },
          [`& .${formLabelClasses.asterisk}`]: {
            visibility: 'hidden',
          },
        }}
      >
        <div>
          <Typography component="h1" fontSize="xl2" fontWeight="lg">
            Reset your password here
          </Typography>
          <Typography level="body-sm" sx={{ my: 1, mb: 3 }}>
            Receive a temporary password
          </Typography>
        </div>
        <form
          onSubmit={(event: React.FormEvent<SignInFormElement>) => {
            event.preventDefault();
            const formElements = event.currentTarget.elements;
            const data = {
              email: formElements.email.value,
            };
            alert(JSON.stringify(data, null, 2));
          }}
        >
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" name="email" />
          </FormControl>

          <Link href="/dashboard">
            <Button type="button" fullWidth color="primary">
              Reset
            </Button>
          </Link>
        </form>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Link fontSize="sm" href="/" fontWeight="lg" mr="auto">
            Back to home
          </Link>
          <Link fontSize="sm" href="/sign-in" fontWeight="lg" ml="auto">
            Sign in
          </Link>
        </Box>
      </Box>
      <Box component="footer" sx={{ py: 3 }}>
        <Typography level="body-xs" textAlign="center">
          © Your company {new Date().getFullYear()}
        </Typography>
      </Box>
    </OuterLayout>
  );
}
