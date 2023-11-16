import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBible, getFormValue } from '../redux/reducers/bibleSlice';
import SelectVersion from '../components/selectVersion';
import Loading from '../components/loading';
import { Search } from '../assets/icons';

const SelectVersionFlow = () => {

  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState({ searchValue: '' });

  const { searchedBible, loading, status } = useSelector((state) => state.bibleReducer);

  useEffect(() => {
    dispatch(fetchBible())
  }, [dispatch]);

  const handleChange = (e) => {
    setFormValue(e.target.value);
  };

  const getValue = (e) => {
    e.preventDefault();
    if (formValue.searchValue !== '') {
      document.querySelector('.search').reset();
      const toLowerCaseText = formValue.toLowerCase();
      dispatch(getFormValue(
        toLowerCaseText,
      ));
    }
    setFormValue({ searchValue: '' });
  };

  if (loading) {
    return (
      <Loading />
    )
  }

  return (
    <aside className="select-version container">
      <h1 className="select-bible-h1">Select Bible</h1>
      <form onSubmit={getValue} className='search my-9 justify-center'>
        <Search />
        <input type="search" role="search" name="searchValue" placeholder="Search by language translation " onChange={handleChange} />
      </form>
      <p className='dark:text-slate-200'>{status}</p>
      <div className="rows">
        {searchedBible.map((items) => (<SelectVersion key={items.id} id={items.id} name={items.name} language={items.language.name} abbreviationLocal={items.abbreviationLocal}></SelectVersion>))}
      </div>
    </aside>
  );
};

export default SelectVersionFlow;