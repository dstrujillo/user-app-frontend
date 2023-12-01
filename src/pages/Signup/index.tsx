import { CardContent, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// import { useAppDispatch } from '@/hooks/reduxHooks';
import { useSignupMutation } from '@/redux/services/user.service';
import SignupForm from './components/SignupForm';
import {
  StyledBox,
  StyledCard,
  StyledTitle
} from './components/styledComponents';

import { SignupFormDto } from './components/SignupForm/dtos/signupFormDtos';
// import { setAccessToken } from '@/redux/slices/user.slice';

const Signup = () => {
  const [signup] = useSignupMutation();
  // const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleSumbit = async (values: SignupFormDto) => {
    try {
      const response = await signup(values).unwrap();
      console.log(response);
      navigate('/login');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container maxWidth="xs">
      <StyledBox>
        <StyledCard>
          <CardContent>
            <StyledTitle variant="h5">Signup</StyledTitle>
            <SignupForm onSubmitMio={handleSumbit} />
          </CardContent>
        </StyledCard>
      </StyledBox>
    </Container>
  );
};

export default Signup;
