import React from 'react'
import { Link } from 'react-router-dom'

export default function SearchBox({ location, history }) {
  const searchformInput = React.createRef()

  function handleSubmit(event) {
    event.preventDefault()

    const query = searchformInput.current.value

    if (query !== '') {
      history.push(`/items?search=${query}`)
    }
  }

  function searchformInputValue() {
    const params = new URLSearchParams(location.search)
    const hasSearch = params.has('search')

    if (hasSearch) {
      return params.get('search')
    }

    return ''
  }

  return (
    <div className="searchbox">
      <div className="searchbox-contents container">
        <div className="columns is-vcentered">
          <div className="column is-1 is-offset-1">
            <Link to="/" className="meli-logo">
              <span className="is-sr-only">Mercado Libre</span>
            </Link>
          </div>

          <div className="column is-9">
            <div className="searchbox-form">
              <form role="search" onSubmit={handleSubmit}>
                <div className="field has-addons">
                  <div className="control is-expanded">
                    <input
                      className="searchbox-input input"
                      id="searchbox-input"
                      aria-label="Escribe lo que quieres encontrar"
                      type="text"
                      defaultValue={searchformInputValue()}
                      placeholder="Nunca dejes de buscar"
                      ref={searchformInput}
                    />
                  </div>

                  <div className="control">
                    <button className="searchbox-button button" type="submit" aria-label="Buscar">
                      <span className="searchbox-button-icon" aria-hidden="true"></span>
                      <span className="is-sr-only">Buscar</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
