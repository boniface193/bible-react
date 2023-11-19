import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <section className="containers">
      <Outlet />
    </section>
  )
}

export default Layout;
