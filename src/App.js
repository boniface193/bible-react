import { useRoutes } from 'react-router-dom';
import NotFound from './layouts/notFound';
import SelectVersionFlow from './views/selectVersion';
import Index from './views/home';
import Layout from './layouts/layout';
import Dashboard from './layouts/dashboard';
import Book from './views/book';
import Chapters from './views/chapters';
import ChapterLayout from './layouts/chapterLayout';
import Verses from './views/verses';


function App() {
  const { isSelected } = JSON.parse(localStorage.getItem('data')) == null ? false : JSON.parse(localStorage.getItem('data'));
  const elements = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: isSelected ? <Dashboard /> : <SelectVersionFlow />,
          children: [
            { path: '/', name: "home", element: <Index />, Index: true, },
            {
              path: '/book', name: "Book", element: <Book />,
            },
            {
              path: "/chapters", element: <ChapterLayout />, children: [
                { path: '', name: 'chapters', element: <Chapters /> },
                { path: ':id', name: 'chaptersid', element: <Verses /> },
              ]
            },
          ]
        },
        {
          path: "*",
          name: "notfound",
          element: <NotFound />
        },
      ]
    }
  ]);
  return elements
}

export default App;
