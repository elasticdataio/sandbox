<template>
    <b-card
            :title="title"
            :img-src="img"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
    >
      <b-card-text> {{ description }} </b-card-text>
      <b-button>Some action</b-button>
    </b-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
const defDesc = 'Some quick example text to build on the card title and make up the bulk of the card\'s content.';

@Component
export default class Card extends Vue {
  @Prop({ default: 'Card Title' }) private title!: string;
  @Prop({ default: '/25-600x300.jpg' }) private img!: string;
  @Prop({ default: defDesc }) private description!: string;
}
</script>
<style>
    .pagination {
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
    }
    .card-title {

    }
</style>
