import Articles from '../Articles/Articles';
import { fetchArticles } from '../../utilities/apicalls';
import Header from '../Header/Header';
import ArticleDetails from '../ArticleDetails/ArticleDetails';
import SearchResults from '../SearchResults/SearchResults';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [articles, setArticles] = useState({})

  const getArticles = async () => {
    try {
      const data = await fetchArticles('https://newsapi.org/v2/top-headlines?country=us&apiKey=7824ffd1a40e43bea1c847dfaab89839');
      setArticles(data)
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getArticles()
  }, [])

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