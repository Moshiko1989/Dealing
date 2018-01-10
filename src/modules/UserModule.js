import StorageServ from '../services/StorageServ.js'

export const SET_USER = 'user/SET_USER'
export const CLEAR_USER = 'user/CLEAR_USER'

const state = {
    user: getUserFromStorage()
}

const getters = {
    userToUpdate: state => {
        return JSON.parse(JSON.stringify(state.user))
    },
    user: state => state.user 
}

const mutations = {
    [SET_USER] (state, {user}) {
        // console.log('GET_PREV_USER in MUTATIONS()')
        state.user = user
    },
    [CLEAR_USER] (state) {
        state.user = getUserFromStorage()
    }
}

const actions = {

}

function getUserFromStorage() {
    // console.log('getUserFromStorage()')
    var user = StorageServ.load('user')
    return user || {name: '', cards: []}
}



export default {
    state,
    getters,
    mutations,
    actions
}