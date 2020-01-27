<template>
  <b-container class="product-page">
    <b-row class="w-100 text-center">
      <b-col>
        <h4>Product details page</h4>
        <table class="table table-striped">
          <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Brand</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Description</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              <img :src="product.img" width="100">
            </td>
            <td>{{product.brand}}</td>
            <td>{{product.name}}</td>
            <td>{{product.price}}</td>
            <td>{{product.description}}</td>
          </tr>
          </tbody>
        </table>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import {Component, Vue} from "vue-property-decorator";

@Component({
  data: () => {
    return {
      products: []
    }
  },
  computed: {
    product: function() {
      return this.products.length && this.products.find(p => p.id === this.id);
    }
  },
  props: {
    id: {
      type: Number,
    }
  }
})
export default class Product extends Vue {

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
