<template>
  <div class="tables-basic">
    <h2 class="page-title">Tables - <span class="fw-semi-bold">Games</span></h2>
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
                  <th class="hidden-sm-down">Value</th>
                  <th class="hidden-sm-down">Last Modified Date</th>
                  <th class="hidden-sm-down">Active</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in tableStyles" :key="row.id">
                  <td>{{row.id}}</td>
                  <td class="imageIcon">
                    <img class="img-rounded" :src="row.picture" alt="" height="50" />
                  </td>
                  <td>
                    {{row.name}}
                  </td>
                  <td><a target="_blank" :href="row.link">{{row.textoLink}}</a></td>
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
  name: 'Games',
  components: { Widget, Sparklines },
  data() {
    return {
      tableStyles: [
        {
          id: 1,
          picture: 'https://i.blogs.es/42332f/axie/1366_2000.jpg',
          textoLink: 'Click Here',
          link: 'https://axieinfinity.com/', 
          name: 'Axie Infinity',  
          value: 24,
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

<style src="./Games.scss" lang="scss" scoped />
