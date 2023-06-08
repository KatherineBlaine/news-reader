import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Form.css'

const Form = () => {
  const [query, setQuery] = useState('')

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <form>
      <input value={query} onChange={(e) => handleChange(e)}/>
      <Link to={`/search/${query}`}><button>Search</button></Link>
    </form>
  )
}

export default Form;