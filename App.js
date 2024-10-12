import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import AddProductForm from "./pages/new/AddProductForm";
import Orders from "./pages/new/Orders";
import ImageUploadForm from "./pages/new/ImageUploadForm";
import AdminProfile from "./profile/AdminProfile"; // Import AdminProfile
import Logout from "./profile/Logout"; // Import Logout
import Logs from "./pages/service/Logs"; // Import Logs
import Settings from "./pages/service/Settings"; // Import Settings
import SystemHealth from "./pages/service/SystemHealth"; // Import SystemHealth
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { userInputs } from "./formSource";
import "./style/dark.scss";
import "./style/Tailwind.css";
import { useContext } from "react";
import { DarkModeContext } from "../src/context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<AddProductForm />} />
            </Route>
            <Route path="orders" element={<Orders />} />
            <Route path="dashboard" element={<ImageUploadForm />} />
            <Route path="admin-profile" element={<AdminProfile />} />
            <Route path="logout" element={<Logout />} />

            {/* Add these routes under the dashboard */}
            <Route path="dashboard/logs" element={<Logs />} />
            <Route path="dashboard/settings" element={<Settings />} />
            <Route path="dashboard/system-health" element={<SystemHealth />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
