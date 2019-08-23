import React from 'react'
import SearchBox from '../components/SearchBox'

export default function NoMatch({ location, history }) {
  return (
    <React.Fragment>
      <SearchBox location={location} history={history}/>

      <main className="section">
        <div className="container">
          <p className="has-text-centered">
            <strong className="has-text-weight-semibold">Parece que la página no existe.</strong>
          </p>
        </div>
      </main>
    </React.Fragment>
  )
}
