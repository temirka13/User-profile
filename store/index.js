export const state = () => ({
  token: '',
  status: '',
  user: {}
})

export const mutations = {
  authRequest (state) {
    state.status = 'loading'
  },
  authSuccess (state, token) {
    state.status = 'success'
    state.token = token
  },
  authError (state) {
    state.status = 'error'
  },
  logout (state) {
    window.$nuxt.$cookies.remove('user-token')
    state.token = ''
    state.status = ''
    state.user = {}
  },
  setUser (state) {
    state.user = {
      name: 'Tim Ad',
      email: 'temirka13@mail.ru',
      github: 'https://github.com/temirka13',
      img: 'https://www.thewrap.com/wp-content/uploads/2015/10/The-Muppets-Kermit.jpg'
    }
  }
}

export const actions = {
  nuxtServerInit ({ commit }, context) {
    if (context.app.context.app.$cookies.get('user-token')) {
      commit('setUser')
    }
  },
  authRequest ({ commit }, user) {
    return new Promise((resolve, reject) => {
      commit('authRequest')
      if (user.login === 'login' && user.password === 'password') {
        const token = 'token'
        window.$nuxt.$cookies.set('user-token', token)
        commit('authSuccess', token)
        commit('setUser')
        resolve()
      } else {
        commit('authError')
        window.$nuxt.$cookies.remove('user-token')
        reject(new Error('Что-то пошло не так, попробуйте снова'))
      }
    })
  }
}

export const getters = {
  hasToken: state => !!state.token,
  authStatus: state => state.status,
  user: state => state.user
}
