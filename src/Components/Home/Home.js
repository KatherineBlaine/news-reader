import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const [keyword, setKeyword] = useState('')

  useEffect(() => {
    console.log(keyword)
  }, [keyword])

  return (
    <div className='search'>
      <input name='search' onChange={(event) => setKeyword(event.target.value)}/>
      <Link to={`/${keyword}`}>SEARCH</Link>
    </div>
  )
}

export default Home;