import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import api from '../services/api'
import setPageTitle from '../utils/set-page-title'
import formatCurrency from '../utils/format-currency'

export default function SearchResults({ location }) {
  const [ results, setResults ] = useState([])

  useEffect(() => {
    async function loadResults() {
      const params = new URLSearchParams(location.search)
      const query = params.get('search')

      const response = await api.get(`/api/items?q=${query}`)

      setResults(response.data.items.slice(0, 4))

      setPageTitle(`${query} en Mercado Libre`)
    }

    loadResults()
  }, [location.search])

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
                    <p>
                      <strong>
                        {formatCurrency(result.price.amount)}
                        {result.price.decimals > 0 &&
                          <React.Fragment>
                            <span className="visually-hidden">,</span>
                            <span>{result.price.decimals}</span>
                          </React.Fragment>
                        }
                      </strong>
                    </p>
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
