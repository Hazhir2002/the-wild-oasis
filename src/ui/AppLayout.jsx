import { Outlet } from "react-router-dom";

import { Header, Sidebar } from "./index";

export function AppLayout() {
  return (
    <div>
      <Header />
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
