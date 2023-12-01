import { CardContent, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { useLoginMutation } from '@/redux/services/user.service';
import LoginForm from './components/LoginForm';
import {
  StyledBox,
  StyledCard,
  StyledTitle
} from './components/styledComponents';

import { LoginFormDto } from './components/LoginForm/dtos/loginFormDtos';
import { setAccessToken } from '@/redux/slices/user.slice';

const Login = () => {
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleSumbit = async (values: LoginFormDto) => {
    const response = await login(values).unwrap();
    dispatch(setAccessToken(response.accessToken));
    navigate('/');
  };

  return (
    <Container maxWidth="xs">
      <StyledBox>
        <StyledCard>
          <CardContent>
            <StyledTitle variant="h5">Login</StyledTitle>
            <LoginForm onSubmitMio={handleSumbit} />
          </CardContent>
        </StyledCard>
      </StyledBox>
    </Container>
  );
};

export default Login;
