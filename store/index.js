import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const createStore = () => {
  return new Vuex.Store({
    state: {
      imageCDN: 'http://pic.china-op.cn/',
      user: null,
      authUser: null,
      uploadUrl: 'http://upload.qiniup.com/'
    },
    getters,
    actions,
    mutations
  })
}

export default createStore
