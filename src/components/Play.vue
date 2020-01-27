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
import {Component, Prop, Vue} from 'vue-property-decorator';
import { BIconPlay, BIconPause } from 'bootstrap-vue'
import ExtractCommand from "../lib/ExtractCommand";

@Component({
    components: {
        BIconPlay,
        BIconPause,
    }
})
export default class Play extends Vue {
    private interval: number = 0;
    private runCommandIndex: number = 0;
    private state: string = 'pause';

    @Prop() private readonly startLink!: string;
    @Prop() private readonly extractCommands!: ExtractCommand[];

    play(): void {
        this.state = 'play';
        this.$emit('play');
        this.run();
    }

    pause(): void {
        this.state = 'pause';
        this.$emit('pause');
    }

    private run() {
        this.runCommandIndex = 0;
        this.$router.replace(this.startLink);
        this.interval = setInterval(() => this.invoke(), 1100);
    }

    private invoke() {
        const command = this.extractCommands[this.runCommandIndex]
        if (!command) {
            this.runCommandIndex = 0;
            this.pause();
            clearInterval(this.interval);
            return;
        }
        const fn = command.action.bind(window);
        try {
            fn.call();
        } catch (e) {
            console.error(e);
        }
        this.runCommandIndex++;
    }
}
</script>
