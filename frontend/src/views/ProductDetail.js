import React, { useState, useEffect } from 'react'

import SearchBox from '../components/SearchBox'
import Breadcrumb from '../components/Breadcrumb'
import ProductDetailComponent from '../components/ProductDetail'

import api from '../services/api'
import setPageTitle from '../utils/set-page-title'

export default function ProductDetail({ match, location, history }) {
  const [ details, setDetails ] = useState(null)

  useEffect(() => {
    async function loadDetails() {
      const { id } = match.params

      const response = await api.get(`/api/items/${id}`)

      setDetails(response.data.item)

      setPageTitle(`${response.data.item.title} en Mercado Libre`)
    }

    loadDetails()
  }, [match.params])

  return (
    <React.Fragment>
      <SearchBox location={location} history={history}/>

      <div className="container container--meli">
        <div className="columns is-centered">
          <div className="column is-10">
            <Breadcrumb/>

            <main className="section-container">
              { !details
                ? (
                  <div className="section">
                    <p>Cargando...</p>
                  </div>
                )
                : <ProductDetailComponent details={details}/>
              }
            </main>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
