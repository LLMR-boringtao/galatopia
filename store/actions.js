import Services from './services'
import axios from 'axios'

export default {
  // 初始化
  nuxtServerInit ({ commit }, { req }) {
    if (req.session && req.session.user) {
      const { email, sex, name, headimgurl, phone, role, address } = req.session.user
      const user = {
        email,
        sex,
        name,
        headimgurl,
        phone,
        role,
        address
      }
      commit('SET_USER', user)
    }
  },

  // 管理用户登录
  async login ({ commit }, { phone, password }) {
    try {
      let res = await axios.post('/admin/login', {
        phone,
        password
      })
      const { data } = res
      if (data.success) commit('SET_USER', data.data)

      return data
    } catch (e) {
      if (e.response.status === 401) {
        throw new Error('来错地方了')
      }
    }
  },

  // 普通用户登录
  async userlogin ({ commit }, { email, password }) {
    console.log(email, password)
    try {
      let res = await axios.post('/user/login', {
        email,
        password
      })
      const { data } = res
      if (data.success) commit('SET_USER', data.data)

      return data
    } catch (e) {
      if (e.response.status === 401) {
        throw new Error('来错地方了')
      }
    }
  },

  async userUpdate ({ commit }, user) {
    try {
      let res = await axios.put('/user/api/update', user)
      const { data } = res
      if (data.success) commit('SET_USER', data.data)
      return res
    } catch (e) {
      if (e.response.status === 401) {
        throw new Error('来错地方了')
      }
    }
  },

  async logout ({ commit }) {
    await axios.post('/admin/logout')
    commit('SET_USER', null)
  },

  getWechatSignature({ commit }, url) {
    return Services.getWechatSignature(url)
  },
  getUserByOAuth({ commit }, url) {
    return Services.getUserByOAuth(url)
  },
  getWechatOAuth({ commit, state }, url) {
    // 记录当前的url，用于ios手机的sdk签名
    state.iosUrl = url
    return Services.getWechatOAuth(url)
  },
  setAuthUser ({ commit }, authUser) {
    commit('SET_AUTHUSER', authUser)
  },
  async saveMsg({ commit }, data) {
    const res = await axios.post('/api/msg', data)
    return res
  },

  async addNews({ commit }) {
    const res = await axios.get('/api/news/add')
    return res
  },

  async fetchNews ({ state }, filters) {
    const res = await axios({
      method: 'get',
      url: '/api/news',
      params: filters
    })
    state.news = res.data.data
    return res
  },

  async fetchNewsCount ({ state }, filters) {
    const res = await axios({
      method: 'get',
      url: '/api/news/count',
      params: filters
    })
    return res
  },

  // 分类管理
  async fetchCategories ({ state }) {
    const res = await axios.get(`/api/categories`)
    state.categories = res.data.data
    return res
  },

  async saveCategory ( {state, dispatch}, category) {
    await axios.post('/api/category', category)
    let res = await dispatch('fetchCategories')
    return res
  },

  async putCategory ( {state, dispatch}, category) {
    await axios.put('/api/category', category)
    let res = await dispatch('fetchCategories')
    return res
  },

  async delCategory ({ state, dispatch }, category) {
    await axios.delete(`/api/cateogry/${category._id}`)
    let res = await dispatch('fetchCategories')
    return res.data.data
  },

  // 医院管理
  async fetchHospitals ({ state }, data) {
    const res = await axios({
      method: 'get',
      url: `/api/hospitals`,
      params: data
    })
    console.log(res.data.data)
    state.hospitals = res.data.data
    return res
  },

  async fetchHospitalsCount ({ state }, data) {
    const res = await axios({
      method: 'get',
      url: `/api/hospitals/count`,
      params: data
    })
    return res
  },

  async saveHospital ( {state, dispatch}, hospital) {
    await axios.post('/api/hospital', hospital)
    let res = await dispatch('fetchHospitals')
    return res
  },

  async putHospital ( {state, dispatch}, hospital) {
    await axios.put('/api/hospital', hospital)
    let res = await dispatch('fetchHospitals')
    return res
  },

  // 患者管理
  async fetchPatients ({ state }, data) {
    const res = await axios({
      method: 'get',
      url: `/patient/patients`,
      params: data
    })
    console.log(res.data.data)
    state.patients = res.data.data
    return res
  },

  async fetchPatientsCount ({ state }, data) {
    const res = await axios({
      method: 'get',
      url: `/patient/patients/count`,
      params: data
    })
    return res
  },

  async savePatient ( {state, dispatch}, patient) {
    await axios.post('/patient/patient', patient)
    let res = await dispatch('fetchPatients')
    return res
  },

  async putPatient ( {state, dispatch}, patient) {
    await axios.put('/patient/patient', patient)
    let res = await dispatch('fetchPatients')
    return res
  },

  async fetchRecords ({ state }, data) {
    const res = await axios({
      method: 'get',
      url: `/record/records`,
      params: data
    })
    state.records = res.data.data
    return res
  },

  async fetchRecordsCount ({ state }, data) {
    const res = await axios({
      method: 'get',
      url: `/record/count`,
      params: data
    })
    return res
  },

  async fetchChecks ({ state }, data) {
    const res = await axios({
      method: 'get',
      url: `/check/checks`,
      params: data
    })
    state.checks = res.data.data
    return res
  },

  async fetchChecksCount ({ state }, data) {
    const res = await axios({
      method: 'get',
      url: `/check/count`,
      params: data
    })
    return res
  }
}
