<template>
  <b-collapse class="sidebar-collapse" id="sidebar-collapse" :visible="sidebarOpened">
  <nav
    :class="{sidebar: true}"
  >
    <header class="logo">
      <router-link to="/app/home">Crypto App</router-link>
    </header>

    <ul class="nav">
      <NavLink
        :activeItem="activeItem"
        header="Cryptos"
        link="/app/cryptos"
        iconName="flaticon-list-2"
        index="home"
        isHeader
      />
    </ul>
    <ul class="nav">
      <NavLink
        :activeItem="activeItem"
        header="Products"
        link="/app/products"
        iconName="flaticon-network-1"
        index="home"
        isHeader
      />
    </ul>
    <ul class="nav">
      <NavLink
        :activeItem="activeItem"
        header="Fiats"
        link="/app/fiats"
        iconName="flaticon-shopping-bag"
        index="home"
        isHeader
      />
    </ul>
    <ul class="nav">
      <NavLink
        :activeItem="activeItem"
        header="Games"
        link="/app/games"
        iconName="flaticon-layers-2"
        index="home"
        isHeader
      />
    </ul>
    <ul class="nav">
      <NavLink
        :activeItem="activeItem"
        header="NFTs"
        link="/app/nfts"
        iconName="flaticon-extra"
        index="home"
        isHeader
      />
    </ul>
    <ul class="nav">
      <NavLink
        :activeItem="activeItem"
        header="Converter"
        link="/app/converter"
        iconName="flaticon-extra"
        index="home"
        isHeader
      />
    </ul>
  </nav>
  </b-collapse>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import NavLink from './NavLink/NavLink';

export default {
  name: 'Sidebar',
  components: { NavLink },
  data() {
    return {
      alerts: [
        {
          id: 0,
          title: 'Sales Report',
          value: 15,
          footer: 'Calculating x-axis bias... 65%',
          color: 'primary',
        },
        {
          id: 1,
          title: 'Personal Responsibility',
          value: 20,
          footer: 'Provide required notes',
          color: 'danger',
        },
      ],
    };
  },
  methods: {
    ...mapActions('layout', ['changeSidebarActive', 'switchSidebar']),
    setActiveByRoute() {
      const paths = this.$route.fullPath.split('/');
      paths.pop();
      this.changeSidebarActive(paths.join('/'));
    },
  },
  created() {
    this.setActiveByRoute();
  },
  computed: {
    ...mapState('layout', {
      sidebarOpened: state => !state.sidebarClose,
      activeItem: state => state.sidebarActiveElement,
    }),
  },
};
</script>

<!-- Sidebar styles should be scoped -->
<style src="./Sidebar.scss" lang="scss" scoped/>
