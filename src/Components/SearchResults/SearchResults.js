import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import ArticleCard from '../ArticleCard/ArticleCard';
import './SearchResults.css'

const SearchResults = ({ articles }) => {
  const params = useParams()

  const articleResults = articles.filter(article => article.title.toUpperCase().includes(params.query.toUpperCase()))

  const articleCards = articleResults.map(article => {
    return <ArticleCard article={article} key={article.title}/>
  })

  return (
    <>
      <div className='results-header'>
        <Link to='/'><button>Home</button></Link>
        {articleCards.length ? <h2>{`Results for '${params.query}'`}</h2> : <h2>{`Sorry, no results for '${params.query}.' Please try searching for something else!`}</h2>}
      </div>
      <div>{articleCards}</div> 
    </>
  )
}

export default SearchResults;