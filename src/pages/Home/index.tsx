import { useGetUsersQuery } from '@/redux/services/user.service';
import { Link } from 'react-router-dom';
import { Card, Container } from '@mui/material';

const Home = () => {
  const { data } = useGetUsersQuery('');
  const user = data?.users || [];
  console.log(data);
  return (
    <div>
      <h1>Home page</h1>
      <br />

      {user.map((user: { name: string; email: string; _id: string }) => (
        <Container key={user._id} maxWidth="lg" sx={{ mt: 1, mb: 1 }}>
          <Link
            key={user._id}
            to={`/user/${user._id}`}
            style={{ textDecoration: 'none' }}
          >
            <Card key={user._id} sx={{ pt: 1, pb: 1, pl: 2 }}>
              {user.name} : {user.email}
            </Card>
          </Link>
        </Container>
      ))}
      <br />
    </div>
  );
};

export default Home;
