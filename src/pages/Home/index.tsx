import { useGetUsersQuery } from '@/redux/services/user.service';
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
          <Card key={user._id}>
            {user.name} : {user.email}
          </Card>
        </Container>
      ))}
      <br />
    </div>
  );
};

export default Home;
