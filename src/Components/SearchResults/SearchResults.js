import { useParams } from 'react-router';
import ArticleCard from '../ArticleCard/ArticleCard';
import './SearchResults.css'

const SearchResults = ({ articles }) => {
  const params = useParams()

  const articleResults = articles.articles.filter(article => article.title.includes(params.query))

  const articleCards = articleResults.map(article => {
    return <ArticleCard article={article} />
  })

  return (
    <div>{articleCards}</div>
  )
}

export default SearchResults;