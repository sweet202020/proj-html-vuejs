<script>
import { store } from '../store.js'
export default {
    name: 'FooterTop',
    data() {
        return {
            store
        }
    }
}
</script>
<template>
    <div class="footer_top d-flex justify-content-between">
        <img src="../assets/img/logo_footer.png" alt="">
        <ul>
            <li v-for="item in store.menu"><a :class="item.a === 'home' ? 'active' : ''" :href="item.link">{{ item.a
            }}</a>
            </li>
        </ul>
    </div>
    <!-- /.footer_top -->
</template>

<style lang="scss">
@use '../assets/scss/variables/variables.scss' as*;

.footer_top {
    background-color: $life;
    align-items: center;
    padding: 5rem 0;

    img {
        padding: 1rem;
    }

    ul {
        display: flex;
        list-style: none;


        li {
            a {
                color: $secondary-dark;
                text-decoration: none;
                padding: 1rem;

                &:hover {
                    color: $lighter;
                }
            }

            a.active {
                color: $lighter;
            }
        }
    }
}
</style>