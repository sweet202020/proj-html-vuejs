<script>
import { store } from '../store';

export default {
    name: 'LogoHeader',
    data() {
        return {
            store
        }
    },


}
</script>

<template>
    <div class="logo  d-flex justify-content-between">
        <img src="../assets/img/avada-music-logo.png" alt="">
        <i v-if="!store.isVisible" @click="store.dropdown" class="fa-solid fa-bars text-white mt-4 me-5"></i>
        <i v-if="store.isVisible" @click="store.dropdown" class="fa-solid fa-xmark mt-4 me-5"></i>
    </div>
</template>

<style lang="scss">
.logo {
    position: relative;
    z-index: 200;
}

i {
    color: white;

    &:hover {
        cursor: pointer;
    }
}
</style>