import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import api from '../services/api'

export default function SearchResults({ location }) {
  const params = new URLSearchParams(location.search)
  const query = params.get('search')

  const [ results, setResults ] = useState([])

  useEffect(() => {
    async function loadResults() {
      const response = await api.get(`?q=${query}`)

      setResults(response.data.items.slice(0, 4))
    }

    loadResults()
  }, [query])

  return (
    <div className="searchresults">
      <Link to='/'>
        Home
      </Link>
      { results.length ? (
        <ol>
          {results.map(result => (
            <li key={result.id}>
              <article className="media">
                <Link to={`/items/${result.id}`}>
                  <figure className="media-left">
                    <p className="image">
                      <img src={result.picture} alt={result.title}/>
                    </p>
                  </figure>
                  <div className="media-content">
                    <h2>{result.title}</h2>
                    <p>{result.price.amount}</p>
                    {result.free_shipping &&
                      <p>Envío gratis</p>
                    }
                  </div>
                </Link>
              </article>
            </li>
          ))}
        </ol>
      ) : (
        <div className="searchresults-none">
          <h2>No hay publicaciones que coincidan con tu búsqueda.</h2>
          <ul>
            <li>Revisá la ortografía de la palabra.</li>
            <li>Utilizá palabras más genéricas o menos palabras.</li>
          </ul>
        </div>
      ) }
    </div>
  )
}
