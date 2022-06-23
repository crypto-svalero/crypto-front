import axios from 'axios';

const resourceURI = "https://pro-cryptoapi.azurewebsites.net/Fiat";

const state = {
    fiats: []
};

const getters = {
    fiats: state => state.fiats
};

let config = { 
    headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*'
    }
}

const actions = {
    async fetchFiats({ commit }) {
        const response = await axios.get(resourceURI, config);    
        commit('setFiats', response.data);
    },
};

const mutations = {
    setFiats: (state, fiats) => state.fiats = fiats
};

export default {
    state, getters, actions, mutations
}