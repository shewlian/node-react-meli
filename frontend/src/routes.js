import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import SearchBox from './views/SearchBox'
import SearchResults from './views/SearchResults'
import ProductDetail from './views/ProductDetail'
import NoMatch from './views/NoMatch'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SearchBox}></Route>
        <Route path="/items" exact component={SearchResults}></Route>
        <Route path="/items/:id" component={ProductDetail}></Route>
        <Route component={NoMatch}></Route>
      </Switch>
    </BrowserRouter>
  )
}
