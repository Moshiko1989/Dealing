export const LOAD_DEALS = 'deal/loadDeals'
export const SET_CURR_DEAL = 'deal/setCurrDeal'
export const SET_SEARCHED_TERM = 'deal/setSearchedTerm'
export const SET_FILTERED_BY = 'deal/setFilteredBy'
export const TOGGEL_ALL = 'deal/toggleAll'
export const SET_ALL = 'deal/setAll'

import DealServ from '../services/DealServ.js';

const state = {
    deals: [],
    isShowAll: true,
    currDeal: null,
    filterBy: {
        'cards': false,
        searchedTerm: '',
    }
}

const getters = {
    // deals: state => state.deals,  // improve
    currDeal: state => state.currDeal,
    deals: (state, getters) => {
        var deals = getters.dealsSearched.filter(dealS => {
            return getters.userDeals.find(dealU => dealU._id === dealS._id)
        })
        // console.log({deals})
        return deals
    },
    dealsSearched: state => {
        // console.log('state.deals in GETTERS: ', state.deals)
        return state.deals.filter(deal => {
            return deal.name.includes(state.filterBy.searchedTerm)
        })
    },
    userDeals: (state, getters, { user }) => {
        // console.log('rootState: ', rootState)
        // console.log('user.user: ', user.user)
        var filteredDeals = state.deals.filter(deal => {
            // console.log('deal.cardId: ', deal.cardId, 'user.user.cards: ', user.user.cards.includes(deal.cardId))
            return user.user.cards.includes(deal.cardId) || state.isShowAll
        })
        // console.log('filteresDeals: ', filteredDeals)
        return filteredDeals
    }

}

const mutations = {
    [LOAD_DEALS](state, { deals }) {
        state.deals = deals;
        // console.log('state.deals in MUTATIONS: ', state.deals)
    },
    [SET_CURR_DEAL](state, { deal }) {
        state.currDeal = deal;
        // console.log('state.currDeal in MUTATIONS: ', state.currDeal)
    },
    [SET_SEARCHED_TERM](state, { term }) {
        state.filterBy.searchedTerm = term;
        // console.log('state.searchedTerm in MUTATATIONS: ', state.searchedTerm);
    },
    [SET_FILTERED_BY](state, { key }) {
        state.filterBy[key] = true;
        // console.log('key of filter in MUTATIONS: ', key)
        console.log('state.filterBy[key] MUTATIONS: ', state.filterBy)
    },
    [TOGGEL_ALL](state, { isShow }) {
        state.isShowAll = isShow
    },
    [SET_ALL](state) {
        state.isShowAll = true
    },
}

const actions = {
    [LOAD_DEALS]({ commit }) {
        // var deals = DealServ.getDeals();
        // console.log('deals in ACTIONS: ', deals)

        var deals = DealServ.getDeals().then(deals => {
            // console.log('deals in LOAD_DEALS in ACTIONS: ', deals)
            commit({ type: LOAD_DEALS, deals });
        });
    },
    [SET_CURR_DEAL]({ commit }, { dealId }) {
        // console.log('dealId in ACTION: ', dealId)
        DealServ.getDealById(dealId).then(deal => {
            commit({ type: SET_CURR_DEAL, deal });

        });
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}