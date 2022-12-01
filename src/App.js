import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Layout, Home, News, NewsList, NewsItem, NoPage } from './pages';
import { ModeContextProvider } from './context';

import './App.css'

function App() {
  return (
    <>
      <ModeContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/index' element={<Navigate to='/' />} />
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='news' element={<News />}>
                <Route index element={<NewsList />} />
                <Route path=':id' element={<NewsItem />} />
              </Route>
              <Route path='*' element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ModeContextProvider>
    </>
  );
}

export default App;