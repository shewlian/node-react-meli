import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Breadcrumb from '../components/Breadcrumb'
import ProductDetailComponent from '../components/ProductDetail'

import api from '../services/api'
import setPageTitle from '../utils/set-page-title'

export default function ProductDetail({ match }) {
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
      <Link to='/'>
        Home
      </Link>
      <div className="productdetail-contents">
        <Breadcrumb/>

        <ProductDetailComponent details={details}/>
      </div>
    </div>
  )
}
