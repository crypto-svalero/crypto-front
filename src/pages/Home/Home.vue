<template>
  <div class="converter">
    <h1 class="page-title">Crypto to FIAT converter</h1>
    <b-row>
      <Widget :isColumnSwapped="isColumnSwapped">
        <form :class="`converter__form ${isColumnSwapped ? 'widget--swapped' : ''}`">
          <b-col lg="6">
            <h5>Crypto</h5>
            <div class="converter__currency">
              <select name="select" class="converter__currency__select">
                <option value="value1">Value 1</option>
                <option value="value2" selected>Value 2</option>
                <option value="value3">Value 3</option>
              </select>
              <input type="number" class="converter__form__input" />
            </div>
          </b-col>
          <span class="swap-icon" @click="swapColumns()">
            <i class="glyphicon glyphicon-forward"></i>
          </span>
          <b-col lg="6">
            <h5>Fiat</h5>
            <div class="converter__currency">
              <select name="select" class="converter__currency__select">
                <option value="value1">Value 1</option>
                <option value="value2" selected>Value 2</option>
                <option value="value3">Value 3</option>
              </select>
              <input type="number" class="converter__form__input" />
            </div>
          </b-col>
        </form>
      </Widget>
    </b-row>
  </div>
</template>

<script>
import Widget from "@/components/Widget/Widget";

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
    },
  },
};
</script>

<style src="./Home.scss" lang="scss" />
