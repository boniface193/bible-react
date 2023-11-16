const SelectCard = ({ items }) => {
  return <section onClick={() => localStorage.setItem('book', JSON.stringify(items))} className="group cursor-pointer hover:bg-blue-600 hover:text-white h-40 dark:bg-slate-800 bg-white rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-lg space-y-4 text-slate-900 dark:text-white">
    <div className="w-52 flex flex-col justify-center items-center">
      <p className="mt-2 text-sm">{items.id}</p>
      <h3 className="text-xl font-medium tracking-tight group-hover:font-bold">{items.name}</h3>
    </div>
  </section>
};

export default SelectCard;