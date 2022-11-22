<script>
export default {
    name: 'ButtonsHeader'
}
</script>

<template>
    <h1>Untold Stories</h1>
    <p class="text-center text-white">There is an untold stories behind every favourite song.</p>
    <div class="text-center">
        <button class="latest_album_btn text-uppercase ">latest album</button>
        <button class="live_dates_btn text-uppercase ">live dates</button>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/variables/variables.scss' as*;

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



button {
    margin-left: 1rem;
    margin-top: 2rem;
    margin-bottom: 28rem;
    padding: 0.3rem 2.5rem;
    color: $lighter;

    &:hover {
        background-color: $lighter;
        color: black;
    }
}

.latest_album_btn {
    background-color: $primary-light;
    border: none;
}

.live_dates_btn {
    border: 1px solid white;
    background-color: transparent;
}
</style>