import React, { useState, useEffect } from 'react'

import SearchBox from '../components/SearchBox'
import Breadcrumb from '../components/Breadcrumb'
import SearchResult from '../components/SearchResult'

import api from '../services/api'
import setPageTitle from '../utils/set-page-title'

export default function SearchResults({ location, history }) {
  const [ results, setResults ] = useState(null)

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
      <SearchBox location={location} history={history}/>

      <Breadcrumb/>

      { !results
        ? <p>Cargando...</p>
        : results.length
        ? (
          <ol>
            {results.map(result => (
              <li key={result.id}>
                <SearchResult result={result}/>
              </li>
            ))}
          </ol>
          )
        : (
          <div className="searchresults-none">
            <h2>No hay publicaciones que coincidan con tu búsqueda.</h2>
            <ul>
              <li>Revisá la ortografía de la palabra.</li>
              <li>Utilizá palabras más genéricas o menos palabras.</li>
            </ul>
          </div>
          )
      }
    </div>
  )
}
