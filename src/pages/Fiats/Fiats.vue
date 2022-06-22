<template>
  <div class="tables-basic">
    <h2 class="page-title"><span class="fw-semi-bold">Fiats</span></h2>
    <b-row>
      <b-col>
        <Widget customHeader>
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
                <tr v-for="fiat in fiats" :key="fiat.id">
                  <td>{{ fiat.id }}</td>
                  <td class="star-rating">
                    <a href="#">★</a>
                  </td>
                  <td class="imageIcon">
                    <img
                      class="img-rounded"
                      :src="fiat.image"
                      alt=""
                      height="50"
                    />
                  </td>
                  <td>
                    {{ fiat.name }}
                  </td>
                  <td>{{ fiat.value }}</td>
                  <td>{{parseDate(fiat.lastModified)}}</td>
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
import Widget from "@/components/Widget/Widget";
import Sparklines from "../../components/Sparklines/Sparklines";

export default {
  name: "Fiats",
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
    ...mapGetters(["fiats"]),
  },
};
</script>

<style src="./Fiats.scss" lang="scss" scoped />
