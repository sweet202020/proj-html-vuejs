<script>
import { store } from '../store.js'
export default {
    name: 'NavBar',
    data() {
        return {
            store
        }
    }
}
</script>
<template>
    <nav v-if="store.isVisible" class="nav justify-content-center">
        <a v-for="item in store.menu" class="nav-link text-uppercase" :class="item.a === 'home' ? 'active' : ''"
            :href="item.link">{{ item.a }}</a>
    </nav>
</template>

<style lang="scss" scoped>
@use '../assets/scss/variables/variables.scss' as*;

.nav {
    background-color: $primary-light;
    position: absolute;
    top: 0;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding-top: 3rem;

    a {
        color: $secondary-light;

        padding: 0.5rem 0;

        &:hover {
            color: $lighter;
        }
    }

    a.active {
        color: $lighter;
    }
}
</style>