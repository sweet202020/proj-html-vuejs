<script>
export default {
    name: 'FooterTop'
}
</script>
<template>
    <div class="footer_top d-flex justify-content-between">
        <img src="../assets/img/logo_footer.png" alt="">
        <ul>
            <li><a href="#">link</a></li>
            <li><a href="#">link</a></li>
            <li><a href="#">link</a></li>
            <li><a href="#">link</a></li>
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
                color: $lighter;
                text-decoration: none;
                padding: 1rem;
            }
        }
    }
}
</style>