<script>
export default {
    name: 'LiveDates.vue'
}
</script>

<template>
    <section class="live_dates">
        <h2>Live Dates</h2>
        <hr>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum odit enim, nobis consectetur ut, voluptate
            pariatur sit qui asperiores modi dolor quasi eum blanditiis porro.
        </p>
        <div class="tour">
            <div> <span>+ </span> 17/08/2020 gem festival 2020 anakalia, georgia</div>
            <div><span>+ </span> 24/09/2020 groovfest dominical republic</div>
            <div><span>+ </span> 31/10/2020 oasis festival 2020 marrakech, morocco</div>
            <div><span>+ </span> 07/11/2020 moga festival - essaquiria, morocco</div>
            <div><span>+ </span> 10/12/2020 enivision - uvita, costa rica</div>
        </div>
        <!-- /.tour -->
        <div class="view text-uppercase text-center">
            view all latest news
        </div>
    </section>
    <!-- /.live_dates -->
</template>

<style lang="scss">
@use '../assets/scss/variables/variables.scss' as*;

.live_dates {
    padding-top: 5rem;
    background-color: $primary-dark;

    p {
        padding: 3rem 0;
        color: $secondary-dark;
        text-align: center;
        width: 60%;
        margin: auto;
    }

    .tour {
        text-align: center;
        width: 60%;
        margin: 3rem auto;

        div {
            display: flex;
            align-items: flex-start;
            background-color: $life;
            color: $primary-light;
            margin: 1rem 0;
            padding: 0 1rem;
            text-transform: uppercase;

            span {
                color: $lighter;
                margin-right: 1rem;
            }

        }

    }

    .view {
        padding: 3rem 0;
        background-color: $primary-light;
        color: $lighter;
        margin-top: 3rem;
    }
}
</style>