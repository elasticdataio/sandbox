<template>
  <b-container class="inner-page">
    <b-row class="w-100 text-center">
      <b-col>
        <Play :extract-commands="extractCommands"
              start-link="/inner-page"/>
        <h1>This is example of the extract data from inner page</h1>
        <ProductList />
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
  import Play from '../components/Play.vue'
  import ProductList from '../components/ProductList.vue'

  export default {
    name: 'inner-page',
    components: {
      ProductList,
      Play,
    },
    data: () => {
      return {
        pages: [0, 1, 2],
        extractCommands: []
      };
    }
  }
</script>
