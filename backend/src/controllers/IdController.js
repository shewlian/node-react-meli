const axios = require('axios')

const countDecimals = require('../utils/countDecimals')

module.exports = {
  async index(request, response) {
    const { productId } = request.params

    const meliApiResponse = await axios.all([
      axios.get(`https://api.mercadolibre.com/items/${productId}`),
      axios.get(`https://api.mercadolibre.com/items/${productId}/description`)
    ])

    const {
      id,
      title,
      currency_id,
      price,
      pictures,
      condition,
      shipping,
      sold_quantity
    } = meliApiResponse[0].data

    const { plain_text } = meliApiResponse[1].data

    const queryResponse = {
      author: {
        name: '',
        lastname: ''
      },
      item: {
        id,
        title,
        price: {
          currency: currency_id,
          amount: price,
          decimals: countDecimals(price)
        },
        picture: pictures[0].url,
        condition,
        free_shipping: shipping.free_shipping,
        sold_quantity,
        description: plain_text
      }
    }

    return response.json(queryResponse)
  }
}
