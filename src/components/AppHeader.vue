<script>
import ButtonsHeader from './ButtonsHeader.vue';
import LogoHeader from './LogoHeader.vue';
import NavBar from './NavBar.vue';

export default {
    name: "AppHeader",
    components: { LogoHeader, NavBar, ButtonsHeader }
}

</script>

<template>
    <div class="jumbotron">
        <LogoHeader />
        <!-- ./logo -->
        <NavBar />
        <!-- ./nav -->
        <ButtonsHeader />
        <!-- ./buttons -->
    </div>
    <!-- ./jumbotron -->
</template>

<style lang="scss" scoped>
@use '../assets/scss/variables/variables.scss' as*;

.jumbotron {
    background-image: url(../assets/img/home_slider.jpg);
    background-size: cover;
    background-repeat: no-repeat;
}
</style>