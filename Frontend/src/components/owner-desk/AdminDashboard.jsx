import { FiCreditCard, FiMail, FiUser, FiUsers } from "react-icons/fi";
import { GiClothes } from "react-icons/gi";
import { Link, Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="p-4 h-full m-5">
      {/* <p className="text-xl font-semibold mb-6">Settings</p> */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <Card
          title="Active Users"
          subtitle="Manage profiles"
          href="user"
          Icon={FiUser}
        />
        <Card title="All Products" subtitle="Preview Products" href="preview" Icon={FiUsers} />
        <Card title="Orders" subtitle="Manage orders" href="inbox" Icon={FiMail} />
        <Card
          title="Products"
          subtitle="Create Products"
          href="products"
          Icon={GiClothes}
        />
      </div>
      {/* Render nested routes */}
      <div className="mt-8">
        <Outlet />
      </div>
    </div>
  );
};

const Card = ({ title, subtitle, Icon, href }) => {
  return (
    <Link
      to={href}
      className="w-full p-6 rounded-lg border border-slate-300 relative overflow-hidden group bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />

      <Icon className="absolute z-10 -top-10 -right-10 text-8xl text-slate-100 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-4 text-3xl text-violet-600 group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
        {subtitle}
      </p>
    </Link>
  );
};

export default AdminDashboard;
