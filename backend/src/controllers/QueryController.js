const axios = require('axios')

const countDecimals = require('../utils/countDecimals')
const uniq = require('../utils/uniq')

module.exports = {
  async index(request, response) {
    const { q: query } = request.query
    const { name, lastname } = request.headers

    if (!query) {
      return response.json({ message: 'No query (q) provided.' })
    }

    const meliApiResponse = await axios.get(
      `https://api.mercadolibre.com/sites/MLA/search?q=${query}`
    )

    const { results } = meliApiResponse.data

    const categories = uniq(results.map(result => result.category_id))

    const items = results.map(
      ({ id, title, currency_id, price, thumbnail, condition, shipping }) => ({
        id,
        title,
        price: {
          currency: currency_id,
          amount: price,
          decimals: countDecimals(price)
        },
        picture: thumbnail,
        condition,
        free_shipping: shipping.free_shipping
      })
    )

    const queryResponse = {
      author: {
        name,
        lastname
      },
      categories,
      items
    }

    return response.json(queryResponse)
  }
}
