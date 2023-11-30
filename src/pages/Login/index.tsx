import { CardContent, Container } from '@mui/material';

import { useLoginMutation } from '@/redux/services/user.service';
import LoginForm from './components/LoginForm';
import {
  StyledBox,
  StyledCard,
  StyledTitle
} from './components/styledComponents';

import { LoginFormDto } from './components/LoginForm/dtos/loginFormDtos';

const Login = () => {
  const [login] = useLoginMutation();
  const handleSumbit = async (values: LoginFormDto) => {
    await login(values).unwrap();
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
