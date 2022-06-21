<template>
  <div class="converter">
    <h1 class="page-title">Crypto to FIAT converter</h1>
    <b-row>
      <Widget :isColumnSwapped="isColumnSwapped">
        <b-col lg="6">
          <form class="converter__form">
            <h5>Crypto</h5>
            <div class="converter__currency">
              <select name="select" class="converter__currency__select">
                <option value="value1">Value 1</option>
                <option value="value2" selected>Value 2</option>
                <option value="value3">Value 3</option>
              </select>
              <input type="number" class="converter__form__input" />
            </div>
          </form>
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
      </Widget>
    </b-row>
  </div>
</template>

<script>
import Vue from "vue";
import Widget from "@/components/Widget/Widget";
import Map from "./components/Map/Map";
import Calendar from "./components/Calendar/Calendar";
import AreaChart from "./components/AreaChart/AreaChart";
import AnimatedNumber from "animated-number-vue";

export default {
  name: "Visits",
  components: {
    Widget,
    Map,
    Calendar,
    AreaChart,
    AnimatedNumber,
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
