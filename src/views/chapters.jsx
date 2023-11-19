import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChapter } from '../redux/reducers/chapterSlice';
import { Link } from 'react-router-dom';

const Chapters = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.chapterReducer);
  const { name } = JSON.parse(localStorage.getItem('book'));
  useEffect(() => {
    dispatch(fetchChapter())
  }, [dispatch]);

  if (status) {
    return <span className='flex justify-center py-20 sm:text-xl text-xl font-mono capitalize text-red-600'>{status}</span>
  }
  return <section>
    <h1 className="sm:text-3xl text-xl font-medium font-mono capitalize">{name}</h1>
    <div className="pt-20">
      <aside className="h-96 items-center justify-center overflow-y-scroll clamps flex border border-solid border-slate-400 p-4 rounded-lg sm:mx-auto flex-wrap">
        {data.map((items) => (
          <Link to={items.id} onClick={() => localStorage.setItem('chapter', JSON.stringify({id: items.id}))} key={items.id} className="w-14 h-10 m-3 bg-slate-400 hover:bg-blue-500 cursor-pointer justify-center text-xl font-mono flex items-center rounded-lg text-white">
            {items.number}
          </Link>
        ))}
      </aside>
    </div>
  </section>
};

export default Chapters;