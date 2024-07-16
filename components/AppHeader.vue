<!-- components/AppHeader.vue -->
<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  isMainPage: {
    type: Boolean,
    default: false
  }
})

const links = computed(() => [
  { name: 'Home', path: '/' },
  { name: 'Euro 2024', path: '/euro-2024' },
  { name: 'Sportwetten-Tipps', path: '/sportwetten-tipps' },
  { name: 'Die besten Wettanbieter', path: '/die-besten-wettanbiete' },
  { name: 'Fußball News', path: '/fudball-news' },
  { name: 'Blog', path: '/blog' },
  // You can add or modify links based on the isSpecial prop if needed
])

const isMenuOpen = ref(false)

const mainHeaderClass = computed(() => ({
  'main-header-content': props.isMainPage
}))

const mainHeaderContainerClass = computed(() => ({
  'main-header': props.isMainPage
}))


</script>

<template>
  <header :class="['header pr', mainHeaderContainerClass]">
    <div :class="['header-content d-flex', mainHeaderClass]">
      <div class="logo-box header-content__logo-box">
        <NuxtLink to="/" class="header-content__logo-box__link">
          <NuxtImg
            src="/img/header/logo.svg"
            alt="Sport wetten"
            class="header-content__logo-box__link__img"
          />
        </NuxtLink>
      </div>
      <div class="nav-box header-content__nav-box d-flex">
        <button
          @click="isMenuOpen = !isMenuOpen"
          class="hamburger"
          :class="{ open: isMenuOpen }"
        >
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </button>
        <nav :class="{ 'menu--open': isMenuOpen, menu: true }" id="menu">
          <ul id="menu__list" class="menu__list d-flex">
            <li v-for="link in links" :key="link.path" class="menu__list__li">
              <NuxtLink
                :to="link.path"
                :class="[
                  'menu__item text-color-w text-transform-uppercase f-600',
                  ]"
              >
                <template v-if="link.imagePath">
                  <NuxtImg
                    class="menu__list__li__img"
                    height="100%"
                    :src="link.imagePath"
                    :alt="link.name"
                  />
                </template>
                <template v-else>
                  {{ link.name }}
                </template>
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>
