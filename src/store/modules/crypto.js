import axios from 'axios';

const resourceURI = "https://cryptoapisv.azurewebsites.net/Crypto";

const state = {
    crypto: []
};

const getters = {
    crypto: state => state.crypto
};

let config = { 
    headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*'
    }
}

const actions = {
    async fetchCrypto({ commit }) {
        const response = await axios.get(resourceURI, config);    
        commit('setCrypto', response.data);
    },
};

const mutations = {
    setCrypto: (state, crypto) => state.crypto = crypto,
};

export default {
    state, getters, actions, mutations
}