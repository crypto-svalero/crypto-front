<template>
  <div class="tables-basic">
    <h2 class="page-title"><span class="fw-semi-bold">Products</span></h2>
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
                  <th class="hidden-sm-down">Last Modified Date</th>
                  <th class="hidden-sm-down">Active</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in products" :key="product.id">
                  <td>{{product.id}}</td>
                  <td class="imageIcon">
                    <img class="img-rounded" :src="product.image" :alt="product.name" height="50" />
                  </td>
                  <td>
                    {{product.name}}
                  </td>
                  <td>Link</td>
                  <!-- <td><a target="_blank" :href="row.link">{{product.textoLink}}</a></td> -->
                  <td>{{parseDate(product.creationDate)}}</td>
                  <td>
                    <label class="switch">
                    <input type="checkbox" :checked="product.active">
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
import { mapGetters } from 'vuex';
import Widget from '@/components/Widget/Widget';
import Sparklines from '../../components/Sparklines/Sparklines'

export default {
  name: 'Products',
  components: { Widget, Sparklines },
  methods: {
    parseDate(date) {
      const lastModifiedDate = new Date(date);
      console.log(lastModifiedDate);
      const day = lastModifiedDate.getDate();
      const month = lastModifiedDate.getMonth() + 1;
      const year = lastModifiedDate.getFullYear();

      return `${day}-${month}-${year}`
    },
  },
  computed: {
    ...mapGetters(["products"]),
  },
};
</script>

<style src="./Products.scss" lang="scss" scoped />
