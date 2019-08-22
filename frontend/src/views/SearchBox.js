import React from 'react'

import SearchBoxComponent from '../components/SearchBox'

import setPageTitle from '../utils/set-page-title'

export default function SearchBox({ location, history }) {
  setPageTitle('Mercado Libre')

  return (
    <SearchBoxComponent location={location} history={history}/>
  )
}
