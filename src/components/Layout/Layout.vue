<template>
<div :class="{root: true, sidebarClose}">
  <Header />
  <Sidebar />
  <div ref="content" class="content animated fadeInUp">
    <transition name="router-animation">
      <router-view />
    </transition>
  </div>
  <footer class="contentFooter">
    Follow Us on our Social Networks 
    <img class="styleIcon" src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="" height="20" />
    <img class="styleIcon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/973px-Twitter-logo.svg.png" alt="" height="20" />
    <img class="styleIcon" src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="" height="20" />
    </footer>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import Sidebar from '@/components/Sidebar/Sidebar';
import Header from '@/components/Header/Header';
import Helper from '@/components/Helper/Helper';

import './Layout.scss';

export default {
  name: 'Layout',
  components: { Sidebar, Header, Helper },
  methods: {
    ...mapActions(
      'layout', ['switchSidebar', 'changeSidebarActive'],
    ),
  },
  computed: {
    ...mapState('layout', {
      sidebarClose: state => state.sidebarClose,
    }),
  },
  created() {
  },
  mounted() {
    this.$refs.content.addEventListener('animationend', () => {
      this.$refs.content.classList.remove('animated');
      this.$refs.content.classList.remove('fadeInUp');
    });
  }
};
</script>

<style src="./Layout.scss" lang="scss" />
