/* eslint-disable*/
import Vue from 'vue'
import routes from '@/router'

const fbAuth = 'https://identitytoolkit.googleapis.com/v1/accounts:'
const fbApiKey = 'AIzaSyCEUUzp7DAnmjELmOPPYD5EgUebLBuTgFI'

const admin = {
    namespaced: true,
    state: {
        token: null,
        refresh: null
    },
    getters: {
        isAuth(state) {
            if (state.token) {
                return true;
            }
        }
    },
    mutations: {
        authUser(state, payload) {
            console.log(payload)
            state.token = payload.idToken
            state.refresh = payload.refreshToken

            // routes.push('/')
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
                    console.log(res)
                    commit('authUser', {
                        ...res,
                        type: 'sigin'
                    })
                    localStorage.setItem('token', res.idToken)
                    localStorage.setItem('refresh', res.refreshToken)
                })
                .catch(err => {
                console.log(err)
            })
        }
    }
}

export default admin;