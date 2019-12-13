/* eslint-disable*/
import Vue from 'vue'
import routes from '@/router'

const fbAuth = 'https://identitytoolkit.googleapis.com/v1/accounts:'
const fbApiKey = 'AIzaSyCEUUzp7DAnmjELmOPPYD5EgUebLBuTgFI'

const admin = {
    namespaced: true,
    state: {
        token: null,
        refresh: null,
        authFailed: false,
        refreshLoading: true
    },
    getters: {
        isAuth(state) {
            if (state.token) {
                return true;
            }
        },
        refreshLoading(state) {
            return state.refreshLoading
        }
        // isAuthFailed(state) {
        //     return state.authFailed;
        // }
    },
    mutations: {
        authUser(state, payload) {
            // console.log(payload)
            state.token = payload.idToken
            state.refresh = payload.refreshToken

            if (payload.type === 'signin') {
                routes.push('/dashboard')
            }

        },
        authFailed(state, payload) {
            if (payload === 'reset') {
                state.authFailed = false
            } else {
                state.authFailed = true
            }
        },
        logoutUser(state) {
            state.token = null;
            state.refresh = null;
            
            localStorage.removeItem('token');
            localStorage.removeItem('refresh');

            routes.push('/');

        },
        refreshLoading(state) {
            state.refreshLoading = false
        }
    },
    actions: {
        signIn({commit}, payload) {
            Vue.http.post(`${fbAuth}signInWithPassword?key=${fbApiKey}`, {
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            })
                .then(response => response.json())
                .then(res => {
                    console.log('sign in data',res)
                    commit('authUser', {
                        ...res,
                        type: 'signin'
                    })
                    localStorage.setItem('token', res.idToken)
                    localStorage.setItem('refresh', res.refreshToken)
                })
                .catch(err => {
                    console.log(err)
                    if (err.status === 400) {
                        commit('authFailed')
                    } else if (err.status) {
                        
                    } else {

                    }
            })
        },
        refreshToken({commit}) {
            const refreshToken = localStorage.getItem('refresh');

            if (refreshToken) {
                Vue.http.post(`https://securetoken.googleapis.com/v1/token?key=${fbApiKey}`, {
                    grant_type: 'refresh_token',
                    refresh_token: refreshToken
                })
                    .then(response => response.json())
                    .then(res => {
                        console.log('refresh data', res)

                        commit('authUser', {
                            idToken: res.id_token,
                            refreshToken: res.refresh_token,
                            type: 'refresh'
                        })

                        commit('refreshLoading')

                        localStorage.setItem('token', res.id_token)
                        localStorage.setItem('refresh', res.refresh_token)
                })
            } else {
                commit('refreshLoading')
            }
        }
    }
}

export default admin;