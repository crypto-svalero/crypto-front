import axios from 'axios';

const resourceURI = "https://cryptoapisv.azurewebsites.net/CryptoGame";

const state = {
    games: []
};

const getters = {
    games: state => state.games
};

let config = { 
    headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*'
    }
}

const actions = {
    async fetchGames({ commit }) {
        const response = await axios.get(resourceURI, config);    
        commit('setGames', response.data);
    },
};

const mutations = {
    setGames: (state, games) => state.games = games
};

export default {
    state, getters, actions, mutations
}