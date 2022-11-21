<script>
import BandSection from './BandSection.vue';
import LifeSection from './LifeSection.vue';

export default {
    name: "AppMain",
    components: { LifeSection, BandSection }
}
</script>

<template>
    <LifeSection />
    <BandSection />

</template>



