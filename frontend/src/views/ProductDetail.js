import React, { useState, useEffect } from 'react'

import SearchBox from '../components/SearchBox'
import Breadcrumb from '../components/Breadcrumb'
import ProductDetailComponent from '../components/ProductDetail'

import api from '../services/api'
import setPageTitle from '../utils/set-page-title'

export default function ProductDetail({ match, location, history }) {
  const [ details, setDetails ] = useState({})

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
    <div className="productdetail">
      <SearchBox location={location} history={history}/>

      <div className="productdetail-contents">
        <Breadcrumb/>

        <ProductDetailComponent details={details}/>
      </div>
    </div>
  )
}
