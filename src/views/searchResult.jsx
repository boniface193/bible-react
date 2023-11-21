import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { fetchChapterByID } from '../redux/reducers/chapterSlice';

const SearchResult = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const { data, status } = useSelector((state) => state.searchReducer);
  const verses = data.verses === undefined ? [] : data.verses;

  const changeToNextRoute = (params) => {
    dispatch(fetchChapterByID(params))
    // navigate(`/chapters/${params.id}`)
  }

  if (status) {
    return <span className='flex justify-center py-20 sm:text-xl text-xl font-mono capitalize text-red-600'>{status}</span>
  }

  return <section className="py-8 space-y-5">
    <h1 className="sm:text-2xl text-center text-xl font-medium font-mono capitalize">{data.query === "undefined" ? 'please make a search' : data.query}</h1>

    {verses.length !== 0 ?
      < div className="sm:flex justify-between sm:space-y-2 space-y-2">
        <p className="text-sm font-medium capitalize">total search count is {data.total}</p>
        <p className="text-sm font-medium capitalize">verse Count is {data.verseCount}</p>
      </div> :
      <p className="text-xl text-center"> No Result</p>
    }

    {
      verses.map((item) => (
        <Link replace to={`/chapters/${item.id}`} key={item.id} onClick={() => changeToNextRoute({ id: item.chapterId })} className="">
          <div className="bg-slate-300 cursor-pointer mb-4 dark:bg-slate-800 h-auto rounded-lg p-2 space-y-2 sm:w-full w-3/4">
            <p className="text-sm font-semibold capitalize">{item.reference}</p>
            <p className="text-sm">{item.text}</p>
          </div>
        </Link>
      ))
    }
  </section >
};

export default SearchResult