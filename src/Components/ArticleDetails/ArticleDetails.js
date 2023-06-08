import { sampleArticle } from '../../SampleData/sampleArticle';
import { useState, useEffect } from 'react';
import './ArticleDetails.css'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ArticleDetails = ({ articles }) => {
  const [article, setArticle] = useState({})

  const params = useParams()

  useEffect(() => {
    const selectedArticle = articles.articles.find(article => article.title === params.title)
    setArticle(selectedArticle)
  }, [])

  return (
    <div className='details'>
      <Link to='/'><button>Home</button></Link>
      <h1>Article Details</h1>
      <h2>{article.title}</h2>
      <img src={article.urlToImage}></img>
      <a href={article.url}>{article.url}</a>
      <p>{article.content}</p>
    </div>
  )
}

export default ArticleDetails;