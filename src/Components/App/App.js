import Articles from '../Articles/Articles';
import ArticleDetails from '../ArticleDetails/ArticleDetails';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { sampleArticles } from '../../SampleData/sampleArticles';
import './App.css';

const App = () => {
  const [articles, setArticles] = useState({})

  useEffect(() => {
    setArticles(sampleArticles)
  }, [])
  
  return (
    <>
    <h1>News Reader</h1>
      <Routes>
        <Route path='/' element={articles && <Articles articles={articles}/>} />
        <Route path='/:title' element={<ArticleDetails />} />
      </Routes>
    </>
  );
}

export default App;