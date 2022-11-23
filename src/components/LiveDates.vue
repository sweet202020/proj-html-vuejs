<script>
export default {
    name: 'LiveDates.vue'
}
</script>

<template>
    <section class="live_dates">
        <h2>Live Dates</h2>
        <hr>
        <p class="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum odit enim, nobis consectetur ut,
            voluptate
            pariatur sit qui asperiores modi dolor quasi eum blanditiis porro.
        </p>
        <div class="tour">
            <ul>
                <li>

                    <h6> <span>+ </span>17/08/2020 gem festival 2020 anakalia, georgia</h6>
                    <div class="container">
                        <div class="row">
                            <div class="col-4">
                                <img src="../assets/img/anaklia.jpeg" alt="">
                            </div>
                            <!-- ./col-4 -->
                            <div class="col-8">
                                <h5>Untold Stories</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto unde eius labore
                                    veniam,
                                    beatae voluptas quasi perferendis consectetur eaque excepturi similique! Asperiores,
                                    doloribus accusamus ullam quisquam sequi tempora quod voluptate laborum, odio, iste
                                    rerum quibusdam.
                                </p>
                                <button>book now</button>
                            </div>
                            <!-- ./col-8 -->
                        </div>
                        <!-- ./row -->
                    </div>
                    <!-- ./container -->
                </li>
                <li><span>+ </span>
                    <h6>24/09/2020 groovfest dominical republic</h6>
                </li>
                <li><span>+ </span>
                    <h6>31/10/2020 oasis festival 2020 marrakech, morocco</h6>
                </li>
                <li><span>+ </span>
                    <h6> 07/11/2020 moga festival - essaquiria, morocco</h6>
                </li>
                <li><span>+ </span>
                    <h6>10/12/2020 enivision - uvita, costa rica</h6>
                </li>
            </ul>
        </div>
        <!-- /.tour -->
        <div class="view text-uppercase text-center">
            view all live dates
        </div>
    </section>
    <!-- /.live_dates -->
</template>

<style lang="scss">
@use '../assets/scss/variables/variables.scss' as*;

.live_dates {
    padding-top: 5rem;
    background-color: $primary-dark;

    p.title {
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

        ul {
            list-style: none;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            color: $primary-light;

            li {
                display: flex;
                flex-direction: column;
                background-color: #323844;
                width: 100%;
                padding: 0 1rem;
                margin: 1rem 0;

                h6 {
                    text-transform: uppercase;
                    margin-top: 5px;
                    align-self: flex-start;
                }

                h5 {
                    color: $lighter;
                    font-size: 13px;
                }

                img {
                    max-width: 100%;
                    object-fit: contain;
                }

                p {
                    color: $secondary-dark;
                    text-align: left;
                    font-size: 13px;
                }

                .col-4 {
                    align-self: center;
                    margin: 1rem 0;
                }

                .col-8 {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    margin: 1.5rem 0;

                }

                button {
                    background-color: $primary-light;
                    border: none;
                    color: $lighter;
                    padding: 0.5rem 0.8rem;
                    font-size: 12px;
                    text-transform: uppercase;
                }
            }

            span {
                color: $lighter;
                margin-right: 1rem;
                margin-top: 2px;
            }

        }

    }


}
</style>