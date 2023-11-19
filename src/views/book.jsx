import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBook } from '../redux/reducers/bookSlice';
import SelectCard from '../components/selectCard';
import { ArrowLeft, ArrowRight, OutlinedArrowLeft, OutlinedArrowRight } from '../assets/icons';

const Book = () => {
  const dispatch = useDispatch();
  const { data, showRandomText, status } = useSelector((state) => state.bookReducer);
  const [left, setLeft] = useState(true);
  const [right, setRight] = useState(true);

  useEffect(() => {
    dispatch(fetchBook())
  }, [dispatch]);

  const handleLeft = () => {
    const slidesContainer = document.querySelector(".slides-container");
    if (Math.sign(slidesContainer.scrollLeft -= 250) === -1) {
      setLeft(false)
      setRight(true)
    } else {
      setLeft(true)
      slidesContainer.scrollLeft -= 250
    }
  };

  const handleRight = () => {
    const slidesContainer = document.querySelector(".slides-container");
    const slide = slidesContainer.scrollLeft += 1;
    if (slide === 10528) {
      setRight(false)
      setLeft(true)
    } else {
      slidesContainer.scrollLeft += 250
      setRight(true)
    }
  };

  return <section >
    <span className='sm:text-xl text-xl font-mono capitalize text-red-600'>{status}</span>
    <h1 className="sm:text-3xl text-xl font-medium font-mono capitalize">Keep The Story going</h1>
    <p className="text-sm font-medium my-5 sm:w-1/2 w-4/5">{showRandomText}</p>

    <aside className="my-20">
      <section className="flex space-x-5 mb-4">
        <aside className={left ? 'text-blue-600 cursor-pointer' : ''} onClick={() => handleLeft()}>
          {left ? <OutlinedArrowLeft /> : <ArrowLeft />}
        </aside>
        <aside className={right ? 'text-blue-600 cursor-pointer' : ''} onClick={() => handleRight()}>
          {right ? <OutlinedArrowRight /> : <ArrowRight />}
        </aside>
      </section>

      <section className="slides-container space-x-4 flex mx-auto w-[54rem] items-center snap-mandatory overflow-x-scroll scroll-smooth">
        {data.map((item) => (<SelectCard key={item.id} items={item} width={'sm:w-52 w-44'} classes={'dark:bg-slate-800 bg-white'} />))}
      </section>
    </aside>
  </section>
};

export default Book;