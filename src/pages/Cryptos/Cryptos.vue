<template>
  <div class="tables-basic">
    <h2 class="page-title">Tables - <span class="fw-semi-bold">Cryptos</span></h2>
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
                <tr v-for="row in tableStyles" :key="row.id">
                  <td>{{row.id}}</td>
                  <td class="star-rating">
                    <a href="#">★</a>
                  </td>
                  <td class="imageIcon">
                    <img class="img-rounded" :src="row.picture" alt="" height="50" />
                  </td>
                  <td>
                    {{row.name}}
                  </td>
                  <td>{{row.value}}</td>
                  <td>{{row.lastValue}}</td>
                  <td v-if="(row.value - row.lastValue) > 0"><label style="color:green">{{row.value - row.lastValue}}</label></td>
                  <td v-if="(row.value - row.lastValue) < 0"><label style="color:red">{{row.value - row.lastValue}}</label></td>
                  <td>{{row.date}}</td>
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
  name: 'Cryptos',
  components: { Widget, Sparklines },
  data() {
    return {
      tableStyles: [
        {
          id: 1,
          picture: 'https://pngimg.com/uploads/bitcoin/bitcoin_PNG47.png', // eslint-disable-line global-require
          name: 'Bitcoin',  
          value: 25874,
          lastValue: 12567,
          date: new Date('September 14, 2018').toDateString()      
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

<style src="./Cryptos.scss" lang="scss" scoped />
