import React from 'react'
import { Link } from 'react-router-dom'

import formatCurrency from '../utils/format-currency'

export default function SearchResult({ result }) {
  return (
    <article className="media">
      <Link to={`/items/${result.id}`}>
        <figure className="media-left">
          <p className="image">
            <img src={result.picture} alt={result.title}/>
          </p>
        </figure>
        <div className="media-content">
          <h2>{result.title}</h2>
          <p>
            <strong>
              {formatCurrency(result.price.amount)}
              {result.price.decimals > 0 &&
                <React.Fragment>
                  <span className="visually-hidden">,</span>
                  <span>{result.price.decimals}</span>
                </React.Fragment>
              }
            </strong>
          </p>
          {result.free_shipping &&
            <p>Envío gratis</p>
          }
        </div>
      </Link>
    </article>
  )
}
