import React from 'react'

import formatCurrency from '../utils/format-currency'
import pluralize from '../utils/pluralize'
import getCondition from '../utils/get-condition'

export default function ProductDetail({ details }) {
  return (
    <article>
      <div className="productdetail-main">
        <div className="productdetail-info">
          <form onSubmit={(e) => e.preventDefault()}>
            <h1>{details.title}</h1>

            <p>
              <strong>
                {details.price && formatCurrency(details.price.amount)}
                {(details.price && details.price.decimals > 0) &&
                  <React.Fragment>
                    <span className="visually-hidden">,</span>
                    <span>{details.price.decimals}</span>
                  </React.Fragment>
                }
              </strong>
            </p>

            <ul>
              {details.condition !== 'not_specified' &&
                <li aria-label="Condición">{getCondition(details.condition)}</li>
              }
              <li aria-label="Cantidad vendida">{pluralize(details.sold_quantity, 'vendido')}</li>
            </ul>

            <button type="submit" title={`Comprar ${details.title}`}>Comprar</button>
          </form>
        </div>

        <figure>
          <img src={details.picture} alt={details.title}/>
        </figure>
      </div>

      <section className="productdetail-description">
        <h2>Descripción del producto</h2>

        <p style={{whiteSpace: 'pre-line'}}>{details.description}</p>
      </section>
    </article>
  )
}