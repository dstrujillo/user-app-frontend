import { CardContent, Container } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
// import { useAppDispatch } from '@/hooks/reduxHooks';
import { useSignupMutation } from '@/redux/services/user.service';
import SignupForm from './components/SignupForm';
import {
  StyledBox,
  StyledCard,
  StyledTitle
} from './components/styledComponents';

import { SignupFormDto } from './components/SignupForm/dtos/signupFormDtos';
import { useSnackbar } from 'notistack';
// import { setAccessToken } from '@/redux/slices/user.slice';

const Signup = () => {
  const [signup, { isLoading }] = useSignupMutation();
  // const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSumbit = async (values: SignupFormDto) => {
    try {
      await signup(values).unwrap();
      enqueueSnackbar('Login exitoso', {
        variant: 'success',
        transitionDuration: 3000,
        autoHideDuration: 1500
      });
      navigate('/login');
    } catch (err) {
      console.log(err);
      enqueueSnackbar('Hubo un error, por favor intente nuevamente'),
        { variant: 'error' };
    }
  };

  return (
    <Container maxWidth="xs">
      <StyledBox>
        <StyledCard>
          <CardContent>
            <StyledTitle variant="h5">Signup</StyledTitle>
            <SignupForm isLoading={isLoading} onSubmitMio={handleSumbit} />
            <Link to="/login">Login</Link>
          </CardContent>
        </StyledCard>
      </StyledBox>
    </Container>
  );
};

export default Signup;
