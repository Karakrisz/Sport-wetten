<script setup>
const route = useRoute();
const countryCode = route.params.country.toLowerCase();

const { data: country } = await useAsyncData(`country-${countryCode}`, () => 
  queryContent('euro-2024', countryCode).findOne()
);

if (!country.value) {
  throw createError({ statusCode: 404, message: 'Country not found' });
}
</script>

<template>
    <div class="container mx-auto px-4">
        <NuxtLink to="/euro-2024" class="inline-block mb-6 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">
            &larr; Back
        </NuxtLink>
        <div v-if="country" class="bg-white rounded-lg shadow p-6">
            <div class="flex items-center mb-4">
                <img :src="`/img/flags/${country.code}.svg`" :alt="country.name" class="w-12 h-12 mr-4" />
                <h1 class="text-3xl font-bold">{{ country.name }}</h1>
            </div>
            <ContentRenderer :value="country" />
        </div>
    </div>
</template>