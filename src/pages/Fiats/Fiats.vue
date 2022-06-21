<template>
  <div class="tables-basic">
    <h2 class="page-title">Tables - <span class="fw-semi-bold">Fiats</span></h2>
    <b-row>
      <b-col>
        <Widget
          title="<h5>Table <span class='fw-semi-bold'>Fiats</span></h5>"
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
                  <td><a target="_blank" :href="row.link">{{row.textoLink}}</a></td>
                  <td>{{row.value}}</td>
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
  name: 'Fiats',
  components: { Widget, Sparklines },
  data() {
    return {
      tableStyles: [
        {
          id: 1,
          picture: 'https://pngimg.com/uploads/dollar_sign/dollar_sign_PNG5.png',
          name: 'Dollar',  
          value: 1,
          date: new Date('September 14, 2018')
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

<style src="./Fiats.scss" lang="scss" scoped />
