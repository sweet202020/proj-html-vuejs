<script>
export default {
    name: 'PlaySection'
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
            <img src="../assets/img/band_interview_play_icon.png" alt="">
        </div>
    </section>
    <!-- ./play -->
</template>

<style lang="scss" scoped>
.play {

    background-image: url('../assets/img/home-testimonial-parallax.jpg');
    padding-top: 21rem;


    cite {
        display: block;
        line-height: 2.5rem;
        width: 35%;
        margin: auto;
        font-weight: 600;
        padding-bottom: 3rem;
    }

    img {
        padding-bottom: 20rem;
    }
}
</style>