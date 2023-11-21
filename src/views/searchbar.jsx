import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchBook } from '../redux/reducers/bookSlice';
import SelectCard from '../components/selectCard';
import { ArrowLeft, ArrowRight, OutlinedArrowLeft, OutlinedArrowRight } from '../assets/icons';

const SearchBar = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.bookReducer);
  const [left, setLeft] = useState(true);
  const [right, setRight] = useState(true);
  const sorting = [{ name: "relevance" }, { name: "canonical" }, { name: "reverse canonical" }];
  const [selectedSort, setSelectedSort] = useState(0);
  const retriveStoredData = JSON.parse(localStorage.getItem('searchResult')) !== null ? JSON.parse(localStorage.getItem('searchResult')) : [{ name: '' }]

  useEffect(() => {
    dispatch(fetchBook())
  }, [dispatch]);

  const handleLeft = () => {
    const slidesContainer = document.querySelector(".slides-container-2");
    if (Math.sign(slidesContainer.scrollLeft -= 350) === -1) {
      setLeft(false)
      setRight(true)
    } else {
      setLeft(true)
      slidesContainer.scrollLeft -= 350
    }
  };

  const handleRight = () => {
    const slidesContainer = document.querySelector(".slides-container-2");
    const slide = slidesContainer.scrollLeft += 1
    if (slide === 10528) {
      setRight(false)
      setLeft(true)
    } else {
      slidesContainer.scrollLeft += 350
      setRight(true)
    }
  };


  return <div className="sm:mx-0  sm:w-3/4 w-11/12"
  >
    <div className="top-6 p-6 dark:bg-slate-800 bg-white rounded-xl shadow-xl">
      <div className="grid gap-6">
        <h1
          className="capitalize text-slate-800 dark:text-slate-500 tracking-wider font-medium text-2xl"
        >
          Try searching for
        </h1>
        <div>
          <p
            className="uppercase text-slate-500 tracking-wider font-medium text-[13px]"
          >
            Sort Category
          </p>
          <ul className="sm:flex sm:space-x-2 dark:text-slate-200 mt-2">
            {sorting.map((items, index) => (
              <li key={index}>
                <button className={`uppercase p-2 text-sm font-mono rounded-lg ${selectedSort === index ? 'bg-blue-600 text-white' : 'outlined'}`} onClick={() => setSelectedSort(index)}>{items.name}</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="overflow-x-auto">
          <p
            className="uppercase text-slate-500 tracking-wider font-medium text-[13px]"
          >
            Bibles and pages
          </p>
          <section className="flex space-x-5 mt-2">
            <aside className={left ? 'text-blue-600 cursor-pointer' : ''} onClick={() => handleLeft()}>
              {left ? <OutlinedArrowLeft /> : <ArrowLeft />}
            </aside>
            <aside className={right ? 'text-blue-600 cursor-pointer' : ''} onClick={() => handleRight()}>
              {right ? <OutlinedArrowRight /> : <ArrowRight />}
            </aside>
          </section>
          <section className="slides-container-2 space-x-4 flex mx-auto items-center p-3 snap-mandatory overflow-hidden overflow-x-auto scroll-smooth">
            {data.map((item) => (<SelectCard key={item.id} items={item} width={'w-32'} classes={'drop-shadow-xl dark:bg-slate-900 bg-white'} />))}
          </section>
        </div>
        <div className="overflow-x-auto w-full">
          <p
            className="uppercase text-slate-500 tracking-wider font-medium text-[13px]"
          >
            Key words
          </p>
          <section className="py-2">
            <ul className="flex space-x-2">
              {retriveStoredData.map((items, index) => (
                <li key={index} className=" text-slate-900 font-medium">
                  <span className="bg-gray-300 px-4 py-1 rounded-md"> {items.name}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  </div>
};

export default SearchBar;