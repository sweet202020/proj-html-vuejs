<script>
export default {
    name: 'BandSection',
}
</script>
<template>
    <section class="band">
        <h2>Latest Band News </h2>
        <hr>
        <p class="undertitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quaerat impedit est
            assumenda. Eum molestiae
            porro corrupti, necessitatibus repudiandae tempora officiis autem ea soluta accusantium.
        </p>
        <div class="container">
            <div class="row">
                <div class="col-8">
                    <div class="card">
                        <img height="300" src="../assets/img/blog_music_techo.jpg" alt="">
                        <h5>Technology and Music</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non suscipit culpa, error repellat
                            enim illo
                        </p>
                    </div>
                    <!-- ./col-8 -->
                    <div class="row">
                        <div class="col-6">
                            <div class="card">
                                <img src="../assets/img/blog-post3.jpg" alt="">
                                <h5>While my guitar gently weeps</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non suscipit culpa, error
                                    repellat
                                    enim illo
                                </p>
                            </div>
                            <!-- ./card -->
                        </div>
                        <!-- ./col-6 -->
                        <div class="col-6">
                            <div class="card">
                                <img src="../assets/img/blog-post4.jpg" alt="">
                                <h5>It just sounds better</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non suscipit culpa, error
                                    repellat
                                    enim illo
                                </p>
                            </div>
                            <!-- ./card -->
                        </div>
                        <!-- ./col-6 -->
                    </div>
                    <div class="card">
                        <img height="300" src="../assets/img/blog_flavor_rock.jpg" alt="">
                        <h5>The flavor of rock</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non suscipit culpa, error repellat
                            enim illo
                        </p>
                    </div>
                    <!-- ./card -->
                </div>
                <!-- /.col-8 -->



                <div class="col-4">
                    <div class="card">
                        <img src="../assets/img/blog-post1.jpg" alt="">
                        <h5>Taking it back to the old school</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non suscipit culpa, error repellat
                            enim illo
                        </p>
                    </div>
                    <!-- ./card -->
                    <div class="card m_top">
                        <img src="../assets/img/blog-post2.jpg" alt="">
                        <h5>Sharing the stage with a legend</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non suscipit culpa, error repellat
                            enim illo
                        </p>
                    </div>
                    <!-- ./card -->
                </div>
                <!-- /.col-4 -->
            </div>
            <!-- /.row -->
        </div>
        <!-- /.container -->
        <div class="view text-uppercase text-center">
            view all latest news
        </div>
    </section>
    <!-- /.band -->
</template>

<style lang="scss" scoped>
@use '../assets/scss/variables/variables.scss' as*;

.band {
    padding-top: 5rem;
    background-color: $primary-dark;

    p.undertitle {
        padding: 3rem 0;
        color: $secondary-dark;
        text-align: center;
        width: 60%;
        margin: auto;
    }

    img {
        max-width: 100%;
        object-fit: cover;


    }



    .card {
        margin: 0.5rem 0;
        border: none;
        border-radius: 0;
        background-color: $life;
        color: $secondary-light;
        position: relative;

        &:hover img {
            filter: invert(35%) sepia(65%) saturate(1171%) hue-rotate(316deg) brightness(90%) contrast(76%);
        }

        &:hover h5 {
            color: $lighter;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-weight: 300;
        }

        &:hover p {
            display: none;
        }

        h5 {
            font-weight: 600;
            color: $primary-light;
            padding-left: 0.5rem;
            padding-top: 0.5rem;
        }

        p {
            padding-left: 0.5rem;
        }
    }

    .card.m_top {
        margin-top: 2.4rem;
    }
}
</style>
