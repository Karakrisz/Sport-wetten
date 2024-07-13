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
    <div class="supage-content">
        <NuxtLink to="/euro-2024">
            &larr; Back
        </NuxtLink>
        <div v-if="country" class="bg-white rounded-lg shadow p-6">
            <div class="flex items-center mb-4">
                <img :src="`/img/flags/${country.code}.svg`" :alt="country.name" class="w-12 h-12 mr-4" />
                <hh2 class="supage-content__h2">{{ country.name }}</hh2>
            </div>
            <ContentRenderer :value="country" />
        </div>
    </div>
</template>