import axios from 'axios';

const resourceURI = "https://cryptoapisv.azurewebsites.net/Product";

const state = {
    products: []
};

const getters = {
    products: state => state.products
};

let config = { 
    headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*'
    }
}

const actions = {
    async fetchProducts({ commit }) {
        const response = await axios.get(resourceURI, config);    
        commit('setProducts', response.data);
    },
};

const mutations = {
    setProducts: (state, products) => state.products = products
};

export default {
    state, getters, actions, mutations
}