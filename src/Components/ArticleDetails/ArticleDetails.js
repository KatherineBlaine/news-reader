import { sampleArticle } from '../../SampleData/sampleArticle';
import { useState, useEffect } from 'react';
import './ArticleDetails.css'

const ArticleDetails = () => {
  const [article, setArticle] = useState({})

  useEffect(() => {
    setArticle(sampleArticle)
  }, [])

  return (
    <div className='details'>
      <h1>Article Details</h1>
      <h2>{article.title}</h2>
      <img src={article.urlToImage}></img>
      <a href={article.url}>{article.url}</a>
      <p>{article.content}</p>
    </div>
  )
}

export default ArticleDetails;