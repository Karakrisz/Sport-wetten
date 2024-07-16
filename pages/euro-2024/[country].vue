<script setup>
const route = useRoute();
const countryCode = route.params.country.toLowerCase();

useHead({
    title: 'Euro 2024 - ' + countryCode,
})

const { data: country } = await useAsyncData(`country-${countryCode}`, () =>
    queryContent('euro-2024', countryCode).findOne()
);

if (!country.value) {
    throw createError({ statusCode: 404, message: 'Country not found' });
}
</script>

<template>
    <NuxtImg class="euro-header" src="/img/euro-2024-header.png" />

    <div class="supage-content custom-padding">

        <NuxtLink to="/euro-2024" class="back-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path d="M21 10.5L13.5 18L21 25.5" stroke="#080808" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </NuxtLink>

        <div v-if="country">
            <div class="title-container">
                <NuxtImg :src="`/img/flags/${country.code}.svg`" :alt="country.name" class="flag-img" />
                <h2 class="title">{{ country.name }}</h2>
            </div>
            <ContentRenderer :value="country" class="content"/>
        </div>
    </div>
</template>

<style scoped>
.euro-header {
    width: 100%;
    object-fit: cover;
}

.custom-padding {
    padding-top: 7% !important;
}

.back-button {
    width: fit-content;
    display: flex;
    padding: 14px 15px;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    border: 1px solid var(--Dark, #080808);
    margin-bottom: 50px;
}

.title-container {
    display: flex;
    align-items: center;
    gap: 25px;

}

.title {
    color: var(--Dark, #080808);
    font-family: Montserrat;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%;
    text-transform: uppercase;
}

.flag-img {
    width: 50px;
    height: 34px;
}

.content ::v-deep(p) {
    color: var(--Dark, #080808);
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.content ::v-deep(h2) {
    color: var(--Dark, #080808);
    /* H2 */
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
    text-transform: uppercase;
}

.content ::v-deep(a) {
    color: var(--Dark, #080808);
}
</style>