import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import SearchBox from './views/SearchBox'
import SearchResults from './views/SearchResults'
import ProductDetail from './views/ProductDetail'

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={SearchBox}></Route>
      <Route path="/items" exact component={SearchResults}></Route>
      <Route path="/items/:id" component={ProductDetail}></Route>
    </BrowserRouter>
  )
}
