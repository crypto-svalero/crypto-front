<template>
  <router-view />
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'App',
  created() {
    const currentPath = this.$router.history.current.path;

    if (currentPath === '/' || currentPath === '/app') {
      this.$router.push('/app/home');
    }

    this.fetchCryptos()
    this.fetchProducts()
    this.fetchFiats()
    this.fetchGames()
    this.fetchNFTs()
  },
  methods: {
    ...mapActions(["fetchCryptos", "fetchProducts", "fetchFiats", "fetchGames", "fetchNFTs"])
  },
};
</script>

<style src="./styles/theme.scss" lang="scss" />
