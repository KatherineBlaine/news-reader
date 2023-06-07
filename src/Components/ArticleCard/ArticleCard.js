import './ArticleCard.css'

const ArticleCard = ({ article }) => {
  console.log(article)
  return (
    <div className='card'>
      <img src={article.urlToImage}></img>
      <h1>{article.title}</h1>
      <p>{article.description}</p>
    </div>
  )
}

export default ArticleCard;