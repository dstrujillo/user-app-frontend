import { Card, Box, Typography } from '@mui/material';

import { styled } from '@mui/material';

export const StyledBox = styled(Box)(() => {
  return {
    display: 'flex',
    height: '100vh',
    alignItems: 'center'
    //backgroundColor: theme.palette.primary.main
  };
});

export const StyledCard = styled(Card)(({ theme }) => {
  return {
    width: '100%',
    padding: theme.spacing(3, 4, 3, 4),
    borderRadius: theme.shape.borderRadius
  };
});

export const StyledTitle = styled(Typography)(({ theme }) => {
  return {
    textAlign: 'center',
    marginBottom: theme.spacing(4),
    fontSize: theme.typography.h5.fontSize
  };
});
