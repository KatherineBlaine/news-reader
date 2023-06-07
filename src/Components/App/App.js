import Articles from '../Articles/Articles';
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
      <Articles articles={articles}/>
    </>
  );
}

export default App;