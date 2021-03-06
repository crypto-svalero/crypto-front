<template>
  <div class="favorite">
    <div class="crypto__header">
      <h2 class="page-title"><span class="fw-semi-bold">Favorites</span></h2>
    </div>
    <b-row>
      <b-col>
        <Widget customHeader>
          <h5 v-if="!favourites">&#128557; No favorites found!</h5>
          <div class="table-resposive" v-if="favourites">
            <table class="table">
              <thead>
                <tr>
                  <th class="hidden-sm-down">#</th>
                  <th class="hidden-sm-down">Fav</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th class="hidden-sm-down">Value</th>
                  <th class="hidden-sm-down">Last Value</th>
                  <th class="hidden-sm-down">Difference</th>
                  <th class="hidden-sm-down">Last Modified Date</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="crypto in favourites" :key="crypto.id">
                  <td>{{ crypto.id }}</td>
                  <td class="star-rating">
                    <a href="#" @click="setFavorite(crypto.id)" :class="`${crypto.favourite ? 'favorite__icon--is-favorite' : 'favorite__icon'}`">★</a>
                  </td>
                  <td class="imageIcon">
                    <img
                      class="img-rounded"
                      :src="crypto.image"
                      :alt="crypto.name"
                      height="50"
                    />
                  </td>
                  <td>
                    {{ crypto.name }}
                  </td>
                  <td>{{ crypto.currentValue }}</td>
                  <td>{{ crypto.lastValue }}</td>
                  <td v-if="crypto.currentValue - crypto.lastValue > 0">
                    <label style="color: green">{{
                      crypto.currentValue - crypto.lastValue
                    }}</label>
                  </td>
                  <td v-if="crypto.currentValue - crypto.lastValue < 0">
                    <label style="color: red">{{
                      crypto.currentValue - crypto.lastValue
                    }}</label>
                  </td>
                  <td>{{ parseDate(crypto.lastModified) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Widget>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Widget from "@/components/Widget/Widget";
import Sparklines from "../../components/Sparklines/Sparklines";
import { mapGetters } from "vuex";
import { mapActions } from 'vuex';

export default {
  name: "Favorites",
  components: { Widget, Sparklines },
  props: {
    isFavorite: Boolean
  },
  methods: {
    ...mapActions(["cryptoAsFavorite"]),
    parseDate(date) {
      const lastModifiedDate = new Date(date);
      const day = lastModifiedDate.getDate();
      const month = lastModifiedDate.getMonth() + 1;
      const year = lastModifiedDate.getFullYear();

      return `${day}-${month}-${year}`;
    },
    setFavourite(cryptoId) {
      this.isFavorite = !this.isFavorite;
      this.cryptoAsFavorite(cryptoId);
    },
  },
  computed: {
    ...mapGetters(["cryptos"]),
    favourites() {
      const favourite = this.cryptos.filter(crypto => crypto.favourite);
      return (favourite.length === 0 ? null : favourite);
    }
  },
};
</script>

<style src="./Favorites.scss" lang="scss" scoped />
