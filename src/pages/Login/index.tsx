import {
  Card,
  CardContent,
  Container,
  Box,
  Typography,
  TextField,
  Button,
  IconButton
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Person, Lock, Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';

const StyledBox = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    height: '100vh',
    alignItems: 'center'
    //backgroundColor: theme.palette.primary.main
  };
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Container maxWidth="xs">
      <StyledBox>
        <Card sx={{ width: '100%' }}>
          <CardContent>
            <Typography variant="h5" component="h1" textAlign="center" mb={4}>
              Login
            </Typography>
            <TextField
              fullWidth
              type='email'
              label="Email"
              placeholder="Type your e-mail"
              size="small"
              sx={{ mb: 2 }}
              InputProps={{
                startAdornment: (
                  <Person sx={{ color: (theme) => theme.palette.grey[500] }} />
                )
              }}
            />
            <TextField
              fullWidth
              label="Password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Type your Password"
              size="small"
              sx={{ mb: 4 }}
              InputProps={{
                startAdornment: (
                  <Lock sx={{ color: (theme) => theme.palette.grey[500] }} />
                ),
                endAdornment: (
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                )
              }}
            />
            <Box display="flex" justifyContent="center">
              <Button variant="contained">Login</Button>
            </Box>
          </CardContent>
        </Card>
      </StyledBox>
    </Container>
  );
};

export default Login;
