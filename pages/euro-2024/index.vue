<script setup>
useHead({
    title: 'Euro 2024',
})

const { data: countries } = await useAsyncData('countries', () =>
    queryContent('euro-2024').only(['name', 'code']).find()
);
</script>

<template>
    <div class="supage-content">
        <h1 class="supage-content__h2">EURO 2024</h1>
        <div class="grid-container">
            <NuxtLink v-for="country in countries" :key="country.code" :to="`/euro-2024/${country.code.toLowerCase()}`" class="grid-item">
                <img :src="`/img/flags/${country.code}.svg`" :alt="country.name" class="flag-img" />
                <span>{{ country.name }}</span>
            </NuxtLink>
        </div>
    </div>
</template>

<style scoped>
.supage-content {
    position: relative;
}

.supage-content__h2 {
    font-size: 2em;
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
}

@media (min-width: 768px) {
    .grid-container {
        grid-template-columns: repeat(4, 1fr);
    }
}

.grid-item {
    display: flex;
    align-items: center;
    padding: 1rem;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s;
}

.grid-item:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.flag-img {
    width: 2rem;
    height: 2rem;
    margin-right: 0.75rem;
}
</style>
