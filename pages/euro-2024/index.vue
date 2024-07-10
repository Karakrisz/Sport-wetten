<script setup>
useHead({
    title: 'Euro 2024',
})

const { data: countries } = await useAsyncData('countries', () =>
    queryContent('euro-2024').only(['name', 'code']).find()
);
</script>

<template>
    <div class="container mx-auto px-4">
        <h1 class="text-3xl font-bold mb-6">EURO 2024</h1>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <NuxtLink v-for="country in countries" :key="country.code" :to="`/euro-2024/${country.code.toLowerCase()}`" class="flex items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <img :src="`/img/flags/${country.code}.svg`" :alt="country.name" class="w-8 h-8 mr-3" />
                <span>{{ country.name }}</span>
            </NuxtLink>
        </div>
    </div>
</template>
