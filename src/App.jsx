import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  Dashboard,
  Bookings,
  Cabins,
  Users,
  Settings,
  Account,
  Login,
  PageNotFound,
} from "./pages";
// import { GlobalStyles } from "./styles";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="cabins" element={<Cabins />} />
        <Route path="users" element={<Users />} />
        <Route path="settings" element={<Settings />} />
        <Route path="account" element={<Account />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
