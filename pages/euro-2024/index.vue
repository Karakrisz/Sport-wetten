<script setup>
useHead({
    title: 'Euro 2024',
})

const { data: countries } = await useAsyncData('countries', () =>
    queryContent('euro-2024').only(['name', 'code']).find()
);
</script>

<template>
    <NuxtImg class="euro-header" src="/img/euro-2024-header.png" />
    <div class="supage-content custom-padding">
        <h1 class="supage-content__h2">EURO 2024</h1>
        <div class="grid-container">
            <NuxtLink v-for="country in countries" :key="country.code" :to="`/euro-2024/${country.code.toLowerCase()}`" class="grid-item">
                <div class="flag-container">
                    <img :src="`/img/flags/${country.code}.svg`" :alt="country.name" class="flag-img" />
                </div>
                <span class="country-name">{{ country.name }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <path d="M15 25.5L22.5 18L15 10.5" stroke="#080808" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </NuxtLink>
        </div>
    </div>
</template>

<style scoped>
.custom-padding {
    padding-top: 7% !important;
}

.euro-header {
    width: 100%;
    object-fit: cover;
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1.25rem;
}

@media (min-width: 768px) {
    .grid-container {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1200px) {
    .grid-container {
        grid-template-columns: repeat(4, 1fr);
    }
}

.grid-item {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background-color: white;
    border-radius: 65px;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.15);
    transition: box-shadow 0.3s;
    font-weight: 700;
    color: black;
    font-size: 24px;
    gap: 25px;
    padding-right:25px;
}

.grid-item:hover {
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.25);
}


.flag-container {
    width: 64px;
    height: 64px;
    border-radius: 100%;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}


.flag-img {
    height: 66px;
}

.country-name {
    flex: 1
}
</style>
