import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChapterByID } from '../redux/reducers/chapterSlice';
import { ArrowDown, ArrowUp } from "../assets/icons";

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
  return <section className="md:flex justify-center md:space-y-0 space-y-9 overflow-y-auto">
    <aside className="flex md:flex-row flex-col md:space-x-9 space-x-0 md:space-y-0 space-y-8">
      <aside className="flex sm:flex-row flex-col-reverse justify-around lg:space-x-20 space-x-4">
        <div className="space-y-5 my-10">
          <div className="border border-slate-300 w-10 text-slate-500 h-10 flex items-center justify-center rounded-full cursor-pointer" onClick={() => setNextPage(chapter.next)}>
            <ArrowUp />
          </div>
          <div className="border border-slate-300 w-10 text-slate-500 h-10 flex items-center justify-center rounded-full cursor-pointer" onClick={() => setNextPage(chapter.previous)}>
            <ArrowDown />
          </div>
        </div>
        <div className="bg-blue-600 w-[13rem] h-[14rem] justify-self-center flex flex-col justify-center items-center rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-lg space-y-4 text-white z-10">
          <p className="mt-2 text-sm">{chapter.reference}</p>
          <h3 className="text-xl font-medium tracking-tight">{chapter.id}</h3>
        </div>
      </aside>
      <aside className="space-y-2 sm:w-auto w-4/5 z-10">
        <h1 className="sm:text-3xl text-xl font-medium font-mono capitalize">verse Count is {chapter.verseCount}</h1>
        <p className="text-lg font-medium">Keep the Faith</p>
        <p className="text-sm font-medium text-ellipsis sm:w-80">{chapter.copyright}</p>
      </aside>
    </aside>
    <aside className="bg-slate-300 md:absolute top-[20rem] flex md:flex-row flex-col justify-center rounded-md w-4/5 text-slate-700">
      <div className="md:w-full md:mx-14  md:mt-16 m-10 md:mb-5 h-[50vh] overflow-y-auto">
        <p className="text-lg font-medium ">Description</p>
        <aside className="format-all" dangerouslySetInnerHTML={{ __html: chapter.content }}>
        </aside>
      </div>
      <div className="w-[30%] md:m-14">
        <aside className="space-y-2">
          <h1>Developer</h1>
          <p className="text-sm font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sit ducimus voluptatum, at aut architecto, placeat esse asperiores quibusdam facere delectus natus dolore officiis dolor labore cumque fugit vitae deserunt.</p>
        </aside>
      </div>
    </aside>
  </section>
};

export default Verses;
