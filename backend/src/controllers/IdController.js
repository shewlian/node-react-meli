const axios = require('axios')

const getDecimals = require('../utils/get-decimals')

module.exports = {
  async index(request, response) {
    const { id } = request.params

    const meliApiResponse = await axios.all([
      axios.get(`https://api.mercadolibre.com/items/${id}`),
      axios.get(`https://api.mercadolibre.com/items/${id}/description`)
    ])

    const item = () => {
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

      return {
        id,
        title,
        price: {
          currency: currency_id,
          amount: Math.floor(price),
          decimals: getDecimals(price)
        },
        picture: pictures[0].url,
        condition,
        free_shipping: shipping.free_shipping,
        sold_quantity,
        description: plain_text
      }
    }

    const queryResponse = {
      author: {
        name: '',
        lastname: ''
      },
      item: item()
    }

    return response.json(queryResponse)
  }
}
