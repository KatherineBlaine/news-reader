import { Link } from 'react-router-dom'
import './ArticleCard.css'

const ArticleCard = ({ article }) => {
  console.log(article)
  return (
      <div className='card'>
        <img src={article.urlToImage}></img>
        <div className='card-right-content'>
          <h1>{article.title}</h1>
          <p>{article.description}</p>
        </div>
      </div>
  )
}

export default ArticleCard;