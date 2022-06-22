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
                <tr v-for="crypto in cryptos" :key="crypto.id">
                  <td>{{crypto.id}}</td>
                  <td class="star-rating">
                    <a href="#">★</a>
                  </td>
                  <td class="imageIcon">
                    <img class="img-rounded" :src="crypto.image" :alt="crypto.name" height="50" />
                  </td>
                  <td>
                    {{crypto.name}}
                  </td>
                  <td>{{crypto.currentValue}}</td>
                  <td>{{crypto.lastValue}}</td>
                  <td v-if="(crypto.currentValue - crypto.lastValue) > 0"><label style="color:green">{{crypto.currentValue - crypto.lastValue}}</label></td>
                  <td v-if="(crypto.currentValue - crypto.lastValue) < 0"><label style="color:red">{{crypto.currentValue - crypto.lastValue}}</label></td>
                  <td>{{parseDate(crypto.lastModified)}}</td>
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
import Widget from '@/components/Widget/Widget';
import Sparklines from '../../components/Sparklines/Sparklines'
import { mapGetters } from 'vuex';

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
      const lastModifiedDate = new Date(date);
      const day = lastModifiedDate.getDate();
      const month = lastModifiedDate.getMonth() + 1;
      const year = lastModifiedDate.getFullYear();
      
      return `${day}-${month}-${year}`
    },  
  },
  computed: {
    ...mapGetters(["cryptos"]),
  },
};
</script>

<style src="./Cryptos.scss" lang="scss" scoped />
