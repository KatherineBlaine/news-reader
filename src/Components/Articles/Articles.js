import ArticleCard from '../ArticleCard/ArticleCard';
import './Articles.css'

const Articles = ({ articles }) => {
  console.log(articles.articles)
  const articleCards = articles.articles?.map(article => {
    return <ArticleCard article={article} />
  })

  return (
    <div>
      <h1>Articles!</h1>
      <div>{articleCards}</div>
    </div>
  )
}

export default Articles;