import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '@/hooks/reduxHooks';
import { Switch } from '@mui/material';
import { setThemeMode } from '@/redux/slices/settings.slice';

const Home = () => {
  const themeMode = useAppSelector((state) => state.settings.themeMode);

  const dispatch = useAppDispatch();
  const handleChangeTheme = () => {
    dispatch(setThemeMode(themeMode === 'light' ? 'dark' : 'light'));
  };
  return (
    <div>
      <Switch checked={themeMode === 'dark'} onChange={handleChangeTheme} />
      Theme: {themeMode}
      <h1>Home page</h1>
      <br />
      <Link to="login">Login</Link>
      <br />
    </div>
  );
};

export default Home;
