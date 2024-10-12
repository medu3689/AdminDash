import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="flex flex-col border-r border-gray-300 min-h-screen bg-white">
      <div className="h-16 flex items-center justify-center shadow-md">
        <Link to="/" className="text-lg font-bold text-indigo-600">
          StorAdmin
        </Link>
      </div>
      <hr className="border-gray-300" />
      <div className="px-2 flex-1">
        <ul className="list-none m-0 p-0">
          <p className="text-xs font-bold text-gray-500 mt-4 mb-2">MAIN</p>
          <Link to="/dashboard" className="block text-decoration-none">
            <li className="flex items-center p-2 cursor-pointer hover:bg-indigo-100 rounded transition-colors">
              <DashboardIcon className="text-indigo-600" />
              <span className="text-sm font-semibold text-gray-600 ml-2">Dashboard</span>
            </li>
          </Link>

          <p className="text-xs font-bold text-gray-500 mt-4 mb-2">LISTS</p>
          <Link to="/users" className="block text-decoration-none">
            <li className="flex items-center p-2 cursor-pointer hover:bg-indigo-100 rounded transition-colors">
              <PersonOutlineIcon className="text-indigo-600" />
              <span className="text-sm font-semibold text-gray-600 ml-2">Users</span>
            </li>
          </Link>
          <Link to="/products/new" className="block text-decoration-none">
            <li className="flex items-center p-2 cursor-pointer hover:bg-indigo-100 rounded transition-colors">
              <StoreIcon className="text-indigo-600" />
              <span className="text-sm font-semibold text-gray-600 ml-2">Games</span>
            </li>
          </Link>
          <Link to="/orders" className="block text-decoration-none">
            <li className="flex items-center p-2 cursor-pointer hover:bg-indigo-100 rounded transition-colors">
              <CreditCardIcon className="text-indigo-600" />
              <span className="text-sm font-semibold text-gray-600 ml-2">Orders</span>
            </li>
          </Link>

          <p className="text-xs font-bold text-gray-500 mt-4 mb-2">USEFUL</p>
          <li className="flex items-center p-2 cursor-pointer hover:bg-indigo-100 rounded transition-colors">
            <InsertChartIcon className="text-indigo-600" />
            <span className="text-sm font-semibold text-gray-600 ml-2">Stats</span>
          </li>
          <li className="flex items-center p-2 cursor-pointer hover:bg-indigo-100 rounded transition-colors">
            <NotificationsNoneIcon className="text-indigo-600" />
            <span className="text-sm font-semibold text-gray-600 ml-2">Notifications</span>
          </li>

          <p className="text-xs font-bold text-gray-500 mt-4 mb-2">SERVICE</p>
          <Link to="/dashboard/system-health" className="block text-decoration-none">
            <li className="flex items-center p-2 cursor-pointer hover:bg-indigo-100 rounded transition-colors">
              <SettingsSystemDaydreamOutlinedIcon className="text-indigo-600" />
              <span className="text-sm font-semibold text-gray-600 ml-2">System Health</span>
            </li>
          </Link>
          <Link to="/dashboard/logs" className="block text-decoration-none">
            <li className="flex items-center p-2 cursor-pointer hover:bg-indigo-100 rounded transition-colors">
              <PsychologyOutlinedIcon className="text-indigo-600" />
              <span className="text-sm font-semibold text-gray-600 ml-2">Logs</span>
            </li>
          </Link>
          <Link to="/dashboard/settings" className="block text-decoration-none">
            <li className="flex items-center p-2 cursor-pointer hover:bg-indigo-100 rounded transition-colors">
              <SettingsApplicationsIcon className="text-indigo-600" />
              <span className="text-sm font-semibold text-gray-600 ml-2">Settings</span>
            </li>
          </Link>

          <div className="flex flex-col border-r border-gray-300 min-h-screen bg-white">
      {/* Other sidebar content... */}
      <p className="text-xs font-bold text-gray-500 mt-4 mb-2">USER</p>
      <Link to="/admin-profile" className="block text-decoration-none">
        <li className="flex items-center p-2 cursor-pointer hover:bg-indigo-100 rounded transition-colors">
          <AccountCircleOutlinedIcon className="text-indigo-600" />
          <span className="text-sm font-semibold text-gray-600 ml-2">Profile</span>
        </li>
      </Link>
      <Link to="/logout" className="block text-decoration-none">
        <li className="flex items-center p-2 cursor-pointer hover:bg-indigo-100 rounded transition-colors">
          <ExitToAppIcon className="text-indigo-600" />
          <span className="text-sm font-semibold text-gray-600 ml-2">Logout</span>
        </li>
      </Link>
      {/* Other sidebar content... */}
    </div>
        </ul>
      </div>
      <div className="flex items-center m-2">
        <div
          className="w-5 h-5 rounded border border-indigo-600 cursor-pointer m-1 bg-gray-200"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="w-5 h-5 rounded border border-indigo-600 cursor-pointer m-1 bg-gray-800"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
