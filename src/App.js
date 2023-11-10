import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SelectVersionFlow from './layouts/selectVersion';
import Layout from './layouts/layout';

function App() {
  const { isSelected } = JSON.parse(localStorage.getItem('data')) == null ? false : JSON.parse(localStorage.getItem('data'));
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={isSelected  ? <Layout /> : <SelectVersionFlow />} index></Route>
        <Route path='/home' element={<Layout />} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
