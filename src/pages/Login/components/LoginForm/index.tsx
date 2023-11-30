import { Box, Button, IconButton } from '@mui/material';
import { useState } from 'react';
import CustomTextField from '@/components/CustomTextField';
import { Person, Lock, Visibility, VisibilityOff } from '@mui/icons-material';
import { useFormik } from 'formik';
import { validationSchema } from '../utils/validation';
import { LoginFormDto } from './dtos/loginFormDtos';

interface LoginFormProps {
  onSubmitMio?: (values: LoginFormDto) => void;
}

const LoginForm = ({ onSubmitMio = () => {} }: LoginFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  /*const [formData, setFormData] = useState<{ email: string; password: string }>(
    {
      email: '',
      password: ''
    }
  );*/
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema,
    onSubmit: (values) => {
      onSubmitMio(values);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <CustomTextField
        textFieldProps={{
          name: 'email',
          label: 'Email',
          placeholder: 'Type your e-mail',
          error: Boolean(formik.errors.email),
          helperText: formik.errors.email,
          InputProps: {
            startAdornment: (
              <Person sx={{ color: (theme) => theme.palette.grey[500] }} />
            )
          },
          onChange: formik.handleChange
        }}
      />
      <CustomTextField
        textFieldProps={{
          name: 'password',
          type: showPassword ? 'text' : 'password',
          label: 'Password',
          placeholder: 'Type your Password',
          error: Boolean(formik.errors.password),
          helperText: formik.errors.password,
          InputProps: {
            startAdornment: (
              <Lock sx={{ color: (theme) => theme.palette.grey[500] }} />
            ),
            endAdornment: (
              <IconButton onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            )
          },
          onChange: formik.handleChange
        }}
      />
      <Box display="flex" justifyContent="center">
        <Button variant="contained" type="submit">
          Login
        </Button>
      </Box>
    </form>
  );
};

export default LoginForm;
