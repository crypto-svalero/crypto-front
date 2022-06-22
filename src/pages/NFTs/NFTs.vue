<template>
  <div class="tables-basic">
    <h2 class="page-title"><span class="fw-semi-bold">NFTs</span></h2>
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
                  <th class="hidden-sm-down">Value</th>
                  <th class="hidden-sm-down">Code</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="nft in nfts" :key="nft.id">
                  <td>{{nft.id}}</td>
                  <td class="imageIcon">
                   <a target="_blank" :href="nft.image"><img class="img-rounded" :src="nft.image" :alt="nft.name" height="50" /></a>
                  </td>
                  <td>
                    {{nft.name}}
                  </td>
                  <td>{{nft.value}}</td>
                  <td>{{nft.code}}</td>
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
  name: 'NFTs',
  components: { Widget, Sparklines },
  methods: {
    parseDate(date) {
      const dateSet = date.toDateString().split(' ');
      return `${date.toLocaleString('en-us', { month: 'long' })} ${dateSet[2]}, ${dateSet[3]}`;
    },  
  },
  computed: {
    ...mapGetters(["nfts"]),
  },
};
</script>

<style src="./NFTs.scss" lang="scss" scoped />
