import { CardContent, Container } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { useLoginMutation } from '@/redux/services/user.service';
import LoginForm from './components/LoginForm';
import {
  StyledBox,
  StyledCard,
  StyledTitle
} from './components/styledComponents';
import { useSnackbar } from 'notistack';

import { LoginFormDto } from './components/LoginForm/dtos/loginFormDtos';
import { setAccessToken } from '@/redux/slices/user.slice';

const Login = () => {
  const [login, { isLoading }] = useLoginMutation();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSumbit = async (values: LoginFormDto) => {
    try {
      const response = await login(values).unwrap();
      enqueueSnackbar('Login exitoso', {
        variant: 'success',
        transitionDuration: 3000,
        autoHideDuration: 1500
      });
      dispatch(setAccessToken(response.accessToken));
      navigate('/');
    } catch (e) {
      enqueueSnackbar('Hubo un error, por favor intente nuevamente'),
        { variant: 'error' };
    }
  };

  return (
    <Container maxWidth="xs">
      <StyledBox>
        <StyledCard>
          <CardContent>
            <StyledTitle variant="h5">Login</StyledTitle>
            <LoginForm isLoading={isLoading} onSubmitMio={handleSumbit} />
            <Link to="/signup">Signup</Link>
          </CardContent>
        </StyledCard>
      </StyledBox>
    </Container>
  );
};

export default Login;
