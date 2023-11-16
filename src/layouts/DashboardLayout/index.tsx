import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div>
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
