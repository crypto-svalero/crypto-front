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
    async cryptoAsFavorite( { commit }, cryptoId) {
        const response = await axios.put(`${resourceURI}?id=${cryptoId}`);
        commit('setCryptoAsFavorite', response.data);
        console.log(cryptoId);
        console.log(response);
    },
};

const mutations = {
    setCryptos: (state, cryptos) => state.cryptos = cryptos,
    setCryptoAsFavorite: (state, updatedCrypto) => {
        const index = state.products.findIndex(c => c.id === updatedCrypto.id);
        if(index !== -1) {
            state.cryptos.splice(index, 1, updatedCrypto);
        }        
    },
};

export default {
    state, getters, actions, mutations
}