import axios from 'axios';

const resourceURI = "https://cryptoapisv.azurewebsites.net/NFT";

const state = {
    nfts: []
};

const getters = {
    nfts: state => state.nfts
};

let config = { 
    headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*'
    }
}

const actions = {
    async fetchNFTs({ commit }) {
        const response = await axios.get(resourceURI, config);    
        commit('setNFTs', response.data);
    },
};

const mutations = {
    setNFTs: (state, nfts) => state.nfts = nfts
};

export default {
    state, getters, actions, mutations
}