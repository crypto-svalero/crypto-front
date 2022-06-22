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
  },
  methods: {
    ...mapActions(["fetchCryptos", "fetchProducts"])
  },
};
</script>

<style src="./styles/theme.scss" lang="scss" />
