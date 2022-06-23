<template>
  <b-nav-item-dropdown no-caret right class="d-md-down-none mr-2">
    <template slot="button-content">
      <span class="glyphicon glyphicon-heart" />
    </template>
    <h5 class="favorites__title">My favorites</h5>
    <p class="favorites__message" v-if="!favourites">&#128557; No favorites found!</p>
    <div v-if="favourites">
    <b-dropdown-item v-for="crypto in favourites" :key="crypto.id">
      <img class="favorites__image" :src="crypto.image" :alt="crypto.name" />
      <span class="fs-sm">{{ crypto.name }}</span>
    </b-dropdown-item>
    </div>
    <hr class="favorites__separator" />
    <b-dropdown-item-button class="text-center">
      <NavLink
        :activeItem="activeItem"
        header="See all favorites"
        link="/app/favorites"
        />
    </b-dropdown-item-button>
  </b-nav-item-dropdown>
</template>

<script>
import { mapGetters } from "vuex";
import NavLink from '../Sidebar/NavLink/NavLink';
import { mapActions } from 'vuex';

export default {
  name: "Header",
  components: { NavLink },
  methods: {
    ...mapActions(["cryptoAsFavorite"]),
  },
  computed: {
    ...mapGetters(["cryptos"]),
    favourites() {
      const favourites = this.cryptos.filter(crypto => crypto.favourite);
      console.log(favourites);
      return (favourites.length === 0 ? null : favourites);
    }
  },
};
</script>

<style src="./FavoritesDropdown.scss" lang="scss" scoped />