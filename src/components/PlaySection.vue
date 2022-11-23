<script>
import { store } from '../store.js'
export default {
    name: 'PlaySection',
    data() {
        return {
            store
        }
    }
}

</script>

<template>

    <section class="play">
        <cite class="text-white text-center">"I just loistened to it and said to myself, "Man, I really love this
            album." Still,
            today, it just sounds
            so fresh. It sounds full of ideas. These guys knew what they were doing. They're good. And they're
            inventive. I haven'th heard anything this year that's as inventive. I don't really expect to"
        </cite>
        <div class="text-center">
            <img @click="store.audioPlay" src="../assets/img/band_interview_play_icon.png" alt="">
            <div class="mt-5" v-show="store.isAudioVisible">
                <audio id="audio" controls>
                    <source src="../assets/img/Dove si balla ( Dargen Damico feat Frati San Mauro - Sanremo 2022 ).mp3"
                        type="audio/mpeg">
                </audio>
            </div>
        </div>
    </section>
    <!-- ./play -->
</template>

<style lang="scss" scoped>
.play {

    background-image: url('../assets/img/home-testimonial-parallax.jpg');
    min-height: 50rem;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    img:hover {
        cursor: pointer;
    }

    cite {
        display: block;
        line-height: 2.5rem;
        width: 35%;
        margin: auto;
        font-weight: 600;
        padding-top: 20rem;
    }

}
</style>