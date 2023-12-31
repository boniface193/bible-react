import { useNavigate, Link } from "react-router-dom";

const SelectVersion = ({ id, abbreviationLocal, name, language }) => {

  const navigate = useNavigate()
  function selectVersion() {
    navigate('/')
    localStorage.setItem("data", JSON.stringify({
      isSelected: true,
      id
    }))
  }

  return (
    <Link replace reloadDocument onClick={selectVersion} className="group cursor-pointer hover:bg-blue-600 hover:text-white w-80 justify-self-center flex flex-col justify-center items-center dark:bg-slate-800 bg-white rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-lg space-y-4 text-slate-900 dark:text-white">
      <p className="mt-2 text-sm">{abbreviationLocal}</p>
      <h3 className="text-xl font-medium tracking-tight group-hover:font-bold">{name}</h3>
      <p className="mt-2 text-sm">{language}</p>
    </Link>
  )
}

export default SelectVersion;