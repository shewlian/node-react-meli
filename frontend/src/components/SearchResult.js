import React from 'react'
import { Link } from 'react-router-dom'

import formatCurrency from '../utils/format-currency'

export default function SearchResult({ result }) {
  return (
    <article className="search-result">
      <Link className="search-result-link media" to={`/items/${result.id}`}>
        <figure className="search-result-media-left media-left">
          <p className="search-result-image image">
            <img src={result.picture} alt={result.title}/>
          </p>
        </figure>

        <div className="search-result-media-content media-content">
          <h2 className="search-result-title">{result.title}</h2>

          <div className="search-result-info">
            <p>
              <strong>
                <span className="search-result-price">{formatCurrency(result.price.amount)}</span>
                {result.price.decimals > 0 &&
                  <React.Fragment>
                    <span className="visually-hidden">,</span>
                    <span className="search-result-price-decimals">{result.price.decimals}</span>
                  </React.Fragment>
                }
              </strong>
            </p>

            {result.free_shipping &&
              <p>
                <span className="search-result-free-shipping" aria-hidden="true" title="Envío gratis"></span>
                <span className="is-sr-only">Envío gratis</span>
              </p>
            }
          </div>
        </div>
      </Link>
    </article>
  )
}
