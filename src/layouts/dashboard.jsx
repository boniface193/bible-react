import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Home, Schedule, Account, FileManager, Group, Close, Search, Bell, User, Book, OutlinedHome, OutlinedSchedule, OutlinedAccount, OutlinedFileManager, OutlinedGroup, OutlinedClose, OutlinedBook } from "../assets/icons.jsx";
import Logo from "../assets/logo.svg";

const Dashboard = () => {
  const getCurrentLocation = useLocation()
  const [isEnlarge, setEnlarge] = useState(true);
  const [selected, setSelected] = useState(getCurrentLocation.pathname);


  const handleChange = (e) => {
  };

  const getValue = (e) => {
    e.preventDefault();
  };

  let nav = [
    {
      icon: <Home />,
      selectedIcon: <OutlinedHome />,
      text: "Dashboard",
      route: "/"
    },
    {
      icon: <Book />,
      selectedIcon: <OutlinedBook />,
      text: "Book",
      route: "/book"
    },
    {
      icon: <Schedule />,
      selectedIcon: <OutlinedSchedule />,
      text: "Schedules",
      route: "/schedule"
    },
    {
      icon: <Account />,
      selectedIcon: <OutlinedAccount />,
      text: "Acount Manager",
      route: "/account"
    },
    {
      icon: <FileManager />,
      selectedIcon: <OutlinedFileManager />,
      text: "File Manager",
      route: "/filemanager"
    },
    {
      icon: <Group />,
      selectedIcon: <OutlinedGroup />,
      text: "Group Manager",
      route: "/group"
    }
  ];

  let enlarge = {
    decrease: <Close />,
    enlarge: <OutlinedClose />,
    text: "Group Manager"
  };

  return (
    <section className="justify-self-center flex justify-center items-center dark:bg-slate-800 bg-white rounded-lg p-3 ring-1 ring-slate-900/5 space-y-4 mx-auto sm:w-11/12 text-slate-900 dark:text-gray-400">
      <aside className="bg-slate-200 dark:bg-slate-900 w-full overflow-y-scrol flex overflow-x-clip">
        <header className={`h-[90vh] inline-flex flex-col justify-between shadow sm:p-6 p-2 ${isEnlarge ? 'md:w-[25rem] w-[35rem]' : ''}`}>
          <aside className="flex space-x-3 items-center">
            <img src={Logo} alt="logo" className="h-14 w-14 p-1 bg-gray-100 rounded-lg border border-solid border-gray-200 hover:border-gray-300" onClick={() => setEnlarge(!isEnlarge)} />
            <span className="font-medium text-3xl select-none">{isEnlarge ? "Bible" : ""}</span>
          </aside>

          <nav className="inline-flex flex-col space-y-2">
            {nav.map((link, index) => (
              <Link key={index} to={link.route} className={`flex items-center py-2 cursor-pointer hover:bg-gray-100 ${isEnlarge ? 'pl-2 pr-6 rounded-lg w-[13rem]' : 'justify-center rounded-full w-12'} ${selected === link.route ? 'bg-blue-100 text-blue-600' : ''}`} onClick={() => setSelected(link.route)}>
                <span className={`w-8 h-8 p-1 ${isEnlarge ? 'mr-4' : ''}`}> {selected === link.route ? link.selectedIcon : link.icon}</span>
                <span className="font-medium select-none">{isEnlarge ? link.text : ''}</span>
              </Link>
            ))}
          </nav>
          <button className="h-8 w-8 p-1 bg-gray-100 text-gray-600 rounded-lg border border-solid border-gray-200 hover:border-gray-300" onClick={() => setEnlarge(!isEnlarge)}>
            <span>{isEnlarge ? enlarge.decrease : enlarge.enlarge}</span>
          </button>
        </header>
        <section className="w-screen sm:px-10 px-5 sm:space-y-0 space-y-28">
          <aside className="sm:flex justify-between items-center sm:my-8 h-8 w-4/5">
            <form onSubmit={getValue} className='search sm:w-3/4 w-screen'>
              <Search />
              <input type="search" role="search" name="searchValue" placeholder="Search by language translation " onChange={handleChange} />
            </form>
            <div className="flex items-center space-x-1">
              <User />
              <span className="truncate sm:w-28 w-3/6">Alexanda Joe</span>
              <Bell />
            </div>
          </aside>
          
          <Outlet />
        </section>
      </aside >
    </section >
  )
};

export default Dashboard;