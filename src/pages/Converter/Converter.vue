<template>
  <div class="converter">
    <h1 class="page-title">Crypto to FIAT converter</h1>
    <b-row>
      <Widget :isColumnSwapped="isColumnSwapped">
        <form
          :class="`converter__form ${isColumnSwapped ? 'widget--swapped' : ''}`"
        >
          <b-col lg="6">
            <h5>Crypto</h5>
            <div class="converter__currency">
              <select id="selectCrypto">
                <option
                  v-for="crypto in cryptos"
                  v-bind:key="crypto.id"
                  :value="crypto.currentValue"
                  :selected="crypto.id == 1"
                >
                  {{ crypto.name }}
                </option>
              </select>
              <input
                id="numberCrypto"
                type="number"
                class="converter__form__input"
                value="0"
              />
            </div>
          </b-col>
          <span class="swap-icon" @click="swapColumns()">
            <i class="glyphicon glyphicon-forward"></i>
          </span>
          <b-button variant="info" id="buttonConverte" @click="convert()">Convert</b-button>
          <b-col lg="6">
            <h5>Fiat</h5>
            <div class="converter__currency">
              <select id="selectFiat">
                <option
                  v-for="fiat in fiats"
                  v-bind:key="fiat.id"
                  :value="fiat.value"
                  :selected="fiat.id == 1"
                >
                  {{ fiat.name }}
                </option>
              </select>
              <input
                disabled
                id="numberFiat"
                type="number"
                class="converter__form__input"
                value="0"
              />
            </div>
          </b-col>
        </form>
      </Widget>
    </b-row>
  </div>
</template>

<script>
import Widget from "@/components/Widget/Widget";
import { mapGetters } from "vuex";

export default {
  name: "Visits",
  components: {
    Widget,
  },
  props: {
    isColumnSwapped: Boolean,
  },
  methods: {
    swapColumns() {
      this.isColumnSwapped = !this.isColumnSwapped;
      document.getElementById("numberCrypto").value = 0;
      document.getElementById("numberFiat").value = 0;
      if (document.getElementById("numberFiat").disabled == true) {
        document.getElementById("numberFiat").disabled = false;
        document.getElementById("numberCrypto").disabled = true;
      } else {
        document.getElementById("numberFiat").disabled = true;
        document.getElementById("numberCrypto").disabled = false;
      }
    },
    convert() {
      if (document.getElementById("numberFiat").disabled == true) {
        document.getElementById("numberFiat").value =
          (document.getElementById("numberCrypto").value *
            document.getElementById("selectCrypto").value) /
          document.getElementById("selectFiat").value;
        document.getElementById("numberFiat").value.toFixed(2);
      } else {
        document.getElementById("numberCrypto").value =
          (document.getElementById("numberFiat").value *
            document.getElementById("selectFiat").value) /
          document.getElementById("selectCrypto").value;
        document.getElementById("numberCrypto").value.toFixed(2);
      }
    },
  },
  computed: {
    ...mapGetters(["cryptos"]),
    ...mapGetters(["fiats"]),
  },
};
</script>

<style src="./Converter.scss" lang="scss" />
