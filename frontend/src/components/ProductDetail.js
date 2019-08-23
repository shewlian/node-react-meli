import React from 'react'

import formatCurrency from '../utils/format-currency'
import pluralize from '../utils/pluralize'
import getCondition from '../utils/get-condition'

export default function ProductDetail({ details }) {
  return (
    <article className="product-detail">
      <div className="columns">
        <form className="product-detail-info-column column is-one-third" onSubmit={(e) => e.preventDefault()}>
          <div className="product-detail-info">
            <h1 className="product-detail-title">{details.title}</h1>

            <p>
              <strong className="product-detail-price">
                {details.price && formatCurrency(details.price.amount)}
                {(details.price && details.price.decimals > 0) &&
                  <React.Fragment>
                    <span className="is-sr-only">,</span>
                    <span className="product-detail-price-decimals">{details.price.decimals}</span>
                  </React.Fragment>
                }
              </strong>
            </p>

            <ul className="product-detail-meta">
              {details.condition !== 'not_specified' &&
                <li className="product-detail-meta-item" aria-label="Condición">{getCondition(details.condition)}</li>
              }
              <li className="product-detail-meta-item" aria-label="Cantidad vendida">{pluralize(details.sold_quantity, 'vendido')}</li>
            </ul>

            <button className="product-detail-button button" type="submit" title={`Comprar ${details.title}`}>Comprar</button>
          </div>
        </form>

        <figure className="column image">
          <img className="product-detail-image" src={details.picture} alt={details.title}/>
        </figure>
      </div>

      <section className="product-detail-description">
        <h2 className="product-detail-description-title">Descripción del producto</h2>

        <p className="product-detail-description-body">{details.description}</p>
      </section>
    </article>
  )
}
