import ArticleCard from '../ArticleCard/ArticleCard';
import Form from '../Form/Form';
import './Articles.css'

const Articles = ({ articles }) => {
  
  const articleCards = articles?.map(article => {
      return <ArticleCard article={article} key={article.title}/>
    })

  return (
    <>
      <Form />
      <div className='card-container'>{articleCards}</div>
    </>
  )
}

export default Articles;