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
      <img className='details-img' src={article.urlToImage}></img>
      <h2>{article.title}</h2>
      <p className='art-content'>{article.content}</p>
      <a className='site-link' href={article.url}>Read more</a>
    </div>
  )
}

export default ArticleDetails;