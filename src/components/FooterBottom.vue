<script>
export default {
    name: 'FooterBottom'
}
</script>

<template>
    <div class="footer_bottom d-flex justify-content-between">
        <ul class="d-flex">
            <li>&copy; Copyright 2012-2020 |</li>
            <li class="text-uppercase">avada theme by themefusion |</li>
            <li class="text-uppercase">all rights deserved |</li>
            <li class="text-uppercase">powered by wordpress</li>
        </ul>
        <div>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-youtube"></i>
        </div>
    </div>
    <!-- /.footer_bottom -->
</template>

<style lang="scss" scoped>
@use '../assets/scss/variables/variables.scss' as*;

.footer_bottom {
    background-color: $primary-dark;
    padding: 2.5rem 0.5rem;

    ul {
        list-style: none;
        margin-top: 1rem;

        li {
            color: $secondary-dark;
            padding: 0 0.25rem;
        }
    }

    i {
        color: $secondary-dark;
        padding: 1rem;
        background-color: $life;
        margin: 0 0.3rem;
    }

}
</style>