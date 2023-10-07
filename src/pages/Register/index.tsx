import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel, { formLabelClasses } from '@mui/joy/FormLabel';
import Link from '@mui/joy/Link';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import OuterLayout from '../../layouts/OuterLayout';
import GoogleIcon from '../../assets/icons/GoogleIcons';

interface FormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
  confirm: HTMLInputElement;
}
interface SignInFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

export default function Register() {
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
            Create a new account
          </Typography>
          <Typography level="body-sm" sx={{ my: 1, mb: 3 }}>
            Welcome to company
          </Typography>
        </div>
        <form
          onSubmit={(event: React.FormEvent<SignInFormElement>) => {
            event.preventDefault();
            const formElements = event.currentTarget.elements;
            const data = {
              email: formElements.email.value,
              password: formElements.password.value,
              confirm: formElements.confirm.value,
            };
            if (data.password !== data.confirm) {
              alert("passwords don't match");
            } else {
              window.location.assign('/dashboard');
            }
          }}
        >
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" name="email" />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              slotProps={{ input: { minLength: 8 } }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Confirm Password</FormLabel>
            <Input
              type="password"
              name="confirm"
              slotProps={{ input: { minLength: 8 } }}
            />
          </FormControl>

          <Button type="submit" fullWidth color="primary">
            Sign up
          </Button>
        </form>
        <Link href="/dashboard">
          <Button
            variant="outlined"
            color="neutral"
            fullWidth
            startDecorator={<GoogleIcon />}
          >
            Sign up with Google
          </Button>
        </Link>
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
          <Link fontSize="sm" href="/forgot-password" fontWeight="lg" ml="auto">
            Forgot your password?
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
