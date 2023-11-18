import * as yup from 'yup';
import { LoginFormDto } from '../LoginForm/dtos/loginFormDtos';

export const validationSchema: yup.ObjectSchema<LoginFormDto> = yup.object({
  email: yup
    .string()
    .email('El email debe ser válido')
    .required('El email es requerido'),
  password: yup
    .string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .matches(/^(?=.*[A-Z])/, 'La contraseña debe tener al menos una mayúscula')
    .matches(/^(?=.*[a-z])/, 'La contraseña debe tener al menos una minúscula')
    .matches(/^(?=.*[0-9])/, 'La contraseña debe tener al menos un número')
    .required('La constraseña es requerida')
});
