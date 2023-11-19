import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChapterByID } from '../redux/reducers/chapterSlice';
import { ArrowDown, ArrowUp, Linkedin, Twitter, WellFound } from "../assets/icons";

const Verses = () => {
  const dispatch = useDispatch();
  const { chapter, status } = useSelector((state) => state.chapterReducer);
  const [nextPage, setNextPage] = useState({});

  useEffect(() => {
    dispatch(fetchChapterByID(nextPage))
  }, [dispatch, nextPage]);

  if (status) {
    return <span className='flex justify-center py-20 sm:text-xl text-xl font-mono capitalize text-red-600'>{status}</span>
  }
  return <section className="lg:flex flex-row-reverse justify-center space-y-8 pb-4">
    <aside className="space-y-8 md:space-x-8 flex lg:flex-col md:flex-row flex-col w-full lg:w-2/5">
      <aside className="flex justify-around items-center space-x-3 sm:w-80 w-3/4">
        <div className="space-y-5">
          <div className="border border-slate-300 w-10 text-slate-500 h-10 flex items-center justify-center rounded-full cursor-pointer" onClick={() => setNextPage(chapter.next)}>
            <ArrowUp />
          </div>
          <div className="border border-slate-300 w-10 text-slate-500 h-10 flex items-center justify-center rounded-full cursor-pointer" onClick={() => setNextPage(chapter.previous)}>
            <ArrowDown />
          </div>
        </div>
        <div className="bg-blue-600 w-[13rem] h-[14rem] flex flex-col justify-center items-center rounded-lg ring-1 ring-slate-900/5 shadow-lg space-y-4 text-white">
          <p className="mt-2 text-sm">{chapter.reference}</p>
          <h3 className="text-xl font-medium tracking-tight">{chapter.id}</h3>
        </div>
      </aside>
      <aside className="space-y-4">
        <h1 className="sm:text-3xl text-xl font-medium font-mono capitalize">verse Count is {chapter.verseCount}</h1>
        <p className="text-lg font-medium">Keep the Faith</p>
        <p className="text-sm font-medium sm:w-full w-3/4">{chapter.copyright}</p>
        <p className="text-lg font-medium">Developer</p>
        <div className="flex space-x-3 cursor-pointer">
          <a rel="noreferrer" href="https://www.linkedin.com/in/boniface-ikechukwu" target="_blank">
            <Linkedin />
          </a>
          <a rel="noreferrer" target="_blank" href="https://twitter.com/bidtechnologies">
            <Twitter />
          </a>
          <a rel="noreferrer" target="_blank" href="https://wellfound.com/u/ikechukwu-ikechukwu">
            <WellFound />
          </a>
        </div>
      </aside>
    </aside>
    <aside className="bg-slate-300 rounded-md text-slate-700 lg:w-2/3 w-[77%] sm:w-full sm:p-10 p-5 h-[75vh] overflow-y-auto">
      <aside className="w-full">
        <p className="text-lg font-medium ">Description</p>
        <aside className="format-all" dangerouslySetInnerHTML={{ __html: chapter.content }}>
        </aside>
      </aside>
    </aside>
  </section>
};

export default Verses;
