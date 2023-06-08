import Articles from '../Articles/Articles';
import Header from '../Header/Header';
import ArticleDetails from '../ArticleDetails/ArticleDetails';
import SearchResults from '../SearchResults/SearchResults';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { sampleArticles } from '../../SampleData/sampleArticles';
import './App.css';

const App = () => {
  const [articles, setArticles] = useState(sampleArticles)
  
  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element={articles && <Articles articles={articles} />} />
        <Route path='/search/:query' element={articles && <SearchResults articles={articles} />} />
        <Route path='/:title' element={<ArticleDetails articles={articles}/>} />
      </Routes>
    </>
  );
}

export default App;