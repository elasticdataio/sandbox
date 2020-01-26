<template>
  <b-container class="pagination-page">
    <b-row class="w-100 text-center">
      <b-col>
        <Play />
        <h1>This is extract data example with page pagination</h1>
        <Pagination :page="page" />
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item"
                :class="{active: parseInt(page) === p}"
                v-for="p of pages"
                v-bind:key="p">
              <router-link class="page-link"
                           :to="{name: 'pagination', params: {page: p}}">
                {{ p + 1 }}
              </router-link>
            </li>
          </ul>
        </nav>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
  import Play from '../components/Play.vue'
  import Pagination from '../components/Pagination.vue'

  export default {
    name: 'pagination',
    components: {
      Pagination,
      Play,
    },
    data: () => {
      return {
        pages: [0, 1, 2]
      };
    },
    props: {
      page: {
        type: Number,
        default: 0,
      }
    }
  }
</script>
