import ArticleCard from '../ArticleCard/ArticleCard';
import Form from '../Form/Form';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Articles.css'

const Articles = ({ articles }) => {
  
  const articleCards = articles.articles?.map(article => {
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