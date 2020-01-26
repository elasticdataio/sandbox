<template>
    <div class="h1">
        <b-icon-play variant="primary"
                     v-if="state === 'pause'"
                     @click="play"
                     v-b-tooltip.hover
                     title="Play">
        </b-icon-play>
        <b-icon-pause variant="danger"
                      v-if="state === 'play'"
                      @click="pause"
                      v-b-tooltip.hover
                      title="Pause">
        </b-icon-pause>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { BIconPlay, BIconPause } from 'bootstrap-vue'

@Component({
    components: {
        BIconPlay,
        BIconPause,
    }
})
export default class Play extends Vue {
    private state: string = 'pause';

    play(): void {
        this.state = 'play';
        this.$emit('play');
    }

    pause(): void {
        this.state = 'pause';
        this.$emit('pause');
    }
}
</script>
