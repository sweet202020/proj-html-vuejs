<script>
export default {
    name: 'UntoldStories'
}

</script>

<template>
    <div class="jumbotron">
        <div class="logo  d-flex justify-content-between">
            <img src="../assets/img/avada-music-logo.png" alt="">
            <i class="fa-solid fa-bars text-white mt-4 me-5"></i>
        </div>
        <!-- ./logo -->
        <nav class="nav justify-content-center">
            <a class="nav-link active" href="#">link</a>
            <a class="nav-link" href="#">Link</a>
            <a class="nav-link" href="#">link</a>
        </nav>
        <!-- ./nav -->
        <h1>Untold Stories</h1>
        <p class="text-center text-white">There is an untold stories behind every favourite song.</p>
        <div class="text-center">
            <button class="latest_album_btn text-uppercase text-white">latest album</button>
            <button class="live_dates_btn text-uppercase text-white">live dates</button>
        </div>
    </div>
    <!-- ./jumbotron -->
</template>

<style lang="scss" scoped>
@use '../assets/scss/variables/variables.scss' as*;

.jumbotron {
    background-image: url(../assets/img/home_slider.jpg);
    background-size: cover;
    background-repeat: no-repeat;

    h1 {
        color: $lighter;
        text-align: center;
        font-size: 118px;
        margin-top: 14rem;
        font-weight: 600;
    }

    p {
        font-style: italic;
        font-weight: 600;
    }

    i {
        font-size: 25px;
    }

    .nav {
        background-color: $primary-light;
        flex-direction: column;
        align-items: center;
        display: none;

        a {
            color: $secondary-light;
        }
    }

    button {
        margin-left: 1rem;
        margin-top: 2rem;
        margin-bottom: 28rem;
        padding: 0.3rem 2.5rem;
    }

    .latest_album_btn {
        background-color: $primary-light;
        border: none;
    }

    .live_dates_btn {
        border: 1px solid white;
        background-color: transparent;
    }
}
</style>