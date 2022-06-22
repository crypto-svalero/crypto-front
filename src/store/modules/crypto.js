import axios from 'axios';

const resourceURI = "https://cryptoapisv.azurewebsites.net/Crypto";

const state = {
    cryptos: []
};

const getters = {
    cryptos: state => state.cryptos
};

let config = { 
    headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*'
    }
}

const actions = {
    async fetchCryptos({ commit }) {
        const response = await axios.get(resourceURI, config);    
        commit('setCryptos', response.data);
    },
};

const mutations = {
    setCryptos: (state, cryptos) => state.cryptos = cryptos
};

export default {
    state, getters, actions, mutations
}