import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Search, Bell, User } from "../assets/icons.jsx";
import SearchBar from "../views/searchbar.jsx";
import ToggleMode from "../components/toggleMode.jsx";
import SideBar from "../components/sidebar.jsx";
import { fetchSearch } from "../redux/reducers/searchSlice.js"
import { useDispatch } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("")

  const handleChange = (e) => {
    setSearchValue(e.target.value)
  };

  const getValue = (e) => {
    e.preventDefault();
    const saveToStorage = [];
    const retriveStoredData = JSON.parse(localStorage.getItem('searchResult'));

    if (searchValue !== '') {
      const toLowerCases = searchValue.toLowerCase()
      if (retriveStoredData) {
        retriveStoredData.push({ name: toLowerCases })
        localStorage.setItem('searchResult', JSON.stringify(retriveStoredData));
      } else {
        saveToStorage.push({ name: toLowerCases })
        localStorage.setItem('searchResult', JSON.stringify(saveToStorage));
      }
      dispatch(fetchSearch(toLowerCases));
      document.querySelector('.search').reset()
      setSearchValue("")
    }
  };

  return (
    <section className="justify-self-center flex justify-center items-center dark:bg-slate-800 bg-white rounded-lg p-3 ring-1 ring-slate-900/5 space-y-4 mx-auto sm:w-11/12 text-slate-900 dark:text-gray-400">
      <aside className="bg-slate-200 dark:bg-slate-900 w-full overflow-y-scrol flex overflow-x-clip">

        <SideBar />
        <section className="w-screen sm:px-10 px-5 sm:space-y-0 space-y-28">
          <aside className="sm:flex justify-between items-center sm:my-8 h-8 lg:w-auto w-9/12">

            <form onSubmit={getValue} className='search sm:w-full w-screen peer/search'>
              <Search />
              <input type="search" role="search" name="searchvalue" placeholder="Search by language translation" autoComplete="off" onChange={handleChange} />
            </form>
            <section className="z-50 absolute peer-focus-within/search:block top-24 searchBar lg:text-lg md:text-sm text-xs transition peer-hover/search:translate-y-5 translate-y-0 hidden duration-500 ease-in-out peer-hover/search:transform">
              <SearchBar />
            </section>

            <div className="flex items-center space-x-1 justify-between ">
              <User />
              <span className="truncate sm:w-28 w-3/6">Alexanda Joe</span>
              <Bell />
              <ToggleMode />
            </div>
          </aside>

          <Outlet />
        </section>
      </aside >
    </section >
  )
};

export default Dashboard;
