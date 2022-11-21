<script>
import BandSection from './BandSection.vue';
import LifeSection from './LifeSection.vue';
import LiveDates from './LiveDates.vue';
import PlaySection from './PlaySection.vue';

export default {
    name: "AppMain",
    components: { LifeSection, BandSection, PlaySection, LiveDates }
}
</script>

<template>
    <LifeSection />
    <BandSection />
    <PlaySection />
    <LiveDates />


</template>






