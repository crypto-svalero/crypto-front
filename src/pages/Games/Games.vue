<template>
  <div class="tables-basic">
    <h2 class="page-title"><span class="fw-semi-bold">Games</span></h2>
    <b-row>
      <b-col>
        <Widget
          customHeader
        >
          <div class="table-resposive">
            <table class="table"> 
              <thead>
                <tr>
                  <th class="hidden-sm-down">#</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th class="hidden-sm-down">Link</th>
                  <th class="hidden-sm-down">Last Modified Date</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="game in games" :key="game.id">
                  <td>{{game.id}}</td>
                  <td class="imageIcon">
                    <img class="img-rounded" :src="game.image" alt="" height="50" />
                  </td>
                  <td>
                    {{game.name}}
                  </td>
                  <td>Link</td>
                  <!-- <td><a target="_blank" :href="row.link">{{row.textoLink}}</a></td> -->
                  <td>{{parseDate(game.creationDate)}}</td>
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
import { mapGetters } from 'vuex';
import Widget from '@/components/Widget/Widget';
import Sparklines from '../../components/Sparklines/Sparklines'

export default {
  name: 'Games',
  components: { Widget, Sparklines },
  methods: {
    parseDate(date) {
      const lastModifiedDate = new Date(date);
      const day = lastModifiedDate.getDate();
      const month = lastModifiedDate.getMonth() + 1;
      const year = lastModifiedDate.getFullYear();

      return `${day}-${month}-${year}`;
    },
  },
  computed: {
    ...mapGetters(["games"]),
  },
};
</script>

<style src="./Games.scss" lang="scss" scoped />
