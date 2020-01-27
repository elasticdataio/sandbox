<template>
  <div class="card-group">
    <div class="card"
         v-for="product of products"
         v-bind:key="product.id">
      <div>
        <img class="card-img-center"
             :src="product.img"
             style="max-width: 100px;">
      </div>
      <div class="card-body">
        <h5>{{product.name}}</h5>
        <p class="card-text">{{product.description}}</p>
        <p>
          <router-link :to="{name: 'product', params: {id: product.id}}"
                       target='_blank'>
            description link
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      products: []
    }
  }
})
export default class ProductList extends Vue {

  constructor() {
    super();
    this.fetchData();
  }

  async fetchData() {
    const response = await fetch('/products.json');
    this.$data.products = await response.json();
  }
}
</script>
