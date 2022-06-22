<template>
  <div class="tables-basic">
    <h2 class="page-title">Tables - <span class="fw-semi-bold">NFTs</span></h2>
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
                  <th class="hidden-sm-down">Last Modified Date</th>
                  <th class="hidden-sm-down">Available</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in tableStyles" :key="row.id">
                  <td>{{row.id}}</td>
                  <td class="imageIcon">
                   <a target="_blank" :href="row.picture"><img class="img-rounded" :src="row.picture" alt="" height="50" /></a>
                  </td>
                  <td>
                    {{row.name}}
                  </td>
                  <td>{{row.value}}</td>
                  <td>{{row.date}}</td>
                  <td>
                    <label class="switch">
                    <input type="checkbox" :checked="row.active">
                    <span class="slider round"></span>
                    </label>
                  </td>
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
import Vue from 'vue';
import Widget from '@/components/Widget/Widget';
import Sparklines from '../../components/Sparklines/Sparklines'

export default {
  name: 'NFTs',
  components: { Widget, Sparklines },
  data() {
    return {
      tableStyles: [
        {
          id: 1,
          picture: 'https://www.alejandradeargos.com/images/Artistas/Beeple/07._meat_head.jpg',
          name: 'Beeple',  
          value: 15000,
          date: new Date('September 14, 2018').toDateString(),       
          active: true
        },
      ],
    };
  },
  methods: {
    parseDate(date) {
      const dateSet = date.toDateString().split(' ');
      return `${date.toLocaleString('en-us', { month: 'long' })} ${dateSet[2]}, ${dateSet[3]}`;
    },  
  },
};
</script>

<style src="./NFTs.scss" lang="scss" scoped />
