import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { useAppSelector } from '@/hooks/reduxHooks';

interface AuthGuardProps {
  children: ReactNode;
}

const AuthGuard = ({ children }: AuthGuardProps) => {
  const { accessToken } = useAppSelector((state) => state.userSlice);

  const isAuthenticated = accessToken ? true : false;
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};

export default AuthGuard;
