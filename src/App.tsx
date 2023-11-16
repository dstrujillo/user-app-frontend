/*import { Button, Avatar, Box, Typography } from '@mui/material';

/* const App = () => {
  return (
    <div>
      <Button variant="contained" sx={{ borderRadius: '25%' }}>
        Click
      </Button>
      <Button variant="outlined" style={{ borderRadius: '50%' }}>
        Click
      </Button>
      <Button variant="text">Click</Button>
      <Avatar src="https://scontent.fbog2-4.fna.fbcdn.net/v/t1.6435-1/48363274_10155779223411817_5339583327563153408_n.jpg?stp=dst-jpg_p480x480&_nc_cat=108&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=It76A5Q12QoAX_OL0K1&_nc_ht=scontent.fbog2-4.fna&oh=00_AfDow00J7ps4MABHHgRdqLnXhTSQqLtpEn5aHVBsmK44GQ&oe=657623CD"></Avatar>
      <Typography variant="h1" component="p">
        Título grande
      </Typography>
      <Box margin={1}>Este es un box</Box>
    </div>
  );
}; */

import ThemeConfig from "@/theme/ThemeConfig";
import RouterConfig from "@/routes/RouterConfig";

const App = () => {
  return (
    <ThemeConfig>
      <RouterConfig />
    </ThemeConfig>
  );
};

export default App;
