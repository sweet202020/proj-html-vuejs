<script>
export default {
    name: 'LifeSection'
}
</script>

<template>
    <section class="life">
        <div class="rectangle">
        </div>
        <h2>Music Is Life</h2>
        <hr>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem vitae iure earum odit. Cumque,
            recusandae laudantium deleniti quidem aspernatur in eaque ullam dignissimos porro dolore!</p>
    </section>
    <!-- ./life -->
</template>

<style lang="scss">
@use '../assets/scss/variables/variables.scss' as*;

.life {
    background-color: $life;
    padding: 5rem 0;
    position: relative;

    .rectangle {
        background-color: $primary-light;
        width: 360px;
        height: 12px;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%);
    }

    p {
        padding-top: 3rem;
        color: $secondary-dark;
        text-align: center;
        width: 60%;
        margin: auto;
    }
}
</style>