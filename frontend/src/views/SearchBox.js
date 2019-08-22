import React from 'react'
import { Link } from 'react-router-dom'

import setPageTitle from '../utils/set-page-title'

export default function SearchBox({ history }) {
  const searchformInput = React.createRef()

  function handleSubmit(event) {
    event.preventDefault()

    const query = searchformInput.current.value

    if (query !== '') {
      history.push(`/items?search=${query}`)
    }
  }

  setPageTitle('Mercado Libre')

  return (
    <div className="searchbox">
      <div className="searchbox-contents">

        <Link to="/" className="meli-logo">
          <img src="" alt="Mercado Libre"/>
        </Link>

        <div className="searchbox-form">
          <form role="search" onSubmit={handleSubmit}>
            <input
              className="searchform-input"
              id="searchbox-input"
              aria-label="Escribe lo que quieres encontrar"
              type="text"
              placeholder="Nunca dejes de buscar"
              ref={searchformInput}
            />
            <button className="searchform-button" type="submit" aria-label="Buscar"><img src="" alt="Buscar"/></button>
          </form>
        </div>

      </div>
    </div>
  )
}
