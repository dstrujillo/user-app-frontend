import { Link, Outlet } from 'react-router-dom';

import ButtonAppBar from '@/components/Navbar';

const DashboardLayout = () => {
  return (
    <div>
      <ButtonAppBar />
      Layout dashboard
      <br />
      <Link to="/"> Home</Link>
      <br />
      <Link to="/products">Products</Link>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
