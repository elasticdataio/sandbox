<template>
  <div class="pagination">
    <div v-for="card of pages[page].cards"
         v-bind:key="card.title">
      <Card :title="card.title" :description="card.description" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Card from './Card.vue'

let text = 'Some quick example text to build on the card title and make up the bulk of the card\'s content.';

function getPageData(page: number) {
  return {
    cards: [
      {
        title: 'Card title ' + (page + 1),
        description: `${text} This is ${page + 1} page`
      },
      {
        title: 'Card title ' + (page + 2),
        description: `${text} This is ${page + 1} page`
      },
      {
        title: 'Card title ' + (page + 3),
        description: `${text} This is ${page + 1} page`
      }
    ]
  }
}

@Component({
  components: { Card },
  data: () => {
    return {
      pages: [
        getPageData(0),
        getPageData(1),
        getPageData(3),
      ]
    }
  }
})
export default class Pagination extends Vue {
  @Prop() private page!: string;
}
</script>
<style>
  .pagination {
    justify-content: center;
  }
</style>
