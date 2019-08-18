import React from 'react'

export default function SearchBox({ history }) {
  const searchformInput = React.createRef()

  function handleSubmit(event) {
    event.preventDefault()

    const query = searchformInput.current.value

    if (query !== '') {
      history.push(`/items?search=${query}`)
    }
  }

  return (
    <div className="searchbox">
      <div className="searchbox-contents">

        <a href="/" className="meli-logo"><img src="" alt="Mercado Libre"/></a>

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
