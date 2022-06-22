<template>
  <div class="tables-basic">
    <h2 class="page-title">Tables - <span class="fw-semi-bold">Products</span></h2>
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
                  <th>Link</th>
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
  name: 'Products',
  components: { Widget, Sparklines },
  data() {
    return {
      tableStyles: [
        {
          id: 1,
          picture: 'https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C81kdY-ajs3L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UL1500_.png', // eslint-disable-line global-require
          textoLink: 'Click Here',
          link: 'https://www.amazon.es/Divertido-meme-Shiba-Doge-Camiseta/dp/B09FYVK59B/ref=sr_1_3?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=GHJY6HHTLLFE&keywords=doge&qid=1655746187&s=apparel&sprefix=doge%2Capparel%2C88&sr=1-3',
          name: 'Doge Bread',  
          value: 16.49,
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

<style src="./Products.scss" lang="scss" scoped />
