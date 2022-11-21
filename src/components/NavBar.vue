<script>
export default {
    name: 'NavBar'
}
</script>
<template>
    <nav class="nav justify-content-center">
        <a class="nav-link active" href="#">link</a>
        <a class="nav-link" href="#">Link</a>
        <a class="nav-link" href="#">link</a>
    </nav>
</template>

<style lang="scss" scoped>
@use '../assets/scss/variables/variables.scss' as*;

.nav {
    background-color: $primary-light;
    flex-direction: column;
    align-items: center;
    display: none;

    a {
        color: $secondary-light;
    }
}
</style>