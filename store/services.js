import axios from 'axios'

const baseUrl = ''

class Services {
  getWechatSignature(url) {
    return axios.get(`${baseUrl}/wechat-signature?url=${url}`)
  }

  getUserByOAuth(url) {
    return axios.get(`${baseUrl}/wechat-oauth?url=${url}`)
  }

  getWechatOAuth(url) {
    return axios.get(`${baseUrl}/wechat-oauth?url=${encodeURIComponent(url)}`)
  }

  createOrder({ products, address, deliver, msg, shop, sellor, shippingDate, shippingTime }) {
    console.log(shippingTime)
    return axios.post(`${baseUrl}/wechat-pay`, {
      products,
      address,
      deliver,
      msg,
      shop,
      sellor,
      shippingDate,
      shippingTime
    })
  }

  paySuccess(id) {
    return axios.put(`${baseUrl}/pay-success`, {id: id})
  }

  saveAddress(address) {
    return axios.post(`${baseUrl}/address/save`, address)
  }

  updateAddress(address) {
    console.log('service')
    return axios.put(`${baseUrl}/address/update`, address)
  }

  getPayments(str) {
    return axios.get(`${baseUrl}/admin/payments?${str}`)
  }

  getSellorPayments(str) {
    return axios.get(`${baseUrl}/admin/sellorpayments?${str}`)
  }

  fetchHouses() {
    return axios.get(`${baseUrl}/wiki/houses`)
  }

  fetchHouse(id) {
    return axios.get(`${baseUrl}/wiki/houses/${id}`)
  }

  fetchCharacters() {
    return axios.get(`${baseUrl}/wiki/characters`)
  }

  fetchCharacter(id) {
    return axios.get(`${baseUrl}/wiki/characters/${id}`)
  }

  fetchProducts(str) {
    return axios.get(`${baseUrl}/api/products?${str}`)
  }

  getDefaultAddress() {
    return axios.get(`${baseUrl}/address/default`)
  }

  cartProducts() {
    return axios.get(`${baseUrl}/cart/cartproducts`)
  }

  fetchProduct(id) {
    return axios.get(`${baseUrl}/api/products/${id}`)
  }

  fetchAddresses() {
    return axios.get(`${baseUrl}/address/addresses`)
  }

  fetchUserAndOrders() {
    return axios.get(`${baseUrl}/api/userandorders`)
  }

  fetchUser() {
    return axios.get(`${baseUrl}/api/user`)
  }

  fetchUserAndQr(id) {
    return axios.get(`${baseUrl}/api/qr?id=${id}`)
  }

  fetchUsers(str) {
    return axios.get(`${baseUrl}/admin/users?${str}`)
  }

  // 订单信息读取
  fetchOrder(id) {
    return axios.get(`${baseUrl}/admin/order/${id}`)
  }

  // 购物车读取
  fetchCart(sid) {
    return axios.get(`${baseUrl}/api/fetchcart?sid=${sid}`)
  }
}

export default new Services()
