<template>
  <div class="home">
    <b-row>
      <b-col lg="6">
        <a href="#/app/converter/">
          <Widget>
            <h2>Coin converter</h2>
            <p>Convert from crypto to FIAT and vice versa.</p>
          </Widget>
        </a>
      </b-col>
      <b-col lg="6">
        <a href="#/app/cryptos/">
        <Widget>
          <h2>Crypto list</h2>
          <p>View a list of all cryptos available in the market.</p>
        </Widget>
        </a>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="6">
        <a href="#/app/fiats/">
        <Widget>
          
          <h2>FIAT list</h2>
          <p>View a list of all FIAT coins available in the market.</p>
        </Widget>
        </a>
      </b-col>
      <b-col lg="6">
        <a href="#/app/games/">
        <Widget>
          <h2>Crypto Games list</h2>
          <p>View a list of all crypto games available in the market.</p>
        </Widget>
        </a>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="6">
        <a href="#/app/nfts/">
        <Widget>
          <h2>NFTs list</h2>
          <p>View a list of all NFTs available in the market.</p>
        </Widget>
        </a>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Widget from "@/components/Widget/Widget";

export default {
  name: "Home",
  components: {
    Widget,
  },
};
</script>

<style src="./Home.scss" lang="scss" />
