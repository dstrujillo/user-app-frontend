import { Link, useParams } from 'react-router-dom';
import { useGetUserQuery } from '@/redux/services/user.service';
import { Container, Typography } from '@mui/material';

const User = () => {
  const { id } = useParams();
  const { data } = useGetUserQuery(id);
  console.log(data);
  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Link to="/"> Ir a la lista de usuarios</Link>
      <Typography variant="h4" component="h1" gutterBottom>
        User {id}
      </Typography>
      <pre>{JSON.stringify(data?.user, null, 2)}</pre>
    </Container>
  );
};

export default User;
