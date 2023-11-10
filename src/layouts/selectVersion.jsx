import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBible, getFormValue } from '../redux/reducers/bibleSlice';
import SelectVersion from '../components/selectVersion';
import Loading from '../components/loading';

const SelectVersionFlow = () => {

  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState({ searchValue: '' });

  const { data, loading } = useSelector((state) => state.bibleReducer);

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
    <section className="containers">
      <aside className="select-version container">
        <h1 className="select-bible-h1">Select Bible</h1>
        <form onSubmit={getValue} className='search'>
          <input type="search" role="search" name="searchValue" placeholder="Search bible, pages, verses... " onChange={handleChange} />
        </form>
        <div className="rows">
          {data.map((items) => (<SelectVersion key={items.id} id={items.id} name={items.name} language={items.language.name} abbreviationLocal={items.abbreviationLocal}></SelectVersion>))}
        </div>
      </aside>
    </section>
  );
};

export default SelectVersionFlow;